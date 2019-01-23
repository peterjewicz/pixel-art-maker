cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-sqlite-2.sqlitePlugin",
    "file": "plugins/cordova-plugin-sqlite-2/dist/sqlite-plugin.js",
    "pluginId": "cordova-plugin-sqlite-2",
    "clobbers": [
      "sqlitePlugin"
    ]
  },
  {
    "id": "org.devgeeks.Canvas2ImagePlugin.Canvas2ImagePlugin",
    "file": "plugins/org.devgeeks.Canvas2ImagePlugin/www/Canvas2ImagePlugin.js",
    "pluginId": "org.devgeeks.Canvas2ImagePlugin",
    "clobbers": [
      "window.canvas2ImagePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-storage": "2.6.0",
  "cordova-plugin-sqlite-2": "1.0.4",
  "org.devgeeks.Canvas2ImagePlugin": "0.6.0"
};
// BOTTOM OF METADATA
});