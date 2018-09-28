<template>
  <div id="Goods">
        <div class="goods_screening">
            <router-link tag="li" to="/Carts">
              <a>进入购物车</a>
            </router-link>
            <div @click="DoSelect('0-0')">All</div>
            <div @click="DoSelect('0-1000')">0-1000</div>
            <div @click="DoSelect('1000-2000')">1000-2000</div>
            <div @click="DoSelect('2000-5000')">2000-5000</div>
            <div @click="DoSelect('5000-10000')">5000-10000</div>
            <div @click="Dosort(1)">升序</div>
            <div @click="Dosort(-1)">降序</div>
        </div>
        <div>
            <div class="goods_mian">
                <div class="goods_main_card pr" v-for="(item,index) in goodList">
                    <img v-lazy="item.img" alt="" width="100%" height="100%">
                    <div class="goods_main_card_text">
                        <div>{{item.money}}元</div>
                        <div>{{item.name}}</div>
                        <div @click="AddShopping(item.productId)" :class="{redText:item.productId!=null}">{{item.productId}}(点击加入购物车)</div>
                    </div>
                    
                </div>
            </div>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                <div v-show="loadingShow">
                    加载中...
                </div>
              
            </div>
        </div>
    

  </div>
</template>
<script>
  import {$axios} from '../assets/js/axios.js'
  import {publicObj} from '../assets/js/base.js'
  export default {
    created:function(){
        this.getGood();
    },
    data: () => ({
        goodList:[],
        page:1,
        pageSize:10,
        sort:1,
        busy:true,
        loadingShow:false,
        startMoney:0,
        endMoney:0,
    }),
    methods:{
        getGood:function(flag){
            let param = {};
            param.page = this.page,
            param.pageSize = this.pageSize;
            param.sort = this.sort;
            param.startMoney = this.startMoney;
            param.endMoney = this.endMoney;
            var This = this;
            this.loadingShow= true;
            $axios.get('./good',param).then((res)=>{
                // console.log(res.data.list)
                if(res.data.status==0){
                    this.loadingShow= false;
                    if(flag){
                        this.goodList = this.goodList.concat(res.data.result.list);
                        if(res.data.result.count==0){
                            this.busy = true; 
                       }else{
                            this.busy = false; 
                       }
                    }else{
                        this.busy = false;
                        this.goodList = res.data.result.list;
                    }
                   
                }else{
                  this.goodList = [];  
                }
            })
        },
        Dosort:function(sort){
            this.sort = sort;
            this.page = 1;
            this.goodList = []; 
            this.getGood(true);
        },
        DoSelect:function(money){
            this.page = 1;
            this.goodList = []; 
            this.startMoney = money.split('-')[0];
            this.endMoney = money.split('-')[1];
            this.getGood(true);
        },
        loadMore:function(){
            this.busy = true;
            setTimeout(() => {
                this.page++;
                this.getGood(true);
            }, 500);

        },
        AddShopping:function(id){
            let param = {};
            param.productId = id;
            param.userId = publicObj.getCookie("userId");
            $axios.post('./good/addCart',param).then((res)=>{
                if(res.data.status==0){
                    publicObj.confirm("加入成功(是否进入购物车)",()=>{
                        localStorage.setItem("id2",res.data.status)
                        this.$router.push({ path: '/Carts' });
                    });
                }else{
                    publicObj.alert(res.data.msg);
                }
            })
        }
    }
  }



</script>

<style lang="scss" src="../assets/css/goods.css" scoped>

  
</style>
<style>
    .redText{
        color:red;
    }
    
</style>
