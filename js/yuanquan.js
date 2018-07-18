var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/xunlian/icon_yuanquan.png" style="width:80px;height:80px;margin-top:-50px;"/></div>',
  footText:'圆圈聚焦训练'
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
  exHtml:'<div style="padding-top:20%;">训练过程中你的眼睛应该集中在移动的物体上</div>',
  footText:''
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"圆圈焦点"
});



var Test = {
  bind:function(){
    var _this = this;
   $('nextPage').onclick = function(){
      $('page1').style.display = 'none';
      $('page2').style.display = 'block';
     _this.init();
   }
  },
  init:function () {
  
       times = 1;
      $('moveBox').className = 'trans';
       $('timeOut').innerText = times;
     t = setInterval(this.move,12300);
  },
  move:function(){
    $('moveBox').className ='';
  setTimeout(function(){
      times++;
       $('timeOut').innerText = times;
        if(times>5){
      $('page2').style.display = 'none';
      $('page3').style.display = 'block';
    }else{
       $('moveBox').className = 'trans';
    
    }
   },300);
    
   
   
   
  }
 
}

Test.bind();