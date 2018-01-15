# 如何评价 React Native？

更新于2月3日：关于我们的最新动态，我们把React跑在了其他Native的实现，让React在无线不仅是ReactNative，就像我之前说的React更是一种模式：  
![](https://pic4.zhimg.com/ba5f60d5bf82ac5d1c9c7f059a7af3a7_b.png)------------------  
对React的理解，认为<u>React是一种架构模式</u>，无论是内建的DOM、Native还是React Canvas都是的一种基于React模式的具体实现，当我们评价React Native还是评价React Canvas，都是React生态想象空间的一种表现。  

<u>React提出重新思考UI开发过程，其实不是面向浏览器，而是所有的前端，因为对前端开发而言我们需要涉及的领域已经开始包括了Web与Native。</u>  

这里也分享淘宝基于React正在进行中的一些实践，是我认为能戳中极客们的G点让大家为了亢奋的事情。  

> **React Web端**

团队里最早使用React的线上产品: **知了**，前端是React+KISSY, 后端是淘宝基于Node.js解决方案Midway，这是完全由前端主导的项目，在前端，通过React极大的方便了富交互页面的构建，同时也轻松的解决了页面内业务组件状态同步等问题。  
![](https://pic1.zhimg.com/2016c963a0986a4f9a10a8e26cda7fbc_b.jpg)  
**淘宝懂我**，我们在面向用户的创新业务里毫无悬念的引入了React，不是为了技术而技术，而是基于React的开发过程，促使大家一切都是以组件的思考模式，这的确让业务也变的更加清晰，开发效率提升，维护成本降低，发现React的确改变之前曾经非常困扰我们的事情。淘宝懂我的入口在“我的淘宝”里，大家可以去围观: [淘宝网 - 淘！我喜欢](http://know.taobao.com/)。  
![](https://pic3.zhimg.com/3c6fa4605ecb614cb3519eed222fd22a_b.jpg)  

> **React Native端**

F8大会当天，React Native终于正式开源了，这着实让人兴奋了一把，因为我们知道React Native即将**成为在手机端上必不可少的开发模式之一**。因为已经有React的开发经验，稍微过目下文档，很自然就能过渡到React Native的开发。笔者稍微努力了下，复刻了下手机淘宝的首页，不到个把小时我这个菜鸟就差不多完成了大体的样子，让人惊讶于React Native这套技术方案的生产力。  
![](https://pic3.zhimg.com/4d33b3932a1561a971d7b67f77202eda_b.jpg)  
而且React Native开发与Web几乎一致的开发与调试体验，也更让我惊艳，这效率上差距可见一斑。  

![](https://pic4.zhimg.com/01317bc3060b25a3c3cf87fc131f3b8f_b.jpg)  

但是，Android版本还未开源，React Native只支持iOS7+平台，而在淘宝移动业务里依旧需要支持iOS6平台，所以在iOS6与Android平台上只能暂时继续跑H5页面，在技术上我们很快就确定将React Native代码转为H5版本，做到大家梦寐以求 Write once, run everywhere，就如大家在微博[<span>http://</span><span>weibo.com/1797897057/Cc</span><span>FmN3nwp</span><span></span>](http://weibo.com/1797897057/CcFmN3nwp)上看到的，我们就做了一个简单的DEMO，基本确定这个方向的可行性。  
![](https://pic3.zhimg.com/8327cbfc8ae5ad6a351370fd7763ecd6_b.jpg)  
兴奋的同时，一个无法回避的事实，对Web前端来说这是一个全新的领域，就是一个大坑，需要我们去填平，填平这些坑的就是我们配套的基础设施。如图这是淘宝基于React的已经完成或正在进行中相关领域，当这些基础设施相对完善时，就是React Native爆发的时候，而我们现在做的事将是未来的肩膀。![](https://pic3.zhimg.com/6811701e37918909632fb7ac88f13096_b.jpg)  

结束语：<u>Web是未来，Native是当下，而我们在未来与当下之间。</u>