<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  clusterId: {
    type: [String, Number],
    default: null
  },
  clusterName: {
    type: String,
    default: ''
  },
  clusterEnrichedGo: {
    type: String,
    default: ''
  },
  metadata: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  highlightColor: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['listConnections', 'setHighlightColor', 'clearHighlight']);
const colorInput = ref(null);
const defaultHighlightColor = ref('#8f4f2a');

const geneEntry = computed(() => {
  if (!props.metadata) return null;
  return props.metadata[props.name];
});

const summaryTitle = computed(() => {
  return `UniProtKB/Swiss-Prot Summary`;
});

const summaryText = computed(() => {
  if (!geneEntry.value) return '';
  const description = geneEntry.value.description;
  if (!description) return 'No summary available.';
  return description;
});

const uniprotLink = computed(() => {
  const entry = geneEntry.value?.uniprot || geneEntry.value?.uniprot_entry;
  if (!entry) return '';
  return `https://www.uniprot.org/uniprotkb/${entry}/entry`;
});

const displayClusterName = computed(() => {
  return props.clusterName || 'Unknown cluster';
});

const displayClusterId = computed(() => {
  if (props.clusterId === null || props.clusterId === undefined) return 'Unknown';
  return props.clusterId;
});

const displayClusterEnrichedGo = computed(() => {
  return props.clusterEnrichedGo || 'Unknown';
});

const highlightButtonColor = computed(() => {
  return props.highlightColor || defaultHighlightColor.value;
});

const highlightButtonLabel = computed(() => {
  return props.highlightColor ? 'Change highlight color' : 'Highlight protein';
});

function listConnections() {
  emit('listConnections');
}

function openColorPicker() {
  setHighlightColor(highlightButtonColor.value);
  colorInput.value?.click();
}

function setHighlightColor(color) {
  emit('setHighlightColor', color);
}

function clearHighlight() {
  emit('clearHighlight');
}

watch(
  () => props.name,
  () => {
    defaultHighlightColor.value = generateRandomHighlightColor();
  },
  { immediate: true }
);

function generateRandomHighlightColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 50 + Math.floor(Math.random() * 26);
  const lightness = 28 + Math.floor(Math.random() * 15);
  return hslToHex(hue, saturation, lightness);
}

function hslToHex(hue, saturation, lightness) {
  const normalizedSaturation = saturation / 100;
  const normalizedLightness = lightness / 100;
  const chroma = (1 - Math.abs(2 * normalizedLightness - 1)) * normalizedSaturation;
  const hueSection = hue / 60;
  const secondComponent = chroma * (1 - Math.abs((hueSection % 2) - 1));
  const matchLightness = normalizedLightness - chroma / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hueSection >= 0 && hueSection < 1) {
    red = chroma;
    green = secondComponent;
  } else if (hueSection < 2) {
    red = secondComponent;
    green = chroma;
  } else if (hueSection < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (hueSection < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (hueSection < 5) {
    red = secondComponent;
    blue = chroma;
  } else {
    red = chroma;
    blue = secondComponent;
  }

  return `#${toHex(red + matchLightness)}${toHex(green + matchLightness)}${toHex(blue + matchLightness)}`;
}

function toHex(channel) {
  return Math.round(channel * 255).toString(16).padStart(2, '0');
}
</script>

<template>
  <div class="repo-viewer">
    <div>
      <h2>{{ name }}</h2>
      <div class="gene-full-name" v-if="geneEntry?.name">
        {{ geneEntry.name }}
      </div>
      <div class="cluster-info">
        <div class="cluster-line">
          Cluster: {{ displayClusterName }} (ID: {{ displayClusterId }})
        </div>
        <div class="cluster-enriched-go">Enriched GO: {{ displayClusterEnrichedGo }}</div>
        <div class="actions row">
          <a href="#" class="action-link" @click.prevent="listConnections()">List connections</a>
        </div>
        <div class="actions row">
          <button type="button" class="action-link action-button" @click="openColorPicker()">
            <span>{{ highlightButtonLabel }}</span>
            <span class="highlight-swatch" :style="{ backgroundColor: highlightButtonColor }"></span>
          </button>
          <input
            ref="colorInput"
            class="color-picker-input"
            type="color"
            :value="highlightButtonColor"
            @input="setHighlightColor($event.target.value)"
          >
        </div>
        <div v-if="highlightColor" class="actions row secondary-actions">
          <a href="#" class="secondary-action-link" @click.prevent="clearHighlight()">Remove highlight</a>
        </div>
      </div>
      <div v-if="loading" class="loading">
        Loading gene metadata...
      </div>
      <div v-else-if="error" class="not-found">
        {{ error }}
      </div>
      <div v-else-if="!geneEntry" class="not-found">
        No metadata found for this gene.
      </div>
      <div v-else class="summary">
        <div class="summary-title">{{ summaryTitle }}</div>
        <div class="summary-text">{{ summaryText }}</div>
        <a v-if="uniprotLink" class="summary-link" :href="uniprotLink" target="_blank" rel="noopener">
          View on UniProt
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.repo-viewer {
  padding-top: 70px;
  padding-left: 8px;
  padding-right: 8px;
}

.gene-full-name {
  line-height: 1.2em;
  margin-bottom: 12px;
}

.cluster-info {
  margin-bottom: 16px;
}

.cluster-line,
.cluster-enriched-go {
  line-height: 1.2em;
}

.actions {
  margin-top: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}

.action-link {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  min-height: 32px;
  width: 100%;
  padding: 4px 10px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-button {
  cursor: pointer;
  font: inherit;
  gap: 10px;
}

.action-link:hover {
  border-color: var(--color-border-hover);
  color: var(--color-link-hover);
}

.color-picker-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.highlight-swatch {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.secondary-actions {
  margin-top: 4px;
  padding-top: 0;
}

.secondary-action-link {
  color: var(--color-link-hover);
}

.summary-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  opacity: 0.8;
  margin-bottom: 6px;
}

.summary-text {
  line-height: 1.3em;
}

.summary-link {
  display: inline-block;
  margin-top: 8px;
  color: var(--color-link-hover);
}
</style>
