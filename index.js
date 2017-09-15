
const express = require('express');
const createRest = require('./model');

Server = function(config, ivrModel) {

  var app = express();
  app.set('views', __dirname + "/views");
  app.set('view engine', 'jade');
  app.get('/', function(req, res) {
    return res.render('index');
  });
  app.use('/bower_components', express["static"](__dirname + "/bower_components"));
  app.use('/public', express["static"](__dirname + "/public"));
  app.get('/partials/:folder/:view', function(req, res) {
    return res.render("partials/" + req.params.folder + "/" + req.params.view);
  });

  app.use('/ivrs', createRest(ivrModel));
  return {
    start: function() {
      return app.listen(config.port);
    }
  };
};

module.exports = Server;