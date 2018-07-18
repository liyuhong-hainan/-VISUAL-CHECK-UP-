var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/chicun/icon_chicun_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'本测试是看视觉对形状尺寸的感知'
},
{
  exHtml:'<div style="text-align:left;padding:0px 10px;">形状是闭合线条产生的结果.形觉的产生,首先,取决于视网膜对光的感觉,其次,是视网膜能识别出由两个或者多个分开的不同空间的刺激,通过视觉中枢的总和和分析,形成完整的形觉.对形状尺寸的感知是人类生存、学习的重要视功能.</div>',
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
  exHtml:'<img src="img/chicun/icon_chicun_explain5.png" style="width:60%;height:50%;margin-top:10%;"/>',
  footText:'长按方向按钮把右边图形调节至与左边图形一致'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"形状尺寸"
});



var Test = {

  bind:function () {
    var _this = this;
    _this.score = 0;//得分
    _this.testNth = 1;//第几个测试
    _this.standarW = 80;
    _this.standarH  = 150;
     activeInitW = 40;
     activeInitH = 80;
     var t = null;
    var leftStartHandler = function(evt){
        evt.preventDefault();
        _this.leftTimeOutEvent = setTimeout(function(){
        t = setInterval(function(){
         activeInitW--;
        console.log("activeInitW:"+activeInitW);
         if(activeInitW>0){
          $('active').style.width = activeInitW+'px'; 
         }
        },100);
        },500);
    };
    var leftEndHandler = function(evt){
        clearTimeout(_this.leftTimeOutEvent);
        if(t!=null){
           clearInterval(t);
        }
       
    };
    
     $('toLeft').addEventListener('touchstart',leftStartHandler);
     $('toLeft').addEventListener('touchend',leftEndHandler);

       var rightStartHandler = function(evt){
        evt.preventDefault();
        _this.rightTimeOutEvent = setTimeout(function(){
        t = setInterval(function(){
         activeInitW++;
        console.log("activeInitW:"+activeInitW);
          $('active').style.width = activeInitW+'px'; 
        },100);
        },500);
    };
    var rightEndHandler = function(evt){
        clearTimeout(_this.rightTimeOutEvent);
        if(t!=null){
           clearInterval(t);
        }
       
    };
    
     $('toRight').addEventListener('touchstart',rightStartHandler);
     $('toRight').addEventListener('touchend',rightEndHandler);

         var upStartHandler = function(evt){
        evt.preventDefault();
        _this.upTimeOutEvent = setTimeout(function(){
        t = setInterval(function(){
          if(activeInitH>0){
           activeInitH--;
           console.log("activeInitH:"+activeInitH);
          $('active').style.height = activeInitH+'px';   
          }
       
        },100);
        },500);
    };
    var upEndHandler = function(evt){
        clearTimeout(_this.upTimeOutEvent);
        if(t!=null){
           clearInterval(t);
        }
       
    };
    
     $('toUp').addEventListener('touchstart',upStartHandler);
     $('toUp').addEventListener('touchend',upEndHandler);

      var downStartHandler = function(evt){
        evt.preventDefault();
        _this.downTimeOutEvent = setTimeout(function(){
        t = setInterval(function(){
           activeInitH++;
           console.log("activeInitH:"+activeInitH);
          $('active').style.height = activeInitH+'px';   
      
        },100);
        },500);
    };
    var downEndHandler = function(evt){
        clearTimeout(_this.downTimeOutEvent);
        if(t!=null){
           clearInterval(t);
        }
       
    };
    
     $('toDown').addEventListener('touchstart',downStartHandler);
     $('toDown').addEventListener('touchend',downEndHandler);


    $('doSure').onclick = function(){

      $('btnBox1').style.display = 'none';
      $('btnBox2').style.display = 'block';
      
      var div = document.createElement('div');
      div.id="tempMod";
      div.style.cssText = 'position: absolute;left: 60%;top: 20%;width:'+_this.standarW+'px;height:'+_this.standarH +'px;border: 3px solid red;';
      if(_this.testNth==2){
      div.className = 'radius';
      }
      $('page2').appendChild(div);
      
      var absX = Math.abs(_this.standarW-activeInitW);
      var absY = Math.abs(_this.standarH-activeInitH); 
      console.log("x:"+absX+" y:"+absY);

      if(absX<=10&&absY<=10){
         _this.score++;
         $('fadeBox').innerText = '恭喜您，过关了！';
         $('fadeBox').style.display = 'block';
         setTimeout("$('fadeBox').style.display='none'", 1000);
      }else{
         $('fadeBox').innerText = '很遗憾，没过关！';
         $('fadeBox').style.display = 'block';
         setTimeout("$('fadeBox').style.display='none'", 1000);
      }
    };
    $('nextTest').onclick = function(){
       _this.testNth++;
       console.log("_this.score："+_this.score);
       if(_this.testNth>2){
        $('page2').style.display = 'none';
        $('page3').style.display = 'block';
        if(_this.score>=2){
            $('resultBox').style.background = "#3697de";
            $('resultImg').src="img/icon_result_xiao.png";
            $('resultText').innerText="您的测试结果正常！"
        }
       }else{
          $('btnBox2').style.display = 'none';
          $('btnBox1').style.display = 'block';

          var my = $('tempMod');
          my.parentNode.removeChild(my);
         activeInitW = 40;
         activeInitH = 80;
         $('active').style.width = activeInitW +'px';
         $('active').style.height = activeInitH +'px';
         $('standar').className = 'radius';
         $('active').className = 'radius';
    }
  

  
    };
       
   }

  }

Test.bind();