const path = require('path');
const glob = require('glob');

const options = {
  ignore: [
    '**/.vuepress/**',
    '/README.md',
    '**/question/**'
  ],
  cwd: 'docs/',
};
const files = glob.sync('**/', options);
let docs = {};
files.forEach(v=>{
  docs[v] = glob.sync(`${v}/*`, options).map(v => '/'+v);
})

module.exports = {
  base: '/docs-interview/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FE-interview',
      description: '个人收集 and 个人原创',
    },
  },
  themeConfig: {
    sidebar: [
      {
        title: '大纲',
        collapsable: false,
        path: '/'
      },
      {
        title: 'ecmascript',
        collapsable: true,
        children: docs['es-question/']
      },
      {
        title: '浏览器'
      },
      {
        title: 'css',
        collapsable: true,
        children: docs['css-question/']
      },
      {
        title: 'vue'
      },
      {
        title: 'react'
      },
      {
        title: 'typescript'
      },
      {
        title: 'git'
      },
      {
        title: 'rxjs'
      },
      {
        title: 'webpack'
      },
      {
        title: 'http',
        collapsable: true,
        children: docs['http-question/']
      },
      {
        title: 'node'
      },
      {
        title: '微信小程序'
      },
      {
        title: '算法',
        collapsable: true,
        children: docs['algorithm-question/']
      },
      {
        title: '统计'
      },
      {
        title: '测试'
      },
      {
        title: '发布/部署'
      },
      {
        title: '前端优化'
      },
      {
        title: '团队管理'
      },
      {
        title: '设计模式'
      },
      {
        title: '未归类问题',
        collapsable: true,
        children: docs['diy-question/']
      }
    ]
  }
}