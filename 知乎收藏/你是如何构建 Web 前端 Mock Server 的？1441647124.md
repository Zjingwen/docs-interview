# 你是如何构建 Web 前端 Mock Server 的？

谢邀  

为了更好的分工合作，让前端能在不依赖后端环境的情况下进行开发，其中一种手段就是为前端开发者提供一个web容器，这个本地环境就是 mock server。  

要完整运行前端代码，通常并不需要完整的后端环境，我们只要在mock server中实现以下几点就行了：  

1.  能渲染模板  

2.  实现请求路由映射  

3.  数据接口代理到生产或者测试环境

能渲染模板很简单，在mock server中集成模板引擎就行了，然后提供模拟的页面数据用于完整渲染页面，不过有时候生产环境中的模板引擎可能有一些环境依赖的扩展，这个要单独实现。  

请求路由映射，实现原理就是要让本地的mock server有一个router，能接收所有HTTP请求，然后在router中根据线上的路由约定，实现一套一样的规则，这个也不难，不赘述了。  

最后数据接口代理。与前端相关的HTTP请求一共就3种响应情况：  

1.  渲染页面的请求；  

2.  静态资源的请求；  

3.  获取数据的请求。  

由于实现了router，我们把渲染页面的请求在mock server中处理掉，直接输出本地模板的渲染结果；静态资源的请求直接返回文件内容；而把数据请求代理到测试或者生产环境，本地就不用mock了（当然，如果出现新的接口测试环境没有的，可以追加router，在mock server想响应假数据）  

至于题主说的url一致性问题，其实不存在的。你的这个 [http://www.foo.com/bar 的](http://www.foo.com/bar)数据请求，在js中应该这样写：  

<div>

    $.get('/bar', callback)

</div>

这种写法，省略了host，在线下开发时，其最终结果是请求 [<span>http://</span><span>127.0.0.1:3000/bar</span><span></span>](http://127.0.0.1:3000/bar)，而由于我们在mock server中实现了路由规则，这个请求实际上被代理到了测试/生产环境去获取数据。而当你把代码部署到线上时，其访问真实请求地址又自动变成了你期望的 [http://www.foo.bar，](http://www.foo.com/bar)正常运行。  

画个图总结一下：  
![](https://pic4.zhimg.com/50/dabc8dd12b7b238e9d3fad9f65e974bf_b.jpg)  
补充一些Tips：  

*   由于Mock Server需要具备渲染模板的能力，因此可能需要一种轻量的服务端跨平台server实现方案，如果是java的后端，可以考虑使用jetty，一个1.8M的jar即可；如果是php的后端，可以考虑使用php 5.4以后内置的server，启动命令是 php -S 127.0.0.1:3000 router.php；如果是Nodejs，那就很简单了，估计都不需要Mock Server，本地也可以跑的
*   当代理数据接口的生产/测试环境不具备新接口的时候，Mock Server要在本地制造假数据响应请求，可以使用 [<span>http://</span><span>beta.json-generator.com</span><span>/</span><span></span>](http://beta.json-generator.com/) 这类在线的JSON数据生成工具，非常方便。

> 很多前端工程师以为前端分离的唯一途径是接入NodeJS作为UI层，其实不是的，还有一种方案就是这种Mock Server，前端工程师直接写后端模板，效果有时候甚至更好，而且对已有前后端架构的改动成本最小。

====== 更新 ======  

评论中 [@相守鼎](//www.zhihu.com/people/b0b04064d91856337ce4fb78721cb8dd) 给出了常用脚本语言下开启简易web server的方法，可以用于实现Mock Server：  

*   ruby -run -e httpd . -p 9090

*   python -m SimpleHTTPServer 8000

*   php -S 127.0.0.1:8088 router.php