var APP_DATA = {
  "scenes": [
    {
      "id": "0-overview1",
      "name": "OVERVIEW1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0679356454071467,
        "pitch": 0.32196722304174763,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": -0.8849723139171957,
          "pitch": 0.19639249335940967,
          "rotation": 0,
          "target": "1-overview2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-overview2",
      "name": "OVERVIEW2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.283451962240985,
        "pitch": 0.16017556497498653,
        "fov": 1.3412181875493232
      },
      "linkHotspots": [
        {
          "yaw": 0.12657773051097543,
          "pitch": 0.16329525062347017,
          "rotation": 0,
          "target": "0-overview1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SF-06_30.06.2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
