---
toc: menu
---

# cherry-pick

## 1.使用原因

- 对于多分支的代码库，将代码从一个分支`转移`到另一个分支是常见需求

- 这时分两种情况
  - 1.你需要另一个分支的所有代码变动，那么就采用合并（`git merge`）
  - 2.你只需要部分代码变动（某几个提交），这时可以采用 `Cherry pick`

## 2.基本用法

```md
git cherry-pick <commitHash>
```

- 上面命令就会将`指定的提交` commitHash，`应用于当前分支`。这会在当前分支产生一个新的提交，当然它们的哈希值会不一样

### 1）代码仓库有 master 和 feature 两个分支

```js
a - b - c - d   Master
         \
           e - f - g Feature
```

### 2）将提交 f 应用到 master 分支

```git
# 切换到 master 分支
$ git checkout master

# Cherry pick 操作
$ git cherry-pick f
```

### 3）结果

```js
 a - b - c - d - f   Master
         \
           e - f - g Feature
```

- master 分支的末尾`增加了`一个提交 `f`

## 3.pick 分支名

```bash
git cherry-pick feature
```

- 表示将 feature `分支`的`最近一次提交`，`转移`到`当前分支`

## 4.转移多个提交

### 1）多个提交

```bash
git cherry-pick <HashA> <HashB>
```

- 将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交

### 2）转移连续提交(不包含 A 提交)

```bash
git cherry-pick A..B
```

- 转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。

### 3）转移连续提交(包含 A 在内的提交)

```bash
git cherry-pick A^..B
```

## 5.配置项

| 简写               | 全写                       | 含义                                                                                                          |
| :----------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------ |
| `-e`               | `--edit`                   | 打开外部编辑器，编辑提交信息                                                                                  |
| `-n`               | `--no-commit`              | 只更新工作区和暂存区，不产生新的提交                                                                          |
| `-x`               | -                          | 在提交信息的末尾追加一行(`cherry picked from commit ...`)，方便以后查到这个提交是如何产生的                   |
| `-s`               | `--signoff`                | 在提交信息的末尾追加一行操作者的签名，表示是谁进行了这个操作                                                  |
| `-m parent-number` | `--mainline parent-number` | -m 配置项告诉 Git，应该采用哪个分支的变动，参数 parent-number 是一个从 1 开始的整数，代表原始提交的父分支编号 |

<br>

```md
git cherry-pick -m 1 <commitHash>
```

## 6.代码冲突

- 如果操作过程中发生代码冲突，Cherry pick 会停下来，让用户决定如何继续操作

### 1）--continue 继续

- 用户解决代码冲突后，第一步将修改的文件重新加入暂存区（`git add .`），第二步使用下面的命令，让 Cherry pick 过程`继续执行`

```bash
git cherry-pick --continue
```

### 2）--abort 放弃

- 发生代码冲突后，放弃合并，`回到操作前的样子`

```bash
git cherry-pick --abort
```

### 3）--quit 退出

- 发生代码冲突后，退出 Cherry pick，但是`不回到操作前的样子`

```bash
git cherry-pick --quit
```

## 7.转移到另一个代码库

- Cherry pick 也支持转移另一个代码库的提交，方法是先将该库加为远程仓库

### 1）添加远程仓库 target

```bash
git remote add target git://gitUrl
```

### 2）将远程代码抓取到本地

```bash
git fetch target
```

### 3）检查一下要从远程仓库转移的提交，获取它的哈希值

```bash
git log target/master
```

### 4）使用 git cherry-pick 命令转移提交

```bash
git cherry-pick <commitHash>
```
