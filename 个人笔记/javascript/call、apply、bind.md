# call()和apply()和bind()

## call()
改变方法this的指向，让函数的嵌套使用更加灵活

```javascript
fun.call(this,....)
```

```javascript
function f(name,age){
  console.log(this.name+name+age);
}

function o(){
  this.name = 'o';
  f.call(this,'你就是个逗比','你是不是傻');
};

function o2(){
  this.name = 'o2';
  f.call(this,'你就是个逗比','你是不是傻啊');
}
o()
o2()
/*
输出：
o你就是个逗比你是不是傻
o2你就是个逗比你是不是傻啊
*/
```
![WechatIMG59](http://o7s01mlar.bkt.clouddn.com/2017-01-17-WechatIMG59.jpeg)

通过call，将o()函数的this传递给f(name,age)，并且给name，age赋值。

在f(name,age)中并没有对this.name进行赋值，但是在o()中对this.name进行了复制，通过call，进行传递this，所以两个函数的this是相等的，在f(name,age)中调用this.name结果不是undefine，而是值。

## fun.call(this,...)中的this是一个指针传递

```javascript
function f(name,age){
  this.connemt = this.name+name+age;
}

function o(){
  this.name = 'o';
  f.call(this,'你就是个逗比','你是不是傻');
};

function o2(){
  this.name = 'o2';
  f.call(this,'你就是个逗比','你是不是傻啊');
}

var a = new o();
var a2 = new o2();

console.log(a.connemt)
console.log(a2.connemt)

/*
输出：
o你就是个逗比你是不是傻
o2你就是个逗比你是不是傻啊
*/
```
o()和o2()都没有对conment做过赋值，可是在f()中对 conment进行了赋值，而o()和o2()和f()的唯一可能造成的关联，就是this的传递，导致o()和o2()继承了f()的conment属性。也可以联想到this并不是一个简单的值传递，而是一个地址传递。

## 突然想到一个东西，关于构造函数的本质和作用
突发奇想，构造函数不就是将一个对象，完全复制给一个对象，在被赋值的对象中拥有完整的作用域，而且不影响原函数。

mdn上面对new关键词的解释
>* 概要  
  - new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。
* 语法
  - new constructor[([arguments])]
* 参数
 - 构造函数(constructor)
 - 一个指明了对象类型的函数。
* 传参(arguments)
 - 一个用来被构造函数调用的参数列表。
* 创建一个用户自定义的对象需要两步：
 - 定义构造函数。
 - 通过new来创建对象实例。

* 将对象实例赋值给一个变量的时候，变量将继承对象实例的所有prototype。
* 对象实例必须是一个方法

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) throw RangeError('Cannot create product ' + this.name + ' with a negative price');
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
  this.fn = function(){
    console.log(this.name)
  }
}

var cheese = new Toy('feta', 5);
var fun = new Toy('robot', 40);

console.log(fun);
fun.name = 'zhou';
console.log(fun);
console.log(cheese);
/*
输出：
Toy { name: 'robot', price: 40, category: 'toy', fn: [Function] }
Toy { name: 'zhou', price: 40, category: 'toy', fn: [Function] }
Food { name: 'feta', price: 5, category: 'food' }
*/
```
fun和cheese继承了Toy的prototype，我中途修改fun的name值，并没有对cheese造成任何影响。实例对象让我感觉，就是将对象的prototype深度复制给一个变量。在变量内部形成完整的作用域、封包等。

## apply()
apply和call的区别是，call中参数传递的方式是参数陈列式，而apply中使用的是数组式

```javascript
function f (name, age) {
  this.conment = this.dizhi + name + age
}

function o () {
  this.dizhi = '北京'
  f.call(this, 'zhou', '21')
}

function o2 () {
  this.dizhi = '上海'
  f.apply(this, ['zhou', '22'])
}

var a = new o()
var a2 = new o2()

console.log(a.conment)
console.log('----------------')
console.log(a2.conment)
```

## bind()
在非函数体中调用时，改变函数this的指向

```javascript
fun.bind(func,ary....)

fun: type Function 一个方法
func: type Object/Number/String 需要传入的this的函数名，必填
ary: type Object/Number/String ary的个数根据fun的参数，如果fun没有参数可不填
```

```javascript
this.x = 9
var module = {
  x: 81,
  getX: function () { return this.x }
}
console.log(module.getX())

var retrieveX = module.getX

console.log(retrieveX())
console.log(retrieveX.bind(module)())
```

