# Event Loop

## javascript是单线程
javascript这门语言从诞生起就是单线程的，这是针对使用场景的选择。在浏览器编程里，基本由三个操作组合而成，事件、操作DOM、xhr。

有一个经典例子，如果有两个线程，一个线程是删除DOM，一个线程是添加DOM，这个时候浏览器应该以什么为准。

但是单线程，就意味着所有任务，都在一个线程上执行，如果上一个任务占用浏览器太长时间，则一下个任务就会停滞，给用户卡顿的体验。而且有时候一个任务有很长的空转期，这个时候最大的可能是ajax返回。这时javascript将任务划分为两种，一类是优先执行的同步任务、一类是等待有结果之后再进入主程的异步任务。这样可以高效的使用CPU，大大缩短空转期CPU的占用，提高用户体验。

## 调用栈
用来从代码中取出方法，并且按照先入先出的顺序执行，其中的main()指当前文件。

调用栈的最大长度16000个任务，如果超出则会提示报错。

例子：

```
function test1() {
	console.log(1);
	console.log(2);
	console.log(3);
};

function test2() {
	console.log(4);
	console.log(5);
	console.log(6);
}

test1();

test2();
```

流程图：

![](http://o7s01mlar.bkt.clouddn.com/EventLoop.jpg)

调用栈先插入main()指向文件本身，然后按照执行的从上到下顺序，插入调用栈。然后按照先入先出的选择依次执行栈中的人物，当一个任务完成之后，清空栈，插入下一个任务。每一次进入调用栈的只有一个任务，如果进入的是一个函数，则会展开函数依次执行。

例子：

```
console.log(1);

console.log(2);

console.log(3);
```

流程图：

![](http://o7s01mlar.bkt.clouddn.com/EventLoop2.jpg)

只有当栈为空的时候，下一个任务才会被推送到栈中，每一次只会执行一个任务。


## 任务队列
用来执行web Api任务的队列，等任务有结果后，将异步任务推入callblock queue中。调用了xhr、dom、setTimeout，等web Api接口的任务，都属于异步任务。

![](http://o7s01mlar.bkt.clouddn.com/EventLoop3.jpg)

## callblock queue
event queue队列中，一旦有完成的任务，就将这个任务推入callblock queue队列中，等待调用栈调用。

## Event Loop事件循环机制
当调用栈（主程）为空时，去读取callblock queue队列时候有，异步操作完成的任务，如果有就将任务推送到主程执行。这个机制是会一直循环坚挺的。

当event loop将callblock queue中的人物丢入调用栈时，浏览器的重绘机制会梗阻。因为callblock queue比rendar queue的优先级高。所以调用栈会优先调用callblock queue中的任务。

## setTimeout
在一段时间之后，向callblock queue队列添加一个任务。

setTimeout的时间设置，并不是指这个方法的执行时间，而是指这个方法，被放在任务队列中何时插入callblock queue队列的时间。

影响setTimeout的执行时间，有两个设置的时间，当前处于callblock queue队列的什么位置，如果处于队列头部，那么会被最快执行，反之就要看前面的队列任务需要的执行时间。

setTimeout最快进入callblock的时间为4毫秒（html标准）

## 永不阻塞
正是因为javascript的event loop，当调用栈将所有同步任务完成后，通过event loop机制将callblock queue的任务放入调用栈。这样调用栈中的所有同步任务都不会被延迟，而且异步等待又web浏览器去做处理，当有callblock完成时，将任务推入中callblock queue中，等待event loop调取。高效的使用了空闲时间。


## Web Worker标准
允许javascript创建多线程，但是子线程完全受主线程控制，并且不能操作DOM



