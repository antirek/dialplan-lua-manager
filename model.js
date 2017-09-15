(function() {
  var bodyParser, createRouter, express;

  express = require('express');

  bodyParser = (require('body-parser')).json();

  createRouter = function(Model) {
    var router;
    router = express.Router();
    router.use(bodyParser);
    router.route('/').get(function(req, res) {
      return Model.find({}, function(err, models) {
        return res.json(models);
      });
    }).post(function(req, res, next) {
      var model;
      model = new Model(req.body);
      return model.save(function(err) {
        if (err) {
          return next(err);
        } else {
          return res.json(model);
        }
      });
    });
    router.route('/:id').get(function(req, res, next) {
      return Model.findOne({
        _id: req.params.id
      }, function(err, model) {
        if (err) {
          return next(err);
        } else {
          return res.json(model);
        }
      });
    })["delete"](function(req, res, next) {
      return Model.remove({
        _id: req.params.id
      }, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.json({
            message: 'success'
          });
        }
      });
    }).post(function(req, res, next) {
      var data;
      data = JSON.parse(JSON.stringify(req.body));
      delete data._id;
      return Model.findOneAndUpdate({
        _id: req.params.id
      }, data, function(err, model) {
        if (err) {
          next(err);
        } else {

        }
        return res.json(req.body);
      });
    });
    return router;
  };

  module.exports = createRouter;

}).call(this);
