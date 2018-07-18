var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/sanguang/icon_sanguang_explain1.png" style="width:100px;height:100px;margin-top:-50px;"/></div>',
  footText:'测定人眼是否存在屈光不正的问题'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">本测试是测定人眼是否存在屈光不正的问题。父母们对此项测试尤为感兴趣，因为这项测试能帮助他们及早发现孩子眼睛存在的问题，从而避免隐藏产生的阅读障碍或者是注意力难以集中以及弱视的进一步发展</div>',
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
  exHtml:'<img src="img/sanguang/icon_sanguang_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'识别有些方向上的线条是否模糊'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"散光测试"
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
      break;
   
  }

  };
  $('falseSel').onclick = function(){

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
       
      break;
   
    }

  };
  $('continueBtn').onclick = function(){
    _this.isLeft = false;//开始右眼测试
   _this.flipOutLeft('page6','page7'); 
       setTimeout(function(){
   _this.flipOutRight('page7','page4');
    },5000);
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