<template>
	<div style="padding:10px 0px 0px 0px">
		<!-- <ul>
			<li style="width:50px;">
				<input type="checkBox">
			</li>
			<li>
				<a href="#">2</a>
			</li>
			<li>
				<a href="#">3</a>
			</li>
			<li>
				<a href="#">4</a>
			</li>
			<li>
				<a href="#">5</a>
			</li>
			<li>
				<a href="#">6</a>
			</li>
			<li>
				<a href="#">7</a>
			</li>
			<li>
				<a href="#">8</a>
			</li>
			<li>
				<a href="#">9</a>
			</li>
			<li>
				<a href="#">10</a>
			</li>
			<li>
				<a href="#">11</a>
			</li>
			<li>
				<a href="#">12</a>
			</li>
			<li>
				<a href="#">13</a>
			</li>
			<li>
				<a href="#">14</a>
			</li>
			<li>
				<a href="#">15</a>
			</li>
		</ul> -->
		<div style="text-align: left;cursor:pointer;
		padding: 10px;">
			<router-link tag="li" to="/Goods">
              <a>返回</a>
            </router-link>
			
		</div>
		<table style="width:99%;margin:0px auto;" border="0" cellspacing="0" cellpadding="0">
			<thead>
				<tr>
					<th><input type="checkBox" :checked="checkAllFlag" @click="toggleCheckAll"></th>
					<th>ITEMS</th>
					<th>PRICE</th>
					<th>QUANTITY</th>
					<th>SUBTOTAL</th>
					<th>EDIT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in cartList">
					<td>
						<input type="checkBox" :checked="item.checked==1" @click="editCart(3,item)">
					</td>
					<td>
						<img :src="item.img" alt="" style="width:60px;height:60px;vertical-align: top;">
						<span style="display: inline-block;line-height: 60px;height:60px;vertical-align: top;">{{item.name}}</span>
						
					</td>
					<td>{{item.money| fmoney(2)}} </td>
					<td>
						<span class="quantity_minus" @click="editCart(1,item)"><div>-</div></span>
						<input class="quantity" :value="item.productNum" />
						<span class="quantity_add" @click="editCart(2,item)"><div>+</div></span>
					</td>
					<td>{{item.productNum*item.money}}</td>
					<td>
						<a style="cursor: pointer;" @click="DoCartDel(item)">remove</a>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="totalPrice">
			{{totalPrice |currency('$',2)}}元
		</div>
	</div>
</template>

<script>
	import { $axios } from '../assets/js/axios.js'
	import { publicObj } from '../assets/js/base.js'
	import { currency } from '../utils/currency.js'

	export default {
		created: function() {
			this.getCartList()
			console.log(localStorage.getItem("id2"))
		},
		data: () => ({
			cartList:[],
			// checkAllFlag:false,
		}),
		computed:{
			checkAllFlag(){
				// console.log(this.checkedCount)
				// console.log(this.cartList.length)
				return this.checkedCount == this.cartList.length;
			},
			checkedCount(){
				let i = 0;
				this.cartList.forEach((item)=>{
					if(item.checked=='1'){
						i++;
					}
				})
				return i;
			},
			totalPrice(){
				let money = 0;
				this.cartList.forEach((item)=>{
					if(item.checked=='1'){
						money += parseFloat(item.money)*parseInt(item.productNum);
					}
				})
				return money;
			}
		},
		watch:{
			
		},
		filters:{
			currency:currency,
		},
		components: {

		},
		methods: {
			getCartList() {
				let param = {};
				$axios.get('./users/cartList', param).then((res)=>{
					if(res.data.status==0){
						this.cartList = res.data.result.cartList;
					}
				})
			},
			DoCartDel(item){
				publicObj.confirm("是否删除",()=>{
					let param = {};
					param.productId = item.productId;
					$axios.post('./users/cartDel', param).then((res)=>{
						if(res.data.status==0){
							this.getCartList();
							publicObj.alert("删除成功");
						}
					})
				})
				
			},
			editCart(state,item){
				if(state==1){
					item.productNum<=1?item.productNum==1:item.productNum--;
				}
				if(state==2){
					item.productNum++;
				}
				if(state==3){
					item.checked==1?item.checked =0:item.checked =1;
				}

				let param = {};
				param.productId = item.productId;
				param.productNum = item.productNum;
				param.checked = item.checked;
				$axios.post('./users/cartEdit', param).then((res)=>{

				})
			},
			toggleCheckAll(){
				var checkAllFlag = !this.checkAllFlag;
				this.cartList.forEach((item)=>{
					item.checked = checkAllFlag;
				})
				let param = {};
				param.checkAll = checkAllFlag?1:0;
				$axios.post('./users/editCheckAll', param).then((res)=>{

				})
			}

		}
	}
</script>
<!-- <style lang="scss" scoped>
    
</style> -->
<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}
	
	ul {
		width: 98%;
		height: auto;
		margin: 50px auto;
	}
	
	ul li {
		list-style: none;
		text-align: center;
		background-color: #efefef;
		float: left;
		border: 1px solid #999;
		margin: 0 0 -1px -1px;
		position: relative;
		z-index: 0;
	}
	table{border-collapse:collapse;border:none;}
	table tr th, table tr td { border:1px solid #ccc; }
	td,th{
		padding:10px 5px;
	}
	.quantity{
		display: inline-block;
		width:50px;
		height:18px;
		line-height: 18px;
		text-align: center;
	}
	.quantity_minus{
		display: inline-block;
		width:20px;
		height:20px;
		border:1px solid #b2b2b2;
		border-right:0px solid #b2b2b2;;
		line-height: 20px;
		cursor: pointer;
		-webkit-user-select:none;
	   -moz-user-select:none;
	   -ms-user-select:none;
	   user-select:none;
	}
	.quantity_add{
		display: inline-block;
		width:20px;
		height:20px;
		border:1px solid #b2b2b2;
		border-left:0px solid #b2b2b2;;
		line-height: 20px;
		cursor: pointer;
		-webkit-user-select:none;
	   -moz-user-select:none;
	   -ms-user-select:none;
	   user-select:none;
	}
	.totalPrice{
		text-align: right;
		padding:20px;
		color:red;
	}
</style>