---
toc: menu
---

# pull、push

## pull

- pull 的内部操作其实是把远程仓库取到本地后（使用的是 fetch），再用一次 merge 来把远端仓库的新 commits 合并到本地

## push

- push 指令做的事是把你的本地提交上传到中央仓库去

```
git push

git push origin branchName
```

- `origin` 是远程仓库的别名，是你在 `git clone` 的时候 Git 自动帮你起的

- push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传

- push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 `git config` 修改 `push.default` 来改变 push 时的行为逻辑

  - 例如可以设置为「所有分支都可以用 git push 来直接 push，目标自动指向 origin 仓库的同名分支」（对应的 push.default 值：`current`）
    - git config --global push.default current

- push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master）的
