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
  alias: {
    images: '/assets/images',
  },
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
          title: 'markdown',
          path: '/base/markdown',
        },
        {
          title: 'js',
          path: '/base/js',
        },
        {
          title: 'es6+',
          path: '/base/es6',
        },
        {
          title: 'css',
          path: '/base/css',
        },
        {
          title: 'html',
          path: '/base/html',
        },
        {
          title: '浏览器BOM',
          path: '/base/bom',
        },
        {
          title: 'ts',
          path: '/base/ts',
        },
        {
          title: '计算机网络',
          path: '/base/internet',
        },
        {
          title: 'nodejs',
          path: '/base/node',
        },
      ],
    },
    {
      title: '框架',
      children: [
        {
          title: 'react',
          path: '/frame/react',
        },
        {
          title: 'vue',
          path: '/frame/vue',
        },
        {
          title: '小程序',
          path: '/frame/applet',
        },
        {
          title: 'express',
          path: '/frame/express',
        },
        {
          title: 'koa',
          path: '/frame/koa',
        },
      ],
    },
    {
      title: '工程化',
      children: [
        {
          title: '前端工程化',
          path: '/algorithm/base',
        },
        {
          title: '模块化规范',
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
          path: '/algorithm/npm',
        },
        {
          title: 'yarn',
          path: '/algorithm/yarn',
        },
        {
          title: 'npx',
          path: '/algorithm/npx',
        },
        {
          title: 'nrm',
          path: '/algorithm/nrm',
        },
      ],
    },
    {
      title: '算法',
      children: [
        {
          title: '数组',
          path: '/engineering',
        },
      ],
    },
    {
      title: '面试题',
      children: [
        {
          title: '数组',
          path: '/interview',
        },
      ],
    },
    {
      title: '其他',
      children: [
        {
          title: '数组',
          path: '/other',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Yicoding/eco-web-site',
    },
  ],
  menus: {
    /***************** nav: 基础 *******************/
    // markdown
    '/base/markdown': [{ children: ['/base/markdown/index'] }],
    // js
    '/base/js': [
      {
        children: [
          {
            title: '数据类型',
            path: '/base/js',
          },
          {
            title: '数据类型检测',
            path: '/base/js/typeof',
          },
          {
            title: '函数',
            path: '/base/js/function',
          },
          {
            title: '面向对象编程',
            path: '/base/js/typeof',
          },
          {
            title: '递归',
            path: '/base/js/typeof',
          },
          {
            title: '作用域',
            path: '/base/js/typeof',
          },
          {
            title: 'this指向',
            path: '/base/js/typeof',
          },
          {
            title: '闭包',
            path: '/base/js/typeof',
          },
          {
            title: '内存泄露',
            path: '/base/js/typeof',
          },
          {
            title: '重载',
            path: '/base/js/typeof',
          },
        ],
      },
    ],
    // 计算机网络
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
    /***************** nav: 基础 *******************/
    /***************** nav: 框架 *******************/
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
    /***************** nav: 框架 *******************/
    /***************** nav: 工程化 *******************/
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
    // git
    '/algorithm/git': [
      {
        children: [
          {
            title: '版本控制系统',
            path: '/algorithm/git',
          },
          {
            title: 'HEAD、master、branch',
            path: '/algorithm/git/concept',
          },
          {
            title: 'add、commit',
            path: '/algorithm/git/add',
          },
          {
            title: 'status、log、show、diff',
            path: '/algorithm/git/log',
          },
          {
            title: 'merge',
            path: '/algorithm/git/merge',
          },
          {
            title: 'rebase',
            path: '/algorithm/git/rebase',
          },
          {
            title: 'pull、push',
            path: '/algorithm/git/push',
          },
        ],
      },
    ],
    /***************** nav: 工程化 *******************/
  },
  dynamicImport: {},
};

export default defineConfig(umiConfig);
