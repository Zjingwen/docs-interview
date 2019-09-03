# queryString
:::tip
题目：
* 实现一个queryString的序列化函数，stringify()函数，输入对象可能包含嵌套对象  

要求：
* stringify({a:1,b:2})，输出a=1&b=2  
* stringify({a:1,b:{c:1,b:2}})，输出a=1&c=1&b=2
:::

```js
let q = "";
function stringify(s) {
  Object.keys(s).forEach(element => {
    if (typeof s[element] === "object") {
      stringify(s[element]);
    } else {
      q = q + `&${element}=${s[element]}`;
    }
  });
  return q.replace(/&/, "");
}
```
