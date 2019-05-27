# typescript初体验（ 一 ）

## 初衷

>十多年前，Java的繁琐让很多人仇恨类型系统，
>他们改用Python、Ruby等动态类型语言，
>这使我们能够快速而松散地完成工作。
>经过大约十年的热血编程，我们最终发现，动态语言编写的巨大单体项目是非常脆弱的。

好吧不知道多少次被小伙伴安利过typeScript了，一直感觉这无非是ESMAscript的超集而已，还不着急，可是当项目线逐渐膨胀，我感觉到了脆弱无力。主要无力是两点，一、设计模型的脆弱。二、参数类型的混乱。设计模型是内功需要长时间的修为，还好参数类型的混乱我能用过工具方法阻止。

## 安装简单的学习环境

首先我需要安装最简单的测试环境，让我可以测试所有typeScript的所有语法。

### 目录结构

```TEXT
typescript-demo
|----- config             // 脚本文件
        |----- watch.js   // 监听变化执行tsc命令
|----- src                // 产出目录
        |----- js         // build的js文件集合
        |----- index.html // 主index.html文件
|----- ts                 // ts文件集合
|----- package.json
|----- tsconfig.json
```

### 涉及的npm包

```JSON
"devDependencies": {
  "chokidar": "^3.0.0",
  "concurrently": "^4.1.0",
  "live-server": "^1.2.1",
  "shelljs": "^0.8.3"
}
```  

### 涉及的指令

```JSON
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run watch\"",
  "server": "live-server ./src --port=8080",
  "ts": "tsc",
  "watch": "node ./config/watch.js"
}
```

## 为什么要这样折腾webpack不是就可以用吗？

首先，我需要的是基本0配置的环境，我不想过多折腾环境，我要是的学习。如果我用webpack的话，我可能要配置各种devServer、loader、entry、output等等。可是我的需求只是，开个服务器，监听文件变化，build ts，然后就木了，所以我选择了5个包。

- chokidar 监听文件变化
- concurrently 同时执行多个命令
- live-server 简易服务器
- shelljs 执行shell命令

好吧，我的需求是不是就达到了。然后我只要组合一下就行了。

```JS
// watch.js 文件
const glob = require('glob');
const shell = require('shelljs');
const chokidar = require('chokidar');

// 监听文件
const watcher = chokidar.watch(files,{
  persistent: true,
});
// 执行命令
const command = ()=> shell.exec('npm run ts');
// 监听回调用
watcher
  .on('add', () => command())
  .on('change', () => command())
  .on('unlink', () => command());
```

## 组合package script

我写了4个script，分别是start、watch、ts、server

- start   组合watch和server
- watch   监听文件变化
- ts      build typeScript
- server  启动服务器

当我需要学习的时候，我只要执行一下start就可以了。对了我没有加入自动刷新，为啥呢？因为我觉得学习的话，自动刷新反而会让我忽略一些细节。还有一个问题就是，这里会全部build所有ts文件，这我倒是感觉没啥问题，毕竟小demo能有几行代码，性能问题就不想了。

## 提醒

- 记得全局安装一下typescript哟

```bash
npm install -g typescript
```

- 我所用到的npm版本以及node版本

```
"node": ">=8.9.1",
"npm": ">=6.1.0"
```

## 结尾

好吧，我用了大概10多分钟，搭建起了这一套简单易用可扩展的测试环境，并且写了两个demo，然后我就可以愉快的学习了。有时候吧，什么需求选择什么构架，慢慢迭代，不用操之过急。

献上github欢迎clone：[https://github.com/Zjingwen/typescript-demo](https://github.com/Zjingwen/typescript-demo)
