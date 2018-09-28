const express = require('express')
var router = express.Router();
var mongoose = require('mongoose');

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var cookieParser = require("cookie-parser");

var User = require('../models/users');

// mongoose.connect('mongodb://QingZengZhi:36823085qwe*@ds151612.mlab.com:51612/tudos');
mongoose.connect('mongodb://127.0.0.1:27017/todos');


router.post("/login",urlencodedParser,function(req,res,next){
	let param = {};
	param.userName = req.body.userName;
	param.userPwd = req.body.userPwd;

	User.findOne(param,(err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			if(doc){
				res.cookie("userId",doc.userId,{
					path:'/',
					maxAge:1000*60*60*24
				})
				// req.session.user = doc;

				res.json({
					status:'0',
					msg:'',
					result:{
						userName:doc.userName,
					}
				});
			}else{
				res.json({
					status:'1',
					msg:"账号密码错误"
				});
			}
			
		}
	})
	
	
})

router.post("/logout",urlencodedParser,function(req,res,next){
	res.cookie("userId","",{
		path:'/',
		maxAge:-1
	})
	res.json({
		status:'0',
		msg:'',
		result:""
	});
})

router.get("/cartList",urlencodedParser,function(req,res,next){
	let  userId = req.cookies.userId;
	let param = {};
	param.userId = userId;
	User.findOne(param,(err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			if(doc){
				res.json({
					status:'0',
					msg:'',
					result:{
						cartList:doc.cartList,
					}
				});
			}else{
				res.json({
					status:'10001',
					msg:'当前未登录',
					result:''
				});
			}
			
		}
	})
})

//购物车删除
router.post("/cartDel",urlencodedParser,function(req,res,next){
	let  userId = req.cookies.userId;
	let productId = req.body.productId;

	User.update({
		userId:userId
	},{
		$pull:{
			'cartList':{
				'productId':productId
			}
		}
	},(err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:'suc'
			});
		}
	})
})

//修改商品数量
router.post("/cartEdit",urlencodedParser,function(req,res,next){
	let  userId = req.cookies.userId;
	let productId = req.body.productId;
	let productNum = req.body.productNum;
	let checked = req.body.checked;

	User.update({userId:userId,"cartList.productId":productId},{
		"cartList.$.productNum":productNum,
		"cartList.$.checked":checked
	},(err,doc)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:'suc'
			});
		}
	})
})

//购物商品的选择
router.post("/editCheckAll",urlencodedParser,function(req,res,next){
	let userId = req.cookies.userId;
	let checkAll = req.body.checkAll;
	User.findOne({userId:userId},(err,user)=>{
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			if(user){
				user.cartList.forEach((item)=>{
					item.checked = checkAll;
				});
				user.save((err1,doc)=>{
					if(err1){
						res.json({
							status:'1',
							msg:err.message
						});
					}else{
						res.json({
							status:'0',
							msg:'',
							result:'suc'
						});
					}
				})
			}
			
		}
	})
})


module.exports = router;