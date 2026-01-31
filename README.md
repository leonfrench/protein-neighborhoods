# Protein Neighborhoods

**[Protein Neighborhoods]**(https://leonfrench.github.io/protein-neighborhoods/) is an interactive map of the human autosomal proteome, inspired by the Map of GitHub by [Andrei Kashcha (@anvaka)](https://github.com/anvaka). Each dot represents a protein. Proteins are positioned close together when they have similar **single-cell expression profiles**, **RNA sequence**, and **protein sequence**.

<div align="center">
  <img src="public/512.png" alt="Protein Neighborhoods logo"/>
</div>

## Map releases

- [Current release (Jan 30, 2026)](https://leonfrench.github.io/protein-neighborhoods/) — 17,890 proteins, 458 clusters

## How was it made?

The layout combines embeddings from:
- [ProtT5 (Elnaggar et al.)](https://pubmed.ncbi.nlm.nih.gov/34232869/)
- [scGPT (Cui et al.)](https://www.nature.com/articles/s41592-024-02201-0)
- [Orthrus (Fradkin et al.)](https://philechka.com/science/orthrus)

We integrate these models using **Canonical Correlation Analysis (CCA)** and retain the **100 shared dimensions**. Those 100 dimensions are then reduced to **2D coordinates with UMAP**. The result is strongly data-driven: it reflects a shared view from models trained on **2 billion protein sequences**, **~30 million single cells**, and RNA transcripts spanning **hundreds of species**.

You can explore multi-gene patterns in the same 100D space using a separate probe tool:  
[Probe tool](https://cca-100-embed-tool.streamlit.app/)

### Data + scripts

The scripts used to generate the map data are available in the [protein-neighborhoods-data repository](https://github.com/leonfrench/protein-neighborhoods-data)**.

Most of the preprocessing was done in a (somewhat bloated) Google Colab notebook. In that notebook, I:
- jittered points that were extremely close together,
- iterated border creation a few times.

Some regions are still not perfectly spatially continuous.

### Edges and cluster names

Edges between proteins are computed using distance in the full **100D CCA space**.

Cluster names were generated with a ChatGPT prompt closely based on @anvaka’s approach for [country names](https://github.com/anvaka/map-of-github?tab=readme-ov-file#country-names), with **Gene Ontology term enrichment** added to the input (see the prompt in the R script in the data repository). I used three deep-research runs to cover as many clusters as possible. Only two duplicate name pairs remained and were re-generated to ensure uniqueness.

## Acknowledgements

This map was inspired by and adapted from the Map of GitHub by [Andrei Kashcha](https://github.com/anvaka). The web app code is based on the [GitHub map](https://github.com/anvaka/map-of-github) with modifications for proteins. While the underlying mapping approach differs (because the data differ), the implementation was guided by @anvaka’s description and data formats.
