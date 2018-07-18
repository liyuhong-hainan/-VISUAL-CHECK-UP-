var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/yanqiu/icon_eyemove_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'本测试主要反映双眼的追随及手眼脑协调运动能力'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">眼球的正常运动为双侧眼球的联合运动,受大脑与脑干的联合运动中枢调节,在上述通路出现损害时出现双眼不能向上、向下、向旁转动,称为凝视麻痹;如果双眼不能向旁转动,即一侧眼球内直肌瘫痪,对侧外直肌瘫痪.</div>',
  footText:''
},

{
  exHtml:'<img src="img/yanqiu/icon_eyemove_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'拖动白色圆形按钮,将蓝色方块按钮移至两块灰色方块正中'
},
{
  exHtml:'<img src="img/explain_juli.png" style="width:70%;height:50%;margin-top:10%;"/>',
  footText:'眼睛和设备之间保持一定的距离'
},
{
  exHtml:'',
  footText:'点击开始测试，准备开始！'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"眼球运动"
});

function boxMove(){

this.init();
this.move();

}

var boxMove ={
  init:function(){
     leftX = 0;
     topY = 0;
     toRight = true;
     toBottom =true;
     leftMax = window.innerWidth * 0.94 - 125;
     topMax = window.innerHeight * 0.65 - 40;
     console.log("left:"+leftMax+" top:"+topMax);
     box = document.getElementById('moveBox');
     var t = setInterval(this.move,20);
    
  },
  move:function(){
  if(toRight&&toBottom){
  leftX++;
  topY++;
  }else if(!toRight&&toBottom){
  leftX--;
  topY++;
  }else if(toRight&&!toBottom){
  leftX++;
  topY--;
  }else if(!toRight&&!toBottom){
  leftX--;
  topY--;
  }
  box.style.left = leftX+'px';
  box.style.top = topY+'px';
   
   if(leftX<=0){
    toRight = true;
   }else if(leftX>=leftMax){
    toRight = false;
   }
   
   if(topY<=0){
    toBottom = true;
   }else if(topY>=topMax){
    toBottom = false;
   }

  },
  bind:function(){
  var _this = this;
  _this.positionX = 0;
  var maxMoveX = window.innerWidth * 0.94 - 25;
  var mod = document.getElementById('proMod');
  var blueLine = document.getElementById('blueLine');
  var blueBlock = document.getElementById('blueBlock');
  var boundary = 50/maxMoveX;
  
    var startHandler = function(evt){

      _this.startX = evt.touches[0].pageX;
     
    };

    var moveHandler = function(evt){
      evt.preventDefault();
      _this.offsetX =  evt.touches[0].pageX - _this.startX;
      if(_this.offsetX+_this.positionX<=0){
        _this.offsetX=0, _this.positionX = 0;
      }else if(_this.offsetX+_this.positionX>=maxMoveX){
          _this.offsetX=0, _this.positionX = maxMoveX;
      }
      mod.style.left =(_this.offsetX+_this.positionX)+'px';
      blueLine.style.width = (_this.offsetX+_this.positionX)+'px';
      blueBlock.style.left =(_this.offsetX+_this.positionX) * boundary +'px';

    };

    var endHandler = function(evt){
     _this.positionX = _this.positionX  + _this.offsetX;
    };

   mod.addEventListener('touchstart',startHandler);
   mod.addEventListener('touchmove',moveHandler);
   mod.addEventListener('touchend',endHandler);  
  

    var postSure = document.getElementById('postSure');
   postSure.onclick = function(evt){
   var distance = blueBlock.style.left;
   if(distance.length==0){
    distance = 0;
   }else{
    distance = distance.substring(0,distance.length-2);
   }


   
    if(22<=distance&&distance<=28){
      document.getElementById('resultBox').style.background = "#3697de";
      document.getElementById('resultImg').src="img/icon_result_xiao.png";
      document.getElementById('resultText').innerText="您的眼球运动正常！";
    }
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "block";
 

    }
    
  }


 
}
boxMove.init();
boxMove.bind();
