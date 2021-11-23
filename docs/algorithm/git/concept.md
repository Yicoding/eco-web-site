---
toc: menu
---

# HEAD、master、branch

```
1.执行 git log
```

![HEAD1](https://github.com/Yicoding/eco-web-site/raw/master/public/git/1.png)

```
2.执行 git commit

  再次执行 git log
```

返回 commit 98792xxxxx(`HEAD -> master`)

返回 commit 98791xxxxx(`origin/master, origin/HEAD`)

## HEAD：当前 commit 的引用

```
HEAD: 它是指向当前 commit 的引用，每次都会指向最新的commit
```

## branch

```
HEAD 除了可以指向 commit，还可以指向一个 branch

当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit

另外，当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动
```

```
HEAD -> master(分支名称) -> commit
```
