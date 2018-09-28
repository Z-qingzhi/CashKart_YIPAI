const express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var Menus = require('../models/menus');

// mongoose.connect('mongodb://QingZengZhi:36823085qwe*@ds151612.mlab.com:51612/tudos');
mongoose.connect('mongodb://127.0.0.1:27017/todos');

mongoose.connection.on("connected",function(){
	console.log("MongoDB connected success.")
})

mongoose.connection.on("error",function(){
	console.log("MongoDB connected fail.")
})

mongoose.connection.on("disconnected",function(){
	console.log("MongoDB connected disconnected.")
})

router.post("/",function(req,res,next){

	Menus.find({},(err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				menus:doc
			});
		}
	});
	
})

module.exports = router;