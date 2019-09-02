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
        title: 'vue',
        collapsable: true,
        children: docs['vue-question/']
      },
      {
        title: 'react',
        collapsable: true,
        children: docs['react-question/']
      },
      {
        title: 'typescript',
        collapsable: true,
        children: docs['typescript-question/']
      },
      {
        title: 'git',
        collapsable: true,
        children: docs['git-question/']
      },
      {
        title: 'rxjs',
        collapsable: true,
        children: docs['rxjs-question/']
      },
      {
        title: 'webpack',
        collapsable: true,
        children: docs['webpack-question/']
      },
      {
        title: 'http',
        collapsable: true,
        children: docs['http-question/']
      },
      {
        title: 'node',
        collapsable: true,
        children: docs['node-question/']
      },
      {
        title: '微信小程序',
        collapsable: true,
        children: docs['weChat-app-question/']
      },
      {
        title: '算法',
        collapsable: true,
        children: docs['algorithm-question/']
      },
      {
        title: '统计',
        collapsable: true,
        children: docs['statistics-question/']
      },
      {
        title: '测试',
        collapsable: true,
        children: docs['test-question/']
      },
      {
        title: '发布/部署',
        collapsable: true,
        children: docs['ci-question/']
      },
      {
        title: '前端优化',
        collapsable: true,
        children: docs['optimization-question/']
      },
      {
        title: '团队管理',
        collapsable: true,
        children: docs['manage-question/']
      },
      {
        title: '设计模式',
        collapsable: true,
        children: docs['design-pattern-question/']
      },
      {
        title: '未归类问题',
        collapsable: true,
        children: docs['diy-question/']
      }
    ]
  }
}