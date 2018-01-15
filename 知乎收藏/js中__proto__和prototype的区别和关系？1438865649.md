# js中__proto__和prototype的区别和关系？

几乎任何对象有一个[[prototype]]属性，在标准中，这是一个隐藏属性。该属性指向的是这个对象的原型。  

那么一个对象的[[prototype]]属性究竟怎么决定呢？这是由构造该对象的方法决定的。据我所知有三种构造一个对象的方法：  

1.  这个对象是通过**对象字面量**构造出来的。

    <div>

        var person1 = {    name: 'cyl',    sex: 'male'};

    </div>

    形如这个形式的叫做对象字面量。这样子构造出的对象，其[[prototype]]指向Object.prototype
2.  这个对象是由**构造函数**构造出来的。

    <div>

        function Person(){}var person1 = new Person();

    </div>

    通过new操作符调用的函数就是构造函数。由构造函数构造的对象，其[[prototype]]指向其**构造函数的prototype**属性指向的对象。每个函数都有一个prototype属性，其所指向的对象带有constructor属性，这一属性指向函数自身。（在本例中，person1的[[prototype]]指向Person.prototype）
3.  这个对象是由**函数Object.create**构造的。

    <div>

        var person1 = {    name: 'cyl',    sex: 'male'};var person2 = Object.create(person1);

    </div>

    本例中，对象person2的[[prototype]]指向对象person1。在没有Object.create函数的日子里，人们是这样做的：

    <div>

        Object.create = function(p) {    function f(){}    f.prototype = p;    return new f();}

    </div>

然而虽然说[[prototype]]是一个隐藏属性，但很多浏览器都给每一个对象提供.__proto__这一属性，这个属性就是上文反复提到的该对象的[[prototype]]。由于这个属性不标准，因此一般不提倡使用。ES5中用Object.getPrototypeOf函数获得一个对象的[[prototype]]。ES6中，使用Object.setPrototypeOf可以直接修改一个对象的[[prototype]]  

--------------------------------  
至于什么原型链之类的，都很好理解，这里就不说了。  

------------------------------------  
某答案说.__proto__ === .constructor.prototype是不对的，如果一个对象是通过Object.create函数构造出来的，.那其__proto__就不一定是.constructor.prototype了