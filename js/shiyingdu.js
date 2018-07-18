var list = [
{
  exHtml:'<img src="img/shiyingdu/icon_shiyingdu_explain1.png" style="width:60%;height:40%;margin-top:10%;"/>',
  footText:'检查你的眼镜是否符合你的视力'
},
{
  exHtml:'<img src="img/shiyingdu/icon_shiyingdu_explain2.png" style="width:50%;height:70%;margin-top:10%;"/>',
  footText:'带上你的眼镜'
},
{
  exHtml:'<img src="img/explain_juli.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备之间保持一定的距离'
},
{
  exHtml:'<img src="img/shiyingdu/icon_shiyingdu_explain4.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'头摆正，眼睛正对设备屏幕'
},
{
  exHtml:'<img src="img/shiyingdu/icon_shiyingdu_explain5.png" style="width:60%;height:50%;margin-top:10%;"/>',
  footText:'辨别你在哪种颜色下看到的更清晰或者模糊'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"眼睛适应度"
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
      switch(_this.testTh)
      {
      case 1:
       _this.flipOutRight('page4','page5');
       _this.testTh++;
       setTimeout(function(){
       _this.flipOutLeft('page5','page4');   
       },5000);
      break;
      case 2:
         _this.flipOutRight('page4','page6');
          _this.testTh++;
      break;
      case 3:   
      _this.flipOutRight('page4','page8');
       _this.testTh++;
       setTimeout(function(){
       _this.flipOutLeft('page8','page4');
       },5000);
      break;
      case 4:
       console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);

        if((_this.rightResult+_this.leftResult)>=4){
        $('resultBox').style.background = '#3697de';
        $('resultImg').src='img/icon_result_xiao.png';
        $('resultText').innerText = '您的眼睛与眼镜适应度良好！！';
       }
       _this.flipOutRight('page4','page9');
      break;
   
  }

  };
  $('falseSel1').onclick = function(){

     _this.falseSel();
  };
    $('falseSel2').onclick = function(){

     _this.falseSel();
  };
    $('falseSel3').onclick = function(){

     _this.falseSel();
  };
    $('falseSel4').onclick = function(){

     _this.falseSel();
  };
  $('continueBtn').onclick = function(){
    _this.isLeft = false;//开始右眼测试
   _this.flipOutLeft('page6','page7'); 
       setTimeout(function(){
   _this.flipOutRight('page7','page4');
    },5000);
  }
 },
 falseSel:function(){
   var _this = this;
       console.log("_this.testTh:"+_this.testTh);
      switch(_this.testTh)
      {
      case 1:
       _this.flipOutRight('page4','page5');
       _this.testTh++;
       setTimeout(function(){
       _this.flipOutLeft('page5','page4');   
       },5000);
      break;
      case 2:
         _this.flipOutRight('page4','page6');
          _this.testTh++;
      break;
      case 3:   
      _this.flipOutRight('page4','page8');
       _this.testTh++;
       setTimeout(function(){
       _this.flipOutLeft('page8','page4');
       },5000);
      break;
      case 4:
      console.log("leftResult:"+ _this.leftResult+" rightResult:"+_this.rightResult);
      if((_this.leftResult+_this.rightResult)>=4){
        $('resultBox').style.background = '#3697de';
        $('resultImg').src='img/icon_result_xiao.png';
        $('resultText').innerText = '您的眼睛与眼镜适应度良好！';
       }
      
       _this.flipOutRight('page4','page9');
       
      break;
   
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


}
Test.bind();