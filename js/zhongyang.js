var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/zhongyang/icon_zhongyang_explain1.png" style="width:100px;height:100px;margin-top:-50px;"/></div>',
  footText:'测定人眼的中心视野区域'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">本测试是测定人眼的中心视野区域的，随着人年纪的增大，人眼可能出现的黄斑变性问题会损坏视网膜，进而导致失明，本测试时用来测定这类问题的。这是导致50岁以上成年人失明损伤的一个主要原因</div>',
  footText:''
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
  exHtml:'<img src="img/zhongyang/icon_zhongyang_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'识别是不是有些直线成波浪形'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"中央视力"
});


var Test = {

 bind:function () {
  var _this = this;
  _this.isLeft = true;//是左眼测试
  _this.leftResult=0;
  _this.rightResult = 0;
  _this.testTh = 1;//第几个测试
  $('recBtn').onclick = function(){
    $('page2').style.display = 'none';
    $('page3').style.display = 'block';
    _this.drawLine();
    setTimeout(function(){
   _this.flipOutLeft('page3','page4');
    },5000);
  };
  $('trueSel').onclick = function(){
    if(_this.isLeft){
      _this.leftResult++;
    }else{
      _this.rightResult++; 
    }
     console.log("_this.testTh:"+_this.testTh);  
        _this.drawLine();
       _this.flipOutRight('page4','page3');
       _this.testTh++;
     
       if(_this.testTh==3){
         _this.flipOutRight('page4','page6');
       }
      console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);
      if(_this.testTh>4){
          if(_this.leftResult>=2){
        $('leftResultBox').style.background = '#3697de';
        $('leftResultImg').src='img/icon_result_xiao.png';
        $('leftResultText').innerText = '您的左眼测试正常！';
       }
        if(_this.rightResult>=2){
        $('rightResultBox').style.background = '#3697de';
        $('rightResultImg').src='img/icon_result_xiao.png';
        $('rightResultText').innerText = '您的右眼测试正常！';
       }
         _this.flipOutRight('page4','page9');

      }else{

        setTimeout(function(){
       _this.flipOutLeft('page3','page4');   
       },5000);


      }
    

  };
  $('falseSel1').onclick = function(){
     console.log("_this.testTh:"+_this.testTh);  
        _this.drawLine();
       _this.flipOutRight('page4','page3');
       _this.testTh++;
     
       if(_this.testTh==3){
         _this.flipOutRight('page4','page6');
       }
      console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);
      if(_this.testTh>4){
          if(_this.leftResult>=2){
        $('leftResultBox').style.background = '#3697de';
        $('leftResultImg').src='img/icon_result_xiao.png';
        $('leftResultText').innerText = '您的左眼测试正常！';
       }
        if(_this.rightResult>=2){
        $('rightResultBox').style.background = '#3697de';
        $('rightResultImg').src='img/icon_result_xiao.png';
        $('rightResultText').innerText = '您的右眼测试正常！';
       }
         _this.flipOutRight('page4','page9');

      }else{

        setTimeout(function(){
       _this.flipOutLeft('page3','page4');   
       },5000);


      }

  };
   $('falseSel2').onclick = function(){
     console.log("_this.testTh:"+_this.testTh);  
        _this.drawLine();
       _this.flipOutRight('page4','page3');
       _this.testTh++;
     
       if(_this.testTh==3){
         _this.flipOutRight('page4','page6');
       }
      console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);
      if(_this.testTh>4){
          if(_this.leftResult>=2){
        $('leftResultBox').style.background = '#3697de';
        $('leftResultImg').src='img/icon_result_xiao.png';
        $('leftResultText').innerText = '您的左眼测试正常！';
       }
        if(_this.rightResult>=2){
        $('rightResultBox').style.background = '#3697de';
        $('rightResultImg').src='img/icon_result_xiao.png';
        $('rightResultText').innerText = '您的右眼测试正常！';
       }
         _this.flipOutRight('page4','page9');

      }else{

        setTimeout(function(){
       _this.flipOutLeft('page3','page4');   
       },5000);


      }

  };
   $('falseSel3').onclick = function(){
     console.log("_this.testTh:"+_this.testTh);  
        _this.drawLine();
       _this.flipOutRight('page4','page3');
       _this.testTh++;
     
       if(_this.testTh==3){
         _this.flipOutRight('page4','page6');
       }
      console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);
      if(_this.testTh>4){
          if(_this.leftResult>=2){
        $('leftResultBox').style.background = '#3697de';
        $('leftResultImg').src='img/icon_result_xiao.png';
        $('leftResultText').innerText = '您的左眼测试正常！';
       }
        if(_this.rightResult>=2){
        $('rightResultBox').style.background = '#3697de';
        $('rightResultImg').src='img/icon_result_xiao.png';
        $('rightResultText').innerText = '您的右眼测试正常！';
       }
         _this.flipOutRight('page4','page9');

      }else{

        setTimeout(function(){
       _this.flipOutLeft('page3','page4');   
       },5000);


      }

  };
  $('continueBtn').onclick = function(){
    _this.isLeft = false;//开始右眼测试
   _this.flipOutRight('page6','page3'); 
     setTimeout(function(){
       _this.flipOutLeft('page3','page4');   
       },7000);
  }
 },
 flipOutLeft:function(curPge,nextPage){
  $(curPge).className = 'test-page pt-page page-cur page-flipOutLeft';
   setTimeout(function(){
        $(curPge).className = 'test-page pt-page page-flipOutLeft';
        $(nextPage).className = 'test-page pt-page page-cur page-flipInRight ';
      },500);
 },
  flipOutRight:function(curPge,nextPage){
  $(curPge).className = 'test-page pt-page page-cur page-flipOutRight';
   setTimeout(function(){
        $(curPge).className = 'test-page pt-page page-flipOutRight';
        $(nextPage).className = 'test-page pt-page page-cur page-flipInLeft ';
      },500);
 },
 drawLine:function(){
     var scaleW = window.innerWidth,
        innerH = window.innerHeight,
        myCanvas = $('myCanvas'),
        boundary = 20,
        XLineN = parseInt(scaleW/boundary)+2,
        YLineN  = parseInt(innerH/boundary)+2,
        nPositionX = parseInt(XLineN/2-1) * boundary,
        nPositionY = parseInt(YLineN/2-1) * boundary;
        var canvasBg = "#fff",
        lineColor = "#333";
    var random = parseInt(4*Math.random());//代表e的值，0，1，2，3对应的是上右左下
   if(random==0){
   canvasBg = "#fff";
   lineColor = "#333";
   }else if(random==1){
    canvasBg = "#000";
   lineColor = "red";
   }else if(random==2){
    canvasBg = "#000";
   lineColor = "yellow";
   }else if(random==3){
    canvasBg = "#000";
    lineColor = "#fff";
   }
   
   myCanvas.style.background = canvasBg;     
   console.log("XLineN:"+XLineN+" YLineN:"+YLineN);
   for(var i=0;i<=XLineN;i++){
      var div = document.createElement('div');
  div.style.cssText = 'position:absolute;width:1px;height:'+innerH+'px;top:0px;left:'+boundary*i+'px;background:'+lineColor+';';
  myCanvas.appendChild(div);
   }
   for(var i=0;i<=YLineN;i++){
      var div = document.createElement('div');
  div.style.cssText = 'position:absolute;width:'+scaleW+'px;height:1px;top:'+boundary*i+'px;left:1px;background:'+lineColor+';';
  myCanvas.appendChild(div);
   }
  var nod = document.createElement('div');
  nod.style.cssText = 'position:absolute;z-index:1005;left:'+(nPositionX-5)+'px;top:'+(nPositionY-5)+'px;width:10px;height:10px;background:'
  +lineColor+';border-radius:100%;-webkit-border-radius:100%;';
   myCanvas.appendChild(nod);
 }


}
Test.bind();
