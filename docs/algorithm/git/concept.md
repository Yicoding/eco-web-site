---
toc: menu
---

# HEAD、master、branch

```
1.执行 git log
```

<<<<<<< HEAD
![image](images/git/1.png)
=======
![HEAD1](images/git/1.png)

> > > > > > > 32260cca0243416d7ae0415c840ebe64dde02cc2

```
2.执行 git commit

  再次执行 git log
```

<<<<<<< HEAD
![image](images/git/2.png)
=======
![HEAD2](images/git/2.png)

> > > > > > > 32260cca0243416d7ae0415c840ebe64dde02cc2

## HEAD：当前 commit 的引用

- `HEAD`: 它是指向当前 commit 的引用，每次都会指向最新的 commit

- `origin/master` 和 `origin/HEAD`: 它们是对远端仓库的 master 和 HEAD 的本地镜像

## branch

```
HEAD 除了可以指向 commit，还可以指向一个 branch

当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit

另外，当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动
```

```
HEAD -> master(分支名称) -> commit
```

<<<<<<< HEAD
![image](images/git/3.png)
=======
![HEAD3](images/git/3.png)

> > > > > > > 32260cca0243416d7ae0415c840ebe64dde02cc2

### branch 的通俗化理解

- 所有的 branch 之间都是平等的

- branch 包含了从初始 commit 到它的所有路径，而不是一条路径。并且，这些路径之间也是彼此平等的

### branch 的创建、切换和删除

- 创建 + 切换: `git checkout -b branchName`

  - 创建: `git branch branchName`

  - 切换: `git checkout branchName`

- 基于远程 master 分支切出一个新分支: `git checkout -b new_feature origin/master`

- 删除: `git branch -d branchName`

  - 没有被合并到 master 过的 branch 在删除时会失败

  - 强行删除未合并的分支: `git branch -D branchName`

- 删除远程分支: `git push origin --delete branchName`

## master: 默认 branch

> 上面的这个 master ，其实是一个特殊的 branch：它是 Git 的默认 branch（俗称主 branch / 主分支）。
