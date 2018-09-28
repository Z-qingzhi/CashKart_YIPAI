var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtSchema = new Schema({
	"path":String,
	"component":String,
	"name":String,
	"children":Array,
});
module.exports = mongoose.model('Menu',produtSchema,'menus')