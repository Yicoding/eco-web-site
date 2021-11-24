---
toc: menu
---

# reflog: 引用的 log

- 可以查看 Git 仓库中的引用的移动记录

- 恢复 `短期内` 被误删的 branch

  - 注意：不再被引用直接或间接指向的 commits 会在一定时间后`被 Git 回收`，所以使用 reflog 来找回删除的 branch 的操作一定要及时，不然有可能会由于 commit 被回收而再也找不回来。

```bash
git checkout c08de9a
git checkout -b branch1
```

## 1.git reflog

- 显示 HEAD 的移动记录

## 2.git reflog branchName

- 查看其他引用的 reflog
