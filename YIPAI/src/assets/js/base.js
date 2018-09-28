import Vue from 'vue'
import { Indicator,Button,MessageBox  } from 'mint-ui';
// import 'mint-ui/lib/indicator/style.css';
import 'mint-ui/lib/style.css'; 
Vue.component(Indicator,Button.default, Button);


const statistics = {
    DoUserBrowsing:function(){
        $('[get-cp]').each(function(){
            if($(this)[0].tagName!='INPUT'){
                $(this).on("click",function(){
                    statistics.UserBrowsing(this,1)
                })
            }else{
                $(this).on("focus",function(){
                    statistics.UserBrowsing(this,2)
                })
                $(this).on("blur",function(){
                    statistics.UserBrowsing(this,3)
                })
            }
            
            
        })
    },
    UserBrowsing:function (id,type){//渠道统计
        // console.log( publicObj.GetQueryString("channelCode"))
        // console.log( localStorage.getItem("DeviceId"))
        // console.log( publicObj.GetQueryTitle() )
        var param ={};
        param.channelNum = publicObj.GetQueryString("channelCode") || '';
        param.deviceId = localStorage.getItem("DeviceId") || '',
        param.title = publicObj.GetQueryTitle() || '';
        param.inputId = $(id).attr("get-cp") || '';
        param.eventType = type;
        $saas.getJSON("/Account/UserBrowsing",param,function(data){

        })

    }
}


const publicObj ={
    confirm:function(text,fn){
        MessageBox({
          title: 'System Information',
          message: text,
          showCancelButton: true,
          cancelButtonText:'Cancel',
          confirmButtonText:'Confirm',
        }).then(function(a){
            if(a=='confirm'){
                fn?fn():'';
            }
        });
    },
    alert:function(text,fn){
        MessageBox({
          title: 'System Information',
          message: text,
          showCancelButton: false,
          confirmButtonText:'Confirm',
        }).then(function(a){
            if(a=='confirm'){
                fn?fn():'';
            }
        });
    },
    newGuid:function (){
        var guid = "";
        for (var i = 1; i <= 32; i++){
            var n = Math.floor(Math.random()*16.0).toString(16);
            guid +=   n;
            if((i==8)||(i==12)||(i==16)||(i==20))
                guid += "-";
        }
        return guid;    
    },
    checkPhone:function(phone){
         var PH = /^\d{11}$/;  //中国地区
        // var PH = /^[0][9]\d{9}$/  //菲律宾地区
        return PH.test(phone);
    },
    GetQueryString:function(name) {
        // console.log(window.location)
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },
    GetQueryTitle:function() {
        var str = window.location.href;
        str = str.substring(str.lastIndexOf("/") + 1);
        str = str.substring(0, str.lastIndexOf("?")) || str;
        return str;
    },
    accMul:function(arg1,arg2){  //乘法解决计算精度不准确
      var m=0,s1=arg1.toString(),s2=arg2.toString();  
      try{m+=s1.split(".")[1].length}catch(e){}  
      try{m+=s2.split(".")[1].length}catch(e){}  
      return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)  
    },
    checkPC:function(fn1,fn2){
        //测试环境
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $("html").addClass("textNOneSelect");
            if(fn1){
                fn1();
            }
        } else {
            if(fn2){
                fn2();
            }
        }
        
        //上线环境
        // var system = {};
        // var p = navigator.platform;
        // var u = navigator.userAgent;
        // system.win = p.indexOf("Win") == 0;
        // system.mac = p.indexOf("Mac") == 0;
        // system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
     //     if (system.win || system.mac || system.xll) {//如果是PC转
        //     if (u.indexOf('Windows Phone') > -1) {  //win手机端
        //       if(fn2){
        //          fn2();
        //      }

        //     }else {
        //       if(fn2){
        //          fn2();
        //      }
        //     }
        // }else{
        //  if(fn1){
        //      fn1();
        //     }
        // }

    },
	setCookie:function (name,value){
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        // document.cookie = name + "="+ escape (value);
    },
    setCookie_noTime:function (name,value){
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        // document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        document.cookie = name + "="+ escape (value);
    },
    getCookie:function(cname) {  
        var name = cname + "=";  
        var ca = document.cookie.split(';');  
        for(var i=0; i<ca.length; i++) {  
            var c = ca[i];  
            while (c.charAt(0)==' ') c = c.substring(1);  
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);  
        }  
        return "";  
    } ,
    clearCookie:function (name) {    
        this.setCookie(name, "", -1);    
    },
    clearAllCookie:function() {  
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
        if(keys) {  
            for(var i = keys.length; i--;)  
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
        }  
    }
}
const $saas = {
	getJSON:(url, postData, successFunc, errorFunc, cache, async)=> {
            $.ajax({
                type: "get",
                timeout : 30000,
                url:url,
    //             headers:{
				// 	"accessToken":publicObj.getCookie("accessToken")||'',
				// },
                contentType: "application/json; charset=utf8",
                dataType: "json",
                data: postData,
                success: function(result) {
                    successFunc(result);
                },
    
                beforeSend: function () {
                    //layer.load();
                },
                complete: function () {
                    //var index = layer.load(2, { time: 10 * 1000 }); //又换了种风格，并且设定最长等待10秒 
                    //关闭
                    //layer.close(index);    
                },
                error: errorFunc || function() {
                    console && console.log("出错啦");
                }
            });
    },
    postJSON:(url, postData, successFunc, errorFunc , async,beforeSend)=> {
            $.ajax({
                type: "post",
                timeout : 30000,
                url: url,
                data: postData,
                async: async == undefined ? true : async,
                beforeSend: beforeSend,
                success: function(result) {
                    successFunc()
                },
                beforeSend: function () {
                    //layer.load();
                },
                complete: function () {
                     
                },
                error: function() {
                    $saas.ajax.isPreventRequest = false;
                    alert("数据请求失败，请重试。");
                }
            });
    },
    getJSONLoading:(url, postData, successFunc, errorFunc, cache, async)=> {
        Indicator.open()
            $.ajax({
                type: "get",
                timeout : 30000,
                url:url,
                // headers:{
                //     "accessToken":publicObj.getCookie("accessToken")||'',
                // },
                contentType: "application/json; charset=utf8",
                dataType: "json",
                data: postData,
                cache: cache == undefined ? false : cache,
                async: async == undefined ? true : async,
                success: function(result) {
                    successFunc(result);
                    Indicator.close()
                },
    
                beforeSend: function () {
                    //layer.load();
                },
                complete: function (XMLHttpRequest,status) {
                    if(status=='timeout'){
                        setTimeout(function(){
                            Indicator.close();
                        },500)
                    }
                    if(status=='error'){
                        setTimeout(function(){
                            Indicator.close();
                        },500)
                    }    
                },
                error: errorFunc || function() {
                    Indicator.close()
                    console && console.log("出错啦");
                }
            });
    }
}

export {
    $saas,//ajax
    publicObj,//公共方法
    statistics,//统计
}
