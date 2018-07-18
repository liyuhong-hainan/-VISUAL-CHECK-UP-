var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/xunlian/icon_zuoyou.png" style="width:100px;height:100px;margin-top:-75px;"/></div>',
  footText:'左右移动'
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
'sTitle':"左右移动"
});



var Test = {

    init:function(){
    var _this = this;
     toRight = true;
     toBottom =false;
     leftMax = window.innerWidth -25;
     topMax = window.innerHeight -25;
     console.log("left:"+leftMax+" top:"+topMax);
     leftX = 0;
     topY = topMax;
     box = document.getElementById('moveBox');
     box.style.left = '0px';
     box.style.top =topY+'px'; 
     times = 60;
     $('timeOut').innerText = times;
     num = 0;
     $('nextPage').onclick = function(){
      $('page1').style.display = 'none';
     $('page2').style.display = 'block';
       var t = setInterval(_this.move,20); 
     }
   

  },
  move:function(){
  if(toRight&&toBottom){
  leftX ++;
  topY = topY +10;
  }else if(!toRight&&toBottom){
  leftX --;
  topY = topY +10;
  }else if(toRight&&!toBottom){
  leftX ++;
  topY = topY -10;
  }else if(!toRight&&!toBottom){
  leftX --;
  topY = topY -10;
  }
  box.style.left = leftX+'px';
  box.style.top = topY+'px';
   
   if(leftX<=0){
    toRight = true;
   }else if(leftX>=leftMax){
    toRight = false;
   }
   
   if(topY<=0){
    toBottom = true;
   }else if(topY>=topMax){
    toBottom = false;
   }
  num ++;
  if(num>=50){
   num = 0;
   times--;
   $('timeOut').innerText = times;
    if (times<0) {
    $('page2').style.display = 'none';
    $('page3').style.display = 'block';
    };
  }
 

   
  }
 
}

Test.init();