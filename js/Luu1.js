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

//选定图片效果
var little1=document.getElementById("little1");
var little2=document.getElementById("little2");
var zhutupic=document.getElementById('zhutupic')
var left1=document.getElementById("left1");
var left2=document.getElementById("left2");
var Bimg=document.getElementById("Bimg");
little1.style.border="2px solid rgb(255,144,3)";
little1.onmouseover=function(){
	little2.style.border="none";
	little1.style.border="2px solid rgb(255,144,3)";
	zhutupic.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg"
}
little2.onmouseover=function(){
	little1.style.border="none";
	little2.style.border="2px solid rgb(255,144,3)";
	zhutupic.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
}

left1.onclick=function(){
	if(little1.style.border=="2px solid rgb(255, 144, 3)"){
		little1.style.border="none";
		little2.style.border="2px solid rgb(255, 144, 3)";
		zhutupic.src="img/pp1.jpeg";
		Bimg.src="img/pp1.jpeg"
	}
	else{
		little1.style.border="2px solid rgb(255, 144, 3)";
		little2.style.border="none";
		zhutupic.src="img/pp0.jpeg";
		Bimg.src="img/pp0.jpeg";
	}
}
left2.onclick=function(){
	if(little1.style.border=="2px solid rgb(255, 144, 3)"){
		little1.style.border="none";
		little2.style.border="2px solid rgb(255, 144, 3)";
		zhutupic.src="img/pp1.jpeg";
		Bimg.src="img/pp1.jpeg";
	}
	else{
		little1.style.border="2px solid rgb(255, 144, 3)";
		little2.style.border="none";
		zhutupic.src="img/pp0.jpeg";
		Bimg.src="img/pp0.jpeg";
	}
}


//净含量
var buy2=document.getElementById('buy2');
var buy3=document.getElementById('buy3');
var duigou1=document.getElementById('duigou1');
var duigou2=document.getElementById('duigou2');
var choiceone=document.getElementById('choiceone');
buy2.onmouseover=function(){
	buy2.style.cursor="pointer";
}
buy3.onmouseover=function(){
	buy3.style.cursor="pointer";
}
buy2.onclick=function(){
	duigou2.style.display="none";
	duigou1.style.display="block";
	buy3.style.border="none";
	buy2.style.border="1px solid red";
	choiceone.innerHTML="150ml";
}
buy3.onclick=function(){
	duigou1.style.display="none";
	duigou2.style.display="block";
	buy2.style.border="none";
	buy3.style.border="1px solid red";
	choiceone.innerHTML="200ml";
}

//选择数量
var jian=document.getElementById("jian");
var show=document.getElementById("show");
var jia=document.getElementById("jia");
show.value=1;
jian.style.cursor="pointer";
jia.style.cursor="pointer";
jian.onclick=function(){
	show.value--;
	if(show.value<=1){
		show.value=1;
		jian.style.cursor="not-allowed";
	}
	else{
		if(show.value<=5){
			jian.style.cursor="pointer";
		}
		jian.style.cursor="pointer";
	}
}
jia.onclick=function(){
	show.value++;
	if(show.value>=5){
		show.value=5;
		jia.style.cursor="not-allowed";
	}
	else{
		if(show.value>=1){
			jia.style.cursor="pointer";
		}
		jia.style.cursor="pointer";
	}
}


//购物车
var addup=document.getElementById("addup");
var continue2=document.getElementById("continue2");
var delete1=document.getElementById("delete1");
var buycar=document.getElementById("buycar");
var bgb=document.getElementById("bgb");
addup.onclick=function(){
	buycar.style.display="block";
	bgb.style.display="block";
}
continue2.onclick=function(){
	buycar.style.display="none";
	bgb.style.display="none";
}
delete1.onclick=function(){
	buycar.style.display="none";
	bgb.style.display="none";
}


//放大镜
var immg2=document.getElementById("immg2");
var immg1=document.getElementById("immg1");
var box=document.getElementById("box");
var slider1=document.getElementById("slider1");
immg1.onmouseover=function(){
	slider1.style.display="block";
	immg2.style.display="block";
}
immg1.onmouseout=function(){
	slider1.style.display="none";
	immg2.style.display="none";
}
immg1.onmousemove=function(ev){
	var ev = ev || window.event;
	var scrTop=document.documentElement.scrollTop||document.body.scrollTop;

	var oL = ev.clientX - box.offsetLeft - 25 - slider1.offsetWidth / 2;
	var oT = ev.clientY - box.offsetTop - 60 + scrTop - slider1.offsetHeight / 2;

	var oMaxw = immg1.offsetWidth - slider1.offsetWidth;
	var oMaxh = immg1.offsetHeight - slider1.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slider1.style.left = oL + 'px';
	slider1.style.top = oT + 'px';

	var scale = immg2.offsetWidth / slider1.offsetWidth;
	Bimg.style.left = -scale * oL + slider1.offsetWidth + 'px';
	Bimg.style.top = -scale * oT + slider1.offsetHeight + 'px';
}