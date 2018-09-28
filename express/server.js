const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require("cookie-parser");


var goods = require('./routes/goods');
var menus = require('./routes/menus');
var users = require('./routes/users');
// console.log(goods)

app.use(express.static(path.join(__dirname, 'views')))
app.use(cookieParser());

app.use((req,res,next)=>{

	if(req.cookies.userId){
		next();
	}else{
		if(req.originalUrl=='/users/login'||req.originalUrl=='/users/logout'||req.path=='/good'){
			next();
		}else{
			res.json({
				status:'10001',
				msg:'当前未登录',
				result:''
			});
		}
	}
})

app.use('/good',goods)
app.use('/getMenu',menus)
app.use('/users',users)

// app.post('/getMenu',urlencodedParser, function(req, res) {
//     if(req.body.name=='admin'&&req.body.password=='admin'){
//     var rel = {"menus":[{"path":"/","component":"Home","children":[{"path":"/Home/Faq","component":"Faq","children":[{"path":"/Home/Faq/AboutAs","component":"AboutAs"}]}]},{"path":"/Home","component":"Home"},{"path":"/AboutAs","component":"AboutAs"},{"path":"/HowLoan","component":"HowLoan"}]};
//    }else{
//      var rel = {data:0}
//    }
//    res.send(rel);
// });
app.listen(3000, () => {
  console.log(`App listening at port 3000`)
})