const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : "https://f004.backblazeb2.com/file/Merscope";

export const myViewConfig = {
  version: "1.0.6",
  name: "Merscope day 7",
  description: "Goldrath Merscope browser. LCMV Armstrong day 7. Transfer of female P14 in male recipients",
  datasets: [
    {
      uid: "D7",
      name: "Day 7 IEL",
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

        {
          "url": `${url}/json/molecules.json`,
          "type": "molecules",
          "fileType": "molecules.json"
        },

        {
          "url": `${url}/image.ome.zarr`,
          "type": "raster",
          "fileType": "raster.ome-zarr",
        },
      ]
    }
  ],
  "coordinationSpace": {
    "dataset": {
      "A": "D7"
    },
    "embeddingType": {
      "UMAP": "UMAP"
    },
    "embeddingZoom": {
      "A": 2.5,
      "B": 2.5,
    },
    "spatialMoleculesLayer": {
      "A": { 
        "visible": false ,
        "opacity": .5,
        "radius": 10
      }
    },
    "spatialCellsLayer": {
      "A": {
        "visible": true ,
        "stroked": true,
        "radius": 10,
        "opacity": 0.5
      }

    }
  },
  "layout": [
    {
      "component": "layerController",
      "x": 0,
      "y": 1,
      "w": 2,
      "h": 4,
      "coordinationScopes": {
        "spatialMoleculesLayer": "A",
        "spatialCellsLayer": "A"
      }
    },
    {
      "component": "description",
      "x": 0,
      "y": 4,
      "w": 2,
      "h": 1
    },
    {
      "component": "status",
      "x": 0,
      "y": 5,
      "w": 2,
      "h": 1
    },
    {
      "component": "spatial",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingZoom": "B",
        "spatialMoleculesLayer": "A",
        "spatialCellsLayer": "A"
      },
      "x": 2,
      "y": 0,
      "w": 5,
      "h": 6
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "UMAP",
        "embeddingZoom": "A"
      },
      "x": 7,
      "y": 0,
      "w": 3,
      "h": 4
    },
    {
      "component": "cellSetExpression",
      "x": 7,
      "y": 4,
      "w": 3,
      "h": 2
    },
    {
      "component": "genes",
      "x": 10,
      "y": 0,
      "w": 2,
      "h": 3
    },
    {
      "component": "cellSets",
      "x": 10,
      "y": 3,
      "w": 2,
      "h": 3
    },

  ],
  "initStrategy": "auto"
};