# 「Webpack」配置React多个页面同时打包和调试

![](https://pic2.zhimg.com/v2-e3b1d4ab6b31920ebe34aee883dfce92_b.jpg)

使用React大部分时候是开发的单页面应用，这时候我们就会使用到了Webpack进行打包配置，从Create-react-app中eject出来以后，我们就可以对Webpack进行小魔改，以满足我们进行多页面开发的需求。

有同学说，诶！为什么还需要多页面应用？现在不是全都已经单页面化了吗？诚然，把20几张网页全部塞进一起来做，实则蛋疼不已！有时候我们可能还需要前台，后台系统一起写，多人合作等等等等奇葩需求，这时候我们使用webpack就能够使得多个工程进行统一打包，统一调试，相当方便。

废话不多说，开始啦。

* * *

## **一）配置简单的多页面应用**

在使用Create-react-app的eject功能以后，我们获得了一个Config文件夹，当我们敲击

<div>

    npm run start

</div>

之后，会启动Nodejs去读取脚本，因此我们的所有脚本其实都是在Nodejs中运行的。

![](https://pic3.zhimg.com/v2-e6cc2d4ef997b9dcf09605322ea2ed40_b.jpg)

简单介绍一下：

1.  paths.js主要是处理一些目录用的文件。
2.  webpack.config.dev.js 主要是测试环境下的。
3.  webpack.config.prod.js 用于正式环境下的。
4.  webpackDevServer.config.js 就是那个自动重启的服务器的配置

我们先看到paths.js文件，里面密密麻麻写满了注释，很好，我都看完了，不过你们就不用看了...我们关注一下最下面的几行：

![](https://pic1.zhimg.com/v2-796e8a56c3a7e306c43a437b9379a3e7_b.jpg)

这一行划重点的地方就是我们默认的工程最初的index.js，想要配置多页面应用可以从这里入手，我们在src目录下新建一个admin.js。

![](https://pic2.zhimg.com/v2-251e786b2bfa833894fa04b939198716_b.jpg)![](https://pic4.zhimg.com/v2-d15a7822b52fdbe74183eeb80e65b91c_b.jpg)

## **配置webpack的入口**

webpack有四大概念，入口，出口，loader，插件，以后有时间会教大家写一个JSX loader，现在我们来看看最简单的入口。

先进入webpack.config.dev.js，找到entry那里。

![](https://pic2.zhimg.com/v2-dbd335bcf91765bf1fa245cf981cf61e_b.jpg)

从这样改成下面这样，我们可以配置好了一个多页面配置了。

![](https://pic3.zhimg.com/v2-fdfac8deeab9fb04fe4270b0fbbc01fe_b.jpg)

这里的意思就是，入口有两个，名字分别是index和admin，他们会在webpack服务器启动的时候，分别生成名字叫index.js和admin.js的chunks文件。（其实你不用管什么是chunks....

不要着急，马上就结束了。我们先到出口处

![](https://pic2.zhimg.com/v2-cf4b793975241c1acd2263fc68fe8ee7_b.jpg)

在filename里面加入一个[name]，这是一个转义字符，webpack会在读取到这个[name]以后呢，把刚刚生成的chunks打进来，也就是index.js就写index.bundle.js，admin.js就写admin.bundle.js。

最后最后，来到插件这里，因为我们是在调试环境下，所以我们要针对不同的页面，生成不同的地址，这里就是这样，

<div>

    index.js就生成xxx.xxx.xxx.xxx/index.htmladmin.js就生成xxx.xxx.xxx.xxx/admin.html

</div>

![](https://pic2.zhimg.com/v2-31906f7de92ef744aaad7f85e5187399_b.jpg)

我们还注意到这里还有几个参数，比较重要的是template参数，其实就是指定了我们用哪个html模版，如果你对原来的不爽，或者是用其他模版，可以在这里修改。

这样，在我们敲击npm run start后，我们就可以启动我们的多页面应用了。

![](https://pic3.zhimg.com/v2-64a99056144574ee7983bc7014ce3ff8_b.jpg)![](https://pic2.zhimg.com/v2-eb1f6dd407291d86fbf98a40b8baa797_b.jpg)

网址不同。

* * *

## **二）小小的思考**

这么做确实方便了我们开发，但是我们仍然有一个非常非常蛋疼的事情没有解决，回想一下刚刚我们的配置：

1.  我们先要修改paths.js
2.  添加入口
3.  修改出口（一次完成
4.  修改插件
5.  每增添一个页面，我们就要重新完成上面几个步骤，麻烦到爆炸，而且容易出错。

既然，Nodejs已经提供了一个操作文件的能力，那么我们就可以使用它帮我们完成上面的所有步骤！

## **开始前的准备**

我们为每一个页面提供一个文件夹，每个文件夹里放着一个页面的所有js/css文件，并且统一提供一个index.js作为最顶层的入口提供webpack读取。

**第一步：改造目录**

![](https://pic2.zhimg.com/v2-123b6f948a21c74b2c9eea33fe8aae4c_b.jpg)

每个目录下都有一个顶层的index.js

**第二步：添加扫描函数，并且导出**

我们在paths.js里写一个扫描函数

![](https://pic3.zhimg.com/v2-0ef597593d9b9eb80e52539defc046dd_b.jpg)

<div>

    /** * 扫描函数 */function Scan() {  const dirs = fs.readdirSync(resolveApp('src/'));  const map = {};  dirs.forEach((file) => {    const state = fs.statSync(resolveApp('src/' + file))    if (state.isDirectory()) {      map[file] = resolveApp('src/' + file) + '/index.js'    }  })  return map}const dirs = Scan();

</div>

![](https://pic4.zhimg.com/v2-85e41aa7aacc53882a4605a8be8eba73_b.jpg)

<figcaption>并且在最后导出</figcaption>

并且在最后导出!

**第三步：在webpack.config.dev.js中添加setup函数，用于生成我们需要的配置**

![](https://pic4.zhimg.com/v2-c2881bb9a33b5f7888d833d1de8e7dcb_b.jpg)

<div>

    function setup() {  const entry = {};  const plugins = [];  Object.keys(paths.dirs).forEach((key) => {    entry[key] = [      require.resolve('./polyfills'),      require.resolve('react-dev-utils/webpackHotDevClient'),      paths.dirs[key]    ]    const newPlugins = new HtmlWebpackPlugin({      chunks: [key],      inject: true,      template: paths.appHtml,      filename: `${key}.html`    })    plugins.push(newPlugins);  })  return { entry, plugins }}const Setup = setup();///这里要注意要运行一次！

</div>

**第四步，修改入口和插件位置**

![](https://pic4.zhimg.com/v2-a8d1cfe05724b235ed1fe3b1b7c395ed_b.jpg)

<figcaption>入口就这行</figcaption>

![](https://pic3.zhimg.com/v2-9d5d87a0a88bfb97c3f3990ce018bea7_b.jpg)

<figcaption>插件地方改成这样</figcaption>

**第五步，修改我们的启动脚本，script/start.js**

![](https://pic4.zhimg.com/v2-3f9d1e550e16db2cb916a1c6ad8d698c_b.jpg)

注意，这里如果不修改，你直接注释掉也可以，因为这一行如果「没有找到文件，他会崩溃」，**算是create-react-app作者的一点防护措施**。

开启我们的脚本，npm run start

![](https://pic4.zhimg.com/v2-93c087b8cebf4d1e733bd0d1a8eab698_b.jpg)

构建成功！打开网页，输入我们要的地址

<div>

    http://localhost:3000/main.html   看到的是main的应用http://localhost:3000/admin.html  看到的是admin的应用

</div>

## **三）还是有不爽的地方，加一把劲**

我们已经定义好了一个main.html和admin.html。我们现在只有两张网页，但是以后如果网页多了，我们进行调试非常不方面，为什么？

因为我们大多数时间可能盯着的是这里

![](https://pic3.zhimg.com/v2-7045d414dd7f832f53521a53ddd6c368_b.jpg)

而旁边的目录栏会很长，而且多，我们找网页的时候得花费精力。既然我们眼睛大部看的是这个黑黑的调试框，那么我们通过修改webpack的一些配置，**让他顺便帮我们把这些信息打印出来！**

**第一步，找到关键函数：**createCompiler

这个函数在script/start.js里面有，不要问为啥，我帮你看好了...

![](https://pic4.zhimg.com/v2-69ebe77598142f4399c207c38991d7d1_b.jpg)

<figcaption>在这里，你看看他的描述你就知道了</figcaption>

![](https://pic3.zhimg.com/v2-09969bfa7c233a2d5b30836d4c258a9a_b.jpg)

<figcaption>我们把我们刚刚导出的文件路径加进来，paths.dirs</figcaption>

然后跳转到这个函数的定义，加上这个参数

![](https://pic2.zhimg.com/v2-860775ace25312abcd6f65619d1d35c9_b.jpg)

往下走点：

![](https://pic4.zhimg.com/v2-25b7b9b4325aac7d400b474db33bebf4_b.jpg)

加入这一行代码：

<div>

    Object.keys(path).forEach((key, index) => {      console.log(chalk.green(`你的应用页面地址${index}:      ${urls.localUrlForTerminal}${key}.html`));    })

</div>

然后，我们再次启动我们的程序。

![](https://pic4.zhimg.com/v2-7872740b41376b60e9eeaa8912da524b_b.jpg)

哈哈，完美的展现了我们想要的东西。

## **总结**

其实我一直没有使用过webpack进行多页面应用打包，今天小研究了1个小时，非常的简单。

然而，我们回过头来看看我们之前一直在说的那句话：

<div>

    剔除所有的配置，使得我们前端工程师能够更专注于业务

</div>

本文所蕴含的思想，其实就在这里，无论是前台还是后台开发，我们都必须要知道这种「非手工创建，修改的模式」，同样的，这种模式在编程里，叫做DRY

> **Don't repeat yourself**

* * *

本文代码还有很多需要修改，精简的地方，这个工作留给大家做啦！

**各位晚安，我们过几天后见.**