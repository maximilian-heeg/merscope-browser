const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : "https://f004.backblazeb2.com/file/Merscope";

export const myViewConfig = {
  version: "1.0.6",
  name: "My example config",
  description: "This demonstrates the JSON schema",
  datasets: [
    {
      uid: "D1",
      name: "Dries",
      files: [
        {
          "url": `${url}/merscope.zarr/`,
          "type": "cells",
          "fileType": "anndata-cells.zarr",
          "options": {
            // XY values represent spatial centroids, so values point to an array of tuples, one per observation/cell.
            "xy": "obsm/spatial",
            // Polygon values represent spatial segmentations, so values point to an array of arrays, one per observation/cell.
            "poly": "uns/poly",
            // Mappings define coordinates for scatterplot points - 
            // the original arrays may contain more than two dimensions per observation/cell,
            // so the dims property must slice these down to tuples.
            // This allows comparing the fourth and fifth principal components, for example.
            // The key immediately under mappings must be used in the coordination scopes.
            "mappings": {
              "UMAP": {
                "key": "obsm/X_umap",
                "dims": [0, 1]
              },
              "Spatial": {
                "key": "obsm/spatial",
                "dims": [0, 1]
              }
            },
            // Factors define per-observation annotations, like clustering results, to display in the popover.
            "factors": [
              "obs/leiden"
            ]
          },
        },

        {
          "url": `${url}/merscope.zarr/`,
          "type": "cell-sets",
          "fileType": "anndata-cell-sets.zarr",
          // Options defines which columns contain cell sets (clustering results) in the cell sets view.
          // The groupName is the display name and the setName is the path within the Zarr store.
          "options": [
            {
              "groupName": "Leiden",
              "setName": "obs/leiden"
            },
            // {
            //   "groupName": "Cell Type",
            //   "setName": "obs/cell_type"
            // },
          ]
        },

        {
          "url": `${url}/merscope.zarr/`,
          "type": "expression-matrix",
          "fileType": "anndata-expression-matrix.zarr",
          "options": {
            "matrix": "layers/sqrt_norm"
          }
        },

        // {
        //   "url": `${url}/json/molecules.json`,
        //   "type": "molecules",
        //   "fileType": "molecules.json"
        // }
      ]
    }
  ],
  "coordinationSpace": {
    "dataset": {
      "A": "D1"
    },
    "embeddingType": {
      "UMAP": "UMAP"
    },
    "embeddingZoom": {
      "A": 2.5,
      "B": 2.5
    }
  },
  "layout": [
    {
      "component": "layerController",
      "x": 0,
      "y": 1,
      "w": 2,
      "h": 2
    },
    {
      "component": "spatial",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingZoom": "B"
      },
      "x": 2,
      "y": 0,
      "w": 6,
      "h": 6
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "UMAP",
        "embeddingZoom": "A"
      },
      "x": 8,
      "y": 0,
      "w": 4,
      "h": 4
    },
    {
      "component": "cellSetExpression",
      "x": 8,
      "y": 4,
      "w": 4,
      "h": 2
    },
    {
      "component": "genes",
      "x": 0,
      "y": 2,
      "w": 2,
      "h": 2
    },
    {
      "component": "cellSets",
      "x": 0,
      "y": 4,
      "w": 2,
      "h": 2
    },
  ],
  "initStrategy": "auto"
};