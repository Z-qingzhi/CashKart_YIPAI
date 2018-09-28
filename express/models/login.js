var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtSchema = new Schema({
	"money":Number,
	"name":String,
	"img":String,
	"productId":String,
});
module.exports = mongoose.model('Good',produtSchema,'goods')