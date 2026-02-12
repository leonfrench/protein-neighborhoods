import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import bus from "./bus";
import config from "./config";
import {getCustomLayer} from "./gl/createLinesCollection.js";
import downloadGroupGraph from "./downloadGroupGraph.js";
import getComplimentaryColor from "./getComplimentaryColor";
import createLabelEditor from "./label-editor/createLabelEditor";
import getColorTheme from "./getColorTheme";
// import { createRadialGradient } from './gl/createRadialGradient';

const primaryHighlightColor = "#bf2072";
const secondaryHighlightColor = "#e56aaa";
const bulkHighlightColor = "#1f8a70";
const fallbackPointSize = 5;

const currentColorTheme = getColorTheme();

const colorStyle = [ "case" ]
currentColorTheme.color.forEach((row) => {
  colorStyle.push(["==", ["get", "fill"], row.input], row.output);
})
colorStyle.push("#FF0000");

export default function createMap() {
  const map = new maplibregl.Map(getDefaultStyle());
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  const fastLinesLayer = getCustomLayer();
  let backgroundEdgesFetch;
  let labelEditor;
  let persistentHighlightedFeatures = [];
  let transientHighlightedFeatures = [];
  // collection of labels.

  map.on("load", () => {
    map.addLayer(fastLinesLayer, "circle-layer");
    // map.addLayer(createRadialGradient(), "polygon-layer");
    labelEditor = createLabelEditor(map);
    applyPersistentHighlights();
    applyTransientHighlights();
  });

  map.on("contextmenu", (e) => {
    bus.fire("show-tooltip");
    
    let bg = getBackgroundNearPoint(e.point);
    if (!bg) return;

    const contextMenuItems = { 
      items: labelEditor.getContextMenuItems(e, bg.id),
      left: e.point.x + "px", 
      top: e.point.y + "px" 
    };

    const nearestCity = findNearestCity(e.point);
    if (nearestCity) {
      let name = nearestCity.properties.label;
      let parts = name.split('/')
      const displayName = parts[parts.length - 1] || name;

      contextMenuItems.items.push({
        text: "List connections of " + displayName,
        click: () => {
          showDetails(nearestCity);
          drawBackgroundEdges(e.point, name);
          bus.fire('focus-on-repo', name, bg.id);
        }
      });
    }

    bus.fire("show-context-menu", contextMenuItems);
  });

  map.on("mousemove", (e) => {
    // let hoveredFeature = findNearestCity(e.point);
    // if (hoveredFeature) {
    //   const bgFeature = getBackgroundNearPoint(e.point);
    //   bus.fire("show-tooltip", { 
    //     text: hoveredFeature.properties.label, 
    //     left: e.point.x + "px",
    //     top: e.point.y + "px",
    //     background: bgFeature?.properties?.fill || "rgba(0,0,0,0.5)",
    //   });
    // } else {
    //   bus.fire("show-tooltip");
    // }
  });

  map.on("click", (e) => {
    bus.fire("show-context-menu");
    const nearestCity = findNearestCity(e.point);
    if (!nearestCity) return;
    const repo = nearestCity.properties.label
    if (!repo) return;
    showDetails(nearestCity);

    const includeExternal = e.originalEvent.altKey;
    drawBackgroundEdges(e.point, repo, !includeExternal);
  });
  const bordersCollection = fetch(config.bordersSource).then((res) => res.json());

  return {
    map,
    dispose() {
      map.remove();
      // TODO: Remove custom layer?
    },
    makeVisible,
    focusOnNodes,
    highlightNodes,
    clearSelectionHighlights,
    clearPersistentHighlights,
    clearHighlights,
    getPlacesGeoJSON,
    getGroupIdAt
  }

  function getGroupIdAt(lat, lon) {
    // find first group that contains the point.
    return bordersCollection.then((collection) => {
      const feature = collection.features.find((f) => {
        return polygonContainsPoint(f.geometry.coordinates[0], lat, lon);
      });
      if (!feature) return;
      const id = feature.id;
      return id;
    });

    // const res = map.querySourceFeatures('borders-source').find((f) => {
    //   return polygonContainsPoint(f.geometry.coordinates[0], lat, lon);
    // });
    // return res?.id;
  }

  function showDetails(nearestCity) {
    const repo = nearestCity.properties.label
    if (!repo) return;
    const [lat, lon] = nearestCity.geometry.coordinates
    bus.fire("show-tooltip");
    bus.fire("repo-selected", {
      text: repo,
      lat,
      lon,
      groupId: nearestCity.properties?.parent
    });
  }

  function getPlacesGeoJSON() {
    return labelEditor.getPlaces();
  }

  function clearSelectionHighlights() {
    backgroundEdgesFetch?.cancel();
    fastLinesLayer.clear();
    transientHighlightedFeatures = [];
    applyTransientHighlights();
  }

  function clearPersistentHighlights() {
    persistentHighlightedFeatures = [];
    applyPersistentHighlights();
  }

  function clearHighlights() {
    backgroundEdgesFetch?.cancel();
    fastLinesLayer.clear();
    persistentHighlightedFeatures = [];
    transientHighlightedFeatures = [];
    applyPersistentHighlights();
    applyTransientHighlights();
  }

  function makeVisible(repository, location, disableAnimation = false) {
    const drawEdgesAtCurrentCenter = () => {
      const projectedPoint = map.project(location.center);
      drawBackgroundEdges(projectedPoint, repository);
    };

    if (disableAnimation) {
      map.jumpTo(location);
      drawEdgesAtCurrentCenter();
      return;
    }

    map.once("moveend", drawEdgesAtCurrentCenter);
    map.flyTo(location);
  }

  function focusOnNodes(
    nodes = [],
    { padding = 80, maxZoom = 8, disableAnimation = false } = {}
  ) {
    const coordinates = nodes.map(getNodeCoordinates).filter(Boolean);
    if (!coordinates.length) return;

    let minLng = Infinity;
    let minLat = Infinity;
    let maxLng = -Infinity;
    let maxLat = -Infinity;

    coordinates.forEach(([lng, lat]) => {
      if (lng < minLng) minLng = lng;
      if (lat < minLat) minLat = lat;
      if (lng > maxLng) maxLng = lng;
      if (lat > maxLat) maxLat = lat;
    });

    if (minLng === maxLng && minLat === maxLat) {
      const location = {
        center: [minLng, minLat],
        zoom: maxZoom
      };
      if (disableAnimation) {
        map.jumpTo(location);
      } else {
        map.flyTo(location);
      }
      return;
    }

    const location = map.cameraForBounds(
      [
        [minLng, minLat],
        [maxLng, maxLat]
      ],
      {
        padding,
        maxZoom
      }
    );
    if (!location) return;

    if (disableAnimation) {
      map.jumpTo(location);
    } else {
      map.flyTo(location);
    }
  }

  function getNodeCoordinates(node = {}) {
    const coordinates = Array.isArray(node.coordinates)
      ? node.coordinates
      : [node.lat, node.lon];
    if (!Array.isArray(coordinates) || coordinates.length !== 2) return null;

    const lng = Number(coordinates[0]);
    const lat = Number(coordinates[1]);
    if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null;
    return [lng, lat];
  }

  function highlightNodes(nodes = []) {
    backgroundEdgesFetch?.cancel();
    fastLinesLayer.clear();
    persistentHighlightedFeatures = nodes
      .map((node) => {
        const coordinates = getNodeCoordinates(node);
        if (!coordinates) return null;
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates },
          properties: {
            color: node.color || bulkHighlightColor,
            name: node.text || node.name || "",
            background: node.background || "#222",
            highlightKind: node.highlightKind || "bulk",
            textSize: node.textSize || 0.8,
            size: node.size || fallbackPointSize * 6
          }
        };
      })
      .filter(Boolean);

    applyPersistentHighlights();
  }

  function applyPersistentHighlights() {
    const source = map.getSource("persistent-selected-nodes");
    if (!source) return;

    source.setData({
      type: "FeatureCollection",
      features: persistentHighlightedFeatures
    });
    map.redraw();
  }

  function applyTransientHighlights() {
    const source = map.getSource("selected-nodes");
    if (!source) return;

    source.setData({
      type: "FeatureCollection",
      features: transientHighlightedFeatures
    });
    map.redraw();
  }

  function getBackgroundNearPoint(point) {
    const borderFeature = map.queryRenderedFeatures(point, { layers: ["polygon-layer"] });
    return borderFeature[0];
  }

  function drawBackgroundEdges(point, repo, ignoreExternal = true) {
    const bgFeature = getBackgroundNearPoint(point);
    if (!bgFeature) return;
    const groupId = bgFeature.id;
    if (groupId === undefined) return;

    const fillColor = getPolygonFillColor(bgFeature.properties);
    let complimentaryColor = getComplimentaryColor(fillColor);
    fastLinesLayer.clear();
    backgroundEdgesFetch?.cancel();
    let isCancelled = false;
    let highlightedNodes = {
      type: "FeatureCollection",
      features: []
    };

    backgroundEdgesFetch = downloadGroupGraph(groupId).then(groupGraph => {
      if (isCancelled) return;
      let firstLevelLinks = [];
      let primaryNodePosition;
      let renderedNodesAdjustment = new Map();
      map.querySourceFeatures("points-source", {
        sourceLayer: "points",
        filter: ["==", "parent", groupId]
      }).forEach(repo => {
        const lngLat = repo.geometry.coordinates;
        const size = Number(repo.properties.size);
        renderedNodesAdjustment.set(repo.properties.label, {
          lngLat,
          size: Number.isFinite(size) && size > 0 ? size : fallbackPointSize
        });
      });

      const getFallbackSize = (nodeId) => {
        const graphNodeData = groupGraph.getNode(nodeId)?.data || {};
        const size = Number(graphNodeData.size ?? graphNodeData.s);
        return Number.isFinite(size) && size > 0 ? size : fallbackPointSize;
      };

      groupGraph.forEachLink(link => {
        if (link.data?.e && ignoreExternal) return; // external;
        const fromNodeData = renderedNodesAdjustment.get(link.fromId) || {
          lngLat: groupGraph.getNode(link.fromId).data.l,
          size: getFallbackSize(link.fromId)
        };
        const toNodeData = renderedNodesAdjustment.get(link.toId) || {
          lngLat: groupGraph.getNode(link.toId).data.l,
          size: getFallbackSize(link.toId)
        };
        const fromGeo = fromNodeData.lngLat;
        const toGeo = toNodeData.lngLat;

        const from = maplibregl.MercatorCoordinate.fromLngLat(fromGeo);
        const to = maplibregl.MercatorCoordinate.fromLngLat(toGeo);
        const isFirstLevel = repo === link.fromId || repo === link.toId;
        const line = {
          from: [from.x, from.y],
          to: [to.x, to.y],
          color: isFirstLevel ? 0xffffffFF : complimentaryColor 
        }
        // delay first level links to be drawn last, so that they are on the top
        if (isFirstLevel) {
          firstLevelLinks.push(line);

          if (!primaryNodePosition) {
            primaryNodePosition = repo === link.fromId ? fromGeo : toGeo;
            const primaryNodeSize = repo === link.fromId ? fromNodeData.size : toNodeData.size;
            highlightedNodes.features.push({
              type: "Feature",
              geometry: {type: "Point", coordinates: primaryNodePosition},
              properties: {color: primaryHighlightColor, name: repo, background: fillColor, highlightKind: "click", textSize: 1.2, size: primaryNodeSize}
            });
          } 
          let otherName = repo === link.fromId ? link.toId : link.fromId;
          const otherNodeSize = repo === link.fromId ? toNodeData.size : fromNodeData.size;
          // pick the other one too:
          highlightedNodes.features.push({
            type: "Feature",
            geometry: {type: "Point", coordinates: repo === link.fromId ? toGeo : fromGeo},
            properties: {color: secondaryHighlightColor, name: otherName, background: fillColor, highlightKind: "click", textSize: 0.8, size: otherNodeSize}
          });
        } else fastLinesLayer.addLine(line);
      });
      firstLevelLinks.forEach(line => {
        fastLinesLayer.addLine(line)
      });
      transientHighlightedFeatures = highlightedNodes.features;
      applyTransientHighlights();
    });
    backgroundEdgesFetch.cancel = () => {isCancelled = true};
  }

  function findNearestCity(point) {
    let width = 16;
    let height = 16;
    const features = map.queryRenderedFeatures([
      [point.x - width / 2, point.y - height / 2],
      [point.x + width / 2, point.y + height / 2]
    ], { layers: ["circle-layer"] });
    if (!features.length) return;
    let distance = Infinity;
    let nearestCity = null;
    features.forEach(feature => {
      let geometry = feature.geometry.coordinates;
      let dx = geometry[0] - point.x;
      let dy = geometry[1] - point.y;
      let d = dx * dx + dy * dy;
      if (d < distance) {
        distance = d;
        nearestCity = feature;
      }
    });
    return nearestCity;
  }
}

function getDefaultStyle() {
  return {
    hash: true,
    container: "map",
    center: [0, 0],
    zoom: 2,
    style: {
      version: 8,
      glyphs: config.glyphsSource,
      sources: {
        "borders-source": { type: "geojson", data: config.bordersSource, },
        "points-source": {
          type: "vector",
          tiles: [config.vectorTilesTiles],
          //was minzoom 4 which would hide some points/proteins at high zoom levels
          minzoom: 3,
          maxzoom: 5,
          center: [-9.843750,4.213679,7],
        },
        "place": { // this one loaded asynchronously, and merged with local storage data
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        },
        "selected-nodes": {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [] 
          }
        },
        "persistent-selected-nodes": {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        }
      },
      layers: [
        {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": currentColorTheme.background
        }
      },
        {
          "id": "polygon-layer",
          "type": "fill",
          "source": "borders-source",
          "filter": ["==", "$type", "Polygon"],
          "paint": {
            "fill-color": colorStyle
          }
        },
        {
          "id": "border-highlight",
          "type": "line",
          "source": "borders-source",
          "layout": {
            "visibility": "none"
          },
          "paint": {
            "line-color": "#FFF",
            "line-width": 4,
          }
        },
        {
          "id": "circle-layer",
          "type": "circle",
          "source": "points-source",
          "source-layer": "points",
          "filter": ["==", "$type", "Point"],
          "paint": {
            "circle-color": currentColorTheme.circleColor,
            "circle-opacity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              5, 0.1,
              15, 0.9
            ],
            "circle-stroke-color": currentColorTheme.circleStrokeColor,
            "circle-stroke-width": 1,
            "circle-stroke-opacity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              8, 0.0,
              15, 0.9
            ],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              5,  ["*", ["get", "size"], .1],
              23, ["*", ["get", "size"], 1.5],
            ]
          }
        },
        {
          "id": "label-layer",
          "type": "symbol",
          "source": "points-source",
          "source-layer": "points",
          "filter": [">=", ["zoom"], 5],
          "layout": {
            "text-font": [ "Roboto Condensed Regular" ],
            "text-field": ["slice", ["get", "label"], ["+", ["index-of", "/", ["get", "label"]], 1]],
            "text-anchor": "top",
            "text-max-width": 10,
            "symbol-sort-key": ["-", 0, ["get", "size"]],
            "symbol-spacing": 500,
            "text-offset": [0, 0.5],
            "text-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              8,  ["/", ["get", "size"], 4],
              10, ["+", ["get", "size"], 8]
            ],
          },
          "paint": {
            "text-color": currentColorTheme.circleLabelsColor,
            "text-halo-color": currentColorTheme.circleLabelsHaloColor,
            "text-halo-width": currentColorTheme.circleLabelsHaloWidth,
          },
        }, 
        {
          "id": "selected-nodes-layer",
          "type": "circle",
          "source": "selected-nodes",
          "paint": {
            "circle-color": ["get", "color"],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, ["max", 3, ["*", ["get", "size"], 0.2]],
              5, ["max", 4, ["*", ["get", "size"], 0.25]],
              23, ["*", ["get", "size"], 1.6],
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, 0.5,
              8, 1.5,
              15, 2
            ],
            "circle-stroke-opacity": 0.9
          }
        },
        {
          "id": "selected-nodes-labels-layer",
          "type": "symbol",
          "source": "selected-nodes",
          "layout": {
            "text-font": [ "Roboto Condensed Regular" ],
            "text-field": ["get", "name"],
            "text-anchor": "top",
            "text-max-width": 10,
            "symbol-sort-key": ["-", 0, ["get", "textSize"]],
            "symbol-spacing": 500,
            "text-offset": [0, 0.5],
            "text-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, ["max", 8, ["/", ["get", "size"], 2.5]],
              8, ["/", ["get", "size"], 4],
              10, ["+", ["get", "size"], 8]
            ],
          },
          "paint": {
            "text-color": "#fff",
            "text-halo-color": ["get", "color"],
            "text-halo-width": 2,
          },
        },
        // TODO: move labels stuff to label editor?
{
    "id": "place-country-1",
    // minzoom: 1, 
    "maxzoom": 10,
    "type": "symbol",
    "source": "place",
    "layout": {
        "text-font": [ "Roboto Condensed Bold" ],
        "text-size": [
          "interpolate",
          [ "cubic-bezier", 0.2, 0, 0.7, 1 ],
          ["zoom"],
          1, [
            "step",
            ["get", "symbolzoom"], 15, 
            4, 13, 
            5, 12
          ],
          9, [
            "step",
            ["get", "symbolzoom"], 22,
            4, 19,
            5, 17
          ]
        ],
        "symbol-sort-key": ["get", "symbolzoom"],
        "text-field": "{name}",
        "text-max-width": 6,
        "text-line-height": 1.1,
        "text-letter-spacing": 0,
    },
    "paint": {
      "text-color": currentColorTheme.placeLabelsColor,
      "text-halo-color": currentColorTheme.placeLabelsHaloColor,
      "text-halo-width": currentColorTheme.placeLabelsHaloWidth,
    },
    "filter": [
        "<=",
        ["get", "symbolzoom"],
        ["+", ["zoom"], 4]
      ],
},
        {
          "id": "persistent-selected-nodes-layer",
          "type": "circle",
          "source": "persistent-selected-nodes",
          "paint": {
            "circle-color": ["get", "color"],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, ["max", 3, ["*", ["get", "size"], 0.2]],
              5, ["max", 4, ["*", ["get", "size"], 0.25]],
              23, ["*", ["get", "size"], 1.6],
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, 0.5,
              8, 1.5,
              15, 2
            ],
            "circle-stroke-opacity": 0.9
          }
        },
        {
          "id": "persistent-selected-nodes-labels-layer",
          "type": "symbol",
          "source": "persistent-selected-nodes",
          "layout": {
            "text-font": [ "Roboto Condensed Regular" ],
            "text-field": ["get", "name"],
            "text-anchor": "top",
            "text-max-width": 10,
            "symbol-sort-key": ["-", 0, ["get", "textSize"]],
            "symbol-spacing": 500,
            "text-offset": [0, 0.5],
            "text-allow-overlap": true,
            "text-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0, ["max", 6, ["/", ["get", "size"], 3]],
              5, ["max", 7, ["/", ["get", "size"], 2.6]],
              8, ["max", 9, ["/", ["get", "size"], 2.2]],
              10, ["max", 12, ["*", ["get", "size"], 0.6]],
              14, ["*", ["get", "size"], 1.0]
            ],
          },
          "paint": {
            "text-color": "#fff",
            "text-halo-color": ["get", "color"],
            "text-halo-width": 3,
          },
        },
      ]
    },
  };
}

function getPolygonFillColor(polygonProperties) {
  for (const color of currentColorTheme.color) {
    if (color.input === polygonProperties.fill) {
      return color.output;
    }
  }
  return polygonProperties.fill;
}
function polygonContainsPoint(ring, pX, pY) {
    let c = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const p1 = ring[i];
        const p2 = ring[j];
        if (((p1[1] > pY) !== (p2[1] > pY)) && (pX < (p2[0] - p1[0]) * (pY - p1[1]) / (p2[1] - p1[1]) + p1[0])) {
            c = !c;
        }
    }
    return c;
}
