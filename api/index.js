require('babel-register')({
  presets: ['es2015', 'es2017']
});
require("./api.js").startServer();
