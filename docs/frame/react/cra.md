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

### 1）js 支持

- 修改 `config/webpack.config.js`

```js
// config/webpack.config.js
// ...
const path = require('path');

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

### 2）ts 支持

- 添加 `tsconfig.paths.json` 文件

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

## 4.路由配置 v6 版

### 1）安装依赖包

```bash
yarn add react-router-dom
```

### 2）封装路由

```js
// routers/index.tsx
import { HashRouter, Route, Routes } from 'react-router-dom';

import Root from '@/pages/root';
import Home from '@/pages/home';
import Detail from '@/pages/detail';

const Routers = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </HashRouter>
);

export default Routers;
```

### 3）使用

```js
import Routers from './routers';

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
```
