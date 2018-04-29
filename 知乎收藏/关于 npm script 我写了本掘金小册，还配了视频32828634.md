# 关于 npm script 我写了本掘金小册，还配了视频

![](https://pic4.zhimg.com/v2-c1733b526323a3638fa7d2981839c1f1_b.jpg)

> **不夸张的说，这可能是目前社区中最完整的把 npm script 和前端工作流相结合并运用到实际项目中的文字 + 视频版教程了，内容源于我对最佳实践的积累和实战，也是我精心编写和录制 1 个月的成果**。

互联网大潮和前端社区的蓬勃发展让现代前端项目的复杂性比 5 年前翻了好多倍，前端工作流中也出现了越来越多工程化的环节，比如代码风格检查、自动化测试、自动化构建、自动化部署、服务监控、依赖管理等。

## 我们面临什么问题？

大多数前端工程师的工作流可能都离不开 gulp、grunt、webpack 这样的重量级**构建工具**，而是否能熟练运用这些工具将重复任务自动化也是工程师素质的重要体现，我本人也是这些自动化工具的忠实粉丝，因为它们确实能帮我解决问题。但几番折腾之后，你可能已经像我一样感受到明显的痛点：比如对插件依赖严重（开发者的自由度受限），插件和底层工具文档脱节，调试变的更复杂等，在这点上，我们并不孤独，社区已经有人对上面的问题作出总结并写了文章：[Why I left gulp and grunt for npm scripts](https:https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)。

就我自己的亲身经历，我曾接手维护过使用了 39 个 gulp 插件的项目，因为项目起步较早，部分插件所依赖的基础工具版本都比较老，当这些插件所依赖的基础工具升级之后，gulp 插件本身并没有更新的那么快，我不得不 fork 原仓库去维护内部的版本，而当 gulp 发布了新版本之后，升级插件更是一场艰苦的持久战。

冷静思考下来，上面这种复杂性其实并没有必要，在软件工程里面有个重要的原则，就是简单性，越是简单的东西越是可靠，从概率论的角度，任何系统环节越多稳定性越差。

## 我们该怎么解决问题？

相比而言，直接使用 npm 内置的 script 机制已经被无数开发者证明是更好的选择，它能减轻甚至消除上面的痛点：你可以直接使用海量的 npm 包来完成你的任务、不需要在插件文档和基础工具文档间来回切换，最重要的点，不使用 grunt 之类的构建工具能让你的技术栈相对更简单，而我在做技术选择是遵循的基本原则是简单化，简单才有可能容易让别人上手。

使用 npm script 各种基础工具你都可以信手拈来，只要你会使用 [npmjs.com](https:https://www.npmjs.com/) 去搜索，或者去 [libraries.io](https:https://libraries.io/) 上搜索。

可能有同学会反问，**`Talk is cheap, show me the data`**，下面这张图是最好的证明：

![](https://pic3.zhimg.com/v2-631668fabe57af630b290e0a028dbb99_b.jpg)

**`更精确的数据是：截止 2017年11月，grunt 插件 6309 个，gulp 插件 3367 个，webpack 插件数量 2174 个，而 npm 包多达 594438 个，并且还在飞速增长`**。

那 npm script 为什么没有没有在构建工具中成为主流呢？可能大多数人觉得使用 npm script 需要很强的命令行功底、或者它不够强大、或者它不能跨平台。可以很负责任的说，社区发展到现在，上面的担心都是多余的。

## 如何更快更好的解决问题？

**这也是掘金小册[《使用 npm script 打造超溜前端工作流》](https:https://juejin.im/book/5a1212bc51882531ea64df07)的切入点，我在这本小册中会用** **`step-by-step`** **的方式讲解现代前端工作流中的 npm script 用法。即使你是命令行小白，也能轻松跟上，小册会以实际前端项目为底板逐步介绍更高阶的话题。学完这本小册，你将熟知使用 npm script 打造前端工作流要用的各种小工具和技巧。**

小册的内容划分为 4 篇：

*   入门篇：创建和运行 npm script，熟悉和理解基本套路，分 3 小节；

*   1.1 创建并运行 npm script 命令
*   1.2 运行多个 npm script 的各种姿势
*   1.3 给 npm script 传递参数和添加注释

*   进阶篇：原来 npm script 还可以这样用？分 3 小节，介绍生命周期机制、内置和自定义变量的声明和使用、命令行自动补全等话题；

*   2.1 使用 npm script 生命周期钩子
*   2.2 在 npm script 中使用环境变量
*   2.3 实现 npm script 命令自动补全

*   高阶篇：如何管理复杂的 npm script？分 3 小节，介绍；

*   3.1 让 npm script 跨平台兼容
*   3.2 用 scripty 管理复杂的 npm script
*   3.3 用 node/shell 脚本替代复杂的 npm script

*   实战篇：如何用 npm script 来辅助前端工作流？分 5 小节；

*   4.1 监听文件变化并自动运行 npm script
*   4.2 结合 live-reload 实现自动刷新
*   4.3 在 git hooks 中运行 npm script
*   4.4 用 npm script 实现构建流水线
*   4.5 用 npm script 实现服务自动化运维

为了方便大家阅读小册时更加容易上手，**我为小册的每个章节都录制了视频教程（视频下载地址在小册末尾）**，想了解我视频教程风格和质量的同学可以看我[专栏](https:https://juejin.im/user/57a7f634d342d300576b738d)的历史文章：[styled-components](https:https://juejin.im/post/5a04f36d6fb9a045293636e0)、[javascript-async-await](https:https://juejin.im/post/59f7c12b5188255a6a0d5497)。视频目录如下：

![](https://pic3.zhimg.com/v2-85dafa90a62a20db0f02401bcd4e7d5b_b.jpg)

## 适合什么群体？

*   拥抱 `无情的推动自动化` 开发理念的工程师，不限前端；
*   感受到 grunt、gulp 之类工具的笨重和不便，想要更轻量级的解决方案；
*   想玩转 npm script，不断打磨自己硬技能，提高日常工作效率的同学；
*   愿意因为我编写小册和录制视频而付出的心血而请我喝杯咖啡（19.9元）的同学；

## 你会学到什么？

*   理解使用 npm script 的关键知识要点；
*   掌握 25 个 npm script 实战技巧，章节虽少，但是每个章节都是浓缩的；
*   收获使用 npm script 和各种小工具搞定各种前端工程自动化需求；
*   得到我长期积累和迭代出来的 npm script 集合，直接运用到项目中；

## 你要准备什么？

*   [Node.js](https:http://nodejs.org/) 运行环境，最好是 v8.x 以上版本，建议使用 [nvm](https:https://github.com/creationix/nvm) 来安装，Windows 下的用户可以使用 [nvm-windows](https:https://github.com/coreybutler/nvm-windows)；
*   可以用来输入和执行命令的终端程序，比如 Mac 下的 [iTerm](https:http://www.iterm2.com/index.html)，或者 Windows 下的 cmd；
*   2 小时的闲暇时间，读完这本小册，并能自己上手实践，因为纸上得来终觉浅；

## 读者反馈如何

下面是到目前为止小册文字部分收集到的部分读者反馈，对于每位读者的留言，我都会认真回复，如果你加了读者交流群，在群里提到的问题，我也会尽力解答。

![](https://pic4.zhimg.com/v2-2c111b19bfe922a3538ebf748de75e75_b.jpg)![](https://pic3.zhimg.com/v2-2f74bf9ed0cf0a4aeb9d77d9011c28a9_b.jpg)![](https://pic2.zhimg.com/v2-6342e973687bb5565aa81b2f7049f6c0_b.jpg)

关于视频部分呢？如果你够细心，你能得到小册内容之外的很多东西，毕竟视频里面我整个开发环境都展示出来了，欢迎来撩（微信：feweekly）！

![](https://pic4.zhimg.com/v2-33af6eb763ebc47dcb4685f4c0ed8037_b.jpg)

**如果这篇小册涵盖的内容跟你的技能修炼路线图吻合，强烈建议你阅读完整内容（代价是请我喝杯咖啡， ），对于怕冲动付费的同学，小册开放了部分章节供你试读**。

再次附上小册地址：[用 npm script 打造超溜的前端工作流](https:https://juejin.im/book/5a1212bc51882531ea64df07) 和我的专属限量 8 折优惠码：npm-script-2018-8。

![](https://pic2.zhimg.com/v2-12c255a2342626244a255c09ba087efb_b.jpg)

## 作者简介

我是王仕军，爱折腾、爱分享的前端老司机，实名在网上生活了 5 年有余，6 年以上前端开发经验（实际是 8 年，哈哈），4 年大型互联网公司工作经验；[掘金专栏作者](https:https://juejin.im/user/57a7f634d342d300576b738d)；熟知（是的，到现在我还不敢说精通） `Javascript`、`Node.js`，对开发效率和软件质量有极致追求。目标是 `**Be a Power User of Everything**`。

**最后，希望我写的东西对你有用！**