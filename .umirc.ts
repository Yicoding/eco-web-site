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
  dynamicImport: {},
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
          title: 'esnext',
          path: '/base/esnext',
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
          title: '计算机网络',
          path: '/base/internet',
        },
        {
          title: 'ts',
          path: '/base/ts',
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
          title: 'react-native',
          path: '/frame/koa',
        },
        {
          title: 'electron',
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
          title: '模块工具',
          path: '/algorithm/tool',
        },
        {
          title: '打包工具',
          path: '/algorithm/build',
        },
        {
          title: 'git',
          path: '/algorithm/git',
        },
        {
          title: 'AST',
          path: '/algorithm/ast',
        },
        {
          title: 'CI/CD',
          path: '/algorithm/ast',
        },
      ],
    },
    {
      title: 'node',
      children: [
        {
          title: '基础',
          path: '/node/index',
        },
        {
          title: 'express',
          path: '/node/express',
        },
        {
          title: 'koa',
          path: '/node/koa',
        },
        {
          title: 'mysql',
          path: '/node/mysql',
        },
        {
          title: 'nginx',
          path: '/node/nginx',
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
      title: '其他',
      children: [
        {
          title: '面试题',
          path: '/other/interview',
        },
        {
          title: '前端性能优化',
          path: '/other/interview',
        },
        {
          title: '前端缓存技术',
          path: '/other/interview',
        },
        {
          title: '微信公众号开发',
          path: '/other/interview',
        },
        {
          title: '微信支付',
          path: '/other/interview',
        },
        {
          title: '微前端',
          path: '/other/interview',
        },
        {
          title: '低代码平台',
          path: '/other/interview',
        },
        {
          title: 'hybrid',
          path: '/other/interview',
        },
        {
          title: '开发遇见的问题',
          path: '/other/problem',
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
            title: '1.js图谱',
            path: '/base/js',
          },
          {
            title: '2.基本概念',
            path: '/base/js/base',
          },
          {
            title: '3.数据类型',
            path: '/base/js/type',
          },
          {
            title: '4.数据类型检测',
            path: '/base/js/typeof',
          },
          {
            title: '5.数据类型转换',
            path: '/base/js/transform',
          },
          {
            title: '6.作用域和执行上下文',
            path: '/base/js/scope',
          },
          {
            title: '7.this指向',
            path: '/base/js/this',
          },
          {
            title: '8.new/bind/call/apply',
            path: '/base/js/new',
          },
          {
            title: '9.闭包',
            path: '/base/js/closure',
          },
          {
            title: '10.面向对象编程',
            path: '/base/js/object',
          },
          {
            title: '11.递归',
            path: '/base/js/recursion',
          },
          {
            title: '12.内存管理机制',
            path: '/base/js/memory',
          },
          {
            title: '13.函数重载',
            path: '/base/js/heavy',
          },
          {
            title: '14.正则',
            path: '/base/js/regexp',
          },
          {
            title: '15.Event Loop 事件循环',
            path: '/base/js/loop',
          },
          {
            title: '16.事件冒泡和捕获',
            path: '/base/js/bubble',
          },
          {
            title: '17.深浅拷贝',
            path: '/base/js/clone',
          },
          {
            title: '18.设计模式',
            path: '/base/js/mode',
          },
          {
            title: '19.数据劫持',
            path: '/base/js/hijack',
          },
          {
            title: '20.防抖/节流',
            path: '/base/js/shake',
          },
          {
            title: '21.数组扁平化',
            path: '/base/js/flatten',
          },
          {
            title: '22.函数柯里化',
            path: '/base/js/curry',
          },
          {
            title: '23.arguments/callee/caller',
            path: '/base/js/arguments',
          },
          {
            title: '24.零散知识点',
            path: '/base/js/small',
          },
        ],
      },
    ],
    '/base/bom': [
      {
        children: [
          {
            title: '1.浏览器对象',
            path: '/base/bom',
          },
          {
            title: '2.浏览器进程',
            path: '/base/bom',
          },
          {
            title: '3.浏览器线程',
            path: '/base/bom',
          },
          {
            title: '4.PWA',
            path: '/base/bom',
          },
          {
            title: '5.web Worker',
            path: '/base/bom',
          },
          {
            title: '6.web socket',
            path: '/base/bom',
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
    '/frame/applet': [],
    '/frame/react-native': [],
    '/frame/electron': [],
    /***************** nav: 框架 *******************/
    /***************** nav: 工程化 *******************/
    // 模块化
    '/algorithm/modular': [
      {
        children: [
          {
            title: '1.IIFE',
            path: 'base',
          },
          {
            title: '2.commonJS',
            path: 'base',
          },
          {
            title: '3.AMD',
            path: 'hooks',
          },
          {
            title: '4.CMD',
            path: 'hooks',
          },
          {
            title: '5.UMD',
            path: 'hooks',
          },
          {
            title: '6.ESModule',
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
            title: '1.版本控制系统',
            path: '/algorithm/git',
          },
          {
            title: '2.HEAD/master/branch',
            path: '/algorithm/git/concept',
          },
          {
            title: '3.add/commit',
            path: '/algorithm/git/add',
          },
          {
            title: '4.status/log/show/diff',
            path: '/algorithm/git/log',
          },
          {
            title: '5.merge',
            path: '/algorithm/git/merge',
          },
          {
            title: '6.rebase',
            path: '/algorithm/git/rebase',
          },
          {
            title: '7.pull/push',
            path: '/algorithm/git/push',
          },
          {
            title: '8.stash',
            path: '/algorithm/git/stash',
          },
          {
            title: '9.reflog',
            path: '/algorithm/git/reflog',
          },
          {
            title: '10.tag',
            path: '/algorithm/git/tag',
          },
          {
            title: '11.常用命令总结',
            path: '/algorithm/git/summary',
          },
        ],
      },
    ],
    // 模块工具
    '/algorithm/tool': [
      {
        children: [
          {
            title: '1.npm',
            path: '/algorithm/tool',
          },
          {
            title: '2.yarn',
            path: '/algorithm/tool/yarn',
          },
          {
            title: '3.npx',
            path: '/algorithm/tool/npx',
          },
          {
            title: '4.nvm',
            path: '/algorithm/tool/nvm',
          },
          {
            title: '5.nrm',
            path: '/algorithm/tool/nrm',
          },
          {
            title: '6.yalc',
            path: '/algorithm/tool/yalc',
          },
          {
            title: '7.eslint',
            path: '/algorithm/tool/eslint',
          },
        ],
      },
    ],
    // 打包工具
    '/algorithm/build': [
      {
        children: [
          {
            title: '1.babel',
            path: '/algorithm/build',
          },
          {
            title: '2.webpack',
            path: '/algorithm/build/webpack',
          },
          {
            title: '3.rollup',
            path: '/algorithm/build/rollup',
          },
          {
            title: '4.esbuild',
            path: '/algorithm/build/esbuild',
          },
          {
            title: '5.vite',
            path: '/algorithm/build/vite',
          },
        ],
      },
    ],
    /***************** nav: 工程化 *******************/
    /***************** nav: node *******************/
    '/node/index': [{ children: ['/node/index'] }],
    '/node/express': [{ children: ['/node/express'] }],
    '/node/koa': [{ children: ['/node/koa'] }],
    '/node/mysql': [{ children: ['/node/mysql'] }],
    '/node/nginx': [{ children: ['/node/nginx'] }],
    /***************** nav: node *******************/
  },
};

export default defineConfig(umiConfig);
