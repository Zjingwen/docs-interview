# 说明以下代码输出情况

```js
function a(){
    console.log('a');
    c();
}

function b(){
    console.log('b');
    a();
}

function c(){
    console.log('c')
}

a();
b();
c();
```