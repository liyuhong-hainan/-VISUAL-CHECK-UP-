var list = {
checkup:[
{
  src:'img/record/record_sejue.png',
  name:'色觉测试',
  href:'sejue.html'
},
{
  src:'img/record/record_jinshibiao.png',
  name:'视力测试',
  href:'jinshi.html'
},
{
  src:'img/record/record_sanguang.png',
  name:'散光测试',
  href:'sanguang.html'
},
{
  src:'img/record/record_zhongyangshili.png',
  name:'中央视力',
  href:'zhongyang.html'
},

 {
  src:'img/record/record_shijuejiyi.png',
  name:'视觉记忆',
  href:'jiyi.html'
},
{
  src:'img/record/record_shijuejingxi.png',
  name:'视觉精细',
  href:'jingxi.html'
},
{
  src:'img/record/record_yanqiuyundong.png',
  name:'眼球运动',
  href:'yanqiu.html'
},
{src:'img/record/record_xingzhuangchicun.png',
  name:'形状尺寸',
  href:'chicun.html'
},
{
  src:'img/record/record_yanjingshiyingdu.png',
  name:'眼睛适应度',
  href:'shiyingdu.html'
},
{
  src:'img/record/record_worth.png',
  name:'WORTH四点',
  href:'worth.html'
},
{
  src:'img/record/record_tongshishi.png',
  name:'同时视',
  href:'tongshishi.html'
},
{
  src:'img/record/record_yanyizhi.png',
  name:'眼抑制',
  href:'yanyizhi.html'
},
{
  src:'img/record/record_yanzhen.png',
  name:'视力表',
  href:'shilibiao.html'
}
],
traning:[
{
  src:'img/record/record_suiji.png',
  name:'随机移动',
  href:'suiji.html'
},
{
  src:'img/record/record_zuoyou.png',
  name:'左右移动',
  href:'zuoyou.html'
},
{
  src:'img/record/record_yuanquan.png',
  name:'圆圈聚焦',
  href:'yuanquan.html'
},
{
  src:'img/record/record_gif.png',
  name:'绚丽视觉效果',
  href:'gif.html'
}
]
};

var $ = function(id){

return document.getElementById(id);
}

var Test ={

   init:function () {
    this.checkup_list = list.checkup;
    this.traning_list = list.traning;
    this.renderDom(0);
    this.bind();
   },
   bind:function(){
    var _this = this;
    $('checkLi').onclick = function(){
      $('traningLi').className = '';
      this.className = 'cur';
      $('title').innerText = '检测详情';
      _this.renderDom(0);
    };
    $('traningLi').onclick = function(){
      $('checkLi').className = '';
      this.className = 'cur';
       $('title').innerText = '训练详情';
      _this.renderDom(1);
    };

   },
   renderDom:function(n){
    var _this = this;
     $('menus').innerHTML = '';
    if(n==0){     
       for (var i = 0; i < _this.checkup_list.length; i++) {
        var item = _this.checkup_list[i];
        var li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = '<a  href="'
        +item.href+'" class="content"><img src="'
        +item.src+'" class="left-icon" /><span>'
        +item.name+'</span><img src="img/record/unpass.png" class="right-icon" /></a>';
        $('menus').appendChild(li);
       };
    }else{
      for (var i = 0; i < _this.traning_list.length; i++) {
        var item = _this.traning_list[i];
        var li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = '<a  href="'
        +item.href+'" class="content"><img src="'
        +item.src+'" class="left-icon" /><span>'
        +item.name+'</span><span style="display:inline-block;float: right; color: #3697de;vertical-align: middle;"/>0分</span></a>';
        $('menus').appendChild(li);
       };
    }

   }

}

Test.init();