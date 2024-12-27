---
toc: menu
---

# 性能检测

## 1.性能检测工具

### 1）Performance

- Performance 是 Chrome 提供给我们的开发者工具，用于记录和分析我们的应用在运行时的所有活动。它呈现的数据具有实时性、多维度的特点，可以帮助我们很好地定位性能问题

**1.开始记录**

- 右键打开开发者工具，选中 Performance 面板

- 选中实心圆按钮，Performance 会开始帮我们记录我们后续的交互操作

- 选中圆箭头按钮，Performance 会将页面重新加载，计算加载过程中的性能表现

**2.指标**

- `FPS`：这是一个和动画性能密切相关的指标，它表示每一秒的帧数。图中绿色柱状越高表示帧率越高，体验就越流畅。若出现红色块，则代表长时间帧，很可能会出现卡顿。图中以绿色为主，偶尔出现红块，说明网页性能并不糟糕，但仍有可优化的空间

- `CPU`：表示 CPU 的使用情况，不同的颜色片段代表着消耗 CPU 资源的不同事件类型。这部分的图像和下文详情面板中的 Summary 内容有对应关系，我们可以结合这两者挖掘性能瓶颈

- `NET`：粗略的展示了各请求的耗时与前后顺序。这个指标一般来说帮助不大

### 2）LightHouse

- Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量

### 3）谷歌插件 PageSpeed Insights

### 4）console

**1.console.time()配合 console.timeEnd()**

- console.time()配合 console.timeEnd()，可以将之间代码的运行时间输出到控制台上。 注意传入相同的参数，相当于计时器的唯一名称

```js
console.time('计时器');
for (var i = 0; i < 1000; i++) {
  for (var j = 0; j < 1000; j++) {}
}
console.timeEnd('计时器');
// 计时器: 4.800048828125 ms
```

**2.console.trace()**

- console.trace()用来追踪函数的调用过程。 在大型项目尤其是框架开发中，函数的调用轨迹可以十分复杂，console.trace()方法可以将函数的被调用过程清楚地输出到控制台上

**3.console.profile()**

- 评估段代码或是某个函数的性能

## 2.计算白屏时间(FP)

- 首屏时间(First Contentful Paint)：是指浏览器从响应用户输入网络地址，到首屏内容渲染完成的时间

  - 首屏时间 = 首屏内容渲染结束时间点 - 开始请求的时间点

- 白屏时间是从用户开始请求页面时开始计算到开始显示内容结束，中间过程包括 DNS 查询、建立 TCP 链接、发送首个 HTTP 请求、返回 HTML 文档、HTML 文档 head 解析完毕
  - 影响白屏时间的因素：网络、服务端性能、前端页面结构设计

```js
function getFP() {
  new PerformanceObserver((entryList, observer) => {
    let entries = entryList.getEntries();
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].name === 'first-paint') {
        console.log('FP', entries[i].startTime);
      }
    }
  }).observe({ entryTypes: ['paint'] });
}
```
