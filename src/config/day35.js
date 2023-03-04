const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/day35' : "https://f004.backblazeb2.com/file/Merscope/day35";

export const day35Config = {
  version: "1.0.6",
  name: "Merscope day 35",
  description: "Goldrath Merscope browser. LCMV Armstrong day 35. Transfer of female P14 in male recipients",
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
              "Spatial": {
                "key": "obsm/spatial",
                "dims": [0, 1]
              },
              "Unrolled": {
                "key": "obsm/unrolled",
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
              "groupName": "Cell Type",
              "setName": "obs/celltype"
            },
            {
              "groupName": "Leiden",
              "setName": "obs/leiden"
            },
          ]
        },

        {
          "url": `${url}/merscope.zarr/`,
          "type": "expression-matrix",
          "fileType": "anndata-expression-matrix.zarr",
          "options": {
            "matrix": "X"
          }
        },

        // {
        //   "url": `${url}/json/molecules.json`,
        //   "type": "molecules",
        //   "fileType": "molecules.json"
        // },

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
      "UMAP": "UMAP",
      "Spatial": "Spatial",
      "Unrolled": "Unrolled"
    },
    "embeddingZoom": {
      "A": 2.5,
      "B": 2.5,
      "C": 2.5,
      "D": 2.5
    },
    // "spatialMoleculesLayer": {
    //   "A": { 
    //     "visible": false ,
    //     "opacity": .5,
    //     "radius": 10
    //   }
    // },
    "spatialCellsLayer": {
      "A": {
        "visible": true ,
        "stroked": false,
        "radius": 10,
        "opacity": 0.5
      }

    }
  },
  "layout": [
    {
      "component": "layerController",
      "x": 0,
      "y": 0,
      "w": 2,
      "h": 5,
      "coordinationScopes": {
        // "spatialMoleculesLayer": "A",
        "spatialCellsLayer": "A"
      }
    },
    {
      "component": "obsSets",
      "x": 0,
      "y": 5,
      "w": 2,
      "h": 4
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
      "w": 4,
      "h": 5
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "Unrolled",
        "embeddingZoom": "D"
      },
      "x": 2,
      "y": 5,
      "w": 6,
      "h": 2
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "UMAP",
        "embeddingZoom": "A"
      },
      "x": 6,
      "y": 0,
      "w": 4,
      "h": 5
    },
    // {
    //   "component": "scatterplot",
    //   "coordinationScopes": {
    //     "dataset": "A",
    //     "embeddingType": "Spatial",
    //     "embeddingZoom": "C"
    //   },
    //   "x": 7,
    //   "y": 2,
    //   "w": 3,
    //   "h": 2
    // },
    
    {
      "component": "description",
      "x": 2,
      "y": 7,
      "w": 3,
      "h": 2
    },
    {
      "component": "status",
      "x": 5,
      "y": 7,
      "w": 3,
      "h": 2
    },

    {
      "component": "featureList",
      "x": 10,
      "y": 5,
      "w": 2,
      "h": 5
    },

    {
      "component": "obsSetFeatureValueDistribution",
      "x": 8,
      "y": 6,
      "w": 4,
      "h": 4
    },

  ],
  "initStrategy": "auto"
};