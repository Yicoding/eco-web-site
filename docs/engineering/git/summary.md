---
toc: menu
---

# 常用命令总结

## 1.git 中一些选项解释

| 简写 | 全写               | 含义               |
| :--- | :----------------- | :----------------- |
| `-d` | `--delete`         | 删除               |
| `-D` | `--delete --force` | 强制删除           |
| `-f` | `--force`          | 强制               |
| `-m` | `--move`           | 移动或重命名       |
| `-M` | `--move --force`   | 强制移动或`重命名` |
| `-r` | `--remote`         | 远程               |
| `-a` | `--all`            | 所有               |

## 2.常用命令

```js
/*1.设置用户名、邮箱*/
// 当前目录下
git config user.name "Your name" // 设置当前目录用户名
git config user.email "Your email" //设置当前目录邮箱
// 全局
git config --global user.name "Your name" // 设置全局用户名
git config --global user.email "Your email" //设置全局邮箱

/*2.查看用户名、邮箱*/
// 当前目录下
git config user.name
git config user.email
// 全局
git config --global user.name
git config --global user.email

/*3.获取 Git 仓库*/
git init // 在已存在目录中初始化仓库

git clone https://github.com/username/xxx // 克隆远程仓库
git clone https://github.com/username/xxx myapp // 克隆远程仓库时，自定义本地仓库的名字

/*4.查看远程仓库*/
git remote -v // 查看全部
git remote show origin // 查看某个远程仓库

/*5.远程仓库的重命名与移除*/
git remote rename pb paul // 将pb重命名为paul

/*6.添加远程仓库*/
git remote add origin git@github.com/username/xxx.git // 添加远程仓库
git remote add origin https://github.com/username/xxx.git // 添加远程仓库

/*7.检查文件状态*/
git status

/*8.暂存已修改的文件*/
git add <file>
git add .

/*9.查看已暂存和未暂存的修改*/
git diff
git diff <file>

/*10.提交更新*/
git commit -m 'desc'

/*11.跳过使用暂存区域*/
git commit -a -m 'desc' // 相当于执行 git add . 和 git commit -m 'desc'

/*12.删除文件*/
git rm <file>

/*13.移动文件*/
git mv '<旧文件名>' '<新文件名>'

/*14.查看提交历史*/
git log

/*15.撤消操作*/
git commit --amend

/*16.reset*/
git reset HEAD <file> // 取消暂存的文件
git reset --mixed HEAD^ // 不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作
git reset --soft HEAD^ // 不删除工作空间改动代码，撤销 commit，不撤销 git add .
git reset --hard HEAD^ // 删除工作空间改动代码，撤销 commit，撤销 git add .

/*17.撤消对文件的修改*/
git checkout -- <file>

/*18.从远程仓库中抓取与拉取*/
git fetch <remote>

/*19.分支的合并*/
git merge <remote>

/*20.抓取、合并*/
git pull <remote>

/*21.推送到远程仓库*/
git push origin master

/*22.标签*/
git tag // 列出标签
git tag tagname // 创建轻量标签
git tag -a tagname -m 'desc' // 创建附注标签
git tag -a tagname commits // 后期打标签
git push origin tagname // 把tag tagname推送远端
git push origin --tags // 推送所有标签到远端
git tag -d tagname // 删除标签
git checkout tagname // 切换至tagname标签上

/*23.分支*/
git branch branchname // 创建新分支
git checkout branchname // 切换分支
git checkout -b branchname // 创建并切换新分支

git checkout -b new_feature origin/master // 基于远程 master 分支切出一个新分支
git branch -d branchname // 删除本地分支
git branch -D branchname // 强制删除本地分支

git push origin --delete branchName // 删除远程分支

/*24.merge在新位置重新提交*/
git rebase [name]

/*25.stash*/
git stash // 藏匿
git stash pop // 取出
```
