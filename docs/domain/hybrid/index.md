---
toc: menu
---

# hybrid

## 1.Hybrid 开发

- 原生 app 嵌入 web 页面的开发模式

- jsBidge：原生 app 与 web 页面的交互沟通桥梁，一种通信方式，类比于 JSONP 的交互方式，只是类比的对象放到了 js 与 native 身上，native 通过桥调用 js 的一些方法，js 也能通过桥调用 native 的一些方法和功能

## 2.js 调用 native

- 通过 webview 提供的接口，向 JavaScript 的 window 中注入对象或方法，让 js 调用时，直接执行相应的 Native 代码逻辑

- webview 在 native 中，native 可控制 webview

### 1）注入 api：jsSendMessage

```java
//ios：使用UIWebView
JSContext *context = [webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"]; context[@"jsSendMessage"]=getJsData;

//andriod：使用addJavascriptInterface接口
class getJsData {
  @JavascriptInterface //标注的方法里面是子线程，而不是主线程
  public String getNativeData() {
    return "nativeData";
  }
}
webView.addJavascriptInterface(getJsData, "jsSendMessage");
```

### 2）js 调用

```js
window.jsSendMessage(message); // ios
window.jsSendMessage.getNativeData(); // andriod
```

## 3.拦截 URL Scheme 的方式

- 浏览器输入 url 即可打开 app：weixin://

- 协议类型：scheme(应用标识)：//[path](行为即应用的某个功能)[?query](功能需要的参数)

- 后端代码：约定 bridge://loaded

- 使用 iframe.src 发送 URL SCHEME

### 1）后端代码：约定 bridge://loaded

```js
//ios操作
(BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType{
  if ([request.URL.absoluteString hasPrefix:@"bridge://loaded"]) {
    //执行native端的一些操作
    return NO; //返回NO是为了不再执行点击原链接的跳转
  }
  return YES;
}

//andriod：使用shouldOverrideUrlLoading方法对url协议进行解析
webView.setWebViewClient(new WebViewClient(){
  @Override
  public boolean shouldOverrideUrlLoading(WebView view, String url) {
    if (isNativeUrl(url)) {
      // 执行native端的一些操作
      return true;
    }
  }
})
```

### 2）前端调用：直接请求定义好的 bridge://loaded 协议就能触发 native 端的拦截

```html
<a href="bridge://loaded">触发app</a>
```

### 3）缺点

- 目前不建议只使用拦截 url scheme 解析参数的形式，主要存在如下问题：

  - 连续调用 location.href 会出现消息丢失，因为 webview 限制了连续跳转，会过滤掉后续的请求

  - url 会有长度限制，一旦过长就会出现信息丢失，一般结合注入 api 的形式一起使用

## 4.Native 调用 Js

- 调用 UIWebView 的 stringByEvaluatingJavaScriptFromString:方法

- 调用 WKWebView 的 evaluateJavaScript:completionHandler:方法

- 调用 WebView.loadUrl()方法

```js
//ios适用于UIWebView和WKWebView
[self.webView stringByEvaluatingJavaScriptFromString:@"jsFunction('发送给js的数据')"];
//WKWebView
[webView evaluateJavaScript:@"jsFunction('我是ios')" completionHandler:^(id item, NSError * _Nullable error) { // Block中处理是否通过了或者执行JS错误的代码
}];

//andriod
public void javaCallJS(){
  webView.loadUrl("javascript:jsFunction('我是Android')");
}
```

## 5.现有开源解决方案

- iOS：WebViewJavascriptBridge

- andriod：JsBridge

- 区别：

  - andriod 在启动 webview 时加载脚步，ios 在 webview 发送 scheme 请求时加载脚步

## 6.题目

### 1）Hybrid 混合开发

- 使用 jsBridge

- 通常使用两种方法：URL schema 和注入 api

### 2）Url schema

**1.原理**

- webview 中发出的网络请求，都会被客户端监听和捕获到，H5 与 webview 交互的私有协议为 url schema

  - webview 发出请求：使用 iframe 发送请求或使用 location.href 的方式（不适合并发场景）

  - 客户端拦截协议请求：解析到请求协议时，进行相关操作，设置处理逻辑

    - IOS：shouldStartLoadWithRequest

    - Android：shouldOverrideUrlLoading

  - 客户端请求处理后回调：

    - webview 请求时使用 window.addEventListener 设置自定义事件

    - 客户端处理完成后，调用 jsBridge 中的 dispatch 携带回调的数据触发自定义事件 window.dispatchEvent

**2.存在的问题**

- 连续调用 location.href 会出现消息丢失，因为 webview 限制了连续跳转，会过滤掉后续的请求

- url 会有长度限制，一旦过长就会出现信息丢失，一般结合注入 api 的形式一起使用

### 3）注入 api

**原理**

- 通过 webview 提供的接口，向 JavaScript 的 window 中注入对象或方法，让 js 调用时，直接执行相应的 Native 代码逻辑

  - 客户端给 webview 中的 window 中注入方法

  - webview 中调用注入的方法，并传入回调函数

  - 客户端处理完成后，调用回调函数

## 7.前端封装 hybrid

### 1）ios 采用了拦截 URL Scheme 的方式

```js
export default class IOSNative {
  createMessage(methodName, params) {
    // 协议 + 方法名 + 参数
    const proto = 'xxapp://';
    return `${proto}${methodName}?${JSON.stringify(params)}`;
  }

  sendMessage(message) {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'display:none;width:1px;height:1px;';
    iframe.src = message;

    const insertNode = document.body || document.documentElement;

    insertNode.appendChild(iframe);

    setTimeout(function () {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 100);
  }
}
```

### 2）安卓采用了注入 api 的方式

```js
export default class AndroidNative {
  createMessage(methodName, params) {
    const paramObj = {
      methodName,
      ...params,
    };
    return JSON.stringify(paramObj);
  }

  sendMessage(message) {
    // android通过addJavascriptInterface实现
    const { _jsBridge } = window;

    if (_jsBridge) {
      _jsBridge.sendMessage(message);
    }
  }
}
```

### 3）封装公共部分

**封装 native**

```js
import IOSNative from 'IOSNative';
import AndroidNative from 'AndroidNative';

const handler = isIos ? new IOSNative() : new AndroidNative();

/**
 * @methodName 方法名
 * @params 传入的参数对象
 */
function native(methodName, params) {
  return new Promise((resolve, reject) => {
    const message = handler.createMessage(methodName, {
      ...params,
      success: (res) => {
        resolve(res);
      },
      fail: (error) => {
        reject(error);
      },
    });
    handler.sendMessage(message);
  });
}

window.native = native;
```

### 4）页面调用封装的 hybrid 方法

```js
import native from 'native';

// 打开新的webview
native('openWebView', {
  success: () => {
    console.log('新开webview');
  },
});
```
