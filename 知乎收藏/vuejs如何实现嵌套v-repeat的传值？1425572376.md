# vuejs如何实现嵌套v-repeat的传值?

filter 内的 this 指向当前正在使用该 filter 的实例，所以你可以在 filter 函数里用 this.kinds.id  
例子：[Edit fiddle - JSFiddle](http://jsfiddle.net/av0jmw66/)