## 编程题 
- 说明以下代码输出情况

```javascript
var aa = function(item){
    console.log(item.a);
}

var list=[{a:1},{a:2},{a:3}];
for(var i=0;i<list.length;i++){
    aa(list[i]);
}
```