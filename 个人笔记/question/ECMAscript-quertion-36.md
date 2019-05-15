## Q：写出下面2段代码的执行结果 ❌

```javascript
console.log('A');

var promise = new Promise((resolve,reject)=>{
    console.log('C');
    setTimeout(()=>{
        console.log('D');
        resolve();
        reject();
        resolve();
    },10);
    
    setTimeout(()=>{
        console.log('H');
    });
});

promise.then((res)=>{
    console.log('E');
})

promise.then((res)=>{
    console.log('F');
})

promise.then((res)=>{
    console.log('G');
})

console.log('B');