<script setup>
import { defineEmits, onMounted, onBeforeUnmount, ref } from 'vue';
import { getCachedCurrentUser, signOut } from '../lib/githubClient.js';
import bus from '../lib/bus.js';

const currentUser = ref(getCachedCurrentUser());
const emit = defineEmits(['close']);

function close() {
  emit('close');
}

function updateCurrentUser() {
  currentUser.value = getCachedCurrentUser();
}

onMounted(() => {
  bus.on('auth-changed', updateCurrentUser);
});

onBeforeUnmount(() => {
  bus.off('auth-changed', updateCurrentUser);
});


</script>
<template>
  <div>
    <div class='row'>
      <h2>Protein Neighborhoods</h2>
      <!-- Icon copyright (c) 2013-2017 Cole Bemis: https://github.com/feathericons/feather/blob/master/LICENSE -->
        <a href='#' @click.prevent='close' class='close-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </a>
    </div>
<div class="container">
  <p>
    The map contains <b>17,890</b> proteins organized into <b>458</b> neighborhood clusters.
  </p>

<p>
  This data-driven map is built by combining embeddings from
  <a href="https://pubmed.ncbi.nlm.nih.gov/34232869/" target="_blank" rel="noopener noreferrer">ProtT5 by Elnaggar et al.</a>,
  <a href="https://www.nature.com/articles/s41592-024-02201-0" target="_blank" rel="noopener noreferrer">scGPT by Cui et al.</a>,
  and
  <a href="https://philechka.com/science/orthrus" target="_blank" rel="noopener noreferrer">Orthrus by Fradkin et al.</a>
  Together, these models have seen roughly 2 billion protein sequences, gene expression profiles from ~30 million cells, and compared RNA transcripts spanning hundreds of species.
  The 100 shared dimensions identified by Canonical Correlation Analysis (CCA) were reduced to two UMAP coordinates; proteins were then clustered into regions in this 2D space, and the resulting clusters were named with ChatGPT 5.2.
</p>

<p>
  Use the <b>&#9776;</b> button in the search bar to open multi-gene input and mark a batch of genes/proteins at once.
  You can test for multi-gene patterns in the same 100D space using a separate probe tool:
  <a href="https://cca-100-embed-tool.streamlit.app/" target="_blank" rel="noopener noreferrer" class="normal">CCA 100D embed probe</a>.
</p>

<p>
  The source code is on <a href="https://github.com/leonfrench/protein-neighborhoods" class='normal'>Github</a>.
  Inspired by, and originally forked from,
  <a href="https://github.com/anvaka/map-of-github" target="_blank" class="normal">Map of GitHub</a> by @anvaka.
</p>


</div>

  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row h2 {
  margin: 8px 8px 0 8px;
  flex: 1;
}
.map-image {
  width: 64px;
  float: left;
}

.close-btn {
  align-self: stretch;
  align-items: center;
  display: flex;
  padding: 0 8px;
}

.container {
  padding: 8px;
  flex: 1;
  overflow-y: auto;
}
h4 {
  margin: 0;
  font-weight: normal;
  text-align: right;
}
.byline {
  margin: 0 8px 8px;
  font-size: 12px;
}

.user-info {
  margin: 8px;
}
p {
  margin: 0 0 8px 0;
  line-height: 1.5em;
}
b {
  font-weight: bold;
}
</style>
