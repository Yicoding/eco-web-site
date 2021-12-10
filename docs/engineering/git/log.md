---
toc: menu
---

# status/log/show/diff

## 1.status

- status 是用来查看工作目录当前状态的指令

## 2.log

### 1）查看历史记录

```bash
git log
```

### 2）log -p 查看详细历史

- `-p` 是 `--patch` 的缩写，通过 `-p` 参数，你可以看到具体每个 `commit` 的改动细节

- 很适合用于代码 `review`

```bash
git log -p
```

### 3）log --stat 查看简要统计

- 大致看一下改动内容，但并不想深入每一行的细节

```bash
git log --stat
```

## 3.show

- 查看某个具体的 commit 的改动内容，可以用 show

### 1）查看当前 commit

```bash
git show
```

### 2）查看任意一个 commit

- 在 `show` 后面加上这个 commit 的引用（branch 或 HEAD 标记）或它的 `SHA-1 码`

```bash
git show 5e68b0d8
```

### 3）查看指定 commit 中的指定文件

```bash
git show 5e68b0d8 shopping\ list.txt
```

## 4.diff

- 查看未提交的内容，可以用 `diff`

### 1）比对工作目录和暂存区

- 显示工作目录和暂存区之间的不同

```bash
git diff
```

### 2）比对暂存区和上一条提交

- 显示暂存区和上一条提交之间的不同

```bash
git diff --staged
```

or

```bash
git diff --cached
```

### 3）比对工作目录和上一条提交

- 显示工作目录和上一条提交之间的不同

```bash
git diff HEAD
```
