var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/sejue/icon_color_explain1.png" style="width:120px;height:120px;margin-top:-75px;"/></div>',
  footText:'发现人眼存在的红色弱、绿色弱、蓝色弱或者是色盲'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">该测试用来测定人眼是否存在红绿蓝色弱问题的，色盲是一个普遍存在于人眼的问题，共有8%的男性和0.5%的女性不得不忍受各种类型色盲的折磨。</div>',
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
  exHtml:'<img src="img/sejue/icon_color_explain5.png" style="width:60%;height:50%;margin-top:10%;"/>',
  footText:'识别有些方向上的线条是否模糊'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"色觉测试"
});
var test_list = [
{
  img:'img/sejue/test_1.jpg',
  text:'1.您在图中看到是什么数字?',
  btns:[86,26,28,'没有'],
  answer:26
},
{
  img:'img/sejue/test_2.jpg',
  text:'2.您在图中看到是什么数字?',
  btns:[826,268,628,'没有'],
  answer:628
},
{
  img:'img/sejue/test_3.jpg',
  text:'3.您在图中看到是什么动物?',
  btns:['海鱼','燕子','恐龙','没有'],
  answer:'燕子'
},
{
  img:'img/sejue/test_4.jpg',
  text:'4.您在图中看到是什么动物?',
  btns:['羊','牛','鹿','没有'],
  answer:'牛'
},
{
  img:'img/sejue/test_5.jpg',
  text:'5.这是一种什么样的动物？',
  btns:['羊','蚊子','蝴蝶','没有'],
  answer:'蝴蝶'
},
{
  img:'img/sejue/test_6.jpg',
  text:'6.这是一种什么样的动物？',
  btns:['蜻蜓','蝎子','蝴蝶','没有'],
  answer:'蜻蜓'
},
{
  img:'img/sejue/test_7.png',
  text:'7.这是两个什么样的图形?',
  btns:['A与O','三角形与圆形','五角星与方形','没有'],
  answer:'三角形与圆形'
},
{
  img:'img/sejue/test_8.png',
  text:'8.两个什么组合?',
  btns:['梨与29','草莓与28','苹果与29','没有'],
  answer:'苹果与29'
},
{
  img:'img/sejue/test_9.jpg',
  text:'9.这是什么字母?',
  btns:['FLAT','PEACE','91473','没有'],
  answer:'PEACE'
},
{
  img:'img/sejue/test_10.jpg',
  text:'10.您在图中看到了什么？',
  btns:['蛇','猫','鹅','没有'],
  answer:'鹅'
},
]


function Test(opts){
   this.test_list = opts.test_list;
   this.idx = 0 ;//第一张
   this.score = 0;//分数
   this.renderDom();
  
}

Test.prototype.renderDom = function() {
    var self = this;
    var test_list = self.test_list;
    var idx = self.idx;
    var item = test_list[idx];
    self.answer = item.answer;

    document.getElementById('testImg').src=item.img;
    if(idx==0){
    document.getElementById('testImg').style.width = (window.innerWidth *0.7)+ 'px';
    document.getElementById('testImg').style.height = (window.innerWidth * 0.5)+'px';
    }

    document.getElementById('testQuestion').innerText = item.text;

    var btns = document.getElementById('testBtn').getElementsByTagName('button');

    for (var i = 0; i < 4; i++) {
        var btn = btns[i];
        btn.innerText = item.btns[i];
        btn.onclick = function(){
          self.nextTest(this.innerText);
        }
    };

};

Test.prototype.nextTest = function(answer) {
    if(answer==this.answer){
      this.score++; 
    }
    
    this.idx++;
    if(this.idx>=10){
      document.getElementById('page2').style.display="none";
      document.getElementById('page3').style.display="block";
      var scorePercent = this.score * 10+'%';
      document.getElementById('score').innerText = scorePercent;
      if(this.score>7){
      document.getElementById('resultBox').style.background = "#3697de";
      document.getElementById('resultImg').src="img/icon_result_xiao.png";
    }
    }else{
     this.renderDom();


    }
    
};

new Test({
  test_list:test_list
});