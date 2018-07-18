var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/jiyi/icon_jiyi_explain1.png" style="width:130px;height:130px;margin-top:-75px;"/></div>',
  footText:'本测试是视觉记忆视觉器官感知过的事物在人脑中的再次反映'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">视觉记忆是视觉器官感知过的事物在人脑中的再次反映。识别和记住事物特点及联系，大脑积极组织连接收到的不连续不断的视觉输入，而对这些信息的记忆的能力是人类社会认知力的重要组成部分</div>',
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
  exHtml:'<img src="img/jiyi/icon_jiyi_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:' 把您记下的顺序排列出来'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"视觉记忆"
});



var fruitList = [
{
  left:0,
  url:'img/jiyi/test_fruit1.png'
},
{
  left:0.25,
  url:'img/jiyi/test_fruit2.png'
},
{
  left:0.5,
  url:'img/jiyi/test_fruit3.png'
},
{
  left:0.75,
  url:'img/jiyi/test_fruit4.png'
},
{
  left:0,
  url:'img/jiyi/test_fruit5.png'
},
{
  left:0.25,
  url:'img/jiyi/test_fruit6.png'
},
{
  left:0.5,
  url:'img/jiyi/test_fruit7.png'
},
{
  left:0.75,
  url:'img/jiyi/test_fruit8.png'
}
];

var Test= {

  init:function  () {
      
      this.testTh = 1;//第几个测试
      this.guan = 1;//第几关
      this.initTime = 5;//从5秒开始计时
      this.scaleW = window.innerWidth;
      this.scaleH = window.innerHeight;
      this.fruitList = fruitList;
      this.boundary = 40;//临界值
  },
  bind:function(){
    var _this = this;
    $('beginBtn').onclick = function(){
      $('page1').style.display = 'none';
      _this.nextPage(2)
    };
    $('postSure').onclick = function(){
      var score = 0;
      var reslutArray = _this.reslutArray;
      var scoreArray = _this.scoreArray;
      if(scoreArray.length<reslutArray.length){ 
         $('fadeBox').innerText = '请水果拖动到 ？中去！';
         $('fadeBox').style.display = 'block';
         setTimeout("$('fadeBox').style.display='none'", 1000);
         return ;
      }else{ 

         for (var i = 0; i < scoreArray.length; i++) {
         console.log("score:"+scoreArray[i]+" reslut:"+reslutArray[i]);
          if(scoreArray[i]==-1){
           $('fadeBox').innerText = '请继续水果拖动到 ？中去！';
           $('fadeBox').style.display = 'block';
           setTimeout("$('fadeBox').style.display='none'", 1000);
           return ;
           }else if(scoreArray[i]==reslutArray[i]){
               score++;
           }

          };

          if(score==reslutArray.length){
             _this.guan++;
             if(_this.guan>3){
              $('page3').style.display = 'none';
              $('resultBox').style.background = "#3697de";
              $('resultImg').src="img/icon_result_xiao.png";
              $('resultText').innerText="您的记忆测试正常！"
               _this.nextPage(4);
            }else{
               _this.testTh++;
               if(_this.testTh>6){
               $('page3').style.display = 'none';
               _this.nextPage(4);
               }else{
                $('page3').style.display = 'none';
               _this.nextPage(2);
            }
            }
           
          
          }else{
             _this.testTh++;
            if(_this.testTh>6){
            $('page3').style.display = 'none';
            _this.nextPage(4);
            }else{
             $('page3').style.display = 'none';
            _this.nextPage(2);
            }
          }
       
   

      }
     
    }
  },
  nextPage:function(n){

    if(n==2){
     $('page2').style.display = 'block';
     $('testTh').innerText = this.testTh;
     this.imgRender(); 
    }else if(n==3){
     $('page3').style.display = 'block';
     this.selectBoxRender();
    }else if(n==4){
    $('page4').style.display ='block';
    }

  },
  imgRender:function(){
   $('selectImg').innerHTML = '';
   if(this.guan==1){
     var random1 = parseInt(8*Math.random())+1;
      var random2 = parseInt(8*Math.random())+1;
      while(random1==random2){
          random2 = parseInt(8*Math.random())+1; 
      }
      console.log("random1:"+random1+" random2:"+random2);
      this.reslutArray = [random1,random2];//答案数组
      $('selectImg').innerHTML = '<img src="img/jiyi/test_fruit'+random1+'.png"/><img src="img/jiyi/test_fruit'+random2+'.png"/>';

 
   }else if(this.guan==2){
      var random1 = parseInt(8*Math.random())+1;
      var random2 = parseInt(8*Math.random())+1;
      while(random1==random2){
          random2 = parseInt(8*Math.random())+1; 
      }
      
      var random3 = parseInt(8*Math.random())+1;
      while(random3==random2||random3==random1){
          random3 = parseInt(8*Math.random())+1; 
      }
      console.log("random1:"+random1+" random2:"+random2+" random3:"+random3);
      this.reslutArray = [random1,random2,random3];//答案数组
      $('selectImg').innerHTML = '<img src="img/jiyi/test_fruit'+random1+'.png"/><img src="img/jiyi/test_fruit'+random2+'.png"/><img src="img/jiyi/test_fruit'+random3+'.png"/>';

   }else if(this.guan==3){
      var random1 = 1,random2=3,random3 = 5,random4 = 7;
      var random = parseInt(3*Math.random());
      if(random==0){
        random1 = 1;
        random2=3;
        random3 = 5;
        random4 = 7;
      }else if(random==1){
        random1 = 2;
        random2=4;
        random3 = 6;
        random4 = 8;
      }else if(random==2){
       random1 = 2;
       random2=3;
       random3 = 5;
       random4 = 6;
      }
     console.log("random1:"+random1+" random2:"+random2+" random3:"+random3+" random4:"+random4);
      this.reslutArray = [random1,random2,random3,random4];//答案数组
      $('selectImg').innerHTML = '<img src="img/jiyi/test_fruit'+random1+'.png"/><img src="img/jiyi/test_fruit'+random2+'.png"/><img src="img/jiyi/test_fruit'+random3+'.png"/><img src="img/jiyi/test_fruit'+random4+'.png"/>';

   }

    this.timeOut();

  },
  timeOut:function(){
   var initTime = this.initTime;
     $('timeOut').innerText  = initTime;
    var t = setInterval(function(){
    if(initTime>0){
        initTime--;
        $('timeOut').innerText = initTime;
    }else{
      clearInterval(t);
      $('page2').style.display = 'none';
      Test.nextPage(3);
    }

    },1000);
  },
  selectBoxRender:function(){
     var _this = this;
     var scaleW = _this.scaleW;
     var scaleH = _this.scaleH;
     var fruitList = _this.fruitList;
      _this.scoreArray =[];//这一轮的选进去的数组
      $('whatBox').innerHTML='';
      if(_this.guan==1){
         var div1 = document.createElement('div');
         div1.className = 'what';
         div1.style.left = 0.2 * scaleW +'px';
         div1.style.top = 0.1 * scaleH +'px';
         div1.leftX =  0.2 * scaleW;
         div1.topY =  0.1 * scaleH;
         div1.hadFruit = false;
         $('whatBox').appendChild(div1);
         var div2 = document.createElement('div');
         div2.className = 'what';
         div2.style.left = 0.6 * scaleW +'px';
         div2.style.top = 0.1 * scaleH +'px';
         div2.leftX =  0.6 * scaleW;
         div2.topY =  0.1 * scaleH;
         div2.hadFruit = false;
         $('whatBox').appendChild(div2);
         }else if(_this.guan==2){
         var div1 = document.createElement('div');
         div1.className = 'what';
         div1.style.left = 0.07 * scaleW +'px';
         div1.style.top = 0.1 * scaleH +'px';
         div1.leftX =  0.07 * scaleW;
         div1.topY =  0.1 * scaleH;
         div1.hadFruit = false;
         $('whatBox').appendChild(div1);
         var div2 = document.createElement('div');
         div2.className = 'what';
         div2.style.left = 0.37 * scaleW +'px';
         div2.style.top = 0.1 * scaleH +'px';
         div2.leftX =  0.37 * scaleW;
         div2.topY =  0.1 * scaleH;
         div2.hadFruit = false;
         $('whatBox').appendChild(div2);
         var div3 = document.createElement('div');
         div3.className = 'what';
         div3.style.left = 0.67 * scaleW +'px';
         div3.style.top = 0.1 * scaleH +'px';
         div3.leftX =  0.67 * scaleW;
         div3.topY =  0.1 * scaleH;
         div3.hadFruit = false;
         $('whatBox').appendChild(div3);
         }else if(_this.guan==3){
          var div1 = document.createElement('div');
          div1.className = 'what';
          div1.style.left = 0.02 * scaleW +'px';
          div1.style.top = 0.1 * scaleH +'px';
          div1.leftX =  0.02 * scaleW;
          div1.topY =  0.1 * scaleH;
          div1.style.width = '70px';
          div1.style.height = '70px';
          div1.hadFruit = false;
          $('whatBox').appendChild(div1);
          var div2 = document.createElement('div');
          div2.className = 'what';
          div2.style.left = 0.27 * scaleW +'px';
          div2.style.top = 0.1 * scaleH +'px';
          div2.leftX =  0.27 * scaleW;
          div2.topY =  0.1 * scaleH;
          div2.style.width = '70px';
          div2.style.height = '70px';
          div2.hadFruit = false;
          $('whatBox').appendChild(div2);
          var div3 = document.createElement('div');
          div3.className = 'what';
          div3.style.left = 0.52 * scaleW +'px';
          div3.style.top = 0.1 * scaleH +'px';
          div3.leftX =  0.52 * scaleW;
          div3.topY =  0.1 * scaleH;
          div3.style.width = '70px';
          div3.style.height = '70px';
          div3.hadFruit = false;
          $('whatBox').appendChild(div3);
           var div4 = document.createElement('div');
          div4.className = 'what';
          div4.style.left = 0.77 * scaleW+ 'px';
          div4.style.top = 0.1 * scaleH +'px';
          div4.leftX =  0.77 * scaleW;
          div4.topY =  0.1 * scaleH;
          div4.style.width = '70px';
          div4.style.height = '70px';
          div4.hadFruit = false;
          $('whatBox').appendChild(div4);
          _this.boundary = 30;
         }
         $('selItem').innerHTML = '';
         for(var i=0;i<fruitList.length;i++){ 
             var item = fruitList[i];
             var div = document.createElement('div');
             div.id = i+1;
             div.fruitSet = 0;
             div.className='item';
             div.style.cssText = 'left:'+item.left * scaleW+'px;top:'+0.3 * scaleH+'px;background:url('+item.url+') no-repeat;background-size: 60px 60px;background-position: center;';
             div.initX = item.left * scaleW;
             div.initY = 0.3 * scaleH;
             if(i>=4){
            div.style.cssText = 'left:'+item.left * scaleW+'px;top:'+(0.3 * scaleH+80)+'px;background:url('+item.url+') no-repeat;background-size: 60px 60px;background-position: center;';  
             div.initY = 0.3 * scaleH + 80;
             }

            $('selItem').appendChild(div);
      
         } 
   

     $('testTh1').innerText = _this.testTh;

     _this.bindTouchEvent();
  },
  bindTouchEvent:function(){
    var _this = this;

   var testTtart = function  (evt) {
       
     _this.fruitId = this.id;
      _this.fruitIdSet = false;//还进去放
     console.log("fruitId:"+_this.fruitId);
     var left = $(_this.fruitId).style.left;
     var top =$(_this.fruitId).style.top;
     _this.initX = left.substring(0,left.length-2);
     _this.initY = top.substring(0,top.length-2);
     _this.left =  _this.initX;
     _this.top = _this.initY;
     _this.startX = evt.touches[0].pageX;
     _this.startY = evt.touches[0].pageY;
     _this.offsetX = 0;
     _this.offsetY = 0;
     
    };

   var testMove = function(evt){
     evt.preventDefault();
    _this.offsetX = evt.touches[0].pageX - _this.startX;
    _this.offsetY = evt.touches[0].pageY - _this.startY;
    _this.left = parseInt(_this.initX) + _this.offsetX ;
    _this.top = parseInt(_this.initY) + _this.offsetY;
   //  console.log("left:"+_this.left+" top:"+_this.top);
     $(_this.fruitId).style.left = _this.left+'px';
     $(_this.fruitId).style.top = _this.top+'px';
    
    };

    var testEnd = function(evt){
      
     var whats = $('whatBox').getElementsByTagName('div');

      for(var i=0;i<whats.length;i++){
          var what = whats[i];  
          var resX = Math.abs(_this.left-what.leftX);
          var resY = Math.abs(_this.top - what.topY);
        //  console.log("resX:"+resX+" resY:"+resY+" hadFruit:"+what.hadFruit);
          if(resX<=_this.boundary&&resY<=_this.boundary){
             if(!what.hadFruit){
            $( _this.fruitId).style.left = what.leftX+'px';
            $(_this.fruitId).style.top = what.topY+'px';
            if(_this.guan==3){
            $( _this.fruitId).style.left = (what.leftX-5)+'px';
            $(_this.fruitId).style.top = (what.topY-5)+'px';
            }
            $(_this.fruitId).fruitSet = 1;//表示该水果放进去了
            $(_this.fruitId).whatN = i;
            _this.fruitIdSet = true;
            what.hadFruit = true;
            _this.scoreArray[i]= _this.fruitId;
            }else{
               var fx = $(_this.fruitId).initX;
               var fy = $(_this.fruitId).initY;
               console.log(" fx:"+fx+" fy:"+fy);
               $( _this.fruitId).style.left = fx+'px';
               $(_this.fruitId).style.top = fy+'px';
             var fruitSet = $(_this.fruitId).fruitSet;
             console.log("fruitSet:"+fruitSet);
             if(fruitSet==1){//水果已放进去
               _this.fruitIdSet = true;
               what.hadFruit = false;
               $(_this.fruitId).fruitSet = 0;
               _this.scoreArray[i] = -1;
             }
           }
      }else{
             
            if(!_this.fruitIdSet&&i==(whats.length-1)){
               $( _this.fruitId).style.left = $(_this.fruitId).initX +'px';
               $(_this.fruitId).style.top = $(_this.fruitId).initY+'px';
                var fruitSet = $(_this.fruitId).fruitSet;
               console.log("fruitSet:"+fruitSet);
              if(fruitSet==1){//水果已放进去
               whats[$(_this.fruitId).whatN].hadFruit = false;
               $(_this.fruitId).fruitSet = 0;
               _this.scoreArray[$(_this.fruitId).whatN] = -1;
             }
            }
          
          }
          

      }; 

    };

    var fruits = $('selItem').getElementsByTagName('div');

    for (var i = 0; i < fruits.length; i++) {
        var fruit = fruits[i];
        fruit.addEventListener('touchstart',testTtart);
        fruit.addEventListener('touchmove',testMove);
        fruit.addEventListener('touchend',testEnd);
    };

  
      
  }
}

Test.init();
Test.bind();