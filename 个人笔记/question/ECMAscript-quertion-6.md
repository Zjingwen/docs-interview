# 编程题
```javascript
function a(){
    const startTime = Date.now();
    let type = true;
    
    while(type){
        if(Date.now() - startTime > 100){
            type = false;
        }
    }
}
```
- setTimeout(a,10);的结果是？会每隔10ms后执行吗？总运行时间是多少？
- setInterval(a,10);的结果是？会每隔10ms后执行吗？1000ms后会怎么样？