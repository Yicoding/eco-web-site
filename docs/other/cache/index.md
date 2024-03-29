---
toc: menu
---

# 浏览器缓存机制

- 缓存是性能优化中简单高效的一种优化方式，它可以显著减少网络传输所带来的损耗

- 对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤
  - 浏览器缓存可以帮助我们在第一和第三步骤中优化性能

## 1.缓存位置

- 从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络

### 1）Service Worker

- 1.Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能

- 2.使用 Service Worker 的话，传输协议必须为 `HTTPS`。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全

- 3.实现缓存功能的步骤：

  - 首先需要先注册 Service Worker
  - 然后监听到 install 事件以后就可以缓存需要的文件
  - 那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据

- 4.Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的

- 5.当 Service Worker 没有命中缓存的时候，我们需要去调用 fetch 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容

### 2）Memory Cache(内存)

- 内存中的缓存
  - 读取内存中的数据肯定比磁盘快
  - 内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放
  - 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了

### 3）Disk Cache(硬盘)

- Disk Cache 也就是存储在硬盘中的缓存
  - 读取速度慢点，但是什么都能存储到磁盘中
  - 比之 Memory Cache 胜在容量和存储时效性上
  - 相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据
  - 会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求

### 4）Push Cache

- Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用
- 并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放

### 5）网络请求

- 如果所有缓存都没有命中的话，那么只能发起请求来获取资源了

## 2.缓存策略

- 通常浏览器缓存策略分为两种：`强缓存`和`协商缓存`，并且缓存策略都是通过设置 `HTTP Header` 来实现的

- 一般来说，HTTP 缓存只能存储 GET 请求的响应内容，对于这些响应内容可能会存在两种情况：

  - 不缓存内容，每次请求的时候都会从服务端获取最新的内容

  - 设置了缓存内容，则在有效期内会从缓存获取，如果用户刷新或内容过期则去服务端获取最新的内容

### 1）强缓存

- 在规定有效期内，直接使用缓存

  - 1.服务端通过设置 `Expires` 和 `Cache-Control`，和客户端约定缓存内容的有效时间

  - 2.若符合缓存条件，浏览器响应 HTTP 200(from cache)

**1.Expires**

```js
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```

- Expires 是 HTTP/1 的产物，表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效

**2.Cache-control**

```js
Cache-control: max-age=30
```

- Cache-Control 出现于 HTTP/1.1，`优先级高于` Expires 。该属性值表示资源会在 30 秒后过期，需要再次请求

- Cache-Control 可以在请求头或者响应头中设置，并且可以组合使用多种指令

**QA：1.为什么指定缓存过期时间需要两个字段呢？**

- 因为有的浏览器只认识 Cache-Control，有的浏览器不认识，不认识的情况下再找 Expires

**QA：2.Expires 和 Cache-Control 的区别**

- Expires 是 HTTP/1.0 中的，Cache-Control 是 HTTP/1.1 中的;
- Expires 是为了兼容，在不支持 HTTP/1.1 的情况下才会发生作用
- 两者同时存在的话 Cache-Control 优先级高于 Expires

**QA：3.Cache-Control 请求头常见属性**

| 字段(单位秒)      | 说明                                                                                            |
| :---------------- | :---------------------------------------------------------------------------------------------- |
| `max-age=300`     | 拒绝接受长于 300 秒的资源，为 0 时表示获取最新资源                                              |
| `max-stale=100`   | 缓存过期之后的 100 秒内，依然拿来用                                                             |
| `min-fresh=50`    | 缓存到期时间还剩余 50 秒开始，就不给拿了，不新鲜了                                              |
| `no-cache`        | 协商缓存验证                                                                                    |
| `no-store`        | 不使用缓存                                                                                      |
| `only-if-chached` | 只使用缓存，没有就报 504 错误                                                                   |
| `no-transform`    | 不得对资源进行转换或转变。Content-Encoding, Content-Range,Content-Type 等 HTTP 头不能由代理修改 |

**QA：4.Cache-Control 响应头常见属性**

| 字段(单位秒)       | 说明                                                      |
| :----------------- | :-------------------------------------------------------- |
| `max-age=300`      | 缓存有效期 300 秒                                         |
| `s-maxage=500 `    | 有效期 500 秒，优先级高于 max-age，适用于共享缓存(如 CDN) |
| `public`           | 可以被任何终端缓存，包括代理服务器、CDN 等                |
| `private`          | 只能被用户的浏览器终端缓存(私有缓存)                      |
| `no-cache`         | 先和服务端确认资源是否发生变化，没有就使用                |
| `no-store`         | 不缓存                                                    |
| `no-transform`     | 不得对资源进行转换或转变                                  |
| `must-revalidate`  | 客户端缓存过期了就向源服务器验证                          |
| `proxy-revalidate` | 代理缓存过期了就去源服务器重新获取                        |

**QA：5.强缓存的缺点**

- 就是缓存过期之后，不管资源有没有变化，都会重新发起请求，重新获取资源

**QA：6.缓存优先级**

- Service Worker -> Memory Cache -> Disk Cache -> Push Cache

### 2）协商缓存

- 经过浏览器与服务器之间协商过之后，再决定是否读取本地缓存，如果服务器通知浏览器可以读取本地缓存，会返回 304 状态码，并且协商过程很简单，只会发送头信息，不会发送响应体

- 在强缓存过期的情况下，再走协商缓存的流程，判断文件有没有更新

- 服务端通过设置 `If-Modified-Since` 和 `If-None-Match`，和客户端约定标识协商缓存的值

- 当有效期过后，浏览器将缓存信息中的 `Etag` 和 `Last-Modified` 信息，分别使用 `If-None-Match` 和 `If-Modified-Since` 请求头设置，提交给服务端

- 若符合缓存条件，服务端则响应 `HTTP 304`，浏览器将从缓存读数据

**1.Last-Modified 和 If-Modified-Since**

- Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码

- Last-Modified 存在一些弊端：

  - 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源
  - 因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源

- 因为以上这些弊端，所以在 HTTP / 1.1 出现了 `ETag`

**2.ETag 和 If-None-Match**

- ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且 ETag 优先级比 Last-Modified 高

**QA：Last-Modified 和 ETag 的区别**

- Etag 感知文件精准度要高于 Last-Modified
- 同时使用时，服务器校验优先级 Etag/If-None-Match
- Last-Modified 性能上要优于 Etag，因为 Etag 生成过程中需要服务器付出额外开销，会影响服务器端的性能，所以它并不能完全替代 Last-Modified，只能作为补充和强化

### 3） 如果什么缓存策略都没设置，那么浏览器会怎么处理？

- 启发式缓存

- 对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间

### 4）强缓存与协商缓存的区别

- 优先查找强缓存，没有命中再查找协商缓存

- 强缓存不发请求到服务器，所以有时候资源更新了浏览器还不知道，但是协商缓存会发请求到服务器，资源是否有更新，服务器肯定知道

- 目前项目大多数使用缓存文案
  - 协商缓存一般存储：HTML
  - 强缓存一般存储：css, image, js，文件名带上 hash

## 3.实际场景应用缓存策略

### 1）频繁变动的资源

- 对于频繁变动的资源，首先需要使用 `Cache-Control: no-cache` 使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小

### 2）代码文件

- HTML 文件一般不缓存或者缓存时间很短
  - 使用工具来打包代码，那么我们就可以对文件名进行哈希处理
  - 只有当代码修改后才会生成新的文件名
  - 基于此，我们就可以给代码文件设置缓存有效期一年 Cache-Control: max-age=31536000
  - 这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存

## 4.CDN 缓存

- 当我们发送一个请求时，浏览器本地缓存失效的情况下，CDN 会帮我们去计算哪得到这些内容的路径短而且快

- 比如在广州请求广州的服务器就比请求新疆的服务器响应速度快得多，然后向最近的 CDN 节点请求数据

- CDN 会判断缓存数据是否过期，如果没有过期，则直接将缓存数据返回给客户端，从而加快了响应速度。如果 CDN 判断缓存过期，就会向服务器发出回源请求，从服务器拉取最新数据，更新本地缓存，并将最新数据返回给客户端

- CDN 不仅解决了跨运营商和跨地域访问的问题，大大降低访问延时的同时，还起到了分流的作用，减轻了源服务器的负载

## 5.几种刷新和回车的区别

- 使用 Ctrl+F5 强制刷新页面时，会对本地缓存文件直接过期，然后跳过强缓存和协商缓存，直接请求服务器
- 点击刷新或 F5 刷新页面时，对本地缓存文件过期，然后带 If-Modifed-Since 和 If-None-Match 发起协商缓存验证新鲜度
- 浏览器输入 URL 回车，浏览器查找 Disk Cache，有则使用，没有则发送网络请求

![image](images/other/3.png)

## 注意

控制台设置禁用缓存后，关闭控制台后，禁用失效。即只在打开控制台才能使用这些功能，关闭控制台，浏览器会恢复默认行为
