---
toc: menu
---

# github Actions

- GitHub Actions 是 GitHub 的持续集成服务，于 2018 年 10 月推出

## 1.基本概念

### 1）workflow （工作流程）

- 持续集成一次运行的过程，就是一个 workflow

### 2）job （任务）

- 一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务

### 3）step（步骤）

- 每个 job 由多个 step 构成，一步步完成

### 4）action （动作）

- 每个 step 可以依次执行一个或多个命令（action）

## 2.使用

- 在项目根目录新建 `.github` 目录 -> `workflow` 目录 -> `.yml` 文件

  ```yml
  name: GitHub Actions Build and Deploy

  on:
    push:
      branches:
        - master
        - v*
      paths:
        - docs/**
        - typings/**
        - .umirc.js
        - tsconfig.json
        - package.json
        - .github/workflows/*

  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v2.3.1
        - name: Install
          run: npm install
        - name: Build docs
          run: npm run docs
        - name: Deploy docs
          uses: JamesIves/github-pages-deploy-action@4.1.7
          with:
            branch: gh-pages
            folder: site
            target-folder: ${{github.ref}}
  ```
