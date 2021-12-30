---
toc: menu
---

# Create React App

## 1.安装 ts 版本

```shell
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```

## 2.取出配置文件和依赖项

```bash
yarn eject
```

## 3.路径别名

### 1）修改 config/webpack.config.js

```js
// config/webpack.config.js
// ...
modules.export = {
  // ...
  resolve: {
    // ...
    alias: {
      // ...
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
```

### 2）添加 tsconfig.paths.json 文件

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 3）修改 tsconfig.json

```json
{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {
    // ...
  }
}
```

### 4）页面使用

```js
import Home from '@/pages/home';
```

## 4.路由

```bash
yarn add react-router-dom
```
