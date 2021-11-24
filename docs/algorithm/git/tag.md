---
toc: menu
---

# tag

- 给仓库历史中的某一个提交打上标签，以示重要

## 1.列出标签

- 只需要输入 `git tag` （可带上可选的 `-l` 选项 `--list`）

```
git tag
```

得到

```
v1.0
v2.0
```

---

```
git tag -l "v1.8.5*"
```

得到

```
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
```

## 2.创建标签

- Git 支持两种标签：`轻量标签`（lightweight）与`附注标签`（annotated）。

  - 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用

  - 附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的

### 1）创建附注标签

- 在运行 tag 命令时指定 -a 选项

```
git tag -a v1.4 -m "my version 1.4"

git tag
```

得到

```
v1.4
```

- `-m` 选项指定了一条将会存储在标签中的信息

- 如果没有为附注标签指定一条信息，Git 会启动编辑器要求你输入信息

### 2）创建轻量标签

- 不需要使用 -a、-s 或 -m 选项，只需要提供标签名字

```
git tag v1.4-lw

git tag
```

得到

```
v1.4
v1.4-lw
```

### 3）后期打标签

```
git tag -a v1.2 commits -m 'xxxx'
```

## 3.提交标签

```
1.git push origin v1.2

2.git push origin --tags
```

```
* [new tag]         v1.2 -> v1.2
* [new tag]         v1.4 -> v1.4
* [new tag]         v1.4-lw -> v1.4-lw
```

## 4 删除标签

### 1）删除本地标签

```
git tag -d v1.2
```

### 2）删除远程标签

```
git push origin --delete <tagname>
```

## 5.检出标签

- 查看某个标签所指向的文件版本，使用 `git checkout` 命令，使你的仓库处于“分离头指针（detached HEAD）”的状态

  - 此时你做了某些更改然后提交它们，标签不会发生变化， 但你的`新提交将不属于任何分支，并且将无法访问`

```
git checkout v1.2
```

- 如果你要`修复旧版本中的错误`，那么通常需要`创建`一个`新分支`

```
git checkout -b version2 v1.2
```
