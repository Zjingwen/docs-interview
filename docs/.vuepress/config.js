module.exports = {
  base: '/docs-interview/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '伪公知的生活常态',
      description: '就是随便写写而已',
    },
  },
  themeConfig: {
    sidebar: [
      {
        title: '个人笔记',
        collapsable: false,
        path: '/个人笔记/'
      },
      {
        title: '收藏笔记',
        collapsable: false,
        path: '/收藏笔记/'
      }
    ]
  }
}