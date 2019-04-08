# 编程题
```javascript
const a = () => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({name: 'y'}),1000);
});

const b = () => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({age: 10}),100);
});

function run(){
    a();
    b();
}
```
- run()的执行时间大概是多少？
- 修改run函数，将运行时间变成两个promise执行时间的总和
- 修改run函数，将运行时为最长的promise执行时间
- 修改run函数，将其运行结果可得到a、b promise 值的结合{name: 'y',age: 10}