<template>
	<div class="footer">
		<div class="middleBox">
			<ul class="footer_nav">
				<li class="pl0">
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#Service">Our Service</a></li>
				</li>
				<li>
					<a href="#HowToLoan">How to loan?</a></li>
				</li>
				<li class="lastList">
					<a href="#AboutUs">About Us</a></li>
				</li>
				<div class="clear"></div>
			</ul>
			<div class="message">
				<div class="message_box">
					<div class="message_box_car">
						<div class="message_box_car_ico mail"></div>
						<a href="mailto:info@lalapeso.com" title=""><div class="message_box_car_text">lalapesoph@gmail.com</div></a>
					</div>
					<!-- <div class="message_box_car">
						<div class="message_box_car_ico number"></div>
						<div class="message_box_car_text">6327796540</div>
					</div> -->
					<div class="message_box_car">
						<div class="message_box_car_ico facebook"></div>
						<a href="https://www.facebook.com/lalapeso" target="_blank"><div class="message_box_car_text">lalapeso</div></a>
					</div>
					<div class="message_box_car">
						<div class="message_box_car_ico twitter"></div>
						<a href="https://twitter.com/lalapesoph" target="_blank"><div class="message_box_car_text">lalapesoph{{message}}</div></a>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Bus from './Bus'
 export default {
    created:function(){
    	this.sendMessage()
    },
    props: ['message'],
    data () {
        return {
            msg: 'the message is from componentA'
        }
    },
    methods:{
        sendMessage () {
            // 假设知道组件 B 有个方法叫做 inceptMessage(接收数据的方法)
            // 组件 A对组件 B 说 我要通过 Bus 这个传话员给你传话了,你先告诉我
            // 这么理解,当组件 A 通过 Bus 传话员去触发inceptMessage这个方法的时候,组件 B 是可以感应到组件 A 调用了这个方法的
            Bus.$emit('inceptMessage', this.msg)
            // Bus 通过触发组件 B 的inceptMessage方法将 msg 发送过去了,这个时候组件 B 还不知道组件 A 给它发送了一条数据
        }
    }
  }



</script>

<style src="../assets/css/footer.css" scoped>
/*@import '../assets/css/footer.css';*/
</style>