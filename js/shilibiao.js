var list = [
{
  exHtml:'<div style="padding-top:30%;"><img src="img/shilibiao/icon_eyetable_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'视力表主要检查的是中心视力，可简单迅速的了解到视力的初步情况'
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
  exHtml:'<img src="img/shilibiao/icon_eyetable_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:''
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"视力表"
});


var $ = function(id){

  return document.getElementById(id);
}

function Render(opts){

  this.EList = opts.EList;
  this.wrap = opts.dom;
  this.renderDom();


}

Render.prototype.renderDom = function() {
  var scaleW = window.innerWidth;
  var wrap = this.wrap;
  var outer  = document.createElement('ul');
  var leftW= scaleW * 0.4;
  var lineHeight = 40;
  var EList = this.EList;
  for (var i = 0; i < EList.length; i++) {
  var li = document.createElement('li');
  li.className='clearfix';
  var left = document.createElement('div');
  left.className = 'left';
  left.style.width = leftW + 'px';
  left.style.left = scaleW*0.2+'px';
  var item = EList[i];
  var num = item.num;
  var imgW = (leftW- num*10)/ num;

  console.log('leftW:'+leftW+" imgW:"+imgW);
  var imgs = item.imgs;
    for(j=0;j<num;j++){
    var img = document.createElement('img');
    img.style.width = imgW+'px';
    img.style.height = imgW + 'px';
    img.src = 'img/jinshi/E_'+imgs[j]+'.png';

    left.appendChild(img);
    };
  li.appendChild(left);
  var right = document.createElement('div');
  right.className='right';
  right.style.cssText = 'margin-left:'+(scaleW * 0.6+20)+'px;height:'+(imgW+4*num)+'px;';
  right.innerHTML = '<span class="dst" style="margin-top:'+imgW/3+'px"  >'+item.dst+'</span>';
  li.appendChild(right);

  outer.appendChild(li);
  };
  wrap.appendChild(outer);

};




var EList = [
{
num:2,
dst:'300cm',
imgs:['up','down'],
result:'0.1'
},
{
num:3,
dst:'180cm',
imgs:['left','down','up'],
result:'0.16'
},
{
num:4,
dst:'120cm',
imgs:['left','up','down','up'],
result:'0.25'
},
{
num:5,
dst:'90cm',
imgs:['down','up','left','up','left'],
result:'0.33'
},
{
num:6,
dst:'60cm',
imgs:['down','up','down','left','down','left'],
result:'0.5'
},
{
num:7,
dst:'45cm',
imgs:['down','up','down','left','up','down','left'],
result:'0.66'
},
{
num:8,
dst:'30cm',
imgs:['up','down','left','down','left','up','down','left'],
result:'1.0'
},
{
num:9,
dst:'20cm',
imgs:['left','down','up','down','up','down','up','down','left'],
result:'1.5'
}
];

new Render({
EList:EList,
dom:$('tableBox')
});



