
import lazyLoading from './lazyLoading'
export default (routers,data) => {
  //这里之所以要重新遍历一下，是因为，通常我们动态路由的时候，是获取服务端数据，这个component属性是一个字符串，或者可能连字段名都是其他的key
  //所以这里要做一些转换
  generaMenu(routers,data)
}
// function generaMenu(routers,data){
//   var arr = []
//   for (var i in data) {
//       arr.push(data[i]); //属性
//       //arr.push(object[i]); //值
//   }
// // console.log(arr);
//   // console.log(data)
//   // console.log(typeof(arr))
//   arr.forEach((item)=>{
//     let menu = Object.assign({},item)
//     menu.component = lazyLoading(menu.component)
//     if(!item.leaf){
//       menu.children = []
//       generaMenu(menu.children,item.children)
//     }
//     routers.push(menu)
//     // console.log(routers)
//   })
// }
function generaMenu(routers,data){
  for(var i in data){
    data[i].component = lazyLoading(data[i].component);
    if (data[i].children) {
        generaMenu(data[i].children,data[i].children)
    }
    routers.push(data[i]);
  }
  // routers.push({path:'/Home',component:((name) => () => import('@/views/'+name+'.vue'))("Home")}) 
}