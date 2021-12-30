---
toc: menu
---

# HTTP

- HTTP（超文本传输协议）

  - HTTP 的底层是 TCP/IP
  - HTTP 是明文传输的协议，传输保文对外完全透明，非常不安全

- HTTPS = HTTP + SSL/TLS

## 1.HTTP 请求中的内容

### 1）请求行

```js
GET /images/logo.gif HTTP/1.1
```

- 基本由`请求方法`、`URL`、`协议版本`组成

### 2）首部

- 首部分为`请求首部`和`响应首部`

### 3）实体

## 2.常见 http 状态码

- 状态码表示了`响应的一个状态`，可以让我们清晰的了解到这一次请求是成功还是失败，如果失败的话，是`什么原因`导致的
- 状态码也是用于`传达语义`的

### 1）2XX 成功

| 状态码                | 描述                                                                                  |
| :-------------------- | :------------------------------------------------------------------------------------ |
| `200 OK`              | 表示从客户端发来的请求在服务器端被正确处理                                            |
| `204 No content`      | 表示请求成功，但响应报文不含实体的主体部分                                            |
| `205 Reset Content`   | 表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容 |
| `206 Partial Content` | 进行范围请求                                                                          |

### 2）3XX 重定向

| 状态码                   | 描述                                                                          |
| :----------------------- | :---------------------------------------------------------------------------- |
| `301 moved permanently`  | `永久性重定向`，表示资源已被分配了新的 URL                                    |
| `302 found`              | `临时性重定向`，表示资源临时被分配了新的 URL                                  |
| `303 see other`          | 表示资源存在着另一个 URL，应使用 `GET` 方法获取资源                           |
| `304 not modified`       | 表示服务器允许访问资源，但因发生请求未满足条件的情况                          |
| `307 temporary redirect` | 临时重定向，和 302 含义类似，但是期望客户端保持请求方法不变向新的地址发出请求 |

### 3）4XX 客户端错误

| 状态码             | 描述                                         |
| :----------------- | :------------------------------------------- |
| `400 bad request`  | 请求报文存在语法错误                         |
| `401 unauthorized` | 表示发送的请求需要有通过 HTTP 认证的认证信息 |
| `403 forbidden`    | 表示对请求资源的访问被服务器拒绝             |
| `404 not found`    | 表示在服务器上没有找到请求的资源             |

### 4）5XX 服务器错误

| 状态码                     | 描述                                                 |
| :------------------------- | :--------------------------------------------------- |
| `500 internal sever error` | 表示服务器端在执行请求时发生了错误                   |
| `501 Not Implemented`      | 表示服务器不支持当前请求所需要的某个功能             |
| `503 service unavailable`  | 表明服务器暂时处于超负载或正在停机维护，无法处理请求 |

## 3.Post 和 Get 的区别？

- Get 多用于无副作用，幂等的场景，例如搜索关键字

- Post 多用于副作用，不幂等的场景，例如注册

- 在技术上说：

  - `Get` 请求能`缓存`，Post 不能
  - Post 相对 Get 安全一点点，因为 `Get` 请求都包含在 `URL` 里（也可以写到 body 里面），且会被浏览器保存历史纪录。Post 不会，但是在抓包的情况下都是一样的
  - URL 有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
  - Post 支持更多的编码类型且不对数据类型限制

## 4.HTTP1.0

### 1）HTTP 队头阻塞

- HTTP1.1 增加了管线化技术，允许客户端不用等到服务器的响应就能发送下一个请求
- 目的为了在一次 TCP 连接上可以并行发送多个请求，来提高网络利用率
- 但是它有一个很大的缺点，服务器必须按照请求的顺序来响应。即后续请求的响应必须等到第一个响应发送之后才能发送，即使后续响应已经完成
- 这就是 HTTP 队头阻塞的来由

### 2）如何解决队头阻塞

**1.并发连接**

- 对于一个域名允许分配多个长连接，那么相当于增加了任务队列，不至于一个队伍的任务阻塞其它所有任务

**2.域名分片**

- 一个域名下可以分出非常多的二级域名，而它们都指向同样的一台服务器，能够并发的长连接数更多了，事实上也更好地解决了队头阻塞的问题

**3.使用 HTTP2.0**

- HTTP2.0 增加了一层二进制分帧层，引入了帧，消息，流的概念
- 每个请求/响应成为消息，消息可分为多帧，每个帧在流中进行传输，一个 tcp 连接可以有多个流
- 各个帧在到达之后重组为消息，这样就避免了请求队头阻塞

## 5.HTTP1.1

- HTTP 1.1 支持`持久连接`(`长连接`)

- 在一个 TCP 连接上可以传送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟

- 和 1.0 区别
  - 缓存处理
  - 带宽优化及网络连接的使用
  - 错误通知的管理
  - Host 头处理
  - `长连接`

## 6.HTTP2.0

- HTTP2.0 大幅度的提高了 web 性能，在 HTTP1.1 完全语义兼容的基础上，进一步减少了网络的延迟

- 实现低延迟高吞吐量

- 使用 http2 的前提是必须是 https

- HTTP2 五个新特性：

  - 多路复用，无需多个 TCP 连接，因为其允许在单一的 HTTP2 连接上发起多重请求，因此可以不用依赖建立多个 TCP 连接
  - 二进制分帧，将所有要传输的消息采用二进制编码，并且会将信息分割为更小的消息块
  - 头部压缩，用 HPACK 技术压缩头部，减小报文大小
  - 服务端推送，服务端可以在客户端发起请求前发送数据，换句话说，服务端可以对客户端的一个请求发送多个相应，并且资源可以正常缓存
  - 数据流优先级

- HTTP2.0 存在问题：
  - TCP 的队头阻塞
  - TCP 建立连接的延时
  - TCP 协议僵化

## 7.HTTP3.0

- 基于 UDP 实现了类似于 TCP 的多路数据流、传输可靠性等功能，我们把这套功能称为 QUIC 协议
- QUIC 协议（全称 Quick UDP Internet Connections，快速 UDP 互联网连接）

  - 实现了类似 TCP 的流量控制、传输可靠性的功能。虽然 UDP 不提供可靠性的传输，但 QUIC 在 UDP 的基础 之上增加了一层来保证数据可靠性传输。它提供了数据包重传、拥塞控制以及其他一些 TCP 中存在的特性
  - 集成了 TLS 加密功能。目前 QUIC 使用的是 TLS1.3，相较于早期版本，TLS1.3 有更多的优点，其中最重要的 一点是减少了握手所花费的 RTT 个数
  - 实现了 HTTP/2 中的多路复用功能。和 TCP 不同，QUIC 实现了在同一物理连接上可以有多个独立的逻辑数 据流(如下图)。实现了数据流的单独传输，就解决了 TCP 中队头阻塞的问题
  - 实现了快速握手功能。由于 QUIC 是基于 UDP 的，所以 QUIC 可以实现使用 0-RTT 或者 1-RTT 来建立连接， 这意味着 QUIC 可以用最快的速度来发送和接收数据，这样可以大大提升首次打开⻚面的速度