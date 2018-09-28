var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var produtSchema = new Schema({
	"userId":String,
	"userName":String,
	"userPwd":String,
	"orderList":Array,
	"cartList":[
		{
			"productId":String,
			"name":String,
			"money":String,
			"img":String,
			"checked":String,
			"productNum":String,
		}
		
	],
	"addressList":Array
});
module.exports = mongoose.model('User',produtSchema,'users')