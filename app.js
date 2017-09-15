
  var Server, config, models, server;

  Server = require('./index');

  config = require('config');

  models = require('./models/index');

  server = new Server(config, models.Ivr);

  server.start();
