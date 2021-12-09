---
toc: menu
---

# checkout

## 1.分支切换

```js
git checkout branchName // local branch
```

## 2.切换远程分支

```js
git checkout origin/test // remote branch
```

## 3.基于远程分支创建本地分支，并跟踪对应来自 'origin' 的远程分支

```js
git checkout -b branchName origin/feature-test // new local branch wih remote branch
```

## 4.基于本地分支开出新分支

```js
git checkout -b branchName // new local branch with current branch
```

## 5.彻底丢弃某个文件的改动

```md
git checkout <file>
```

## 6.放弃本地所有改动

```md
git checkout .
```

## 7.切换上一个分支

```md
git checkout -
```
