# Vue.js适合制作移动端的Webapp吗？

可以，完全可以。  
技术选型是这样：  
vue+vue-strap+babel(es6)+webpack+vue-router  

相关文档：  
[起步 - vue.js](http://cn.vuejs.org/guide/)  
[介紹 | vue-router文档 npm package](http://router.vuejs.org/zh-cn/index.html)  
[yuche/vue-strap · GitHub](https://github.com/yuche/vue-strap)  
[webpack module bundler](http://webpack.github.io)  

我写了个种子文件，题主可以参考（把seed打成feed了请无视）  
[leinue/vue-feeds · GitHub](https://github.com/leinue/vue-feeds)  

运行使用：  

<div>

    npm run dev

</div>

或：  

<div>

    webpack

</div>

或：  

<div>

    webpack --watch

</div>

完整的package.json文件是这样：  

<div>

    {  "name": "poimoe_poi",  "version": "0.0.1",  "description": "",  "main": "index.js",  "scripts": {    "dev": "webpack-dev-server --inline --hot --quiet",    "build": "export NODE_ENV=production && webpack --progress --hide-modules"  },  "private": true,  "author": "",  "license": "ISC",  "devDependencies": {    "babel-core": "^6.2.1",    "babel-loader": "^6.2.0",    "babel-plugin-transform-runtime": "^6.1.18",    "babel-preset-es2015": "^6.1.18",    "babel-preset-stage-0": "^6.3.13",    "babel-runtime": "^6.2.0",    "bootstrap": "^3.3.6",    "css-loader": "^0.23.0",    "file-loader": "^0.8.5",    "jsx-loader": "^0.13.2",    "style-loader": "^0.13.0",    "url-loader": "^0.5.7",    "vue": "^1.0.10",    "vue-hot-reload-api": "^1.2.2",    "vue-html-loader": "^1.0.0",    "vue-loader": "^7.1.7",    "vue-router": "^0.7.7",    "vue-strap": "^1.0.2",    "webpack": "^1.12.9",    "webpack-dev-server": "^1.14.0"  }}

</div>

webpack.config.js文件：  

<div>

    module.exports = {    entry: './src/index.js',    output: {        path: __dirname,        filename: './dist/build.js'    },    module: {        loaders: [            { test: /\.vue$/, loader: 'vue' },            { test: /\.css$/, loader: "style!css" },            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },            { test: /\.js$/, loader: 'jsx-loader?harmony' },            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }        ]    },    babel: {        presets: ['es2015', 'stage-0'],        plugins: ['transform-runtime']    },    resolve: {        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名        extensions: ['', '.js', '.json', '.css'],        //模块别名定义，方便后续直接引用别名，无须多写长长的地址        alias: {            'vue-strap': './node_modules/vue-strap/dist/vue-strap.min.js'        }    }}if (process.env.NODE_ENV === 'production') {  module.exports.plugins = [     new webpack.DefinePlugin({      'process.env': {        NODE_ENV: '"production"'      }       }),     new webpack.optimize.UglifyJsPlugin({      compress: {        warnings: false      }       }),     new webpack.optimize.OccurenceOrderPlugin()  ]} else {  module.exports.devtool = '#source-map'}

</div>

转场动画：  

<div>

     class="page">    	     transition="expand">

</div>

<div>

    .expand-transition {  	transition: all .3s ease;  	overflow: hidden;}.expand-enter, .expand-leave {  	height: 0;  	padding: 0px 10px;  	opacity: 0;}

</div>

根据vue-router官方文档，每个vue文件的template部分必须由单独的div包裹起来，才会启用转场效果，如下：  

如果去掉timeline-master这个div，那么转场动画就会失效  

大屏  
![](https://pic4.zhimg.com/9c8a3ed2e3092d2e9fcf3b8d9c148703_b.png)  
![](https://pic2.zhimg.com/f4a6bb0a7f8a6883630c45ddba5e594d_b.png)  
ipad  
![](https://pic3.zhimg.com/b22a976450223422e83013d79abe6392_b.png)  
![](https://pic1.zhimg.com/09d548dc524829d17e5e7c744448033c_b.png)  
iphone 6 plus  
![](https://pic2.zhimg.com/c49af8ca46ece6bc4189772684457129_b.png)