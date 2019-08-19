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
        title: '原创文章',
        collapsable: true,
        children:[
          '/engineering/001.react个人收集.md',
          '/engineering/002.typescript初体验（ 一 ）.md',
          '/engineering/003.如何将老项目的小程序快速改为分包模式.md',
          '/engineering/004.前端面试排雷之唱、跳、rap三步曲（ 一 ）唱篇.md',
          '/engineering/005.typescript初体验（ 二 ）.md',
          '/engineering/006.数十条业务线以上的，前端小团队瞎逼基础服务思路.md',
          '/engineering/007.如何部署分离的nginx配置.md',
          '/engineering/008.前端面试排雷之唱、跳、rap三步曲（ 二 ）跳篇.md',
          '/engineering/009.flutter初体验（ 一 ）.md',
          '/engineering/010.typescript初体验（ 三 ）.md',
          '/engineering/011.二次封装UI库加速你的开发.md',
          '/engineering/012.前端面试排雷之唱、跳、rap三步曲（ 三 ）rap篇 .md',
          '/engineering/013.nginx如何配置50x、40x，gzip，合并请求，设置缓存.md',
          '/engineering/014.更加完备的前后端分离式nginx配置.md',
          '/engineering/015.优化中合并请求是银弹吗？.md',
          '/engineering/016.如何实现异步数据的复制操作.md',
          '/engineering/017.typescript初体验（四）.md',
          '/engineering/018.二次根据业务封装小程序swiper.md',
          '/engineering/019.typescript初体验（五）.md',
          '/engineering/020.react增补广记.md',
          '/engineering/021.typescript初体验（六）.md',
          '/engineering/022.typescript初体验（七）.md',
          '/engineering/023.typescript初体验（八）.md',
          '/engineering/024.typescript初体验（九）.md',
          '/engineering/025.小程序 AST React（一）.md',
          '/engineering/026.redux源码分析.md',
          '/engineering/027.热更新nginx.md',
          '/engineering/028.带你模拟发布过程（一）.md',
          '/engineering/029.我们这33个人的群在说些啥（一）.md',
          '/engineering/030.我们这33个人的群在说些啥（二）.md',
        ]
      },
      {
        title: '读书笔记',
        collapsable: true,
        children:[
          '/book/搭建私有cnpm/',
          '/book/深入浅出React和Redux/'
        ]
      },
      {
        title: '面试题',
        collapsable: true,
        path: '/question/'
      }
    ]
  }
}