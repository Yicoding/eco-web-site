---
toc: menu
---

# add、commit

- 可以通过 `add` 来把改动的内容放进暂存区

## 1.add

### 1）add 后面加个点 "."：全部暂存

- `add` 指令除了 `git add 文件名` 这种用法外，还可以使用 `add .` 来直接把工作目录下的所有改动全部放进暂存区

### 2）add 添加的是文件改动，而不是文件名

- 修改了文件` a.txt`，然后把它 `add` 进了暂存区

```
git add a.txt
git status
```

![image](images/git/8.png)

- 然后又往 `a.txt` 里写了几行东西 ,再 `status`

```
git status
```

![image](images/git/9.png)

- 此时，`a.txt` 既在 `Changes to be commited` 的暂存区，又在 `Changes not staged for commit`

  - 因为通过 add 添加进暂存区的`不是文件名`，而是具体的`文件改动内容`

### 3）取消 add 暂存

```
git reset HEAD <撤销的文件1> <撤销的文件2> ...
```

### 4）放弃已经修改的内容

```
git checkout -- <放弃的文件> ...
```

### 5）放弃新建的文件

```
git rm <文件>...
```

## 2.commit

- 提交代码

### git commit 的撤销

- `HEAD^` 的意思是上一个版本，也可以写成 `HEAD~1`

- 如果你进行了 2 次 commit，想都撤回，可以使用 `HEAD~2`

#### 1.--mixed

- 不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作

```
git reset --mixed HEAD^
```

#### 2.--soft

- 不删除工作空间改动代码，撤销 commit，不撤销 git add .

```
git reset --soft HEAD^
```

#### 3.--hard

- 删除工作空间改动代码，撤销 commit，撤销 git add .

```
git reset --hard HEAD^
```

#### 4.只修改 commit 注释

```
git commit --amend
```
