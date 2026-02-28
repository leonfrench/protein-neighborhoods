<script setup>
import {ref, onBeforeUnmount, onBeforeMount, computed} from 'vue';
import TypeAhead from './components/Typeahead.vue';
import GithubRepository from './components/GithubRepository.vue';
import GeneRepository from './components/GeneRepository.vue';
import SmallPreview from './components/SmallPreview.vue';
import About from './components/About.vue';
import UnsavedChanges from './components/UnsavedChanges.vue';
import FocusRepository from './components/FocusRepository.vue';
import FocusViewModel from './lib/FocusViewModel';
import config from './lib/config';
import hypergeometricCdf from '@stdlib/stats-base-dists-hypergeometric-cdf';

import bus from './lib/bus'

const SM_SCREEN_BREAKPOINT = 600;
const showRepoInfo = config.showRepoInfo !== false;

const sidebarVisible = ref(false);
const currentProject = ref(''); 
const smallPreviewName = ref('');
const tooltip = ref(null);
const contextMenu = ref(null);
const aboutVisible = ref(false);
const currentFocus = ref(null);
const unsavedChangesVisible = ref(false);
const hasUnsavedChanges = ref(false);
const isSmallScreen = ref(window.innerWidth < SM_SCREEN_BREAKPOINT);
let lastSelected;
const geneMetadata = ref(null);
const geneMetadataError = ref('');
const geneMetadataLoading = ref(false);
const currentClusterId = ref(null);
const currentClusterName = ref('');
const currentClusterEnrichedGo = ref('');
const hasPersistentMultiHighlights = ref(false);
const multiInputResetToken = ref(0);
let clusterInfoRequestId = 0;
const SEARCH_FOCUS_ZOOM = 8;
const BULK_HIGHLIGHT_SIZE = 30;
const MULTI_GENE_SPLITTER = /[,\s;]+/;
const ENRICHMENT_FDR_THRESHOLD = 0.05;
const ENRICHMENT_UNIVERSE_BUCKETS = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
const namesIndexCache = new Map();
let enrichmentRequestId = 0;
let universeRegionStatsPromise = null;

function onTypeAheadInput() {
}

function onSubmit() {
}

function normalizeGeneName(name = '') {
  return name.trim().toLowerCase();
}

function getShortGeneName(name = '') {
  const separatorIndex = name.lastIndexOf('/');
  if (separatorIndex < 0) return name;
  return name.slice(separatorIndex + 1);
}

function parseMultiGeneInput(rawInput = '') {
  const uniqueGenes = [];
  const seen = new Set();

  rawInput.split(MULTI_GENE_SPLITTER).forEach((entry) => {
    const trimmed = entry.trim();
    if (!trimmed) return;
    const normalized = normalizeGeneName(trimmed);
    if (seen.has(normalized)) return;
    seen.add(normalized);
    uniqueGenes.push(trimmed);
  });

  return uniqueGenes;
}

async function loadNamesBucket(bucketKey) {
  if (namesIndexCache.has(bucketKey)) {
    return namesIndexCache.get(bucketKey);
  }

  const promise = fetch(`${config.namesEndpoint}/${encodeURIComponent(bucketKey)}.json`)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(`Failed to load names bucket "${bucketKey}": ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((rows) => (Array.isArray(rows) ? rows : []))
    .catch((error) => {
      console.error(error);
      return [];
    });

  namesIndexCache.set(bucketKey, promise);
  return promise;
}

function parseGeneNodeFromRow(row) {
  if (!Array.isArray(row) || row.length < 3) return null;

  const [name, lng, lat] = row;
  const parsedLng = Number(lng);
  const parsedLat = Number(lat);
  if (!Number.isFinite(parsedLng) || !Number.isFinite(parsedLat)) return null;

  return {
    name,
    coordinates: [parsedLng, parsedLat]
  };
}

function getMapNodeCoordinates(node = {}) {
  const coordinates = Array.isArray(node.coordinates)
    ? node.coordinates
    : [node.lat, node.lon];
  if (!Array.isArray(coordinates) || coordinates.length !== 2) return null;

  const lng = Number(coordinates[0]);
  const lat = Number(coordinates[1]);
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null;
  return [lng, lat];
}

async function getGroupIdsForNodes(nodes = []) {
  const coordinates = nodes.map(getMapNodeCoordinates).filter(Boolean);
  if (!coordinates.length) return [];

  if (window.mapOwner?.getGroupIdsAtCoordinates) {
    return window.mapOwner.getGroupIdsAtCoordinates(coordinates);
  }

  return Promise.all(
    coordinates.map(([lng, lat]) => window.mapOwner?.getGroupIdAt(lng, lat))
  );
}

function countByGroupId(groupIds = []) {
  const counts = new Map();
  groupIds.forEach((groupId) => {
    if (groupId === undefined || groupId === null) return;
    const key = String(groupId);
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function sumCounts(counts = new Map()) {
  let total = 0;
  counts.forEach((value) => {
    total += value;
  });
  return total;
}

function hypergeometricRightTailPValue(k, N, K, n) {
  const populationSize = Math.max(0, Math.trunc(N));
  const regionSize = Math.max(0, Math.trunc(K));
  const draws = Math.max(0, Math.trunc(n));
  const hits = Math.max(0, Math.trunc(k));
  if (!populationSize || !draws || !regionSize || hits <= 0) return 1;

  const maxHits = Math.min(regionSize, draws);
  if (hits > maxHits) return 0;

  const leftTail = hypergeometricCdf(hits - 1, populationSize, regionSize, draws);
  const p = 1 - leftTail;
  return Math.min(1, Math.max(0, p));
}

function benjaminiHochberg(pValues = []) {
  const m = pValues.length;
  if (!m) return [];

  const ranked = pValues
    .map((pValue, index) => ({ index, pValue }))
    .sort((a, b) => a.pValue - b.pValue);

  const adjusted = new Array(m);
  let runningMin = 1;

  for (let rank = m; rank >= 1; rank -= 1) {
    const rankedItem = ranked[rank - 1];
    const boundedP = Math.min(1, Math.max(0, rankedItem.pValue));
    const qValue = Math.min(runningMin, (boundedP * m) / rank);
    runningMin = qValue;
    adjusted[rankedItem.index] = qValue;
  }

  return adjusted;
}

async function getUniverseRegionStats() {
  if (universeRegionStatsPromise) {
    return universeRegionStatsPromise;
  }

  universeRegionStatsPromise = Promise.all(
    ENRICHMENT_UNIVERSE_BUCKETS.map(loadNamesBucket)
  )
    .then(async (buckets) => {
      const seenNodes = new Set();
      const allNodes = [];

      buckets.forEach((rows) => {
        rows.forEach((row) => {
          const parsedNode = parseGeneNodeFromRow(row);
          if (!parsedNode) return;
          const [lng, lat] = parsedNode.coordinates;
          const uniqueId = `${parsedNode.name}:${lng}:${lat}`;
          if (seenNodes.has(uniqueId)) return;
          seenNodes.add(uniqueId);
          allNodes.push({
            text: parsedNode.name,
            coordinates: [lng, lat]
          });
        });
      });

      const groupIds = await getGroupIdsForNodes(allNodes);
      const regionCounts = countByGroupId(groupIds);
      return {
        totalGenes: allNodes.length,
        assignedGenes: sumCounts(regionCounts),
        regionCounts
      };
    })
    .catch((error) => {
      universeRegionStatsPromise = null;
      throw error;
    });

  return universeRegionStatsPromise;
}

function getRegionNamesByGroupId() {
  const names = new Map();
  const places = window.mapOwner?.getPlacesGeoJSON?.();
  const features = Array.isArray(places?.features) ? places.features : [];
  features.forEach((feature) => {
    const ownerId = feature?.properties?.ownerId;
    if (ownerId === undefined || ownerId === null) return;
    const key = String(ownerId);
    if (names.has(key)) return;
    names.set(key, feature?.properties?.name || '');
  });
  return names;
}

async function getEnrichmentReport(matches = []) {
  if (!matches.length) {
    return {
      rows: [],
      enrichedRegionIds: [],
      n: 0,
      N: 0,
      selectedAssignedCount: 0,
      universeAssignedCount: 0,
      fdrThreshold: ENRICHMENT_FDR_THRESHOLD
    };
  }

  const [universeStats, selectedGroupIds] = await Promise.all([
    getUniverseRegionStats(),
    getGroupIdsForNodes(matches)
  ]);

  const selectedCounts = countByGroupId(selectedGroupIds);
  const selectedAssignedCount = sumCounts(selectedCounts);
  const n = selectedGroupIds.length;
  const N = universeStats.totalGenes;
  if (!N || !n) {
    return {
      rows: [],
      enrichedRegionIds: [],
      n,
      N,
      selectedAssignedCount,
      universeAssignedCount: universeStats.assignedGenes || 0,
      fdrThreshold: ENRICHMENT_FDR_THRESHOLD
    };
  }

  const regionNamesByGroupId = getRegionNamesByGroupId();
  const tests = [];
  universeStats.regionCounts.forEach((K, groupId) => {
    const k = selectedCounts.get(groupId) || 0;
    const pValue = k > 0 ? hypergeometricRightTailPValue(k, N, K, n) : 1;
    tests.push({ groupId, k, K, pValue });
  });
  if (!tests.length) {
    return {
      rows: [],
      enrichedRegionIds: [],
      n,
      N,
      selectedAssignedCount,
      universeAssignedCount: universeStats.assignedGenes || 0,
      fdrThreshold: ENRICHMENT_FDR_THRESHOLD
    };
  }

  const qValues = benjaminiHochberg(tests.map((test) => test.pValue));
  const rows = tests
    .map((test, index) => {
      const qValue = qValues[index];
      return {
        groupId: String(test.groupId),
        regionName: regionNamesByGroupId.get(String(test.groupId)) || '',
        k: test.k,
        n,
        K: test.K,
        N,
        pValue: test.pValue,
        qValue,
        significant: test.k > 0 && qValue < ENRICHMENT_FDR_THRESHOLD
      };
    })
    .sort((a, b) => a.qValue - b.qValue || b.k - a.k || a.groupId.localeCompare(b.groupId));

  return {
    rows,
    enrichedRegionIds: rows.filter((row) => row.significant).map((row) => row.groupId),
    n,
    N,
    selectedAssignedCount,
    universeAssignedCount: universeStats.assignedGenes || 0,
    fdrThreshold: ENRICHMENT_FDR_THRESHOLD
  };
}

function toCsvLine(values = []) {
  return values
    .map((value) => {
      const stringValue = value === undefined || value === null ? '' : String(value);
      if (/["\n,]/.test(stringValue)) {
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      return stringValue;
    })
    .join(',');
}

function formatCsvNumber(value) {
  if (!Number.isFinite(value)) return '';
  if (value === 0) return '0';
  if (Math.abs(value) < 1e-4 || Math.abs(value) >= 1e6) {
    return value.toExponential(6);
  }
  return value.toFixed(8).replace(/0+$/, '').replace(/\.$/, '');
}

function buildEnrichmentCsv({ inputGenes = [], missingGenes = [], matchedNodes = [], report }) {
  const lines = [];
  lines.push(toCsvLine(['metric', 'value']));
  lines.push(toCsvLine(['input_gene_count', inputGenes.length]));
  lines.push(toCsvLine(['matched_node_count', matchedNodes.length]));
  lines.push(toCsvLine(['missing_gene_count', missingGenes.length]));
  lines.push(toCsvLine(['draws_n', report.n]));
  lines.push(toCsvLine(['selected_assigned_in_regions', report.selectedAssignedCount]));
  lines.push(toCsvLine(['universe_genes_N', report.N]));
  lines.push(toCsvLine(['universe_assigned_in_regions', report.universeAssignedCount]));
  lines.push(toCsvLine(['fdr_threshold', report.fdrThreshold]));
  lines.push(toCsvLine(['enriched_region_count', report.enrichedRegionIds.length]));
  lines.push('');
  lines.push(toCsvLine(['input_gene']));
  inputGenes.forEach((gene) => {
    lines.push(toCsvLine([gene]));
  });
  if (missingGenes.length) {
    lines.push('');
    lines.push(toCsvLine(['missing_gene']));
    missingGenes.forEach((gene) => {
      lines.push(toCsvLine([gene]));
    });
  }
  lines.push('');
  lines.push(
    toCsvLine([
      'group_id',
      'region_name',
      'k',
      'n',
      'K',
      'N',
      'p_value',
      'q_value',
      'significant'
    ])
  );
  report.rows.forEach((row) => {
    lines.push(
      toCsvLine([
        row.groupId,
        row.regionName,
        row.k,
        row.n,
        row.K,
        row.N,
        formatCsvNumber(row.pValue),
        formatCsvNumber(row.qValue),
        row.significant ? '1' : '0'
      ])
    );
  });
  return lines.join('\n');
}

function downloadTextFile(fileName, content, mimeType = 'text/csv;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

async function onMultiDownloadEnrichment(rawInput) {
  const genes = parseMultiGeneInput(rawInput);
  if (!genes.length) return;

  try {
    const { matches, missing } = await findGenesInIndex(genes);
    const report = await getEnrichmentReport(matches);
    const csv = buildEnrichmentCsv({
      inputGenes: genes,
      missingGenes: missing,
      matchedNodes: matches,
      report
    });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    downloadTextFile(`enrichment-debug-${timestamp}.csv`, csv);
  } catch (error) {
    console.error(error);
  }
}

async function updateEnrichedRegionHighlights(matches = []) {
  const requestId = ++enrichmentRequestId;
  window.mapOwner?.clearRegionHighlights?.();
  if (!matches.length) return;

  try {
    const report = await getEnrichmentReport(matches);
    if (requestId !== enrichmentRequestId) return;
    window.mapOwner?.highlightRegions?.(report.enrichedRegionIds);
  } catch (error) {
    if (requestId !== enrichmentRequestId) return;
    console.error(error);
    window.mapOwner?.clearRegionHighlights?.();
  }
}

async function findGenesInIndex(genes) {
  const geneEntries = genes
    .map((gene) => {
      const original = typeof gene === 'string' ? gene.trim() : '';
      const normalized = normalizeGeneName(original);
      return { original, normalized };
    })
    .filter((entry) => entry.normalized);

  const normalizedGenes = geneEntries.map((entry) => entry.normalized);
  if (!geneEntries.length) {
    return { matches: [], missing: [] };
  }

  const genesToFind = new Set(normalizedGenes);
  const foundGenes = new Set();
  const matchedNodes = [];
  const seenNodes = new Set();
  const bucketKeys = [...new Set(normalizedGenes.map((gene) => gene[0]))];
  const buckets = await Promise.all(bucketKeys.map(loadNamesBucket));

  buckets.forEach((rows) => {
    rows.forEach((row) => {
      const parsedNode = parseGeneNodeFromRow(row);
      if (!parsedNode) return;

      const normalizedName = normalizeGeneName(parsedNode.name);
      const shortName = getShortGeneName(normalizedName);
      const fullMatch = genesToFind.has(normalizedName);
      const shortMatch = genesToFind.has(shortName);
      if (!fullMatch && !shortMatch) return;

      if (fullMatch) foundGenes.add(normalizedName);
      if (shortMatch) foundGenes.add(shortName);

      const [lng, lat] = parsedNode.coordinates;
      const uniqueId = `${parsedNode.name}:${lng}:${lat}`;
      if (seenNodes.has(uniqueId)) return;
      seenNodes.add(uniqueId);

      matchedNodes.push({
        text: parsedNode.name,
        coordinates: [lng, lat],
        size: BULK_HIGHLIGHT_SIZE
      });
    });
  });

  const missing = geneEntries
    .filter((entry) => !foundGenes.has(entry.normalized))
    .map((entry) => entry.original);
  return { matches: matchedNodes, missing };
}

async function onMultiGenesSelected(rawInput) {
  const genes = parseMultiGeneInput(rawInput);
  if (!genes.length) {
    clearPersistentMultiHighlights();
    return;
  }

  const { matches } = await findGenesInIndex(genes);
  if (!matches.length) {
    clearPersistentMultiHighlights();
    return;
  }

  hasPersistentMultiHighlights.value = true;
  window.mapOwner?.highlightNodes(matches);
  updateEnrichedRegionHighlights(matches);
  if (matches.length > 1) {
    window.mapOwner?.focusOnNodes?.(matches, {
      padding: isSmallScreen.value ? 48 : 96,
      maxZoom: SEARCH_FOCUS_ZOOM
    });
  }
}

function onMultiGenesCleared() {
  closeSideBarViewer();
  clearPersistentMultiHighlights();
}

function clearPersistentMultiHighlights(resetInput = false) {
  enrichmentRequestId += 1;
  window.mapOwner?.clearPersistentHighlights?.();
  window.mapOwner?.clearRegionHighlights?.();
  hasPersistentMultiHighlights.value = false;
  if (resetInput) {
    multiInputResetToken.value += 1;
  }
}

function onSearchBeforeClear(payload) {
  if (currentProject.value) {
    payload.shouldProceed = false;
    closeSideBarViewer();
    return;
  }

  if (hasPersistentMultiHighlights.value) {
    payload.shouldProceed = false;
    clearPersistentMultiHighlights(true);
  }
}

function onSearchCleared() {
  closeSideBarViewer();
}

function closeSideBarViewer() {
  sidebarVisible.value = false;
  currentProject.value = '';
  smallPreviewName.value = '';
  currentClusterId.value = null;
  currentClusterName.value = '';
  currentClusterEnrichedGo.value = '';
  window.mapOwner?.clearSelectionHighlights?.();
}

function findProject(x) {
  if (x.lat === undefined && lastSelected && x.text === lastSelected.text) {
    x = lastSelected;
  } else {
    lastSelected = x;
  }
  const location = {
    center: [x.lat, x.lon],
    zoom: SEARCH_FOCUS_ZOOM,
  }
  window.mapOwner?.makeVisible(x.text, location, x.skipAnimation);
  currentProject.value = x.text;
  bus.fire('current-project', x.text);
  updateClusterInfo(x);
}

function onRepoSelected(repo) {
  lastSelected = repo;
  if (!showRepoInfo) {
    smallPreviewName.value = '';
    currentProject.value = repo.text;
    updateClusterInfo(repo);
    return;
  }
  if (isSmallScreen.value) {
    // move panel to the bottom
    smallPreviewName.value = repo.text;
    currentProject.value = null;
  } else {
    currentProject.value = repo.text;
  }
}

function showFullPreview() {
  if (!showRepoInfo) return;
  smallPreviewName.value = null;
  currentProject.value = lastSelected.text;
}

function onShowTooltip(newTooltip) {
  tooltip.value = newTooltip;
}

function onShowContextMenu(newContextMenu) {
  contextMenu.value = newContextMenu;
}

onBeforeUnmount(() => {
  window.mapOwner?.dispose();
  bus.off('repo-selected', onRepoSelected);
  bus.off('show-tooltip', onShowTooltip);
  bus.off('show-context-menu', onShowContextMenu);
  bus.off('focus-on-repo', onFocusOnRepo);
  bus.off('unsaved-changes-detected', onUnsavedChangesDetected);
  window.removeEventListener('resize', onResize);
})

onBeforeMount(() => {
  bus.on('repo-selected', onRepoSelected);
  bus.on('show-context-menu', onShowContextMenu);
  bus.on('show-tooltip', onShowTooltip);
  bus.on('focus-on-repo', onFocusOnRepo);
  bus.on('unsaved-changes-detected', onUnsavedChangesDetected);
  window.addEventListener('resize', onResize);
  if (!showRepoInfo) {
    loadGeneMetadata();
  }
  
});

function onResize() {
  isSmallScreen.value = window.innerWidth < SM_SCREEN_BREAKPOINT;
}

function doContextMenuAction(menuItem) {
  contextMenu.value = null;
  menuItem.click();
}

function onFocusOnRepo(repo, groupId) {
  const focusViewModel = new FocusViewModel(repo, groupId);
  currentFocus.value = focusViewModel;
}

function onUnsavedChangesDetected(hasChanges) {
  hasUnsavedChanges.value = hasChanges;
}

function closeFocusView() {
  if (currentFocus.value) {
    currentFocus.value.dispose();
    currentFocus.value = null;
  }
}

const typeAheadVisible = computed(() => {
  return true;
});

function showUnsavedChanges() {
  unsavedChangesVisible.value = true;
}

async function loadGeneMetadata() {
  if (!config.geneMetadataEndpoint) return;
  geneMetadataLoading.value = true;
  geneMetadataError.value = '';
  try {
    const response = await fetch(config.geneMetadataEndpoint);
    if (!response.ok) {
      throw new Error(`Failed to load gene metadata: ${response.status} ${response.statusText}`);
    }
    geneMetadata.value = await response.json();
  } catch (error) {
    console.error(error);
    geneMetadataError.value = error.message || 'Failed to load gene metadata.';
  } finally {
    geneMetadataLoading.value = false;
  }
}

async function updateClusterInfo(repo) {
  if (showRepoInfo || !repo) return;
  const requestId = ++clusterInfoRequestId;
  currentClusterId.value = null;
  currentClusterName.value = '';
  currentClusterEnrichedGo.value = '';

  let groupId = repo.groupId;
  if (groupId === undefined && repo.lat !== undefined && repo.lon !== undefined) {
    groupId = await window.mapOwner?.getGroupIdAt(repo.lat, repo.lon);
  }
  if (requestId !== clusterInfoRequestId) return;
  if (groupId === undefined) return;

  currentClusterId.value = groupId;
  const places = window.mapOwner?.getPlacesGeoJSON?.();
  if (!places?.features?.length) return;
  const groupIdKey = String(groupId);
  const match = places.features.find((feature) => String(feature?.properties?.ownerId) === groupIdKey);
  if (match?.properties?.name) {
    currentClusterName.value = match.properties.name;
  }
  if (match?.properties?.enriched_GO) {
    currentClusterEnrichedGo.value = match.properties.enriched_GO;
  }
}

async function listCurrentConnections() {
  if (currentFocus.value) {
    currentFocus.value.disposeSubgraphViewer();
  }
  if (contextMenu.value) {
    contextMenu.value = null;
  }
  
  const groupId = lastSelected.groupId ?? (await window.mapOwner?.getGroupIdAt(lastSelected.lat, lastSelected.lon));
  if (groupId !== undefined) {
    const focusViewModel = new FocusViewModel(lastSelected.text, groupId);
    currentFocus.value = focusViewModel;
  }
}

</script>

<template>
  <div>
    <div class="unsaved-changes" v-if='hasUnsavedChanges'>
      You have unsaved labels in local storage. <a href="#" @click.prevent="showUnsavedChanges()" class="normal">Click here</a> to see them.
    </div>
    <div class="made-by">
      Map:
      <a class="normal" aria-label="Map by @leonfrench" target="_blank" href="https://github.com/leonfrench">
        @leonfrench
      </a>
      • Based on
      <a class="normal" aria-label="Based on @anvaka's web app" target="_blank" href="https://github.com/sponsors/anvaka">
        @anvaka
      </a>
      's web app
    </div>
    <focus-repository :vm="currentFocus" v-if="currentFocus"
      class="right-panel"
      @selected="findProject"
      @close="closeFocusView()"
    ></focus-repository>
    <github-repository :name="currentProject" v-if="currentProject && showRepoInfo" @listConnections="listCurrentConnections()"></github-repository>
    <gene-repository
      :name="currentProject"
      v-if="currentProject && !showRepoInfo"
      :metadata="geneMetadata"
      :loading="geneMetadataLoading"
      :error="geneMetadataError"
      :cluster-id="currentClusterId"
      :cluster-name="currentClusterName"
      :cluster-enriched-go="currentClusterEnrichedGo"
      @listConnections="listCurrentConnections()"
    ></gene-repository>
    <form @submit.prevent="onSubmit" class="search-box" v-if="typeAheadVisible">
      <type-ahead
        placeholder="Find Protein"
        @menuClicked='aboutVisible = true'
        @selected='findProject'
        @beforeClear='onSearchBeforeClear'
        @cleared='onSearchCleared'
        @inputChanged='onTypeAheadInput'
        @multiSelected='onMultiGenesSelected'
        @multiDownloadEnrichment='onMultiDownloadEnrichment'
        @multiCleared='onMultiGenesCleared'
        :showClearButton="Boolean(currentProject || hasPersistentMultiHighlights)"
        :query="currentProject"
        :multiInputResetToken="multiInputResetToken"
      ></type-ahead>
    </form>
    <transition name='slide-bottom'>
      <small-preview v-if="smallPreviewName && showRepoInfo" :name="smallPreviewName" class="small-preview" @showFullPreview="showFullPreview()"></small-preview>
    </transition>
    <div class="tooltip" v-if="tooltip" :style="{left: tooltip.left, top: tooltip.top, background: tooltip.background}">{{ tooltip.text }}</div>
    <div class="context-menu" v-if="contextMenu" :style="{left: contextMenu.left, top: contextMenu.top}">
      <a href="#" v-for="(item, key) in contextMenu.items" :key="key" @click.prevent="doContextMenuAction(item)">{{ item.text }}</a>
    </div>
    <transition name='slide-top'>
      <unsaved-changes v-if='unsavedChangesVisible' @close='unsavedChangesVisible = false' class='changes-window'></unsaved-changes>
    </transition>
    <transition name='slide-left'>
      <about v-if="aboutVisible" @close='aboutVisible = false' class="about"></about>
    </transition>
  </div>
</template>

<style scoped>
.made-by {
  position: fixed;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px;
  font-size: 12px;
  color: #fff;
}
.made-by a {
  color: hsla(160, 100%, 37%, 1);
}


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.search-box {
  position: absolute;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  height: 48px;
  font-size: 16px;
  margin-top: 16px;
  padding: 0;
  cursor: text;
  left: 8px;
  width: calc(var(--side-panel-width) - 8px);
}
.tooltip {
  position: absolute;
  background: var(--color-background-soft);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text);
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;
  transform: translate(-50%, calc(-100% - 12px));
}

.right-panel {
  position: fixed;
  right: 0;
  padding: 8px;
  background: var(--color-background);
  height: 100%;
  bottom: 0;
  width: 400px;
  overflow: hidden;
  border-left: 1px solid var(--color-border);
}
.unsaved-changes {
  position: absolute;
  top: 60px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  color: var(--color-text);
  background: var(--color-background);
  width: calc(var(--side-panel-width) - 8px);
}

.slide-top-enter-active, .slide-top-leave-active {
  transition: opacity .3s cubic-bezier(0,0,0.58,1);
}
.slide-top-enter, .slide-top-leave-to {
  opacity: 0;
}
.changes-window {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
  top: 50%;
  width: 400px;
  background: var(--color-background);
  z-index: 2;
  box-shadow: 0 -1px 24px rgb(0 0 0);
  padding: 8px 16px;
  overflow-y: auto;
  max-height: 100%;
}
.context-menu {
  position: absolute;
  background: var(--color-background-soft);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text);
  z-index: 2;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
}
.repo-viewer {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(var(--side-panel-width) + 16px);
  height: 100vh;
  overflow: auto;
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
}
.slide-bottom-enter-active, .slide-bottom-leave-active {
  transition: transform .3s cubic-bezier(0,0,0.58,1);
}
.slide-bottom-enter, .slide-bottom-leave-to {
  transform: translateY(84px);
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 150ms cubic-bezier(0,0,0.58,1);
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100%);
}
.small-preview {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 84px;
  background: var(--color-background);
  box-shadow: 0 -4px 4px rgba(0,0,0,0.42);
}
.about {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--side-panel-width);
  background: var(--color-background);
  z-index: 2;
  box-shadow: 0 -1px 24px rgb(0 0 0);
  display: flex;
  flex-direction: column;
}


@media (max-width: 800px) {
  .repo-viewer, .search-box, .right-panel {
    width: 45vw;
  }
  .search-box {
    margin: 0;
    left: 0;
  }
  .unsaved-changes {
    width: 45vw;
    left: 0;
    top: 48px
  }
  .top-right-support {
    right: 0;
    top: 0;
  }

  .close-support {
    top: unset;
    bottom: -6px;
    left: -8px;
  }
}
@media (max-width: 600px) {
  .top-right-support {
    top: unset;
    right: unset;
    left: 16px;
    bottom: 36px;
    font-size: 12px;
    opacity: 0.4;
  }

  .close-support {
    bottom: unset;
    left: unset;
    top: -6px;
    right: -8px;
  }

  .repo-viewer {
    width: 100%;
  }
  .search-box {
    left: 0;
    margin-top: 0;
    width: 100%;
  }
  .right-panel {
    width: 100%;
    height: 30%;
    top: 70%;
    z-index: 2;
    border-top: 1px solid var(--color-border);
    box-shadow: 0 -4px 4px rgba(0,0,0,0.42);
  }
  .neighbors-container {
    height: 100%;
    z-index: 2;
  }

  .top-right-support {
    right: unset;
    top: unset;
    bottom: 0;
    left: 0;
  }
}

</style>
