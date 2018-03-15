# prototype和__proto__和实例对象和构造函数

## Q：什么是实例对象

拥有多种数据结构组合在一起的对象

## Q：实例对象的特性

拥有__proto__

通过Array、Object、String、Number、Symbol、自定义构造函数，new关键字赋值的变量

通过`Object.create()`赋值的变量

## Q：创建实例

工厂模式

```
function Person(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = name;
    o.job = name;
    o.sayName = function(){
        console.log(this.name);
    };

    return o;
};

var person1 = Person('zhou',19,'javascript');
person1.sayName();
```

构造函数模式

```
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}

Person('zhou', 19, 'javascript');
global.sayName();
```
```
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}

var person1 = new Person('zhou', 19, 'javascript');
person1.sayName();
```

```
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}

var o = new Object();
Person.call(o,'zhou', 19, 'javascript'); 
o.sayName();
```

```
function Person(){};

Person.prototype.name = 'zhou';
Person.prototype.age = 19;
Person.prototype.job = 'javascript';
Person.prototype.sayName = function(){
    console.log(this.name);
};

var person1 = new Person('zhou',19,'javascript');
person1.sayName();
```

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

