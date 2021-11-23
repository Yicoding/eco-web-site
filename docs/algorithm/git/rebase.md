---
toc: menu
---

# 不喜欢 merge 的分叉？用 rebase 吧

- 有些人不喜欢` merge`，因为在 `merge` 之后，`commit` 历史就会出现分叉，这种分叉再汇合的结构会让有些人觉得混乱而难以管理。如果你不希望 `commit` 历史出现分叉，可以用 `rebase` 来代替 `merge`

## 1.rebase——在新位置重新提交

- 给你的 commit 序列`重新设置基础点`

- 把你指定的 commit 以及它所在的 commit 串，以指定的目标 commit 为基础，依次重新提交一次

```
git rebase 目标基础点
```

## 2.merge 执行结果

```
git merge branch1
```

![image](images/git/10.png)

## 3.rebase 执行结果

```
git checkout branch1
git rebase master
```

![image](images/git/11.png)

- 通过 `rebase`，`5` 和 `6` 两条 `commits` 把基础点从 `2` 换成了 `4` 。通过这样的方式，就让本来分叉了的提交历史`重新回到了一条线`。这种「重新设置基础点」的操作，就是 rebase 的含义

- 另外，在 `rebase` 之后，记得切回 `master` 再 `merge` 一下，把 `master` 移到`最新的 commit`：

```
git checkout master
git merge branch1
```

**不要从 `master` 向其他 `branch` 执行 `rebase` 操作**
