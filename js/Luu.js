//顶部悬浮相对于浏览器是固定定位，其实是通过滚动距离进行判断，滚动事件onscroll,一般给window整个绑定，scroll是距离顶端滚动的距离


//顶端悬浮效果
window.onload=function(){
	var core=document.getElementsByClassName('core')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			core.style.position='fixed';
		}
		else{
			core.style.position='static';
		}
	}
}


function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}


var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left=document.getElementById('left');
var right=document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick=next;
left.onclick=prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);


//充值话费
var select=document.getElementById("select");
var p=document.getElementById("p");
select.onchange=function(){
	p.innerHTML="￥"+""+select.value;
}

//上下滚动效果
var middle=document.getElementById('middle');
var Moving=true;
var time=setInterval(function(){
	if(!Moving){
		return;
	}
	var now=parseInt(getStyle(middle,'top'));
	middle.style.top=now-1+"px";
	if(now===-370){
		middle.style.top="0px";
	}
},20);
middle.onmouseover=function(){
	Moving=false;
}
middle.onmouseout=function(){
	Moving=true;
}

//右侧固定LAN
var fixone=document.getElementById('fixone');
fixone.onmouseover=function(){
	fixone.style.right="0px";
}
fixone.onmouseout=function(){
	fixone.style.right="-70px"
}

var fixtwo=document.getElementById('fixtwo');
fixtwo.onmouseover=function(){
	fixtwo.style.right="0px";
}
fixtwo.onmouseout=function(){
	fixtwo.style.right="-90px";
}

var fixthree=document.getElementById('fixthree');
var serwei=document.getElementById('serwei');
fixthree.onmouseover=function(){
	fixthree.style.right="0px";
	serwei.src="img"+"/"+"erwei.png";
	serwei.style.top="50px";
}
fixthree.onmouseout=function(){
	fixthree.style.right="-90px";
	serwei.src="img"+"/"+"serwei.png";
	serwei.style.top="110px";
}

var fixfour=document.getElementById('fixfour');
fixfour.onmouseover=function(){
	fixfour.style.right="0px";
}
fixfour.onmouseout=function(){
	fixfour.style.right="-83px";
}

//选定图片效果
var little1=document.getElementById("little1");
var little2=document.getElementById("little2");
var zhutupic=document.getElementById('zhutupic')
little1.onclick=function(){
	little2.style.border="";
	little1.style.border="2px solid rgb(255,144,3)";
	zhutupic.img="img/pp0.jpeg";
}
little2.onclick=function(){
	little1.style.border="";
	little2.style.border="2px solid rgb(255,144,3)";
	zhutupic.img="img/pp1.jpeg";
}