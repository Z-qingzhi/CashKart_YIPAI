<template>
	<div class="banner">
		<div class="advertising advertising_bg" id="Home">
			<div class="header_box">
				<div class="header_box_lg">
					<img src="../assets/images/logo.png">
					<p class="CashKartTitle">CashKart</p>
				</div>
				<div class="header_box_List">
					
				</div>
			</div>

			<div class="header_advertising_box">
				<div class="header_advertising_left"><img src="../assets/images/advertising_phone.png" alt=""></div>
				<div class="header_advertising_right">
					<div class="header_advertising_right_lg">
						<img src="../assets/images/logo.png">
						<p class="header_advertising_right_CashKartText">CashKart</p>
					</div>
					<p class="header_advertising_right_text1"></p>
					<p class="header_advertising_right_text2">SLOGAN: A new way for financial services</p>
					<p class="header_advertising_right_text3">5 minute application</p>
					<p class="header_advertising_right_text4">Get funds in less than 24 hours</p>
					<a href="https://play.google.com/store/apps/details?id=com.yipai.mvparms.lalapeso" target="_black">
						<div class="googleStore" get-cp="googleStore"></div>
					</a>
				</div>
				<div class="clear"></div>
			</div>

		</div>
	</div>
</template>

<script>

	import { statistics} from '../assets/js/base.js'

	var vum = {
		data: () => ({
			userList: "",
			state: 0,
			Btnstate: 0,
		}),
		mounted:function(){
			statistics.DoUserBrowsing();
			console.log(this.$route.query.channelCode)
			console.log(this.$route.query.item)
			console.log(this.$route.params.item)
		},
		methods: {
			Dosild(e) {

			}
		}
	}
	export default vum;
</script>

<style lang="scss" src="../assets/css/androidStore.css" scoped>

</style>