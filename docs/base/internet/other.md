---
toc: menu
---

# 其他知识

## Host 映射

- 若干接口需要读取公司域名的登录态，因此，本地调试时，推荐设置本机 host 映射，将 `127.0.0.1` 映射为 `xxx.test.xxx.com` 或 `local.test.xxx.com` 等，确保接口能够正常读取到登录凭证。

- 推荐直接修改系统 `/etc/hosts` 文件添加映射，或者，使用 `iHosts`、`SwitchHosts` 等工具修改

### 直接修改系统文件

终端运行，开始编辑文件：

```bash
sudo vi /etc/hosts
```

在文件中添加以下配置：

```bash
127.0.0.1 xxx.test.xxx.com
127.0.0.1 xxx.uat.xxx.com
127.0.0.1 xxx.xxx.com
```
