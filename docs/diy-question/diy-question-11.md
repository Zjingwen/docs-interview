# 未分类

1. 介绍事件循环机制
2. 题目：
```js
setTimeout(function() {
    console.log(’setTimeout‘);
})

new Promise(function(resolve) {
    console.log(’promise‘);
    for (let i = 0; i < 10000; i++) {
        if(i === 10) {
            console.log(’for‘);
        }
        i == 9999 && resolve(’resolve‘);
    }
}).then(function(val) {
    console.log(val);
})

console.log(’console‘);
```
3. 题目：
```js
if ([] == false) {console.log(1);};
 if ({} == false ) {console.log(2);};
 if ([]) {console.log(3);};
 if ([1] == [1]) {console.log(4);};
```

4. this的指向问题
5. 题目：
```js
var o = {}
o.foo = function foo(){
    console.log(this);
    return () => {
        console.log(this);
        return () => console.log(this);
    }
}

o.foo()()()
```
6. script标签defer和async
7. for in，Object.keys, Object.getOwnPropertyNames
8. 对象的enumerable, configurable
9. 函数防抖(debounce) & 函数节流(throttle) 并实现
10. 什么是跨域？怎么解决跨域问题？
11. 栈和队列
12. 题目：判断压栈顺序是否合法
13. 数字千位符的实现（考正则）
14. css盒模型
15. 三角符号用css实现
16. 有没有了解React的diff算法
17. D3 与 Echarts 的区别
18. 平时除了项目开发，有接触其他的技术吗
19. Rxjs 的运用场景以及有在项目中用过吗