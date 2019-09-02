# 编程题
```javascript
functino A(){
    const b ={};
    return ()=>{
        return b;
    }
}
```
- `A()()`会得到什么？
- `A()().b = 1; A()().c = 2; console.log(A()());`会得到什么结果？
- `const a = A(); a().b = 1; a().c = 2;console.log(a());`会得到什么结果？