## 编程题 
- 说明以下代码输出情况

```javascript
function a(fun){
    console.log('a');
    fun(function(){
        c();
    })
}

function b(fun){
    console.log('b');
    fun();
}

function c(){
    console.log('c');
}

a(b);
c();
```

