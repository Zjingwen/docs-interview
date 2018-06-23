# 面试题

1. 号码段为131到139的11位手机号码正则校验： 

2. 移动端，如何在html中通过链接调起拨打电话

3. 以下代码的输出结果： 

```
function teacher { 
    var t='teacher';
    let s='student';
}
console.log(t);
console.log(s);
```

4. HTTP协议的状态码200、400、500分别代表什么？

5. JavaScript算术运算：‘10’+ 1结果为，‘10’-1结果为。

6. 用ES6字符串模板的方式输出：1室3厅2卫。`${ting}室${shi}厅${wei}卫` 

7. 用ES6解构的方式，将下面代码中的obj.name赋值给n，obj.age赋值给a：let {name: n, age: a} = obj; 	let obj = {name:’韩梅梅’, age:’20’};
	let n, a;
	
8. HTTP协议默认的端口号、HTTPS协议的端口号。 

9. 名词解释：MVCmodel-view-controller、MVPmodel-view-presenter、MVVMmodel-view-viewmodel。

10. Flex布局实现容器box内部元素item垂直居中对齐。

二、简答题（5题） 

1. CSS3的box-sizing的取值及各值的说明。

2. 请写出下列代码的执行结果：


```
function switchCase(value){
    switch(value){
        case ‘0’:console.log(‘case 0’);
        case ‘1’:console.log(‘case 1’);break;
        case undefined:console.log(‘undefined’);break;
        default:console.log(‘default’);
    }
}
```
 
3. 列举出通过CSS样式隐藏元素的方法，并说明其区别。

4. 请写出下面代码的执行结果：


```
var s = {
    s: ‘student’,
    getS: function(){
        console.log(this.s);
    }
};
var t = {
    s: ‘teaher’
};
 
var getS = s.getS;
var getS1 = getS.bind(s);
 
// 写出以下输出结果
s.getS();
s.getS.apply(t);    
getS();
getS1.call(t);
```


5. 列出移动端开发中适配各种屏幕尺寸的解决方案(至少3种)

三、应用题（2题） 

1. 用js实现一个随机打乱数组顺序的函数，要求可以设定数组种任意1个元素的位置不变，其他位置的元素位置随机变化。

2. 用js实现一个比较APP版本号的大小的函数，版本号各市由数字和.组成。例如：1.1.0、1.10、1.2.3等。

