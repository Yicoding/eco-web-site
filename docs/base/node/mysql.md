---
toc: menu
---

# mysql

## 1.mysql for mac 修改初始密码

### 1）打开 mac 中的终端，进入管理员模式：终端输入 sudo -i 按回车；输入电脑密码（登录密码）

```bash
sudo -i
```

- 这时候终端进入了~root#模式

### 2）进入 mysql 安装目录的 bin 目录，mysql 默认安装目录为/usr/local/mysql

- 输入命令 cd /usr/local/mysql/bin/并回车

```bash
cd /usr/local/mysql/bin/
```

### 3）修改密码

- 输入`./mysqladmin -u root -p password 123456`命令，注意 `123456` 为您的新密码
- 命令输入之后回车

```bash
./mysqladmin -u root -p password 123456
```

### 4）输入当前密码

- 此时为要求我们输入 mysql 以前的密码，即 mysql 初始化的密码
