import { defineConfig } from 'dumi';

import pkg from './package.json';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? `https://yicoding.github.io/eco-web-site/refs/heads/${pkg.branch}/`
    : '/';

const umiConfig = {
  title: 'eco-web-site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'site',
  mode: 'site',
  publicPath,
  devServer: {
    port: 8091,
  },
  history: {
    type: 'hash',
  },
  hash: true,
  // more config: https://d.umijs.org/config
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/Yicoding/eco-web-site',
    },
  ],
};

export default defineConfig(umiConfig);
