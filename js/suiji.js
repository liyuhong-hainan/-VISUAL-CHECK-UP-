var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/xunlian/icon_suiji.png" style="width:100px;height:100px;margin-top:-75px;"/></div>',
  footText:'随机移动'
},
{
  exHtml:'<img src="img/explain_juli.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备之间保持一定的距离'
},
{
  exHtml:'<img src="img/explain_zhengdui.png" style="width:70%;height:40%;margin-top:10%;"/>',
  footText:'头摆正，眼睛正对设备屏幕'
},
{
  exHtml:'<div style="padding-top:20%;">训练过程中眼睛跟随物体移动</div>',
  footText:''
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"随机移动"
});



var Test = {

   init:function () {
     
     scaleW = window.innerWidth -30;
     scaleH = window.innerHeight * 0.5 -30 ;

     times = 30;
     $('timeOut').innerText = times;
     t = setInterval(this.move,2000);
     isTop = 1;
   },
   move:function(){
    times--;
    if(times<0){
     $('page2').style.display = 'none';
     $('page3').style.display = 'block';
    }
     $('timeOut').innerText = times;
    var leftX =  parseInt(scaleW * Math.random());
    if(leftX<30){
      leftX = 30;
    }
     var topY = 30;
    if(isTop==1){

    topY =  parseInt(scaleH * Math.random())+ scaleH;
    isTop = 0;
       if(topY<30){
        topY =30;
      }
    }else{

    topY =  parseInt(scaleH * Math.random());
    isTop = 1;
    }
    
   
   var op = 100;
   var t1 = setInterval(function(){
      op = op - 10;
      if(op>0){
        $('moveBox').style.opacity = op / 100;
      }else{
        clearInterval(t1);
        setTimeout(function(){
       $('moveBox').style.left = leftX +'px';
        $('moveBox').style.top = topY +'px';
        },1000);
      }
   },100);
//console.log('leftX:'+leftX+' topY:'+topY);
  

   }
 
}

Test.init();