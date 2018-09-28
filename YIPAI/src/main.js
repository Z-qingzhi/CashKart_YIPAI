import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/base.css'
// import './assets/js/jquery-2.2.0.js'
import $ from 'jquery'
import './assets/js/flexible.js'
import './assets/js/Directive.js'
import './assets/js/Filter.js'
import { publicObj } from './assets/js/base.js'

import MenuUtils from '@/utils/MenuUtils'


import VueRouter from 'vue-router'
import routes from './router.js'

import infiniteScroll from 'vue-infinite-scroll'
import VueLazyLoad from 'vue-lazyload'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad,{
	loading:  require('./assets/images/loading-bar.svg'),
})
// Vue.use(VueMaterial)
// 
if(window.localStorage){
	localStorage.setItem("DeviceId", publicObj.newGuid());
}

const router = new VueRouter({
  // mode: 'history',
  routes
})

let data = JSON.parse(window.sessionStorage.getItem('user'))
if (data){
  //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
  let routes = []
  MenuUtils(routes,data)
  router.addRoutes(routes)
  window.sessionStorage.removeItem('isLoadNodes')
}
router.beforeEach((route, redirect, next) => {
  let data = JSON.parse(window.sessionStorage.getItem('user'))
  if(data&&route.path === '/login'){
    //这里不使用router进行跳转，是因为，跳转到登录页面的时候，是需要重新登录，获取数据的，这个时候，会再次向router实例里面add路由规则，
    //而next()跳转过去之后，没有刷新页面，之前的规则还是存在的，但是使用location的话，可以刷新页面，当刷新页面的时候，整个app会重新加载
    //而我们在刷新之前已经把sessionStorage里的user移除了，所以上面的添加路由也不行执行
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('isLoadNodes')
    window.location.href = '/'
    return false
  }
  if (!data && route.path !== '/login') {
    next({ path: '/login' })
  } else {
    if (route.path) {
      next()
    } else {
      next({ path: '/nofound' })
    }
  }
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.versionId = '1.0.3';//版本号

publicObj.checkPC(function(){
	window.channelId = 1;
},function(){
	window.channelId = 2;
})