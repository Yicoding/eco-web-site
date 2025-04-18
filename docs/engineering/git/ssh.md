---
toc: menu
---

# SSH keys

## 1.生成新的 SSH keys

### 1）GitHub 的钥匙

- 指定文件路径，方便后面操做：~/.ssh/id_rsa.github

```shell
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "abc@qq.com"
```

- 直接回车 3 下，什么也不要输入，就是默认没有密码

### 2）GitLab 的钥匙

```shell
ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "abcdef@qq.com"
```

## 2.github 和 gitlab 同时使用 SSH keys

- 多帐号必须配置 config 文件(重点)，若无 config 文件，则需建立 config 文件

### 1）创建 config 文件

```shell
touch ~/.ssh/config
```

### 2）配置 config

```
Host gitlab
	HostkeyAlgorithms +ssh-rsa
	PubkeyAcceptedAlgorithms +ssh-rsa
	HostName 公司的代码仓库服务器地址(gitlab.xxx.com)
	User git
	IdentityFile ~/.ssh/id_rsa.gitlab
Host github.com
	HostkeyAlgorithms +ssh-rsa
	PubkeyAcceptedAlgorithms +ssh-rsa
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa.github
```

注意：

- `公司的代码仓库服务器地址(gitlab.xxx.com)` 这个地方需要替换成对应的域名 `gitlab.xxx.com`

- `macOS` 升 `Ventura` 后无法使用 `git ssh`, `openssh` 不再支持 `ssh-rsa` 算法

- 解决办法：添加

```
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedAlgorithms +ssh-rsa
```

## 3.添加 SSH 公钥

- 1.登陆 Github

- 2.点击右上方的头像，点击 settings

- 3.选择 SSH key

- 4.点击 Add SSH key

- 5.在出现的界面中填写 SSH key 的名称，填一个你本身喜欢的名称便可

- 6.将上面拷贝的~/.ssh/id_rsa.xxx.pub 文件内容粘帖到 key 一栏，在点击 “add key” 按钮就可以了

## 4.测试是否链接成功

```shell
ssh -T git@github.com
ssh -T git@gitlab.com
```

## 5.多 Git 账户的本地配置与使用

有时候不同的 Git 项目可能需要使用不同的账户。在本地的 Git 仓库中可以通过设置 `user.name` 和 `user.email` 来指定使用的账户。

为单个项目设置特定的账户：
进入你的仓库根目录，运行以下命令：

```bash
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

检查配置是否生效：

```bash
git config user.name
git config user.email
```
