---
toc: menu
---

# push

- push 指令做的事是把你的本地提交上传到中央仓库去

```
git push
```

## 把 branch 上传到远端仓库

- push 做的事是：把当前 branch 的位置（即它指向哪个 commit）上传到远端仓库，并把它的路径上的 commits 一并上传。

## branch

```
HEAD 除了可以指向 commit，还可以指向一个 branch

当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit

另外，当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动
```

```
HEAD -> master(分支名称) -> commit
```

![HEAD3](https://github.com/Yicoding/eco-web-site/raw/master/public/git/3.png)

### branch 的通俗化理解

- 所有的 branch 之间都是平等的

- branch 包含了从初始 commit 到它的所有路径，而不是一条路径。并且，这些路径之间也是彼此平等的

### branch 的创建、切换和删除

- 创建 + 切换: `git checkout -b branchName`

  - 创建: `git branch branchName`

  - 切换: `git checkout branchName`

- 删除: `git branch -d branchName`

  - 没有被合并到 master 过的 branch 在删除时会失败

  - 强行删除未合并的分支: `git branch -D branchName`

## master: 默认 branch

> 上面的这个 master ，其实是一个特殊的 branch：它是 Git 的默认 branch（俗称主 branch / 主分支）。
