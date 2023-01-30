
---
### 1. 接口约定

####  1.1. 模块设计

|模块|描述|例子|
|--|--|--|
|window| 窗口导航相关| pushWindow / popWindow |
|device| 设备功能相关| scan(扫码)/ 网络 /定位 |
|ui| 交互组件 |alert / datePicker |
|storage| k-v存储 | get / set / del |
|event| 事件相关 | onPause / onResume |



#### 1.2. 错误约定 

API 调用出错时回调函数的参数里会包含一个特殊的字段 err（Number 类型），作为 API 调用的错误码，示例:

```
{
err: 1,
msg: '接口不存在'
}
```

> 10 以下为内部通用错误 ，请勿占用
|err|描述|
|-- |-- |
|1| 接口不存在 |
|2| 参数无效 |
|3| 发生未知错误 |
|4| 接口无权限 |
|5| 用户取消操作 |

#### 1.3. 返回格式
native 通过callback返回数据时，请遵照如下统一格式，反向亦应如此

```
{
err: 1, // [Number]
msg: 1, // [String]
res: 1, // [Object] 真正返回用户的数据
}
```

----

### 2. 接口文档

#### 2.1. ui
界面组件
类别：界面提示

#### 2.1.1 ui.alert



```
ui.alert(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型 |  必填| 描述| 
|-|-|-|-|
|title| String| 否|  alert框的标题|
|content| String| 否|  alert框的内容|
|buttonText|  String  |否| 按钮文字，默认"确定"|

b) callback 参数说明

点击按钮后调用

c) 代码示例
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

#### 2.1.2 ui.confirm  
```
ui.confirm(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|title| String| 否|  confirm框的标题|
|content| String| 否|  confirm框的内容|
|confirmButtonText| String  |否| 确定按钮文字，默认"确定"|  
|cancelButtonText|  String |否| 取消按钮文字，默认’取消’

b) callback 参数说明

点击按钮后调用   

| 名称 |  类型   |描述| 
|-|-|-|  
|confirm| Boolean| 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false

c) 代码示例
``` js
<script>
var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
bridge.confirm({
title: '温馨提示',
content: '您是否想查询快递单号：\n1234567890',
confirmButtonText: '马上查询',
cancelButtonText: '暂不需要'
}, function(){
//可直接传入一个字符串当作 OPTION.content 参数
bridge.alert(result.confirm);
});
});
</script>
```  

#### 2.1.3 ui.showToast
显示弱提示

```
ui.showToast(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|content| String| 是|  文字内容|
|type|  String| 否|  toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息|
|duration|  Number  |否| 显示时长，单位为 ms，默认 2000|  


b) callback 参数说明

toast消失后调用

c) 代码示例
``` js
var btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
bridge.showToast({
type: 'none',
content: '请稍候···',
duration: 2000
}, function(){
//可直接传入一个字符串当作 OPTION.content 参数
bridge.alert(result.confirm);
});
});

```  

#### 2.1.4 ui.hideToast
隐藏弱提示

a) 代码示例
``` html
<button id="J_showToast" class="btn btn-default">显示 toast</button>
<button id="J_hideToast" class="btn btn-default">隐藏 toast</button>
```
```js
var showBtn = document.querySelector('#J_showToast');
var hideBtn = document.querySelector('#J_hideToast');
showBtn.addEventListener('click', function(){
bridge.showToast('显示中...');
});
hideBtn.addEventListener('click', function(){
bridge.hideToast();
});
```  

#### 2.1.5 ui.showLoading
显示加载

```
ui.showLoading(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|content| String| 否|  loading 的文字提示|
|delay| Number| 否|  延迟显示，单位 ms，默认 0。如果在此时间之前调用了 ap.hideLoading 则不会显示|

b) 代码示例
``` html
<button id="J_btn" class="btn btn-default">showLoading</button>
```
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

c) 其他说明

- 显示 loading 后，会覆盖整个h5页面，页面元素不能交互。

#### 2.1.6 ui.hideLoading
隐藏加载

a) 代码示例

``` html
<button id="J_btn" class="btn btn-default">showLoading</button>
```

``` js
<script>
var btn = document.querySelector('#J_btn');
btn.addEventListener('click', function(){
bridge.hideLoading({
content: '显示loading',
delay: 1000
});
setTimeout(function(){
bridge.hideLoading();
}, 3000);
});
</script>
```  

#### 2.1.7 ui.showActionSheet
类别：选择

```
ui.showActionSheet(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|title| String| 否|  菜单标题|
|items| String Array| 是|  菜单按钮的文字数组|
|cancelButtonText|  String  |否| 取消按钮文字，默认"取消"

b) callback 参数说明

点击按钮后调用   

| 名称 |  类型   |描述| 
|-|-|-|  
|index| Number| 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.showActionSheet({
      title: 'ActionSheet',
      items: ['菜单一', '菜单二', '菜单三']
    }, function(res){
      var btn = res.index === -1 ? '取消' : '第' + res.index + '个';
      bridge.showToast('你点了' + btn + '按钮' );
    });
  });
</script>
```  

#### 2.1.8 ui.datePicker 选择日期

```
ui.datePicker(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|type|  number| 是|  选择日期的类型 0是日，1是周，2是月，3是自定义|
|btnitems|  string array| 是|  按钮数组 btnid:按钮ID,title:按钮标题，ishighlighted:按钮初始状态，true选中，false未中|
|min| string  |是| 最小日期|
|max| string  |是| 最大日期|
|start| string  |是|    起始日期|
|end| string |是| 结束日期|
|weekitems| string array |是| 周数组

b) callback 参数说明

点击按钮后调用   

| 名称 |  类型   |描述| 
|-|-|-|  
|btnid| number| 按钮的ID|
|start| string| 开始日期|
|end| string| 结束日期

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
```js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.showActionSheet({
      "type": 0,
      "btnitems": [{"btnid": "000", "title": "昨天", "ishighlighted": true}, {"btnid": "001", "title": "今天", "ishighlighted": false}],
      "min": "2011-12-01",
      "max": "2017-08-01",
      "start": "2017-07-17",
      "end": "2017-07-17",
      "weekitems": ["2017-07-17", "2017-07-17","2017-07-17","2017-07-17","2017-07-17","2017-07-17"]
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
```  


#### 2.1.8 ui.storePicker 选择门店

```
ui.storePicker(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|currentShop|object|是|默认店铺|
|name|  string| 是|  门店名|
|id|number|是|门店ID|
|items|array|否|待选门店


b) callback 参数说明

返回值  

| 名称 |  类型   |描述| 
|-|-|-|  
|id| number| 门店ID|
|name| string| 门店名

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
```js
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.storePicker({
      currentShop: {
                        name: '北京北辰店',
                        id:'10001',
                    },

                    items:[
                        {
                            name: '北京西单',
                            id:'10001'
                        },
                        {
                            name:'北京蓝色港湾',
                            id:'10001',
                        },
                        {
                            name:'北京云溪',
                            id:'10001'
                        }
                    ]
    }, function(res){
      bridge.alert(res)
    });
  });

```  

#### 2.1.9 ui.catelogPicker 分类选择（v2）
 图片

#### 2.1.10 ui.chooseImage   选择图片
#### 2.1.11 ui.previewImage 预览图片（v2）


----
#### 2.2. window

窗口导航相关

#### 2.2.1 window.pushWindow

pushWindow用来打开一个新的页面，自带转场动画。可直接传入一个字符串作为 OPTION.url 参数。

```
window.pushWindow(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型 |  必填| 描述| 
|-|-|-|-|
|url| string | 是
|type| number| 否| 默认0


b) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.pushWindow({
       "url": "http://192.168.3.11:3000/window.html"
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
```  

#### 2.2.2 window.popWindow

关闭当前页面。

```
window.popWindow(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型 |  必填| 描述| 
|-|-|-|-|
|url| string | 是
|type| number| 否| 默认0


b) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.popWindow({
       "url": "http://192.168.3.11:3000/window.html"
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
```  

#### 2.2.3 window.open

| 名称 |  类型 |  必填| 描述| 
|-|-|-|-|
|url| string | 是
|type| number| 否| 默认0

1）普通外链， url,  type=0  -> webview（干净） 打开 ，type=1 唤起系统默认浏览器打开
2）短链，按照扫码逻辑 
3）schema， 按照原schema设计，支持打开轻应用，支持唤起其他App

---- 

---- 

#### 2.3. storage
k-v 存储
#### 2.3.1 get

```
storage.get(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|key|string|是|要get的键名|
|slot|slot|否|分发位置


b) callback 参数说明

返回值  

| 名称 |  类型   |描述| 
|-|-|-|  
|msg| string| 结果文字提示|
|err| string| 错误码|
|data|array| key值

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.get({
       key:"aaa",
       slot:${uuid}
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
``` 

#### 2.3.2 set

```
storage.set(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|key|string|是|键名|
|value| all|  是|  键值|
|slot|slot|否|分发


b) callback 参数说明

返回值  

| 名称 |  类型   |描述| 
|-|-|-|  
|errmsg| string| 结果提示|
|err| string| 错误码|
|data|array| 存入数据

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.storage.set({
       key:"aaa",
       value:"5555"
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
``` 

#### 2.3.3 del

```
storage.remove(options: object, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|key|string|是|键名|
|slot|slot|否|分发位


b) callback 参数说明

返回值  

| 名称 |  类型   |描述| 
|-|-|-|  
|errmsg| string| 结果提示|
|err| string| 错误码

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.storage.remove({
       key:"aaa"
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
```

#### 2.3.4 empty （v2）

```
storage.empty(options: slot, callback: function)
```
a) options 参数说明 

| 名称 |  类型    |必填|  描述| 
|-|-|-|-|
|slot|slot|否|分发位


b) callback 参数说明

Empty all items which are not default(APP default settings will be reserved)

c) 代码示例
``` html
<button id="J_btn" class="btn btn-default">显示 ActionSheet</button>
```
``` js
<script>
  var btn = document.querySelector('#J_btn');
  btn.addEventListener('click', function(){
    bridge.storage.empty({
    }, function(res){
      bridge.alert(res)
    });
  });
</script>
``` 

---
#### 2.4. device
 类别：定位
 
#### 2.4.1 device.getLocation （v2）
#### 2.4.2 device.openLocation (v2)

#### 2.4.3 device.scan（v2）扫码

#### 2.4.4 device.network （v2）网络状态

------


#### 2.5. event (v2) 支持事件

#### 2.5.1 event.onPause （v2）
#### 2.5.2 event.onResume (v2)
