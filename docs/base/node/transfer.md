---
toc: menu
---

# 服务器迁移

## 1.查看宝塔面板地址

```bash
/etc/init.d/bt default
```

=> 返回

```bash
外网面板地址: http://xxx.x.xxx.xx:xxx/xxx
内网面板地址: http://xxx.xx.x.x:xx/xxx

username: xxx
password: xxx
```

## 2.腾讯云轻量应用服务器

- 服务器 -> 应用管理 -> 执行命令获取面板信息

```bash
sudo /etc/init.d/bt default
```

## 3.计划任务

## 4.导出、导入数据库

## 5.修改 DNS 解析

## 6.腾讯云申请免费 ssl 证书

## 7.卸载旧的 phpAdmin

- 数据库报错、root 用户设置不了权限：phpAdmin 有关

## 8.端口放行

## 9.申请 ssl 证书

- 一级域名和二级域名不能共用一个证书

## 10.mysql 配置用户 root %
