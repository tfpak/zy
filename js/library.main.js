//library.main.js
 function library(){
  function Chineselibrary(name, age, sex,Obj) {
      var Student = new Object();
	  var htmlObj=Obj;
        Student.log=function(text){
		   console.log(text);
		 };//英文命令调试
		 
		Student.调试=htmlObj.调试;//中文命令调试
		Student._GET=htmlObj.获取网址参数;
		Student.获取网址参数=htmlObj.获取网址参数;
		Student.Sethtml=htmlObj.设置网页元素;
		Student.设置网页元素=htmlObj.设置网页元素;
		Student.iframe=htmlObj.插入框架;
		Student.插入框架=htmlObj.插入框架;
		Student.插入元素=htmlObj.插入元素;
		Student.插入元素=htmlObj.插入元素;
		Student.SetCR=htmlObj.插入;
		Student.插入=htmlObj.插入;
	  return Student;     
	}
	var player=Chineselibrary('','','',htmllibrary())
	player.log('测试');
	player.调试('调试');
	return player;
}

  function htmllibrary(){
	var htmlObj = new Object();
	    htmlObj.调试=function(text){
		   console.log(text);
		};
		htmlObj.获取网址参数=function(name_,isurl_){
		   //console.log(name_);
		   htmlObj.调试(name_);
		   var get=_GET(name_,isurl_);
		   function _GET(name,isurl) { 
             isurl=isurl || false;
	             var word="(^|&)" + name + "=([^&]*)(&|$)";
	             if(isurl){word="(^|&)" + name + "=(.*?)$";}	
	             var reg = new RegExp(word, "i");
                 var r = window.location.search.substr(1).match(reg);
                 if (r !== null) {
                     return decodeURI(r[2]);
                 };
                 return "";
            }
            return get;		
		};//获取网址参数
		htmlObj.设置网页元素=function (id,html_value,type){
			var myElement = ""

			if(type !== undefined){//type !== "" || type !== null || type !== undefined
				//console.log("type 不空 no"+"-"+type)
				if(type == "jQ"){
					myElement = document.getElementById(id);
					myElement.innerHTML = html_value;
				}
				if(type == "ja"){
					$(document).ready(function() {
				    myElement = $("#"+id);
					myElement.html(html_value);
					});
				}
			}else{
				myElement = document.getElementById(id);
				myElement.innerHTML = html_value;
				//console.log("type 空 is"+"-"+type)
			}
		};//设置网页元素
		htmlObj.插入框架=function(id,name,iframe_id,src) {
			var bo=document.getElementById(id).innerHTML  = '<iframe name="'+是否为空(name,'zzapi')+'" id="'+iframe_id+'" src="'+ src +'" scrolling="0" frameborder="0" width="100%" height="100%" allowfullscreen="allowfullscreen"  mozallowfullscreen="mozallowfullscreen"  msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
			//document.getElementById(iframe_id).neme='none'
			//name="'+是否为空(name,'zzapi')+'"
		};//插入框架
		htmlObj.插入元素=function 插入元素(bq,bada){
         var body=document.getElementsByTagName(bq)[0].innerHTML+=bada;//'<input type="button" name="" id="" value="点我" />';
         };//根据标签插入元素
		 htmlObj.插入=function 插入(bada){
			 document.write(bada)
		 //document.write("<script type="+"text/javascript"+' src="'+url+'"></script>');
		 };//插入元素
	return htmlObj; 
  }
是否为空(undefined,"rt");
是否为空('',"rt");
是否为空("","rt");
是否为空("uyy","rt");
console.log(是否为空(null,"rt"));

    function 是否为空(name,iframe_id) {
		
		var pl=undefined;
		console.log("name  no"+name)
	    if(name !== undefined){
			pl=name;
			console.log("name 不空 no"+"-"+name+"  pl"+pl)
			
		}else{pl=iframe_id;console.log("name 空 no"+"-"+name+"  pl"+pl)}
		return pl;
    }
	
	
	
	
	//---------------
	var 入口=library();
入口.log('ggg');
function load(){
    入口.SetCR('<!DOCTYPE html><html lang="zh-cmn-Hans"></html>')
	//入口.插入元素('head','');
	
	入口.插入元素('html','<head></head>');
	
    入口.插入元素('head','<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
	入口.插入元素('head','<meta http-equiv="X-UA-Compatible" content="IE=edge">');
	入口.插入元素('head','<meta name="renderer" content="webkit"> ');
	入口.插入元素('head','<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0 ,maximum-scale=1.0, user-scalable=no">');
	入口.插入元素('head','<meta name="x5-fullscreen" content="true"><meta name="x5-page-mode" content="app"> ');
	入口.插入元素('head','<meta name="full-screen" content="yes"><meta name="browsermode" content="application"> ');
	入口.插入元素('head','<meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> ');
	入口.插入元素('head','<title></title>');
	
	入口.插入元素('head','<style type="text/css">html,body{background-color:#000;padding: 0;margin: 0;height:100%;width:100%;color:#999;overflow:hidden;} #player{position: absolute;left:0px;top:0px;z-index: 999;height:100% !important;width:100% !important;}</style>');
var src=入口._GET("uy");//Base64.decode(_GET("url"));
//document.getElementById('player').innerHTML  = '<iframe name="zzapi" id="zzapi" src="'+ src +'" scrolling="0" frameborder="0" width="100%" height="100%" allowfullscreen="allowfullscreen"  mozallowfullscreen="mozallowfullscreen"  msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
    入口.插入元素('body','<C'+'h'+'i'+'n'+'e'+'s'+'e class="fixed"></'+'C'+'h'+'i'+'ne'+'se'+'>');
	//入口.插入元素('html','<body></body>');
	入口.插入元素('C'+'h'+'i'+'n'+'e'+'s'+'e','<div class="fixed"></div><div id="player"></div>');
	//入口.插入元素('body','');
入口.iframe('player','zzapi',"zzapi",src);

}
load();