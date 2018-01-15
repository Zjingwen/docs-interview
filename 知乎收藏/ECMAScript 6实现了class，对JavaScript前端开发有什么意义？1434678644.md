# ECMAScript 6实现了class，对JavaScript前端开发有什么意义？

其实我对 ES6 Class 很无感，一来它不过是个语法糖，二来这个语法糖很坑爹，一些原来能做的事情用纯 class synatx 是做不了的，比如 prototype property 和 static property。因为没有这两个的语法支持，React 用了 ES6 class 以后就没法用 mixin 了，Angular 2 也是，虽然是 TypeScript，但组件的一些必须选项没法直接在 类声明里面表达，又不想倒退回 ES5 那样直接在构造函数上加属性，于是只好依赖 ES7 decorator... （Stage 1提案） 而支持直接在类声明里面声明 static property 的提案目前才 stage 0，所以 ES6 版本的 class 其实很废的。  

另外说句不中听的话，搞不懂原型继承就别给 ES6 class 拍手叫好啦，还是去写 java 吧。