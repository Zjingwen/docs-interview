# prototype和__proto__

## __proto__
Mozilla实现的javascript对外暴露了一个专门命名为`__protp__`的属性，用以直接查询／设置对象的原型。不推荐使用`__protp__`，因为尽管Safari和Chrome的当前版本都支持它，但IE和Opera还未实现它。实现了ECMAscript 5的Firefox版本依旧支持`__proto__`，但对修改不可扩展对象的原型做了限制。

## prototype
每一个对象的原型方法，当调用一个对象的方法时，会从对象的方法中查找，如果方法中找不到，就会去prototype中查找，直到找到方法，或者没有找到，返回null。也就是原型链。


