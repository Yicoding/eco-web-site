---
toc: menu
---

# pull/push

## 1.pull

- pull 的内部操作其实是把远程仓库取到本地后（使用的是 fetch），再用一次 merge 来把远端仓库的新 commits 合并到本地

```bash
git pull

// =>

git fetch && git merge
```

## 2.push

- push 指令做的事是把你的本地提交上传到中央仓库去

```bash
git push

git push origin branchName
```

- `origin` 是远程仓库的别名，是你在 `git clone` 的时候 Git 自动帮你起的

- push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传

- push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 `git config` 修改 `push.default` 来改变 push 时的行为逻辑

  - 例如可以设置为「所有分支都可以用 git push 来直接 push，目标自动指向 origin 仓库的同名分支」（对应的 push.default 值：`current`）
    - git config --global push.default current

- push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master）的

### 1）git push（后未加任何参数）

- 当`首次创建`分支但`未关联`任何`远端分支`是（即方法一创建分支的方式），此时 git push 会提示"未存在关联的远端分支"并且`提交失败`

- 默认`只推送当前分支`，这叫做 simple 方式

### 2）git push -u origin test

- 这种方法更通用，当远端没有 test 分支时，会`自动创建`一个 origin test 分支，然后进行关联

- 加了参数`-u` 后，以后即可直接用 git push `代替` git push origin test

```bash
// 首次
git push -u origin test

// 之后
git push
```

### 3）git push --set-upstream-to=origin/

- 这个方法跟 git push -u 则不同，当`远端没有对应的分支`时，则`无法`进行`关联`。

### 4）git push --follow-tags

- 把改动和 tag 同时推到远程分支

### 5）push 的时候第一次可能遇到报错，报错的原因是本地的文件和仓库里的没有合并这个时候你可以这样

```bash
git pull origin master --allow-unrelated-histories
```
