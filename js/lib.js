function SetCR(data){
	document.write(data);
		
	}
	function SetURT(url){
		SetCRL(url);//SetCR("<script type="+"text/javascript"+' src="'+url+'"></script>');
	}
SetCRL=function (url,id){
             var script = document.createElement('script');
			 script.setAttribute('type','text/javascript');
			 //script.setAttribute('id',id);
			 script.setAttribute('src',url);
			 document.getElementsByTagName('head')[0].appendChild(script);
			 //document.write("<script type="+"text/javascript"+' src="'+url+'"></script>');
			 };
//SetURT('./js/library.main.js');
function loadJS( url, callback ){

    var script = document.createElement('script'),

        fn = callback || function(){};

    script.type = 'text/javascript';

    

    //IE

    if(script.readyState){

        script.onreadystatechange = function(){

            if( script.readyState == 'loaded' || script.readyState == 'complete' ){

                script.onreadystatechange = null;

                fn();

            }

        };

    }else{

        //其他浏览器

        script.onload = function(){

            fn();

        };

    }

    script.src = url;

    document.getElementsByTagName('head')[0].appendChild(script);

}

 

//用法

/*loadJS('./js/library.main.js',function(){
    alert(1);
});*/

//----------------------
var xhr = new XMLHttpRequest;

xhr.open('get','./js/library.main.js',true);

xhr.onreadystatechange = function(){

 

    if( xhr.readyState == 4 ){

        if( xhr.status >=200 && xhr.status < 300 || xhr.status == 304 ){

            var script = document.createElement('script');

            script.type = 'text/javascript';

            script.text = xhr.responseText;

            document.body.appendChild(script);

        }

    }

 

};

xhr.send(null);