##编程题 
- 请说明以下代码的输出情况

```javascript
var aa = function(item){
  console.log(item.a);
}

var list2=[{a:1},{a:2},{a:3}];

for(var i=0;i<list2.length;i++){
  var item = list2[i];
  setTimeout((function(_item){
    return function(){
      aa(_item);
    }
  })(item),10);
}
```