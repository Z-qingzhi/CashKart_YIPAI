const express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var Guid = require('../utils/Guid');

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

router.get("/",function(req,res,next){
	// res.send('hello,goods list...')
	
	let page = parseInt(req.param("page"));
	let pageSize = parseInt(req.param("pageSize"));
	let sort = parseInt(req.param("sort"));
	let startMoney = parseInt(req.param("startMoney"));
	let endMoney = parseInt(req.param("endMoney"));
	let skip = (page-1)*pageSize;
	let params = {};
	if(startMoney!=0||endMoney!=0){
		params = {
			money:{
				$gt:startMoney,
				$lte:endMoney
			}
		}
	}
	
	let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
	goodsModel.sort({
		'money':sort
	});

	goodsModel.exec((err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:{
					count:doc.length,
					list:doc
				}
			});
		}
	})
})

router.post("/addCart",urlencodedParser,function(req,res,next){
	// res.send('hello,goods list...')
	var userId = req.body.userId;
	var productId = req.body.productId;
	var User = require('../models/users');
	// console.log(productId)
	User.findOne({userId:userId},(err,userDoc)=>{
		
		// res.send('hello,goods list...')
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			if(userDoc){
				let goodsItem = '';
				userDoc.cartList.forEach((item)=>{
					if(item.productId==productId){
						goodsItem = item;
						item.productNum ++;
					}
				})
				if(goodsItem){
					userDoc.save((error2,doc2)=>{
						if(error2){
							res.json({
								status:'1',
								msg:err1.message
							});
						}else{
							res.json({
								status:'0',
								msg:'',
								result:'suc'
							});
						}
					})
				}else{
					Goods.findOne({productId:productId},(err1,GoodDoc)=>{
						if(err1){
							res.json({
								status:'1',
								msg:err1.message
							});
						}else{
							if(GoodDoc){
								// var a = GoodDoc.toObject();
								var a = GoodDoc;
								a.productNum = 1;
								a.checked = 1;
								userDoc.cartList.push(a);
								userDoc.save((error2,doc2)=>{
									if(error2){
										res.json({
											status:'1',
											msg:err1.message
										});
									}else{
										res.json({
											status:'0',
											msg:'',
											result:'suc'
										});
									}
								})
							}else{
								res.json({
									status:'1',
									msg:"商品不存在"
								});
							}
						}
					})
				}
				
			}else{
				res.json({
					status:'1',
					msg:"请登录"
				});
			}
		}
	});
})


//创建productId
// router.get("/productId",function(req,res,next){
	
// 	Goods.find({},(err,goods)=>{

// 		if(err){
// 			res.json({
// 				status:'1',
// 				msg:err.message
// 			});
// 		}else{
			
// 			goods.forEach((item)=>{
// 				item.productId = Guid();
// 				item.save()
// 			})
			
			
// 		}
// 	});
// })

module.exports = router;