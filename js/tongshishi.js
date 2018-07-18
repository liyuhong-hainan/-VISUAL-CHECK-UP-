var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/tongshishi/icon_tongshishi_explain1.png" style="width:130px;height:130px;margin-top:-75px;"/></div>',
  footText:'同时视检测时测试你的双眼是否能够同时注视'
},
{
  exHtml:'<img src="img/tongshishi/icon_tongshishi_explain2.png" style="width:50%;height:60%;margin-top:10%;"/>',
  footText:'请戴好红蓝滤光眼镜'

},
{
  exHtml:'<img src="img/explain_juli.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备屏幕之间距离'
},
{
  exHtml:'<img src="img/explain_zhengdui.png" style="width:70%;height:40%;margin-top:10%;"/>',
  footText:'头摆正，眼睛正对设备屏幕'
},
{
  exHtml:'<img src="img/tongshishi/icon_tongshishi_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'将红色十字拖入蓝色菱形框内'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"同时视"
});



var Test = {

  init:function(){
   this.scaleW = window.innerWidth;
   this.scaleH  = window.innerHeight;
   this.standarX = 0.4 * this.scaleW;
   this.standarY = 0.1 * this.scaleH;
   $('standarBox').style.left =  this.standarX+'px';
   $('standarBox').style.top =  this.standarY+'px';
   $('moveBox').style.left = 0.6 * this.scaleW +'px';
   $('moveBox').style.top = 0.4 * this.scaleH +'px';
     this.tempLeft  = 0.6 * this.scaleW;
     this.tempTop =0.4 * this.scaleH;
  },
  bind:function () {
    var _this = this;


  var testTtart = function  (evt) {

    var tempLeft = $('moveBox').style.left;
     var tempTop =$('moveBox').style.top;
     _this.initX = tempLeft.substring(0,tempLeft.length-2);
     _this.initY = tempTop.substring(0,tempTop.length-2);
     _this.startX = evt.touches[0].pageX;
     _this.startY = evt.touches[0].pageY;
     _this.offsetX = 0;
     _this.offsetY = 0;

   }
   var testMove = function(evt){
     evt.preventDefault();
    _this.offsetX = evt.touches[0].pageX - _this.startX;
    _this.offsetY = evt.touches[0].pageY - _this.startY;
    _this.tempLeft = parseInt(_this.initX) + _this.offsetX ;
    _this.tempTop = parseInt(_this.initY) + _this.offsetY;
     $('moveBox').style.left = _this.tempLeft+'px';
     $('moveBox').style.top = _this.tempTop +'px';

  }
   $('moveBox').addEventListener('touchstart',testTtart);
   $('moveBox').addEventListener('touchmove',testMove);


   $('postSure').onclick = function(){
       
       var recX = _this.standarX - _this.tempLeft;
       var recY = _this.standarY - _this.tempTop;

       console.log("recX:"+recX+" recY:"+recY);
       if(11< recX && recX <16){
        if(11< recY && recY <16){
          $('resultBox').style.background = "#3697de";
          $('resultImg').src="img/icon_result_xiao.png";
          $('resultText').innerText="您的测试正常！"
        }
       
      }
      $('page2').style.display = 'none';
      $('page3').style.display = 'block';
   }

  }

}

Test.init();
Test.bind();