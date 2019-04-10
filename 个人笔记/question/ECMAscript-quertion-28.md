## 编程题 
- 说明以下代码输出情况

```javascript
function a(fun){
    console.log('b');
}
    
function b(fun){
    console.log('b');
}
    
function c(fun){
    console.log('c');
}
    
a(function(fun){
    fun();
    b();
})
    
a(c);
```