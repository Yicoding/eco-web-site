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
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '基础',
      children: [
        {
          title: 'MarkDown',
          path: '/base/markdown',
        },
        {
          title: 'ES5',
          path: '/base/es5',
        },
        {
          title: 'ES6+',
          path: '/base/es6',
        },
        {
          title: 'CSS',
          path: '/base/css',
        },
        {
          title: '浏览器BOM',
          path: '/base/bom',
        },
        {
          title: 'TypeScript',
          path: '/base/ts',
        },
        {
          title: '计算机网络',
          path: '/base/internet',
        },
        {
          title: 'NodeJs',
          path: '/base/node',
        },
      ],
    },
    {
      title: '框架',
      children: [
        {
          title: 'React',
          path: '/frame/react',
        },
        {
          title: 'Vue',
          path: '/frame/vue',
        },
        {
          title: '小程序',
          path: '/frame/applet',
        },
        {
          title: 'Express',
          path: '/frame/express',
        },
        {
          title: 'Koa',
          path: '/frame/koa',
        },
      ],
    },
    {
      title: '工程化',
      children: [
        {
          title: '模块化',
          path: '/algorithm/modular',
        },
        {
          title: 'webpack',
          path: '/algorithm/webpack',
        },
        {
          title: 'babel',
          path: '/algorithm/babel',
        },
        {
          title: 'rollup',
          path: '/algorithm/rollup',
        },
        {
          title: 'vite',
          path: '/algorithm/vite',
        },
        {
          title: 'AST',
          path: '/algorithm/ast',
        },
        {
          title: 'git',
          path: '/algorithm/git',
        },
        {
          title: 'npm',
          path: '/algorithm/git',
        },
        {
          title: 'yarn',
          path: '/algorithm/git',
        },
        {
          title: 'npx',
          path: '/algorithm/git',
        },
        {
          title: 'nrm',
          path: '/algorithm/git',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Yicoding/eco-web-site',
    },
  ],
  menus: {
    /** nav: 基础 */
    // markdown
    '/base/markdown': [
      {
        children: ['base/markdown/index'],
      },
    ],
    // JavaScript
    '/base/javascript': [
      {
        children: [
          {
            title: 'ES5',
            path: 'es5',
          },
          {
            title: 'ES6+',
            path: 'es6',
          },
          {
            title: '浏览器BOM',
            path: 'bom',
          },
        ],
      },
    ],
    // JavaScript
    '/base/internet': [
      {
        children: [
          {
            title: 'HTTP',
            path: 'http',
          },
          {
            title: 'HTTP2',
            path: 'http2',
          },
          {
            title: 'HTTPS',
            path: 'https',
          },
          {
            title: 'TCP/IP',
            path: 'tcp',
          },
          {
            title: '前端网络安全',
            path: 'tcp',
          },
        ],
      },
    ],
    /** nav: 基础 */
    /** nav: 框架 */
    // React
    '/frame/react': [
      {
        children: [
          {
            title: 'react基础',
            path: 'base',
          },
          {
            title: 'react-router',
            path: 'hooks',
          },
        ],
      },
    ],
    // Vue
    '/frame/vue': [
      {
        children: [
          {
            title: 'vue基础',
            path: 'base',
          },
          {
            title: 'vue-router',
            path: 'hooks',
          },
        ],
      },
    ],
    /** nav: 框架 */
    /** nav: 工程化 */
    // 模块化
    '/algorithm/modular': [
      {
        children: [
          {
            title: 'IIFE',
            path: 'base',
          },
          {
            title: 'commonJS',
            path: 'base',
          },
          {
            title: 'AMD',
            path: 'hooks',
          },
          {
            title: 'CMD',
            path: 'hooks',
          },
          {
            title: 'UMD',
            path: 'hooks',
          },
          {
            title: 'ESModule',
            path: 'hooks',
          },
        ],
      },
    ],
    /** nav: 工程化 */
  },
};

export default defineConfig(umiConfig);
