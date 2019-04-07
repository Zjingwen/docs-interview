# CSS background 属性中，如何同时定义多个背景图以及颜色（HTML+CSS）

[demo](https://jsbin.com/pamuneteba/1/edit?css,output)

```
width: 300px;
height: 200px;

background: 
    url(https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png),
    url(http://img2.imgtn.bdimg.com/it/u=2291655243,3954230733&fm=26&gp=0.jpg);
background-size: 100%,100%;
background-repeat: no-repeat,no-repeat;
```

解答：

通过使用 CSS3，你可以向元素应用多个背景。这些背景相互堆叠，第一个背景放在最上面，最后一个背景放在最下面。 仅最后一个背景允许拥有背景色。color不可以设置多个。

参考：

[使用CSS的多背景
](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds)

