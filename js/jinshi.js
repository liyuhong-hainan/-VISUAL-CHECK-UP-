var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/jinshi/icon_eyetable_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'视力表主要检查的是中心视力，可简单迅速的了解到视功能的初步情况'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">视力表时用于测量视力的图片,是根据视角的原理制定的.目前所有的视力表主要检查的是中心视力,即检查视网膜黄斑区中心凹视觉敏度，从而可简单迅速地了解到视功能的初步情况</div>',
  footText:''
},
{
  exHtml:'<img src="img/explain_juli.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备屏幕之间的距离30CM'
},
{
  exHtml:'<img src="img/explain_zhengdui.png" style="width:70%;height:40%;margin-top:10%;"/>',
  footText:'头摆正,视线要与1.0的一行平行'
},
{
  exHtml:'<div style="color:#fff;font-size:2em;padding-top:20%;"><strong style="font-size:2.5em;">E</strong><strong style="margin:0 30px;">></strong><strong>E</strong></div>',
  footText:'识别屏幕中出现的对象。'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"近视力表"
});


var $ = function(id){

  return document.getElementById(id);
}


var binds = {
  
  bind:function(){
    var _this = this;
    _this.isRightEye = true;
    _this.EWidth = 40;//当前e的大小
    _this.MaxEWidth = 40;//e的初始大小
    _this.idx = 0;//当前第几个e
    _this.boundary = 0.8;//e一次缩小的倍数

    $('recBtn').onclick  = function(){//点击预备按钮，初始化一些标签的属性值

      $('page2').style.display = 'none';
      $('page3').style.display = 'block';
      _this.Echange();
      _this.bindSelect();
      var items = $('Ecanvas').getElementsByClassName('E-item');
      var itemW = window.innerWidth * 0.80 * 0.48;
      for(var i=0;i<items.length;i++){
        var item = items[i];
        item.style.width = itemW+'px';
        item.style.height = itemW+'px';
        item.style.lineHeight = itemW+'px';
        item.id=i;
      }
      setTimeout(function(){
       _this.go(1);//从e字切换到选项
      },5000);
    };
    $('continueBtn').onclick = function(){//继续按钮
      var lis = $('Ecanvas').getElementsByTagName('li');
       lis[0].style.webkitTransform = 'translate3d(0,0,0)';
       lis[1].style.webkitTransform = 'translate3d('+window.innerWidth+'px,0,0)';
       $('page4').style.display = 'none';
       $('page3').style.display = 'block';
        _this.Echange();
        setTimeout(function(){
       _this.go(1);//从e字切换到选项
      },5000);
    };
  },
  go:function(n){
  var scaleW = window.innerWidth;
  var lis = $('Ecanvas').getElementsByTagName('li');

   if(n==1){
    lis[0].style.webkitTransition = '-webkit-transform 0.5s ease-out';
    lis[0].style.webkitTransform = 'translate3d(-'+scaleW+'px,0,0)';
    lis[1].style.webkitTransition = '-webkit-transform 0.5s ease-out';
    lis[1].style.webkitTransform = 'translate3d(0,0,0)';
    lis[0].style.webkitTransition='none';
    lis[0].style.webkitTransform = 'translate3d('+scaleW+'px,0,0)';
   }else{
    lis[0].style.webkitTransition = '-webkit-transform 0.5s ease-out';
    lis[0].style.webkitTransform = 'translate3d(0,0,0)';
    lis[1].style.webkitTransition = '-webkit-transform 0.5s ease-out';
    lis[1].style.webkitTransform = 'translate3d(-'+scaleW+'px,0,0)';
    lis[1].style.webkitTransition='none';
    lis[1].style.webkitTransform = 'translate3d('+scaleW+'px,0,0)';
   
   }
  },
  Echange:function(){

   var _this = this; 
   var idx = _this.idx;//第几个e
   var MaxEWidth = _this.MaxEWidth;
   var boundary = _this.boundary;
   var imgE = $('imgE');
   if(idx==0){
     _this.EWidth = MaxEWidth;

   }else{
     _this.EWidth =  _this.EWidth * boundary;

   }
   imgE.style.width = _this.EWidth  +'px';
   imgE.style.height = _this.EWidth +'px';
   _this.random = parseInt(4*Math.random());//代表e的值，0，1，2，3对应的是上右左下
   if(_this.random==0){
    imgE.src='img/jinshi/E_up.png';
   }else if(_this.random==1){
    imgE.src='img/jinshi/E_right.png';
   }else if(_this.random==2){
    imgE.src='img/jinshi/E_left.png';
   }else if(_this.random==3){
    imgE.src='img/jinshi/E_down.png';
   }
   
  },
  bindSelect:function(){
   var _this = this; 
   var items = $('Ecanvas').getElementsByClassName('E-select');
   for (var i = 0; i < items.length; i++) {
     var item = items[i];
     item.onclick = function(){
      var selectId = this.id;
      console.log("random:"+_this.random+" id:"+selectId+" idx:"+_this.idx);
      if(_this.random==selectId){
        _this.idx++;
          if(_this.idx>=10){

                  if(_this.isRightEye){
                  _this.rightResult = _this.idx;
                  console.log('右眼的分数：'+_this.rightResult);
                    $('page3').style.display = 'none';
                    $('page4').style.display = 'block';
                    _this.idx = 0;//初始化为0
                    _this.isRightEye = false;
                }else{
                    _this.leftResult = _this.idx;
                    console.log('右眼的分数：'+_this.rightResult+'左眼眼的分数：'+_this.leftResult);
                    $('page3').style.display = 'none';
                    $('page5').style.display = 'block';
                    $('rightResult').innerText = _this.rightResult *10+'%';
                    $('leftResult').innerText = _this.leftResult *10+'%';
                }

          }else{
              _this.Echange();
              _this.go(0);//从选项切换到e字
             setTimeout(function(){
             _this.go(1);//从e字切换到选项
            },5000);
         }
       
      }else{
           
          if(_this.isRightEye){
            _this.rightResult = _this.idx;
            console.log('右眼的分数：'+_this.rightResult);
              $('page3').style.display = 'none';
              $('page4').style.display = 'block';
              _this.idx = 0;//初始化为0
              _this.isRightEye = false;
          }else{
              _this.leftResult = _this.idx;
             console.log('右眼的分数：'+_this.rightResult+'左眼眼的分数：'+_this.leftResult);
              $('page3').style.display = 'none';
              $('page5').style.display = 'block';
              $('rightResult').innerText = _this.rightResult *10+'%';
              $('leftResult').innerText = _this.leftResult *10+'%';
          }
      }
     }
   };
  }
}
binds.bind();