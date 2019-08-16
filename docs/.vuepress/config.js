module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端面试与进阶指南',
      description: '可能是全网最给力的前端面试项目'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '个人笔记',
        collapsable: false,
        path: '/个人笔记/',
        children:[
          '/'
        ]
      },
      {
        title: '收藏笔记',
        collapsable: true,
        path: '/收藏笔记/',
        children:[
          '/'
        ]
      },
      // {
      //   title: '知乎收藏',
      //   collapsable: true,
      //   path: '/知乎收藏/',
      //   children:[
      //     '/知乎收藏/'
      //   ]
      // },
      {
        title: '民国手札',
        collapsable: true,
        path: '/民国手札/',
        children:[
          '/'
        ]
      },
    ]
  }
}