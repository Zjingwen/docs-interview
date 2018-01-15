# 怎样有效地学习 Node.js？

这个回答已经是三年前了，可能没那么准确了，我会找个时间来更新一下。  

[Node.js 之 log4js 完全讲解 - 前端外刊评论 - 知乎专栏](https://zhuanlan.zhihu.com/p/22110802?refer=FrontendMagazine)  

老的回答  
-------------------------------------------------------------------------------------------------------------  
NodeJs现在处于发展阶段，相关资料和书籍不是很多。说开了NodeJs只是JavaScript作为CommonJS的实现，使得JavaScript在服务器端有了用武之地，所以NodeJs从语法层面来说还是JavaScript。但是与客户端的JavaScript又有所区别。注意以下几点：  

*   要学习NodeJs，必须有一定的JavaScript基础，理解事件模型，了解JavaScript的语法和特性，理解JavaScript面向对象编程
*   学习NodeJs类似于Python等代码组织的方式——包机制，require和exports。
*   一些基本的操作系统，HTTP等网络通信，数据库（尤其是非关系数据库），Web编程的知识有所了解。

相关资料虽少，但是也可以罗列一些：  

*   [<span>http://</span><span>nodejs.org/</span><span></span>](http://nodejs.org/) 官方网站，最简单的示例，详尽的文档（中文版[<span>http://</span><span>cnodejs.org/cman/</span><span></span>](http://cnodejs.org/cman/)）  

*   github上的[<span>https://</span><span>github.com/joyent/node</span><span></span>](https://github.com/joyent/node)以及各种周边库
*   [The Node Beginner Book](http://nodebeginner.org/index.html) the node beginner book，深入浅出，做完很有成就感
*   简单的NodeJs MVC [<span>http://</span><span>cnodejs.org/blog/?</span><span>p=342</span><span></span>](http://cnodejs.org/blog/?p=342)，出自CNODEJS中文社区，上面的其他文章多订阅多看看
*   Google和订阅，Google各种东西教程资料，好的blog就订阅下，不断学习，比如说[<span>http://</span><span>howtonode.org/</span><span></span>](http://howtonode.org/)
*   参家一些线下的分享会，多分享多进步

github上NodeJs的周边工具很多，如何组织使用是个问题。首先需要明确这些工具或者类库是干什么用的，解决了什么问题，如何使用。  

*   **npm**：NodeJs包管理器
*   **express**：服务器端比较流行的MVC框架，处理服务请求，路由转发，逻辑处理
*   **mongoose**：mongodb包装，更方便使用数据库
*   **[<span>http://</span><span>socket.io</span><span></span>](http://socket.io)**：实现服务端和客户端socket通信解决方案
*   **backbone**：客户端MVC框架，编写客户端应用（豆瓣说）
*   **coffeescript**：提高JavaScript的可读性，健壮性
*   **zombie**：浏览器子集，编写html解析器，轻形javascript客户端测试

知识有限，当然还有很多，只要了解了他们是干什么用的，解决什么问题，就可以组合起来做自己想要的东西。