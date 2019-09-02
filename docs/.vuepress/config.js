const path = require('path');

module.exports = {
  base: '/docs-interview/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FE-interview',
      description: '个人收集个人原创',
    },
  },
  themeConfig: {
    sidebar: [
      {
        title: '面试题',
        collapsable: false,
        path: '/question/'
      }
    ]
  }
}