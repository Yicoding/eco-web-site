---
toc: menu
---

# merge

## 1.定义

- erge 的意思是「合并」: 指定一个 commit，把它合并到当前的 commit 来

  - 当前在 master 分支

  - 将 feature 分支合并到 master 分支

```bash
git merge master
```

## 2.适用场景

- 合并分支

  - 当一个 branch 的开发已经完成，需要把内容合并回去时，用 merge 来进行合并

- pull 的内部操作

  - pull 的实际操作其实是把远端仓库的内容用 fetch 取下来之后，用 merge 来合并

## 3.特殊情况

### 1）merge 冲突

- 你的两个分支改了相同的内容，Git 不知道应该以哪个为准。如果在 merge 的时候发生了这种情况，Git 就会把问题交给你来决定。具体地，它会告诉你 merge 失败，以及失败的原因

#### 1.解决掉冲突

- 删除掉多余的修改

- 再把 Git 添加的那三行 `<<< === >>>` 辅助文字也删掉

#### 2.手动 commit 一下

- 解决完冲突以后，就可以进行第二步—— commit 了

```bash
git add .

git commit
```

#### 放弃解决冲突，取消 merge

```bash
git merge --abort
```

### 2）HEAD 领先于目标 commit

- 如果 merge 时的目标 commit 和 HEAD 处的 commit 并`不存在分叉`，而是 `HEAD 领先于目标 commit`

![image](images/git/4.png)

- 那么 merge 就没必要再创建一个新的 commit 来进行合并操作，因为并没有什么需要合并的。在这种情况下， Git 什么也不会做，merge 是一个`空操作`

### 3）HEAD 落后于 目标 commit——fast-forward

- 如果 HEAD 和目标 commit 依然是`不存在分叉`，但 `HEAD落后于目标 commit`

![image](images/git/5.png)

- 那么 Git 会直接把 HEAD（以及它所指向的 branch，如果有的话）移动到目标 commit

![image](images/git/6.png)

- 这种操作有一个专有称谓，叫做 "fast-forward"（`快速前移`）

#### 落后于远程仓库

- 此时执行 `git pull` 后

![image](images/git/7.png)

- 实际所执行的操作有:

  - git fetch 下载远端仓库内容，origin/master 和 origin/HEAD 移动到了最新的 commi

  - merge 的目标 commit ，是远端仓库的 HEAD，也就是 origin/HEAD

  ```bash
  git merge origin/HEAD
  ```

  - 因此 HEAD 就会带着 master 一起，也指向图中绿色的最新 commit 了
