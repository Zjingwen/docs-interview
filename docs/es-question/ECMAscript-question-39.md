# 题目集合

Q：下面不属于ECMAScript规范的范围的是：    
A、数据类型    
B、语法    
C、DOM事件    
D、内置对象和函数的标准库    
:::tip 答案：C
解析：DOM事件不属于ECMAScript的部分；ECMAScript定义的内容：语法、类型、原型和继承、内置对象和函数的标准库。    
考点： ECMAScript定义规范的理解，来自《第一节：什么是ES6？新手该如何理解》的内容。  
:::

Q：下面不属于关键字let的特点的是：  
A、只在 let 命令所在的代码块内有效    
B、会产生变量提升现象    
C、同一个作用域，不能重复声明同一个变量    
D、不能在函数内部重新声明参数    
:::tip 答案：B  
解析：使用var关键字才会产生变量提升的现象。关键字let不会产生变量提升现象，所以必须先声明定义后使用，否则程序抛出异常。    
考点：关键字let的使用注意事项，来自《第二节：ES6新增了let关键字，干嘛用的？》的内容。  
:::

Q：关于关键字const，下列说法错误的是：    
A、用于声明常量，声明后不可修改    
B、不会发生变量提升现象    
C、不能重复声明同一个变量    
D、可以先声明，不赋值。    
:::tip 答案：D
解析：声明后必须赋值，负责程序会抛出异常。    
考点：关键字const的使用注意事项，来自 《第三节:ES6中另一个不得不说的关键字const》的内容。
:::

Q：在数组的解构赋值中，var [ a,b,c ] = [ 1,2 ]结果中，a、b、c的值分别是：  
A、1  2  null   
B、1  2  undefined   
C、1  2  2   
D、抛出异常   
:::tip 答案：B
解析：在解构赋值过程中，赋值不成功，变量的值会变成undefined，不会抛出异常。  
考点：数组的结构赋值使用注意事项。来自 《第五节：一个令人兴奋的ES6新特性：解构赋值》的内容。
:::

Q：在对象的解构赋值中，var {a,b,c} = { “c”:10, ”b”:9, ”a”:8 } 结果中，a、b、c的值分别是：  
A、10  9  8   
B、8  9  10   
C、undefined  9  undefined   
D、null  9  null   
:::tip 答案：B
解析：对象的解构赋值不会受到属性的排列次序影响。  
考点：对象解构赋值和数组解构赋值的区别。来自 《第五节：一个令人兴奋的ES6新特性：解构赋值》的内容。
:::

Q：关于模板字符串，下列说法不正确的是：  
A、使用反引号标识   
B、插入变量的时候使用${ }   
C、所有的空格和缩进都会被保留在输出中   
D、${ }中的表达式不能是函数的调用   
:::tip 答案：D
解析：${ }中可以放任意的JavaScript表达式，包括运算表达式、对象属性、函数调用等。  
考点：模板字符串的特点。来自《第六节：ES6为字符串String带来哪些好玩的特性？》的内容。
:::

Q：关于字符串扩展的新函数，下面描述错误的是：  
A、includes函数用于判断字符串中是否含有指定的子字符串   
B、repeat函数将目标字符串重复N次，目标字符串被修改   
C、startsWidth函数判断指定的子字符串是否出现在目标字符串头部位置   
D、endWidth函数判断指定的子字符串是否出现在目标字符串尾部位置   
:::tip 答案：B
解析：repeat函数将目标字符串重复N次，会返回一个新的字符串，不影响目标字符串。  
考点：String字符串的新特性repeat函数的使用。来自《第六节：ES6为字符串String带来哪些好玩的特性？》的内容。
:::

Q：关于数值的扩展，window.isNaN(“abc”) 和Number.isNaN(“abc”)的结果分别是：  
A、true   false   
B、false   true   
C、true   true   
D、false   false   
:::tip 答案：A
解析：window.isNaN函数会把非数值的参数转化成数值再进行判断，而Number. isNaN只对数值类型有效，非数值类型的参数一律返回false。  
考点：isNaN函数从全局函数移植到Number对象后的区别。来自《第七节：ES6为数值做了哪些扩展？》的内容。
:::

Q：关于数值扩展的Number.isInteger函数，下面说法错误的是：  
A、用来判断是否是整数，返回布尔值。   
B、Number.isInteger(3);结果为：true   
C、Number.isInteger(3.0);结果为：false   
D、Number.isInteger(3.01);结果为：false   
:::tip 答案：C
解析：在JavaScript内部对整数和浮点数采用一样的存储方式，因此小数点后如果都是0的浮点数，都会被认为是整数。  
考点：Number.isInteger函数使用的注意事项。来自《第七节：ES6为数值做了哪些扩展？》的内容。
:::

Q：数组扩展的fill( )函数，[1,2,3].fill(4)的结果是：  
A、[4]   
B、[1,2,3,4]   
C、[4,1,2,3]   
D、[4,4,4]   
:::tip 答案：D
解析：fill函数的参数会把原数组的每个元素填充成指定的参数。  
考点：对fill( )函数的了解和使用。来自《第八节：ES6为数组做了哪些扩展？》的内容。
:::

Q：数组的扩展中，不属于用于数组遍历的函数的是：  
A、keys( )   
B、entries( )   
C、values( )   
D、find( )   
:::tip 答案：D
解析：find函数用于找出数组中符合条件的第一个元素，并不是用于遍历数组。  
考点：利用数组的新特性来实现数组的遍历。来自《第八节：ES6为数组做了哪些扩展？》的内容。
:::

Q：关于对象的扩展，错误的是：  
A、ES6中对象的表示法更加简洁  
B、对象的属性名可以是表达式  
C、对象的方法名不可以是表达式  
D、当属性名为表达式的时候，需要使用[ ]标识  
:::tip 答案：C
解析：对象的方法名同样可以是表达式，使用[ ]标识。  
考点：对象的新特性的使用注意事项。来自《第九节：ES6为对象做了哪些扩展？》的内容。
:::

Q：关于对象的Object.is函数，错误的是：  
A、用于判断两个值是否严格相等  
B、用于判断两个值是否抽象相等  
C、Object.is(3,'3') 结果是：false  
D、Object.is(3,3.0) 结果是：true  
:::tip 答案：B
解析：Object.is函数判断两个值是否严格相等，或者说全等，作用等同于全等符号：===  
考点：Object.is函数的了解和使用注意事项。来自《第九节：ES6为对象做了哪些扩展？》的内容。
:::

Q：函数的扩展中，关于rest参数的描述，正确的是：  
A、获取函数剩下部分的参数  
B、rest参数不可以是函数的最后一个参数  
C、获取函数的第一个参数  
D、一个名叫rest的参数  
:::tip 答案：A
解析：rest参数用于表示且必须是函数的最后一个函数，后面不可以再跟其他参数，故B选项是错的。它的表示法表示法使用...（三个点）+ 自定义的参数名，故D选项是错的  
考点：rest参数的理解和使用。来自《第十节：ES6为函数做了哪些扩展？》的内容。
:::

Q：关于箭头函数的描述，错误的是：  
A、使用箭头符号=>定义  
B、参数超过1个的话，需要用小括号（）括起来  
C、函数体语句超过1条的时候，需要用大括号{ }括起来，用return语句返回  
D、函数体内的 this 对象，绑定使用时所在的对象  
:::tip 答案：D
解析：函数体内的 this 对象，绑定定义时所在的对象，而不是使用时所在的对象。这点很重要，连载第十节的时候还特意加了一节讲这个内容。  
考点：箭头函数的使用注意事项。来自《第十节（补课）：函数的扩展 — 箭头函数的this使用》的内容。
:::

Q：关于Symbol，错误的说法是：  
A、是ES6新增的一种数据类型  
B、Symbol() === Symbol() 结果为false  
C、Symbol('same') === Symbol('same') 结果为true  
D、当symbol值作为对象的属性名的时候，不能用点运算符获取对应的值。  
:::tip 答案：C
解析：symbol是独一无二的值，虽然它们的描述都是“'same'”，但是对应的值还是不一样的，所以结果为：false。  
考点：关于Symbol的使用注意事项，来自《第十一节：JavaScript有了一种全新的数据类型：Symbol》的内容。
:::

Q：下面运算结果，结果为true的是：  
A、Symbol.for('name') == Symbol.for('name')  
B、Symbol('name') == Symbol.for('name')  
C、Symbol('name') == Symbol('name')  
D、Symbol.for('name') == Symbol('name')  
:::tip 答案：A
解析：Symbol.for函数会根据参数名，去全局环境中搜索是否有以该参数为名的symbol值，有就返回它，没有就以该参数名来创建一个新的symbol值，并登记在全局环境中，而Symbol每次都会创建一个独一无二的值，不会登记在全局环境中。  
考点：Symbol和Symbol.for创建变量的区别，来自《第十一节：JavaScript有了一种全新的数据类型：Symbol》的内容。
:::

Q：关于Proxy代理，下面说法错误的是：  
A、可以理解成在目标对象之前，架设一层“拦截”  
B、Proxy的get 方法用于拦截某个属性的读取操作。  
C、Proxy的set方法用于拦截对对象的写操作。  
D、一旦对象设置Proxy代理后不可取消，所以要谨慎操作  
:::tip 答案：D
解析：可以用Proxy.revocable( )来取消代理，并不是不可以取消的。  
考点：Proxy代理的设置和取消代理，来自《第十二节：ES6 Proxy代理 和 去银行存款有什么关系？》的内容。
:::

Q：关于for...of的简述，说法错误的是：  
A、它可以遍历所有具有iterator 接口的数据结构  
B、不可以用break来终止循环  
C、使用continue可以跳过当前循环  
D、可以遍历DOM list对象  
:::tip 答案：B
解析：for...of可以用break来终止循环，而传统的forEach则不可以用break终止循环，这正是for...of相对forEach的优势  
考点：for...of遍历相对于传统便利方式的优势，来自《第十三节：易学又实用的新特性：for...of》的内容。
:::

Q：关于set结构，下面说法错误的是：  
A、创建一个实例需要用new关键字  
B、结构成员都是唯一的，不允许重复  
C、使用add方法添加已经存在的成员会报错  
D、初始化的时候接受数组作为参数  
:::tip 答案：C
解析：使用add方法添加已经存在的成员，会自动忽略相同的值，相同的值保留一个。  
考点：set结构的特点，来自《第十六节：ES6新增的 Set 和 WeakSet 是什么东西？》的内容。
:::

Q：关于Set结构的实例方法，下面说法错误的是：  
A、set方法用于添加成员  
B、clear方法用于清除所有成员。  
C、entries方法返回成员的位置索引和值的遍历器  
D、values方法返回成员值的便利器  
:::tip 答案：C
解析：返回的是键名和键值的遍历器；特别注意的是：set结构的键名和键值是同一个值。  
考点：set结构键名和键值的特点，来自《第十六节：ES6新增的 Set 和 WeakSet 是什么东西？》的内容。
:::

Q：关于WeakSet结构，说法错误的是：  
A、与Set结构一样，成员值都是唯一  
B、成员值必须是对象  
C、WeakSet 中的对象都是弱引用  
D、可以forEach( )方法实现遍历  
:::tip 答案：D
解析：WeakSet结构是不可遍历的，所以它不存在forEach方法，以及keys()、values()、entries()方法，这是它和Set结构不同处之一。  
考点：Set和WeakSet的不同点，来自《第十六节：ES6新增的 Set 和 WeakSet 是什么东西？》的内容。
:::


Q：关于Map结构的介绍，下面说法错误的是：  
A、是键值对的集合  
B、创建实例需要使用new关键字  
C、Map结构的键名必须是引用类型  
D、Map结构是可遍历的  
:::tip 答案：C
解析：键名可以是任何数据类型，这是Map结构的最大特性，也是Map结构和传统对象Object最大的区别。  
考点：Map结构的键名特点，来自《第十七节：ES6新增的Map和WeakMap 又是什么东西？》的内容。
:::

Q：下列Map结构的键名数据类型，描述错误的是：  
A、键名可以是数组类型的值  
B、键名可以是Symbol类型的值  
C、键名值可以是null  
D、键名值不可以为undefined  
:::tip 答案：D
解析：undefined也可以做为Map结构的键名。  
考点：Map结构键名的值类型，来自《第十七节：ES6新增的Map和WeakMap 又是什么东西？》的内容。
:::

Q：关于WeakMap结构，下列说法错误的是：  
A、创建实例需要使用new关键字  
B、键名可以是任何类型的值  
C、WeakMap结构不支持clear方法  
D、WeakMap结构不可遍历  
:::tip 答案：B
解析：WeakMap结构的键名必须是引用类型的值，也是它和Map最大不同之处。  
考点：Map和WeakMap的不同点，来自《第十七节：ES6新增的Map和WeakMap 又是什么东西？》的内容。
:::

Q：ES6的新特性Promise对象的设计初衷是：  
A、更好地实现遍历具有iterator接口的数据结构  
B、为对象的操作增加了一层“拦截”  
C、独一无二的值，用于对象属性，避免属性名冲突  
D、让开发者更合理、更规范地用于处理异步操作  
:::tip 答案：D
解析：遍历具有iterator接口的数据结构是for...of的作用；为对象的操作增加了一层“拦截”是Proxy代理的设计初衷；独一无二的值，避免属性名冲突是Symbol的设计初衷。而D选项，是Promise对象的设计初衷。  
考点：Promise对象的作用，来自《第十八节：教你如何使用ES6的Promise对象》的内容。
:::

Q：关于Promise对象的状态，下列说法错误的是：  
A、三种状态分别是：pending初始状态、fulfilled成功、rejected失败  
B、pending初始状态可以状变成fulfilled成功  
C、rejected失败不可以状变成pending初始状态  
D、rejected失败可以状变成fulfilled成功  
:::tip 答案：D
解析：A、B、C的说法都是正确的，rejected失败和fulfilled成功之间不能相互转换，故D选项是错误的。   
考点：Promise对象三种状态的转换关系，来自《第十八节：教你如何使用ES6的Promise对象》的内容。
:::

Q：下面关于类class的描述，错误的是：  
A、JavaScript的类class本质上是基于原型prototype的实现方式做了进一步的封装  
B、constructor构造方法是必须的  
C、如果类的constructor构造方法有多个，后者会覆盖前者  
D、类的静态方法可以通过类名调用，不需要实例化  
:::tip 答案：C
解析：同一个类的constructor构造方法只能有一个，否则程序会报错。  
考点：类class的声明，来自《第十九节：终于，JavaScript也有了类（class）的概念》的内容。
:::

Q：JavaScript中类的继承使用的关键字是：  
A、extends  
B、inherit  
C、extend  
D、base  
:::tip 答案：A
解析：extends才是JavaScript中类的继承关键字，其他的选项都不是。  
考点：类的继承知识，来自《第十九节：终于，JavaScript也有了类（class）的概念》的内容。
:::

Q：在类的继承中，关于super的说法错误的是：  
A、在子类的构造函数，必须先调用super( )  
B、super相当于子类的引用  
C、先调用super( )，才可以使用this  
D、super( )相当于父类构造函数的调用  
:::tip 答案：B
解析：super是父类的引用，我们可以通过super来调用父类的方法和属性。  
考点：类的继承，来自《第十九节：终于，JavaScript也有了类（class）的概念》的内容。
:::

Q：下列数据结构中，不能被for...of遍历的是：  
A、Array数组  
B、Object对象  
C、String字符串  
D、Set结构  
:::tip 答案：B
解析：只有该数据结构实现了Iterator遍历器接口才可以被for...of遍历，而数组，字符串，Set和Map结构正式这样的可遍历对象。而普通的Object对象并没有实现Iterator遍历器接口。  
考点：具有Iterator接口可遍历对象，来自《第十四节：ES6的 Iterator 遍历器到底是什么？》的内容。
:::

Q：关于Iterator遍历器的说法，错误的是：  
A、next( )方法是Iterator遍历器的核心  
B、当next( )返回对象的done属性为fasle，遍历结束  
C、具有Iterator接口的对象视为可遍历对象  
D、可以自定义一个可遍历对象和其遍历行为  
:::tip 答案：B
解析：当next( )返回对象的done属性为fasle，表示遍历未结束，done属性为true时，表示遍历结束。  
考点：Iterator遍历器的原理，来自《第十四节：ES6的 Iterator 遍历器到底是什么？》的内容。
:::

Q：关于新特性Generator函数的描述，错误的是：  
A、Generator函数，又称生成器函数  
B、声明Generator函数的关键字是：function*  
C、Generator函数执行后得到的一个生成器  
D、使用return语句使Generator函数暂停执行，直到next方法的调用  
:::tip 答案：D
解析：使函数暂停执行的关键字是yield，不是return；return语句是使函数停止执行并退出。  
考点：Generator函数的特点，来自《第十五节：有一种特殊的函数叫：Generator函数》的内容。
:::

Q：Generator函数的yield关键字的作用是：  
A、停止执行  
B、退出函数  
C、暂停执行，等待next( )方法调用  
D、停止执行，可自行恢复执行  
:::tip 答案：C
解析：Generator函数可以有很多个yield。而return代表的是终止执行，yield代表的是暂停执行，后续通过调用生成器的next( )方法，可以恢复执行。  
考点：yield关键字的关键字，来自《第十五节：有一种特殊的函数叫：Generator函数》的内容。
:::

Q：在Generator函数中，`yield*`语句的作用是：  
A、调用另外的Generator函数  
B、暂停执行，待next( )方法调用后恢复  
C、停止执行，退出函数  
D、调用任意的其他函数  
:::tip 答案：A
解析：关键字`yield*`来实现调用另外的Generator函数。如果一个Generator函数A执行过程中，进入（调用）了另一个Generator函数B，那么会一直等到Generator函数B全部执行完毕后，才会返回Generator函数A继续执行。  
考点：关键字yield*的作用，来自《第十五节：有一种特殊的函数叫：Generator函数》的内容。
:::

Q：关于ES6的module模块，下列说法错误的是：  
A、可以有效解决大型系统文件复杂的依赖问题  
B、使用export语句可以选择性地向外部暴露自己的属性或者方法  
C、使用import语句导入其他模块的属性或者方法  
D、目前大部分主流浏览器都支持module模块  
:::tip 答案：D
解析：目前(2016年上半年)还没有浏览器支持module模块的开发，需要借助转码工具才可以使用。A选项是ES6的设计初衷之一，B选项是export语句的正确描述，C选项是import语句的正确描述。  
考点：module模块的使用和实现，来自《一个缺失已久的特性 — module模块》的内容。
:::

Q：module模块中，对下列语句的描述，错误的是：  
A、export 导出  
B、import 导入  
C、export default 默认导出  
D、import * as  重命名  
:::tip 答案：D
解析：import * as：星号符*实现的是整体导入。而重命名的实现方式是：import { name as myname }。  
考点：module模块的关键字语句含义，来自《一个缺失已久的特性 — module模块》的内容。
:::

Q：module模块中的注意事项，下列说法错误的：  
A、除了对象类型以外，导出的属性对外都是只读的  
B、导入不存在的变量，值为undefined  
C、导入不存在的变量，程序会抛出异常  
D、可以为导入的属性和方法取任意名字  
:::tip 答案：C
解析：导入不存在的变量，程序不会抛出异常，只是值为undefined。  
考点：module模块的注意事项，来自《一个缺失已久的特性 — module模块》的内容。
:::

Q：想要获取Map实例对象的成员数，利用的属性是：  
A、size  
B、length  
C、sum  
D、members  
:::tip 答案：A
解析：属性就是size：获取实例的成员数，其他选项都不是，很多初学者误以为是length。  
考点：Map结构的知识点，来自《第十七节：ES6新增的Map和WeakMap 又是什么东西？》的内容。
:::

Q：关于定义常量的关键字const，定义一个Object对象{“name”:”Jack”}，再对属性name 的值进行修改，如：obj.name = “John”。下列说法正确的：   
A、修改常量，程序跑出异常  
B、程序不抛出异常，修改无效  
C、修改成功，name的值为John  
D、程序不抛出异常，name的值为undefined  
:::tip 答案：C
解析：用const来声明一个对象类型的常量，就是传址赋值。而不可修改的是对象在内存中的地址，而不是对象本身。所以修改name并不是修改对象的内存地址，所以可以成功修改。  
考点：const定义一个对象时候的注意事项，还记得装修师傅的故事吗？来自《第三节：ES6中另一个不得不说的关键字const》的内容。
:::

Q：说出至少5个ES6的新特性，并简述它们的作用。（简答题）  

答：

1. let关键字，用于声明只在块级作用域起作用的变量。
2. const关键字，用于声明一个常量。
3. 结构赋值，一种新的变量赋值方式。常用于交换变量值，提取函数返回值，设置默认值。
4. Symbol数据类型，定义一个独一无二的值。
5. Proxy代理，用于编写处理函数，来拦截目标对象的操作。
6. for...of遍历，可遍历具有iterator 接口的数据结构。
7. Set结构，存储不重复的成员值的集合。
8. Map结构，键名可以是任何类型的键值对集合。
9. Promise对象，更合理、规范地处理异步操作。
10. Class类定义类和更简便地实现类的继承。

Q：使用结构赋值，实现两个变量的值的交换（编程题）  

答：

```js
let a = 1;
let b = 2;  
[a,b] = [b,a];
```

Q：使用结构赋值，完成函数的参数默认值（编程题）  

答：

```js
function demo({name="前端君"}){
    console.log(name);
}
```

Q：利用数组推导，计算出数组 [1,2,3,4] 每一个元素的平方并组成新的数组。（编程题）  

答：

```js
var arr1 = [1, 2, 3, 4];
var arr2 = [for (i of arr1) i * i];
console.log(arr2);
```

Q：使用模板字符串改写下面的代码。（ES5 to ES6改写题）  

答：

```js
let iam  = "我是";
let name = "前端君";
let str  = "大家好，"+iam+name+",多指教。";
改写成：
let iam  = `我是`; let name = `前端君`; let str  = `大家好，${iam+name},多指教。`;
```

Q：用对象的简洁表示法改写下面的代码。（ES5 to ES6改写题）  

答：

```js
let name = "前端君";
let obj = {
    "name":name,
    "say":function(){
        alert('hello world');
    }
};
改写成：
let name = "前端君";
let obj = {
    name,
    say(){
        alert('hello world');
    }
};
```

Q：用箭头函数的形式改写下面的代码。（ES5 to ES6改写题）  

答：

```js
arr.forEach(function (v,i) {
    console.log(i);
    console.log(v);
});
改写成：
arr.forEach((v,i) => {
    console.log(i);
    console.log(v);
});
```

Q：设计一个对象，键名的类型至少包含一个symbol类型，并且实现遍历所有key。（编程题）  

答：

```js
let name = Symbol('name');
let product = {
    [name]:"洗衣机",
    "price":799,
};

Reflect.ownKeys(product);
```

Q:有一本书的属性为：{“name”:“《ES6基础系列》”, ”price”：56 }；要求使用Proxy对象对其进行拦截处理，name属性对外为“《ES6入门到懵逼》”,price属性为只读。（练习题）

答：

```js
let book = {
    "name":"《ES6基础系列》",
    "price":56,
};

let proxy = new Proxy(book,{
    get:function(target,property){
        if(property === "name"){
            return "《入门到懵逼》";
        }else{
            return target[property];
        }
    },
    set:function(target,property,value){
        if(property === 'price'){
            target[property] = 56;
        }
    }
});
```

Q：阅读下面的代码，并用for...of改成它。（ES5 to ES6改写题）  

答：

```js
let arr = [11,22,33,44,55];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
// 改写：
let arr = [11,22,33,44,55];
let sum = 0;
for(value of arr){
    sum += value;
}
```

Q：关于Set结构，阅读下面的代码，回答问题。（代码阅读题）。  

```js
let s = new Set();
s.add([1]);
s.add([1]);
console.log(s.size);
```

问：打印出来的size的值是多少？

答：2。如果回答为1的同学，多必是记得Set结构是不会存储相同的值。其实在这个案例中，两个数组[1]并不是同一个值，它们分别定义的数组，在内存中分别对应着不同的存储地址，因此并不是相同的值。所以都能存储到Set结构中，size为2。

Q：关于Map结构，阅读下面的代码，回答问题。（代码阅读题）  

```js
let map = new Map();
map.set([1],"ES6系列");
let con = map.get([1]);
console.log(con);
```

问：打印出来的变量con的值是多少，为什么？

答：undefined。因为set的时候用的数组[1]和get的时候用的数组[1]是分别两个不同的数组，只不过它们元素都是1。它们是分别定义的两个数组，并不是同一个值。新手避免在这里犯错。如果想达到预期的效果，你要保证get的时候和set的时候用同一个数组。比如：

```js
let map = new Map();
let arr = [1];
map.set(arr,"ES6系列");
let con = map.get(arr);
console.log(con);
```

这样的得到的变量con的值就是：“ES6系列”。

Q：定义一个类Animal，通过传参初始化它的类型，如：“猫科类”。它有一个实例方法：run，run函数体内容可自行定义。  

答：

```js
class Animal {
    constructor(type){
        this.type = type;
    }
    
    run(){
        alert('I can run');
    }
}
```

基于第12题的Animal类，定义一个子类Cat并继承Animal类。初始化Cat类的昵称name和年龄age。并拥有实例方法eat，eat函数体内容可自行定义。

答：

```js
class Cat extends Animal{
    constructor(type,name,age){
        super(type);
        this.name = name;
        this.age = age;
    }
    
    eat(){
        alert('I am eating');
    }
}
```

Q：利用module模块，实现两个模块A和B，A模块导出变量name，age和say方法。B模块只导入变量name和say方法，并且重命名name为nickname。  

答：

```js
//-----模块A-------
var name = "kitty";
var age = 15;
var say = function(){
    //....
};
export {name,age,say}
//---module-B.js文件---import { name as nickname, say } from "模块A的相对路径";
```

