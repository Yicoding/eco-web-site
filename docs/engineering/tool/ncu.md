---
toc: menu
---

# ncu

批量升级全部项目npm依赖包到最新版本

- 执行以下命令进行全局安装：

```bash
npm install -g npm-check-updates
```

- 然后在项目根目录（有package.json文件的目录）下执行：

```bash
ncu
```

- 执行：

```bash
ncu -u
```

则会将package.json中所有依赖修改为最新版本。

- 最后，再执行：

```bash
yarn
```

进行依赖包的更新安装即可。

> ※注：更新依赖包有可能会出现不兼容的情况，更新前请先备份好package.json，以便恢复。

经过以上批量升级操作，项目的全部依赖包会升级到最新版本。

