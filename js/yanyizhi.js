var list = [
{
  exHtml:'<div style="padding-top:20%;"><img src="img/yanyizhi/icon_yanyizhi_explain1.png" style="width:150px;height:150px;margin-top:-75px;"/></div>',
  footText:'主要是看双眼视网膜成像能不能融像'
},
{
  exHtml:'<div style="text-align:left;padding:20px 10px;">一般不是说眼睛被抑制,通常的概念是单眼( 右眼或左眼 )抑制.这种情况主要是双眼视网膜成像不能融像,大脑只选择了一个更清晰或更舒服的物象,那另外一只眼睛的物象就被大脑给屏蔽掉了.</div>',
  footText:''
},
{
  exHtml:'<img src="img/yanyizhi/icon_yanyizhi_explain3.png" style="width:50%;height:60%;margin-top:10%;"/>',
  footText:'请戴好红蓝滤光眼镜'
},
{
  exHtml:'<img src="img/explain_zhengdui.png" style="width:70%;height:40%;margin-top:10%;"/>',
  footText:'头摆正，眼睛正对设备屏幕'
},
{
  exHtml:'<img src="img/yanyizhi/icon_yanyizhi_explain5.png" style="width:60%;height:60%;margin-top:10%;"/>',
  footText:'观看图中出现的文字'
}
]
new Slider({
'dom':document.getElementById('canvas'),
'list':list,
'sTitle':"眼抑制"
});

