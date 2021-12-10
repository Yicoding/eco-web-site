---
toc: menu
---

# tag

- 给仓库历史中的某一个提交打上标签，以示重要

## 1.tag 和 branch 有什么区别

- branch 是一个分支；tag 是分支上的一个里程碑，一个点
- tag 就是一个只读的 branch；一般为每一个可发布的里程碑版本打一个 tag
- 简单说比如 branch 有 1.0，1.1 等，其中 1.0 分支里可以有 1.0.1，1.0.2 这些 tag
- tag 就像是一个里程碑一个标志一个点; branch 是一个新的征程一条线
- tag 是静态的，branch 要向前走
- 稳定版本备份用 tag，新功能多人开发用 branch（开发完成后 merge 到 master）

## 2.列出标签

- 只需要输入 `git tag` （可带上可选的 `-l` 选项 `--list`）

```bash
git tag
```

得到

```bash
v1.0
v2.0
```

---

```bash
git tag -l "v1.8.5*"
```

得到

```bash
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
```

## 3.创建标签

- Git 支持两种标签：`轻量标签`（lightweight）与`附注标签`（annotated）。

  - 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用

  - 附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的

### 1）创建附注标签

- 在运行 tag 命令时指定 -a 选项

```bash
git tag -a v1.4 -m "my version 1.4"
```

- `a` v1.4 是增加名为 v1.4 的标签

- `-m` 后面跟着的是标签的注释

- 如果没有为附注标签指定一条信息，Git 会启动编辑器要求你输入信息

### 2）创建轻量标签

- 不需要使用 -a、-s 或 -m 选项，只需要提供标签名字

```bash
git tag v1.4-lw
```

得到

```bash
v1.4
v1.4-lw
```

### 3）后期打标签

```bash
git tag -a v1.2 commits -m 'xxxx'
```

## 4.提交标签（两种方式）

### 1）git push origin v1.2

### 2）git push origin --tags

```bash
* [new tag]         v1.2 -> v1.2
* [new tag]         v1.4 -> v1.4
* [new tag]         v1.4-lw -> v1.4-lw
```

## 5.删除标签

### 1）删除本地标签

```bash
git tag -d v1.2
```

### 2）删除远程标签

```bash
git push origin --delete <tagname>
```

## 6.检出标签

- 查看某个标签所指向的文件版本，使用 `git checkout` 命令，使你的仓库处于“分离头指针（detached HEAD）”的状态

  - 此时你做了某些更改然后提交它们，标签不会发生变化， 但你的`新提交将不属于任何分支，并且将无法访问`

```bash
git checkout v1.2
```

- 如果你要`修复旧版本中的错误`，那么通常需要`创建`一个`新分支`

```bash
git checkout -b version2 v1.2
```
