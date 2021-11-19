// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/kaiyu.kong/Ecode/2021/eco-web-site/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1637238012000,
          "hero": {
            "title": "eco-web-site",
            "desc": "<div class=\"markdown\"><p>前端技术站点</p></div>",
            "actions": [
              {
                "text": "快速开始",
                "link": "/base"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "入门",
              "desc": "<div class=\"markdown\"><p>内功深厚</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "进阶",
              "desc": "<div class=\"markdown\"><p>掌握利器</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "大成",
              "desc": "<div class=\"markdown\"><p>推动创新</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br /></p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - eco-web-site"
      },
      {
        "path": "/interview",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/Interview/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/Interview/index.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "面试题",
            "order": 4,
            "path": "/interview"
          },
          "title": "JavaScript 库",
          "order": 0,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 库",
              "heading": "javascript-库"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "Vue",
              "heading": "vue"
            }
          ]
        },
        "title": "JavaScript 库 - eco-web-site"
      },
      {
        "path": "/algorithm",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/algorithm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/index.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "工程化",
            "order": 2,
            "path": "/algorithm"
          },
          "title": "JavaScript 库",
          "order": 0,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 库",
              "heading": "javascript-库"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "Vue",
              "heading": "vue"
            }
          ]
        },
        "title": "JavaScript 库 - eco-web-site"
      },
      {
        "path": "/base/javascript",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/javascript.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/javascript.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "基础",
            "order": 0,
            "path": "/base"
          },
          "title": "JavaScript",
          "order": 1,
          "toc": "menu",
          "slugs": [
            {
              "depth": 2,
              "value": "基础",
              "heading": "基础"
            },
            {
              "depth": 3,
              "value": "数据类型",
              "heading": "数据类型"
            }
          ]
        },
        "title": "JavaScript - eco-web-site"
      },
      {
        "path": "/base/markdown",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "基础",
            "order": 0,
            "path": "/base"
          },
          "title": "MD书写规范",
          "order": 0,
          "toc": false,
          "slugs": [
            {
              "depth": 1,
              "value": "MD 书写规范",
              "heading": "md-书写规范"
            },
            {
              "depth": 2,
              "value": "1.标题",
              "heading": "1标题"
            },
            {
              "depth": 2,
              "value": "2.换行",
              "heading": "2换行"
            },
            {
              "depth": 2,
              "value": "3.字体样式",
              "heading": "3字体样式"
            },
            {
              "depth": 2,
              "value": "4.分割线",
              "heading": "4分割线"
            },
            {
              "depth": 2,
              "value": "5.列表",
              "heading": "5列表"
            },
            {
              "depth": 2,
              "value": "6.区块引用",
              "heading": "6区块引用"
            },
            {
              "depth": 2,
              "value": "7.链接",
              "heading": "7链接"
            },
            {
              "depth": 2,
              "value": "8.图片",
              "heading": "8图片"
            },
            {
              "depth": 2,
              "value": "9.代码块",
              "heading": "9代码块"
            },
            {
              "depth": 2,
              "value": "10.表格",
              "heading": "10表格"
            },
            {
              "depth": 2,
              "value": "11.转义",
              "heading": "11转义"
            },
            {
              "depth": 2,
              "value": "12.锚点",
              "heading": "12锚点"
            },
            {
              "depth": 3,
              "value": "第一种写法",
              "heading": "第一种写法-9"
            },
            {
              "depth": 1,
              "value": "这是一个一级标题",
              "heading": "这是一个一级标题-8"
            },
            {
              "depth": 3,
              "value": "第二种写法",
              "heading": "第二种写法-8"
            },
            {
              "depth": 1,
              "value": "一级标题",
              "heading": "一级标题-9"
            },
            {
              "depth": 2,
              "value": "二级标题",
              "heading": "二级标题-9"
            },
            {
              "depth": 3,
              "value": "三级标题",
              "heading": "三级标题-9"
            },
            {
              "depth": 4,
              "value": "四级标题",
              "heading": "四级标题-9"
            },
            {
              "depth": 5,
              "value": "五级标题",
              "heading": "五级标题-9"
            },
            {
              "depth": 6,
              "value": "六级标题",
              "heading": "六级标题-9"
            },
            {
              "depth": 3,
              "value": "加粗",
              "heading": "加粗-5"
            },
            {
              "depth": 3,
              "value": "斜体",
              "heading": "斜体-5"
            },
            {
              "depth": 3,
              "value": "加粗并斜体",
              "heading": "加粗并斜体-5"
            },
            {
              "depth": 3,
              "value": "删除线",
              "heading": "删除线-5"
            },
            {
              "depth": 3,
              "value": "无序列表",
              "heading": "无序列表-10"
            },
            {
              "depth": 3,
              "value": "有序列表",
              "heading": "有序列表-6"
            },
            {
              "depth": 3,
              "value": "行内式",
              "heading": "行内式-7"
            },
            {
              "depth": 3,
              "value": "参数式",
              "heading": "参数式-7"
            },
            {
              "depth": 3,
              "value": "自动链接",
              "heading": "自动链接-7"
            },
            {
              "depth": 3,
              "value": "行内式",
              "heading": "行内式-3"
            },
            {
              "depth": 3,
              "value": "参数式",
              "heading": "参数式-3"
            },
            {
              "depth": 3,
              "value": "单行代码块",
              "heading": "单行代码块-28"
            },
            {
              "depth": 3,
              "value": "多行代码块",
              "heading": "多行代码块-26"
            }
          ]
        },
        "title": "MD书写规范 - eco-web-site"
      },
      {
        "path": "/base/javascript/type",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/javascript/type.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/javascript/type.md",
          "updatedTime": 1637238012000,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "数据类型",
              "heading": "数据类型"
            }
          ],
          "title": "数据类型",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/javascript",
            "title": "Javascript"
          }
        },
        "title": "数据类型 - eco-web-site"
      },
      {
        "path": "/base/markdown/bash",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/bash.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/bash.md",
          "updatedTime": 1637252502491,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "单行代码块",
              "heading": "单行代码块"
            },
            {
              "depth": 3,
              "value": "多行代码块",
              "heading": "多行代码块"
            }
          ],
          "title": "单行代码块",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "单行代码块 - eco-web-site"
      },
      {
        "path": "/base/markdown/block",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/block.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/block.md",
          "updatedTime": 1637252502509,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Block"
        },
        "title": "Block - eco-web-site"
      },
      {
        "path": "/base/markdown/br",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/br.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/br.md",
          "updatedTime": 1637238012000,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Br"
        },
        "title": "Br - eco-web-site"
      },
      {
        "path": "/base/markdown/font",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/font.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/font.md",
          "updatedTime": 1637252502536,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "加粗",
              "heading": "加粗"
            },
            {
              "depth": 3,
              "value": "斜体",
              "heading": "斜体"
            },
            {
              "depth": 3,
              "value": "加粗并斜体",
              "heading": "加粗并斜体"
            },
            {
              "depth": 3,
              "value": "删除线",
              "heading": "删除线"
            }
          ],
          "title": "加粗",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "加粗 - eco-web-site"
      },
      {
        "path": "/base/markdown/image",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/image.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/image.md",
          "updatedTime": 1637252502562,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "行内式",
              "heading": "行内式"
            },
            {
              "depth": 3,
              "value": "参数式",
              "heading": "参数式"
            }
          ],
          "title": "行内式",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "行内式 - eco-web-site"
      },
      {
        "path": "/base/markdown/link",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/link.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/link.md",
          "updatedTime": 1637252502587,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "行内式",
              "heading": "行内式"
            },
            {
              "depth": 3,
              "value": "参数式",
              "heading": "参数式"
            },
            {
              "depth": 3,
              "value": "自动链接",
              "heading": "自动链接"
            }
          ],
          "title": "行内式",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "行内式 - eco-web-site"
      },
      {
        "path": "/base/markdown/mark",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/mark.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/mark.md",
          "updatedTime": 1637252502597,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Mark"
        },
        "title": "Mark - eco-web-site"
      },
      {
        "path": "/base/markdown/split",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/split.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/split.md",
          "updatedTime": 1637252502614,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Split"
        },
        "title": "Split - eco-web-site"
      },
      {
        "path": "/base/markdown/table",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/table.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/table.md",
          "updatedTime": 1637252502631,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Table"
        },
        "title": "Table - eco-web-site"
      },
      {
        "path": "/base/markdown/title",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/title.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/title.md",
          "updatedTime": 1637252500000,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "第一种写法",
              "heading": "第一种写法"
            },
            {
              "depth": 1,
              "value": "这是一个一级标题",
              "heading": "这是一个一级标题"
            },
            {
              "depth": 3,
              "value": "第二种写法",
              "heading": "第二种写法"
            },
            {
              "depth": 1,
              "value": "一级标题",
              "heading": "一级标题"
            },
            {
              "depth": 2,
              "value": "二级标题",
              "heading": "二级标题"
            },
            {
              "depth": 3,
              "value": "三级标题",
              "heading": "三级标题"
            },
            {
              "depth": 4,
              "value": "四级标题",
              "heading": "四级标题"
            },
            {
              "depth": 5,
              "value": "五级标题",
              "heading": "五级标题"
            },
            {
              "depth": 6,
              "value": "六级标题",
              "heading": "六级标题"
            }
          ],
          "title": "第一种写法",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "第一种写法 - eco-web-site"
      },
      {
        "path": "/base/markdown/trans",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/trans.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/trans.md",
          "updatedTime": 1637252500000,
          "hide": true,
          "slugs": [],
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          },
          "title": "Trans"
        },
        "title": "Trans - eco-web-site"
      },
      {
        "path": "/base/markdown/ul",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/base/markdown/ul.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base/markdown/ul.md",
          "updatedTime": 1637252500000,
          "hide": true,
          "slugs": [
            {
              "depth": 3,
              "value": "无序列表",
              "heading": "无序列表"
            },
            {
              "depth": 3,
              "value": "有序列表",
              "heading": "有序列表"
            }
          ],
          "title": "无序列表",
          "nav": {
            "path": "/base",
            "title": "基础"
          },
          "group": {
            "path": "/base/markdown",
            "title": "Markdown"
          }
        },
        "title": "无序列表 - eco-web-site"
      },
      {
        "path": "/engineering",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/engineering/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/engineering/index.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "算法",
            "order": 3,
            "path": "/engineering"
          },
          "title": "JavaScript 库",
          "order": 0,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 库",
              "heading": "javascript-库"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "Vue",
              "heading": "vue"
            }
          ]
        },
        "title": "JavaScript 库 - eco-web-site"
      },
      {
        "path": "/frame",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/frame/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/frame/index.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "框架",
            "order": 1,
            "path": "/frame"
          },
          "title": "JavaScript 库",
          "order": 0,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 库",
              "heading": "javascript-库"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "Vue",
              "heading": "vue"
            }
          ]
        },
        "title": "JavaScript 库 - eco-web-site"
      },
      {
        "path": "/other",
        "component": require('/Users/kaiyu.kong/Ecode/2021/eco-web-site/docs/other/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/other/index.md",
          "updatedTime": 1637238012000,
          "nav": {
            "title": "其他",
            "order": 5,
            "path": "/other"
          },
          "title": "JavaScript 库",
          "order": 0,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 库",
              "heading": "javascript-库"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "Vue",
              "heading": "vue"
            }
          ]
        },
        "title": "JavaScript 库 - eco-web-site"
      },
      {
        "path": "/base",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/base/markdown"
      }
    ],
    "title": "eco-web-site",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
