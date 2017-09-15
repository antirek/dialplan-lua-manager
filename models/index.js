
var mongoose = require('mongoose');
var config = require('config')
var Schema = mongoose.Schema;

var db = mongoose.createConnection(config.mongo);

var ivr = require('./ivr');

module.exports = {
	Ivr: db.model('ivr', new Schema(ivr))
};