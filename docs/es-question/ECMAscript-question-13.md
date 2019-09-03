# 写出以下输出结果

```js
var s = {
  s: ‘student’,
  getS: function(){
    console.log(this.s);
  }
};
var t = {
  s: ‘teaher’
};
 
var getS = s.getS;
var getS1 = getS.bind(s);
 
// 写出以下输出结果
s.getS();
s.getS.apply(t);    
getS();
getS1.call(t);
```

