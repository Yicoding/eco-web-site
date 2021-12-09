---
toc: menu
---

# HEAD/master/branch

```bash
1.执行 git log
```

![image](images/git/1.png)

```bash
2.执行 git commit

  再次执行 git log
```

![image](images/git/2.png)

## 1.HEAD：当前 commit 的引用

- `HEAD`: 它是指向当前 commit 的引用，每次都会指向最新的 commit

- `origin/master` 和 `origin/HEAD`: 它们是对远端仓库的 master 和 HEAD 的本地镜像

## 2.branch

```bash
HEAD 除了可以指向 commit，还可以指向一个 branch

当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit

另外，当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动
```

```bash
HEAD -> master(分支名称) -> commit
```

![image](images/git/3.png)

### 1）branch 的通俗化理解

- 所有的 branch 之间都是平等的

- branch 包含了从初始 commit 到它的所有路径，而不是一条路径。并且，这些路径之间也是彼此平等的

### 2）查看分支

```js
git branch // 列出本地已经存在的分支，当前分支的分支名前会有“*”号

git branch -r // 查看远程分支

git branch -a // 列出本地和远程的分支

git branch -v // 查看各个分支最后一个提交信息

git branch --merged // 查看哪些分支已经合并入当前分支
```

### 2）创建分支

```js
git branch branchName // 基于当前commit创建branchName分支
```

### 3）切换分支

```js
git checkout branchName // 切换本地或远程已存在的分支

git checkout -b branchName // 本地创建一个新分支并切换到这个新分支

git checkout -b branchName origin/master // 基于远程 master 分支切出一个新分支
```

### 4）删除分支

```js
git branch -d branchName // 删除本地branchName分支

git branch -D branchName // 强制删除：branchName分支还没有合入当前分支，所以要用-D参数才能删掉

git push origin --delete branchName // 删除远程branchName分支

git push origin :branchName // 删除远程branchName分支
```

### 5）重命名分支

```js
git branch -m newName // 重命名当前分支
git branch -M newName // 强制重命名当前分支
```

## 3.master: 默认 branch

> 上面的这个 master ，其实是一个特殊的 branch：它是 Git 的默认 branch（俗称主 branch / 主分支）。
