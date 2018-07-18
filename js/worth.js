var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/worth/icon_worth_explain1.png" style="width:120px;height:120px;margin-top:-75px;"/></div>',
  footText:'Worth的作用就是进行黄斑中心抑制检查'
},
{
  exHtml:'<div style="padding-top:30%;"><img src="img/worth/icon_worth_explain2.png" style="width:130px;height:130px;margin-top:-75px;"/></div>',
  footText:'请带好红蓝滤光眼镜'
},
{
  exHtml:'<img src="img/worth/icon_worth_explain3.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备屏幕之间距离30CM'
},
{
  exHtml:'<img src="img/worth/icon_worth_explain4.png" style="width:70%;height:40%;margin-top:10%;"/>',
  footText:'头摆正，眼睛正对设备屏幕'
},
{
  exHtml:'<img src="img/worth/icon_worth_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'识别看是不是只能看到蓝色点或是红色点和其他情况'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"WORTH四点"
});



var Test = {

  bind:function  () {
    var _this = this;

    $('nextPage').onclick = function(){
    $('page1').style.display = 'none';
    $('page2').style.display = 'block';
    setTimeout(function(){
   _this.flipOutLeft('page2','page3');
    },5000);

    };
    $('trueSel').onclick = function(){
      $('resultBox').style.background = '#3697de';
      $('resultImg').src='img/icon_result_xiao.png';
      $('resultText').innerText = '双眼注视正常无抑制';
        _this.flipOutRight('page3','page4');
    };
     $('falseSel1').onclick = function(){

        _this.flipOutRight('page3','page4');
    };
     $('falseSel2').onclick = function(){
        _this.flipOutRight('page3','page4');
    };
     $('falseSel3').onclick = function(){

        _this.flipOutRight('page3','page4');
    };
   
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
 }

}

Test.bind();