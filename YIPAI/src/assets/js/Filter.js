import Vue from 'vue'
import { publicObj, $saas } from './base.js'
Vue.filter('formatfullDate', function (value) {
	var formattime = value;
    if(formattime == null || formattime == ''||formattime < 0) {
	        return ""
	    }
	    function  timestampToTime(timestamp) {      
	        var  date =  new  Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	        let Y = date.getFullYear();   
	        let M = (date.getMonth() + 1 < 10 ?  '0' + (date.getMonth() + 1) : date.getMonth() + 1) +  '/';        
	        let D = date.getDate() < 10 ? '0' +  date.getDate() + '/':  date.getDate() + '/';        
	        let h = date.getHours() +  ':';        
	        let m = date.getMinutes() +  ':';        
	        let s = date.getSeconds();        
	        // return M + D + Y + h + m + s; 
	        return M + D + Y ;    
	    }

        //时间戳转到完整时间（配合上面的方法使用）
        var date = new Date();
        return timestampToTime(formattime);
});
Vue.filter('fmoney', function (value, n) {
	var s= value;
	var n= n;
	s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = s.split('.') [0].split('').reverse(),
        r = s.split('.') [1];
    var t = '';
    for (var i = 0; i < l.length; i++){
          t += l[i] + ( (i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '' );
    }
    if(r != undefined){
        return t.split('').reverse().join('') + '.' + r;
    }else{
        return t.split('').reverse().join('');
    }
});
Vue.filter('toPercent', function (value) {
	// return Math.ceil(publicObj.accMul(parseFloat(value),100) )
	return publicObj.accMul(parseFloat(value),100) + '%';
});
