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
      },
      {
        title: 'ecmascript'
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
        title: '浏览器'
      },
      {
        title: 'css'
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
        title: 'http'
      },
      {
        title: 'node'
      },
      {
        title: '微信小程序'
      },
      {
        title: '算法'
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
      }
    ]
  }
}