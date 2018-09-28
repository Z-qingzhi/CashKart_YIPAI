<template>
	<div id="main">
		<div class="container">
			<div class="content">
				<div class="bannarBg"></div>
				<div class="ypMain middleBox">
					<div class="bannar"></div>
					<h1 class="LogininText">Register for a loan immediately</h1>
					<div class="inputBoxType">
						<div class="inputLeftText">
							Phone Number
						</div>
						<div class="inputRight">
							<input type="tel" placeholder="Phone Number" class="formControl loginInputType" id="phone" v-on:input="checkCodeBtn($event)" v-model="phone" maxlength="11" />
						</div>
						<div class="clear"></div>
					</div>
					<div class="inputBoxType" style="margin-bottom: 0px;">
						<div class="inputLeftText">
							Verification Code
						</div>
						<div class="inputRight pr" style="margin-bottom: 5px;">
							<input type="tel" placeholder="1234" class="formControl loginInputType codeInput" id="code" v-model="code" maxlength="5" />
							<div class="sendCodeBtn" id="getCode" @click="DogetCode" :class="{bgOrange:getCodeState==1}">
								SEND
							</div>
						</div>
						<div class="clear"></div>
					</div>
					<p class="AgreementText">Insertion of this verification code confirms that you understand and agree on
						<router-link to="/Privacy" target="_blank"><span class="TextColor">Privacy agreement</span></router-link> and
						<router-link to="/Registration" target="_blank"><span class="TextColor">User registaration agreement</span></router-link>
					</p>
					<div class="inputBoxType">
						<div class="inputLeftText">
							Password
						</div>
						<div class="inputRight">
							<input type="password" placeholder="Password(6~12)" class="formControl loginInputType" maxlength="12" id="password1" v-model="password1" />
						</div>
						<div class="clear"></div>
					</div>
					<div class="inputBoxType">
						<div class="inputLeftText">
							Confirm Password
						</div>
						<div class="inputRight">
							<input type="password" placeholder="Confirm Password(6~12)" class="formControl loginInputType" maxlength="12" id="password2" v-model="password2" />
						</div>
						<div class="clear"></div>
					</div>
				

					<div class="loginBtn btnBlue mt-70" id="signUp" @click="DoSignUp">SIGN UP</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { statistics,publicObj,$saas } from '../assets/js/base.js'
	import { Toast,MessageBox } from 'mint-ui';
	// import 'mint-ui/lib/toast/style.css';


	var vum = {
		data: () => ({
			phone:'',
			code:'',
			getCodeState:0,
			password1:'',
			password2:'',
			item:{
				name:'xiaoming',
				age:18,
			}
		}),
		created: function() {

		},
		mounted:function(){
			statistics.UserBrowsing('',4)
			statistics.DoUserBrowsing();
			// this.$router.push('./AndroidStore');
			
		},
		methods: {
			checkCodeBtn:function(ev){
				if(publicObj.checkPhone(this.phone)){
					this.getCodeState = 1;
				}else{
					this.getCodeState = 0;
				}

			},
			DoSignUp:function(){
				// this.$router.push('./AndroidStore?channelCode='+this.$route.query.channelCode)
				// this.$router.push({
				// 	name:"AndroidStore",
				// 	query: {
		  //               channelCode: this.$route.query.channelCode, 
		  //               item:this.item,
		  //           },
		  //          	params: { 
		  //           	item:this.item,
		  //           }
				// })
				this.$router.push({
					// path:'/AndroidStore',
			        name:'AndroidStore',
			        query: {
		                channelCode: this.$route.query.channelCode, 
		                item:this.item,
		            },
			        params:{
			          item:this.item
			        }
			      })
				return;
				$("#phone").removeClass('errorInput');
				$("#code").removeClass('errorInput');
				$("#password1").removeClass('errorInput');
				$("#password2").removeClass('errorInput');

				if(!publicObj.checkPhone(this.phone)){
					$("#phone").addClass('errorInput');
					return;
				}
				if(this.code==''){
					$("#code").addClass('errorInput');
					return;
				}
				if(this.password1==''){
					$("#password1").addClass('errorInput');
					return;
				}
				if(this.password1 != this.password2){
					$("#password2").addClass('errorInput');
					return;
				}
				
					var This = this;
				// publicObj.confirm('Are you sure you want to submit?',function(){
					var param = {};
					param.Phone = This.phone;
					param.Password = This.password1;
					param.Code = This.code;
					param.ip = '';
					param.channelId = window.channelId;
					param.deviceId = localStorage.getItem("DeviceId")||'';
					param.versionId = window.versionId;
					param.versionName = 'H5';
					param.channelNum = This.$route.query.channelCode;

					$saas.getJSON("/Account/Register",param,function(data){
						if(data.data){
							This.$router.push('./AndroidStore?channelCode='+This.$route.query.channelCode)
						}else{
							publicObj.alert(data.message)
						}
					})
				// })

				


			},
			DogetCode:function(){
				if(this.getCodeState ==0){
					return;
				}
				$("#phone").removeClass('errorInput');
				if(!publicObj.checkPhone(this.phone)){
					$("#phone").addClass('errorInput');
					return;
				}

				var param = {};
				param.Phone = this.phone;
				param.type = 1;
				param.channelId = window.channelId;
				param.ip = '';
				param.versionId = window.versionId;
				param.versionName = 'H5';
				
				var This = this;
				$saas.getJSON("/Common/GetVerificationCode",param,function(data){
					if(data.data==1){
						Toast({
						  message: data.message,
						  position: 'bottom',
						  duration: 3000
						});
						This.getCodeState = 0;
			    		var textNum = 60;
			    		var timer1 = setInterval(function(){
			    			var codeTime = textNum - 1;
			    			$("#getCode").text(codeTime+"s");
			    			textNum = codeTime;
			    			if(codeTime<=0){
			    				if(!$("#phone").val()==''){
			    					This.getCodeState = 1;
			    					clearInterval(timer1);
			    					$("#getCode").text('SEND');
			    				}
			    			}
			    		},1000)
					}
		    		if(!data.data){
						Toast({
						  message: data.message,
						  position: 'bottom',
						  duration: 3000
						});
						This.getCodeState = 1;
					}

		    	})
			}
		}
	}
	export default vum;
</script>

<style lang="scss" src="../assets/css/register.css" scoped>

</style>