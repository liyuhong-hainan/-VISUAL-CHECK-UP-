var $ = function(id){

return document.getElementById(id);
}

function Slider (opts) {
	this.wrap = opts.dom;
	this.list = opts.list;
	this.sTitle = opts.sTitle;
	this.init();
	this.renderDom();
	this.bindDom();
}

Slider.prototype.init = function() {
	
	this.scaleW  = window.innerWidth;
	this.inHeight = window.innerHeight;
	this.idx = 0;
	this.len = this.list.length;

};
Slider.prototype.renderDom = function() {
	var scaleW = this.scaleW;
	var inHeight = this.inHeight;
	var wrap = this.wrap;
	var data = this.list;
	var len = data.length;
    var sTitle =this.sTitle;
    var canHeight = inHeight * 0.6;
    var explainTopHeight = canHeight * 0.7;
    var explainBotHeight = canHeight * 0.3;

    this.outer = document.createElement('ul');

    for (var i = 0; i < len; i++) {
    	
      var li = document.createElement('li');
      var item = data[i];
      if(item){
      	  li.innerHTML ='<div class="explain-top" style="height:'+explainTopHeight +'px;">'
      	  +item.exHtml+'</div>'
      +'<div class="explain-bottom" style="height:'+explainBotHeight+'px;">'+item.footText+'</div>';
     }
     
     li.style.width = scaleW+'px';
     li.style.height = canHeight+'px';
     li.style.webkitTransform = 'translate3d('+i*scaleW+'px,0,0)';
     this.outer.appendChild(li);
    };

    this.outer.style.width = scaleW+'px';
    this.outer.style.height = canHeight+'px';
    wrap.appendChild(this.outer);
    wrap.style.height = canHeight+'px';
    document.getElementById('pageTitle').innerHTML = this.sTitle;

};


Slider.prototype.bindDom = function() {
	
	var self = this;
	var outer = this.outer;
	var scaleW = this.scaleW;

	var startHandler =function(evt){
       self.startX = evt.touches[0].pageX;
       self.startTime  = new Date() * 1;
       self.offsetX = 0;
	};

	var moveHanlder = function(evt){

     evt.preventDefault();
	 self.offsetX = evt.touches[0].pageX - self.startX;
	 var lis = outer.getElementsByTagName('li');
     var i = self.idx -1;
     var m = i+3;
     for (var i = 0; i < m ; i++) {
     	if(self.idx==0&&self.offsetX>0){

     	}else if((self.idx==lis.length-1)&&self.offsetX<0){

     	}else{
     	 lis[i]&&(lis[i].style.webkitTransform= 'translate3d('+((i-self.idx)*scaleW+self.offsetX)+'px,0,0)');	
     	}
       
       //防止页面切换的延迟
       lis[i]&&(lis[i].style.webkitTransition = 'none');
      };

	};
    
    var endHandler = function(evt){
       var boundary = scaleW / 6 ;
      var endTime  = new Date() *1;

      if(endTime - self.startTime > 800){//慢操作

      	if(self.offsetX < -boundary){
      		go('+1');
      	}else if(self.offsetX > boundary){
      		go('-1');
      	}else{
      		go('0');
      	}

      }else{//快操作

      if(self.offsetX>50){
       self.go('-1');
      }else if(self.offsetX < -50){
       self.go('+1');

      }else{

        self.go("0");
       }

      }

    }

    outer.addEventListener('touchstart',startHandler);
    outer.addEventListener('touchmove',moveHanlder);
    outer.addEventListener('touchend',endHandler);

    var nextPage = document.getElementById('nextBtn');
    nextPage.onclick = function(){

    	document.getElementById('page1').style.display = 'none';
    	document.getElementById('page2').style.display = 'block';
    }

};

Slider.prototype.go = function(n) {
	
   var idx = this.idx ; 
   var cidx;//下一个索引
   var len = this.len;
   var scaleW = this.scaleW;
   var lis = this.outer.getElementsByTagName('li');

   if(typeof n == 'number'){//直接去某一页
     cidx = idx;
   }else if(typeof n =='string'){

    cidx = idx + n * 1;//转成数字再加上当前索引
   }

    //超出处理
   if(cidx>len-1){
   	cidx = len - 1;

   }else if(cidx<0){
   	 cidx = 0;
   }
   this.idx = cidx;
   lis[cidx].style.webkitTransform = '-webkit-transform 2s ease-out';
   lis[cidx].style.webkitTransform = 'translate3d(0,0,0)';
   lis[cidx-1]&&(lis[cidx-1].style.webkitTransform = 'translate3d(-'+scaleW+'px,0,0)');
   lis[cidx+1]&&(lis[cidx+1].style.webkitTransform = 'translate3d('+scaleW+'px,0,0)');

   var imgs = document.getElementById('foot').getElementsByTagName('img');
   for (var i = 0; i < imgs.length; i++) {
         if(cidx==i){
           imgs[i].src='img/explain_dian_selected.png';
     
         }else{
           imgs[i].src='img/explain_dian_unselected.png';
         }
   };

};
