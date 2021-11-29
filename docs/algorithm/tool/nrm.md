---
toc: menu
---

# nrm

- `nrm`(npm registry manager )是`npm的镜像源管理工具`，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换

## 1.安装 nrm

```bash
npm install -g nrm
```

## 2.使用

```bash
nrm ls
```

输出

```bash
*npm ---- https://registry.npmjs.org/

cnpm --- http://r.cnpmjs.org/

taobao - http://registry.npm.taobao.org/
```

- 其中，带\*的是当前使用的源，上面的输出表明当前源是官方源

## 3.切换

```bash
nrm use taobao
```

## 4.增加定制的源

```bash
nrm add taobao http://registry.npm.taobao.org/
```

## 5.删除某个源

```bash
nrm del <registry>
```

## 6.测试速度

- 可以通过 nrm test 测试相应源的响应时间

```bash
nrm test npm
```

输出

```bash
* npm ------ 8553ms
```
