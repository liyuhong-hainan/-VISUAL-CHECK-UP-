var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/jingxi/icon_jingxi_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'视觉精细辨别是测试人的眼睛对物体微差的辨别能力'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">本测试是在限定的时间内,找出正确的文字.通过此测定看人眼是否有辨别物体形态、大小、颜色、方位等细微差别的能力.</div>',
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
  exHtml:'<img src="img/jingxi/icon_jingxi_explain5.png" style="width:60%;height:50%;margin-top:10%;"/>',
  footText:'在很多"由"字中辨别出"田"字'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"视觉精细"
});

var testList = [
{
  let:'由',
  resu:'田'
},
{
  let:'王',
  resu:'玉'
},
{
  let:'大',
  resu:'犬'
},
{
  let:'不',
  resu:'下'
}
];


var Test = {
 
  bind:function  () {
    var _this = this;
     idx = 0;//第几个测试
     sTime = 10;//从10秒倒计时
     score = 0;//得分
    $('nextPage').onclick = function(){
      $('page1').style.display = 'none';
      $('page2').style.display = 'block';
      $('mainBox').style.height = window.innerHeight - 120  + 'px';
         _this.render();
    };
 
  },
  render:function(){

    var _this = this,
       list =testList ,
       item = testList[idx],
       wrap = $('mainBox'),
       scaleH = window.innerHeight,
       aLineHeigth = (scaleH - 120)/10,
       random = parseInt(80*Math.random());

   for(var i=0;i<80;i++){
      
    var a  = document.createElement('a');
    a.style.lineHeight = aLineHeigth+'px';
      if(i==random){
        a.innerText = item.resu;
      }else{
      a.innerText = item.let;
      } 
    a.onclick = function(){
      this.style.border = '1px solid red';
      var text = this.innerText;
      if(text==item.resu){
         score++;
         $('fadeBox').innerText = '恭喜您，答对了！';
         $('fadeBox').style.display = 'block';
         setTimeout("$('fadeBox').style.display='none'", 1000);
      }else{
         $('fadeBox').innerText = '很遗憾，答错了！';
         $('fadeBox').style.display = 'block';
         setTimeout("$('fadeBox').style.display='none'", 1000);
      }
      setTimeout( _this.go, 1000);
       
    }
    wrap.appendChild(a);
   }
    $('timeOut').innerHTML = '倒计时<span style="color:red" id="tempTime">'+sTime+'</span>';
    $('mod').innerText = item.resu;
    t = setInterval(this.timeOut,1000);

  },
  timeOut:function(){
   

   if(sTime>0){
    sTime--;
    $('tempTime').innerText = sTime;
   }else{
      Test.go();
   }
   
  
  },
  go:function(){


     clearInterval(t);
     idx ++;
     console.log("idx:"+idx+" testList.length:"+testList.length+" score:"+score);
     if(idx<testList.length){
       sTime =10;
      $('mainBox').innerHTML = '';
      Test.render();
      }else{
      $('page2').style.display = 'none';
      $('page3').style.display = 'block';
          if(score>=3){
            $('resultBox').style.background = "#3697de";
            $('resultImg').src="img/icon_result_xiao.png";
            $('resultText').innerText="您的测试结果正常！";
          }
      }

  }

}

Test.bind();
