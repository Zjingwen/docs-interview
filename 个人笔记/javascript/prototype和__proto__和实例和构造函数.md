# prototype和__proto__和实例对象和构造函数

## Q：什么是实例对象

拥有多种数据结构组合在一起的对象

## Q：实例对象的特性

拥有__proto__

通过Array、Object、String、Number、Symbol、自定义构造函数，new关键字赋值的变量

通过`Object.create()`赋值的变量

## Q：创建实例

<!--通过new关键字创造的实例，会继承当前构造函数this下面的对象和方法

每一个实例都拥有一个__proto__对象，指向构造函数的原型对象的prototype-->

## Q：构造函数的特点

系统会自动创建prototype对象，__proto__对象

## Q：prototype显示原型

系统为构造函数创建的对象

拥有`__proto__ || [[prototype]]` 和`constructor`

`prototype.__proto__`指向构造函数的`prototype`

`prototype.constructor`指向构造函数本身

## `__proto__ || [[prototype]]`隐式原型

系统为构造函数创建的对象

`__proto__`指向构造函数的`prototype`

