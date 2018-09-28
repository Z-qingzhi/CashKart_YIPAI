<template>
	<div id="main">

		<div @click="Dologin">登录</div>
		<div @click="Dologout">退出</div>

		<el-dialog
		  :visible.sync="dialogVisible"
		  width="600px"
		  :before-close="handleClose">
		  <div>
		  	<div class="login_input"><label>账号<input type="text" name="" value="" v-model="userName"></label></div>
		  	<div class="login_input"><label>密码<input type="password" name="" value="" v-model="userPwd"></label></div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="Confirmlogin">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	import router from '../router.js'
	import { publicObj, $saas } from '../assets/js/base.js'
	import {$axios} from '../assets/js/axios.js'

	import qs from 'qs';
	// import Home from '@/views/Home'
	import MenuUtils from '../utils/MenuUtils'

	var routers = []
	var vum = {
		name: 'Home',
		data: () => ({
			swiperState:0,	
			mySwiper:'',
			swiperState2:0,	
			mySwiper2:'',
			tableState:0,
			dialogVisible: false,
			userName:'Tom',
			userPwd:'123456',
		}),
		mounted: function() {
			// $saas.getJSONLoading('./getOne',{"key":1,"num":2},function(data){
			// 	console.log(data)
			// });
			// $axios.get('./getOne',{"key":1,"num":1}).then(function(res){
				
			// 	console.log(res);
			// })
			// let postData = qs.stringify({"key":1,"num":1});
			let postData = {"name":'admin',"password":'admin'};
			var This = this;
			// $axios.post('./getMenu',postData).then(function(res){
			// 	console.log(res.data.menus);
			// 	this.login(res.data);
			// 	// var a = [{path:'/Home',component:Home}]
			// 	console.log(routers)
			// 	// This.$router.addRoutes(a)
			// })
			
			// $axios.get('./api/income',{}).then(function(res){
			// 	console.log(res)
			// })
		},
		// mounted: function(){

	 //    },
		components: {
	      
	    },
		methods: {
			Dologout(){
				let param = {};
				publicObj.confirm("是否退出",()=>{
					$axios.post('./users/logout',param).then((res)=>{
						if(res.data.status==0){
							publicObj.alert("退出成功");
							sessionStorage.removeItem("user");
						}
					})
				})
				
			},
			handleClose(done) {
				 done();
		        // this.$confirm('确认关闭？')
		        //   .then(_ => {
		        //     done();
		        //   })
		        //   .catch(_ => {});
		      },
			Dologin(){
				this.dialogVisible = true;
			},
			Confirmlogin(){
				let param = {};
				param.userName = this.userName;
				param.userPwd = this.userPwd;
				$axios.post('./users/login',param).then((res)=>{
					if(res.data.status==0){
						this.dialogVisible = false;
						this.handleSubmit2();
						// publicObj.alert("登录成功");
					}else{
						// this.dialogVisible = false;
						publicObj.alert(res.data.msg);
					}
				})
			},
			handleSubmit2(){
				let postData = {"name":'admin',"password":'admin'};
				var This = this;
				$axios.post('./getMenu',postData).then(function(res){
					// console.log(res.data.menus);
					// [{path:'/Home',component:Home}]
					// var a = res.data.result.menus
					var a = res.data.menus
					// var Dt = {"menus":[{"path":"/","component":"Home","children":[{"path":"/Home/Faq","component":"Faq","children":[{"path":"/Home/Faq/AboutAs","component":"AboutAs"}]}]},{"path":"/Home","component":"Home"}]};
					// var a = Dt.menus
					// This.login(res.data.menus);
					console.log(a)
					This.login(a);
					router.push(...routers)
					
					// let newRoutes=constantRouterMap.concat()
					This.$router.addRoutes(routers)

					// This.$router.addRoutes(routers)
					This.$router.push({ path: '/Goods' });
				})
			},
			login(data){
		        window.sessionStorage.setItem('user',JSON.stringify(data))
		        MenuUtils(routers,data)
		        
	        }
			
		}
	}
	export default vum;
</script>

<style lang="scss" src="../assets/css/home.css" scoped></style>
<style lang="scss">
	.login_input{
		margin-bottom:20px;
	}
</style>