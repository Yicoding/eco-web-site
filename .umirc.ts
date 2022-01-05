import { defineConfig } from 'dumi';

const publicPath = process.env.NODE_ENV === 'production' ? `./` : '/';

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
  // mfsu: {},
  // webpack5: {},
  hash: true,
  // more config: https://d.umijs.org/config
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '基础',
      children: [
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
          title: '文档dom',
          path: '/base/dom',
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
        {
          title: 'node',
          path: '/base/node',
        },
        {
          title: 'markdown',
          path: '/base/markdown',
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
      ],
    },
    {
      title: '工程化',
      children: [
        {
          title: '前端工程化',
          path: '/engineering/base',
        },
        {
          title: '模块化规范',
          path: '/engineering/modular',
        },
        {
          title: '模块工具',
          path: '/engineering/tool',
        },
        {
          title: '打包工具',
          path: '/engineering/build',
        },
        {
          title: 'git',
          path: '/engineering/git',
        },
        {
          title: 'AST',
          path: '/engineering/ast',
        },
        {
          title: 'CI/CD',
          path: '/engineering/ast',
        },
      ],
    },
    {
      title: '核心竞争力',
      children: [
        {
          title: '设计模式',
          path: '/core/mode',
        },
        {
          title: '数据结构',
          path: '/core/data',
        },
        {
          title: '算法',
          path: '/core/algorithm',
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
          title: 'Virtual DOM 和 DOM-diff',
          path: '/other/diff',
        },
        {
          title: '前端性能优化',
          path: '/other/perform',
        },
        {
          title: '浏览器缓存机制',
          path: '/other/cache',
        },
        {
          title: '微信公众号开发',
          path: '/other/wechat',
        },
        {
          title: '微信支付',
          path: '/other/pay',
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
            title: '6.内存管理机制',
            path: '/base/js/memory',
          },
          {
            title: '7.作用域和执行上下文',
            path: '/base/js/scope',
          },
          {
            title: '8.this指向',
            path: '/base/js/this',
          },
          {
            title: '9.new/call/apply/bind',
            path: '/base/js/new',
          },
          {
            title: '10.闭包',
            path: '/base/js/closure',
          },
          {
            title: '11.面向对象编程',
            path: '/base/js/object',
          },
          {
            title: '12.Event Loop 事件循环',
            path: '/base/js/loop',
          },
          {
            title: '13.事件冒泡和捕获',
            path: '/base/js/bubble',
          },
          {
            title: '14.正则',
            path: '/base/js/regexp',
          },
          {
            title: '15.深浅拷贝',
            path: '/base/js/clone',
          },
          {
            title: '16.数据劫持和代理',
            path: '/base/js/hijack',
          },
          {
            title: '17.防抖/节流',
            path: '/base/js/shake',
          },
          {
            title: '18.递归',
            path: '/base/js/recursion',
          },
          {
            title: '19.数组扁平化flat',
            path: '/base/js/flat',
          },
          {
            title: '20.函数重载',
            path: '/base/js/heavy',
          },
          {
            title: '21.函数柯里化curry',
            path: '/base/js/curry',
          },
          {
            title: '22.函数组合compose',
            path: '/base/js/compose',
          },
          {
            title: '23.斐波那契数列',
            path: '/base/js/fibo',
          },
          {
            title: '24.尾调用',
            path: '/base/js/tail',
          },
          {
            title: '25.零散知识点',
            path: '/base/js/small',
          },
        ],
      },
    ],
    '/base/esnext': [
      {
        children: [
          {
            title: '1.ECMAScript',
            path: '/base/esnext',
          },
          {
            title: '2.ES6(ES2015)',
            path: '/base/esnext/es6',
          },
          {
            title: '3.ES7(ES2016)',
            path: '/base/esnext/es7',
          },
          {
            title: '4.ES8(ES2017)',
            path: '/base/esnext/es8',
          },
          {
            title: '5.ES9(ES2018)',
            path: '/base/esnext/es9',
          },
          {
            title: '6.ES10(ES2019)',
            path: '/base/esnext/es10',
          },
          {
            title: '7.ES11(ES2020)',
            path: '/base/esnext/es11',
          },
          {
            title: '8.ES提案',
            path: '/base/esnext/es12',
          },
          {
            title: '9.Promise/async/Generator 实现原理解析',
            path: '/base/esnext/principle',
          },
        ],
      },
    ],
    '/base/css': [
      {
        children: [
          {
            title: '1.css基础',
            path: '/base/css',
          },
          {
            title: '2.css3',
            path: '/base/css/css3',
          },
          {
            title: '3.实用技巧',
            path: '/base/css/skill',
          },
          {
            title: '4.CSS变量和CSS Modules',
            path: '/base/css/module',
          },
        ],
      },
    ],
    '/base/dom': [
      {
        children: [
          {
            title: '文档dom',
            path: '/base/dom',
          },
        ],
      },
    ],
    '/base/html': [
      {
        children: [
          {
            title: 'html',
            path: '/base/html',
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
            title: '2.浏览器进程和线程',
            path: '/base/bom/process',
          },
          {
            title: '3.PWA',
            path: '/base/bom/pwa',
          },
          {
            title: '4.web Worker',
            path: '/base/bom/webworker',
          },
          {
            title: '5.web socket',
            path: '/base/bom/websocket',
          },
        ],
      },
    ],
    // 计算机网络
    '/base/internet': [
      {
        children: [
          {
            title: '1.UDP',
            path: '/base/internet',
          },
          {
            title: '2.TCP',
            path: '/base/internet/tcp',
          },
          {
            title: '3.HTTP',
            path: '/base/internet/http',
          },
          {
            title: '4.HTTPS',
            path: '/base/internet/https',
          },
          {
            title: '5.输入 URL 到页面渲染的整个流程',
            path: '/base/internet/url',
          },
          {
            title: '6.跨域',
            path: '/base/internet/cross',
          },
          {
            title: '7.前端网络安全',
            path: '/base/internet/safe',
          },
        ],
      },
    ],
    '/base/ts': [
      {
        children: [
          {
            title: '1.TypeScript 图谱',
            path: '/base/ts',
          },
          {
            title: '2.前置知识',
            path: '/base/ts/pre',
          },
          {
            title: '3.ts中的类型',
            path: '/base/ts/type',
          },
          {
            title: '4.枚举类型(enum)',
            path: '/base/ts/enum',
          },
          {
            title: '5.接口(interface)',
            path: '/base/ts/interface',
          },
          {
            title: '6.类(class)',
            path: '/base/ts/class',
          },
          {
            title: '7.函数(Function)',
            path: '/base/ts/function',
          },
          {
            title: '8.泛型(generic)',
            path: '/base/ts/generic',
          },
          {
            title: '9.类型断言与类型守卫',
            path: '/base/ts/assert',
          },
          {
            title: '10.类型兼容性',
            path: '/base/ts/compatible',
          },
          {
            title: '11.高级类型',
            path: '/base/ts/senior',
          },
          {
            title: '12.可辨识联合类型',
            path: '/base/ts/union',
          },
          {
            title: '13.装饰器',
            path: '/base/ts/decorator',
          },
          {
            title: '14.赋值断言、is 关键字、可调用类型注解和类型推导',
            path: '/base/ts/compre',
          },
        ],
      },
    ],
    '/base/node': [
      {
        children: [
          {
            title: '1.node 基础',
            path: '/base/node',
          },
          {
            title: '2.node 实战',
            path: '/base/node/combat',
          },
          {
            title: '3.服务器迁移',
            path: '/base/node/transfer',
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
            title: '1.react基础',
            path: '/frame/react',
          },
          {
            title: '2.react进阶',
            path: '/frame/react/high',
          },
          {
            title: '3.hooks',
            path: '/frame/react/hooks',
          },
          {
            title: '4.react-router',
            path: '/frame/react/router',
          },
          {
            title: '5.状态管理redux',
            path: '/frame/react/redux',
          },
          {
            title: '6.状态管理mobx',
            path: '/frame/react/mobx',
          },
          {
            title: '7.react-ssr',
            path: '/frame/react/ssr',
          },
          {
            title: '8.Create React App',
            path: '/frame/react/cra',
          },
        ],
      },
    ],
    // Vue
    '/frame/vue': [
      {
        children: [
          {
            title: '1.vue基础',
            path: '/frame/vue',
          },
          {
            title: '2.vue进阶',
            path: '/frame/vue',
          },
          {
            title: '3.vuex',
            path: '/frame/vue',
          },
          {
            title: '4.运行机制',
            path: '/frame/vue',
          },
          {
            title: '5.生命周期',
            path: '/frame/vue',
          },
          {
            title: '6.响应式原理',
            path: '/frame/vue',
          },
          {
            title: '7.diff原理',
            path: '/frame/vue',
          },
          {
            title: '8.编译原理',
            path: '/frame/vue',
          },
        ],
      },
    ],
    '/frame/applet': [
      {
        children: [
          {
            title: '1.小程序基础',
            path: '/frame/applet',
          },
          {
            title: '2.小程序双线程架构',
            path: '/frame/applet/double',
          },
          {
            title: '3.小程序场景',
            path: '/frame/applet/scene',
          },
          {
            title: '4.小程序性能优化',
            path: '/frame/applet/performance',
          },
        ],
      },
    ],
    /***************** nav: 框架 *******************/
    /***************** nav: 工程化 *******************/
    // 模块化
    '/engineering/modular': [
      {
        children: [
          {
            title: '模块化规范',
            path: '/engineering/modular',
          },
        ],
      },
    ],
    // 工程化
    '/engineering/base': [
      {
        children: [
          {
            title: '前端工程化',
            path: '/engineering/base',
          },
        ],
      },
    ],
    // git
    '/engineering/git': [
      {
        children: [
          {
            title: '1.版本控制系统',
            path: '/engineering/git',
          },
          {
            title: '2.HEAD/master/branch',
            path: '/engineering/git/concept',
          },
          {
            title: '3.add/commit',
            path: '/engineering/git/add',
          },
          {
            title: '4.status/log/show/diff',
            path: '/engineering/git/log',
          },
          {
            title: '5.checkout',
            path: '/engineering/git/checkout',
          },
          {
            title: '6.merge',
            path: '/engineering/git/merge',
          },
          {
            title: '7.rebase',
            path: '/engineering/git/rebase',
          },
          {
            title: '8.pull/push',
            path: '/engineering/git/push',
          },
          {
            title: '9.stash',
            path: '/engineering/git/stash',
          },
          {
            title: '10.reflog',
            path: '/engineering/git/reflog',
          },
          {
            title: '11.tag',
            path: '/engineering/git/tag',
          },
          {
            title: '12.cherry-pick',
            path: '/engineering/git/cherry-pick',
          },
          {
            title: '13.常用命令总结',
            path: '/engineering/git/summary',
          },
        ],
      },
    ],
    // 模块工具
    '/engineering/tool': [
      {
        children: [
          {
            title: '1.npm',
            path: '/engineering/tool',
          },
          {
            title: '2.yarn',
            path: '/engineering/tool/yarn',
          },
          {
            title: '3.npx',
            path: '/engineering/tool/npx',
          },
          {
            title: '4.nvm',
            path: '/engineering/tool/nvm',
          },
          {
            title: '5.nrm',
            path: '/engineering/tool/nrm',
          },
          {
            title: '6.pnpm',
            path: '/engineering/tool/pnpm',
          },
          {
            title: '7.yalc',
            path: '/engineering/tool/yalc',
          },
          {
            title: '8.eslint 和 prettier',
            path: '/engineering/tool/eslint',
          },
        ],
      },
    ],
    // 打包工具
    '/engineering/build': [
      {
        children: [
          {
            title: '1.babel',
            path: '/engineering/build',
          },
          {
            title: '2.webpack基础',
            path: '/engineering/build/webpack',
          },
          {
            title: '3.webpack核心',
            path: '/engineering/build/webpack-core',
          },
          {
            title: '4.webpack从0搭建',
            path: '/engineering/build/webpack-site',
          },
          {
            title: '5.webpack性能优化',
            path: '/engineering/build/webpack-promote',
          },
          {
            title: '6.webpack考点',
            path: '/engineering/build/webpack-point',
          },
          {
            title: '7.rollup',
            path: '/engineering/build/rollup',
          },
          {
            title: '8.esbuild',
            path: '/engineering/build/esbuild',
          },
          {
            title: '9.vite',
            path: '/engineering/build/vite',
          },
        ],
      },
    ],
    /***************** nav: 工程化 *******************/
    /***************** nav: 核心竞争力 *******************/
    '/core/mode': [
      {
        children: [
          {
            title: '1.设计模式',
            path: '/core/mode',
          },
          {
            title: '2.SOLID设计原则',
            path: '/core/mode/principle',
          },
          {
            title: '3.创建型',
            path: '/core/mode/create',
          },
          {
            title: '4.结构型',
            path: '/core/mode/structure',
          },
          {
            title: '5.行为型',
            path: '/core/mode/behavior',
          },
        ],
      },
    ],
    '/core/data': [
      {
        children: [
          {
            title: '1.数组',
            path: '/core/data',
          },
          {
            title: '2.栈',
            path: '/core/data/stack',
          },
          {
            title: '3.队列',
            path: '/core/data/queue',
          },
          {
            title: '4.链表',
            path: '/core/data/chain',
          },
          {
            title: '5.树（二叉树）',
            path: '/core/data/tree',
          },
        ],
      },
    ],
    '/core/algorithm': [
      {
        children: [
          {
            title: '1.时间复杂度与空间复杂度',
            path: '/core/algorithm',
          },
          {
            title: '2.数组的应用',
            path: '/core/algorithm/array',
          },
          {
            title: '3.字符串的应用',
            path: '/core/algorithm/string',
          },
          {
            title: '4.链表的应用',
            path: '/core/algorithm/chain',
          },
          {
            title: '5.快慢指针与多指针——链表的复杂操作',
            path: '/core/algorithm/point',
          },
          {
            title: '6.环形链表',
            path: '/core/algorithm/ringchain',
          },
          {
            title: '7.栈',
            path: '/core/algorithm/stack',
          },
          {
            title: '8.队列',
            path: '/core/algorithm/queue',
          },
          {
            title: '9.遍历: DFS与BFS',
            path: '/core/algorithm/dfs',
          },
          {
            title: '算法做题思路总结',
            path: '/core/algorithm/summary',
          },
        ],
      },
    ],
    /***************** nav: 核心竞争力 *******************/
    /***************** nav: 其他 *******************/
    '/other/problem': [{ children: ['/other/problem'] }],
    '/other/pay': [{ children: ['/other/pay'] }],
    '/other/wechat': [{ children: ['/other/wechat'] }],
    '/other/diff': [{ children: ['/other/diff'] }],
    '/other/cache': [
      {
        children: [
          '/other/cache',
          '/other/cache/store',
          '/other/cache/offline',
        ],
      },
    ],
    '/other/perform': [
      {
        children: [
          {
            title: '性能优化',
            path: '/other/perform',
          },
          {
            title: '性能检测',
            path: '/other/perform/detection',
          },
        ],
      },
    ],
    /***************** nav: 其他 *******************/
  },
};

export default defineConfig(umiConfig);
