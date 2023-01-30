#### 2.1.5 ui.showLoading
显示加载

```
ui.showLoading(options: object, callback: function)
```
a) options 参数说明 

| 名称 |	类型    |必填|	描述| 
|-|-|-|-|
|content|	String|	否|	loading 的文字提示|
|delay|	Number|	否|	延迟显示，单位 ms，默认 0。如果在此时间之前调用了 ap.hideLoading 则不会显示|

b) 代码示例
``` js

<script>
var btn = document.querySelector('#J_btn');
btn.addEventListener('click', function(){
bridge.showLoading({
content: '现实loading',
delay: 1000
});
setTimeout(function(){
bridge.hideLoading();
}, 2000);
});
</script>
```  

``` js
<script>
var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
bridge.alert({
title: '亲',
content: '您有新的快递消息',
buttonText: '我知道了'
}, function(){
//可直接传入一个字符串当作 OPTION.content 参数
bridge.alert('用户点击了「我知道了」');
});
});
</script>
```