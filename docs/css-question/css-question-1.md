# CSS background 属性

:::tip
题目：
* CSS background 属性中，如何同时定义多个背景图以及颜色（HTML+CSS）

:::

```css
background: 
    url(imgUrl),
    url(imgUrl);
background-size: 100%,100%;
background-repeat: no-repeat,no-repeat;
```

解答：

通过使用 CSS3，你可以向元素应用多个背景。这些背景相互堆叠，第一个背景放在最上面，最后一个背景放在最下面。 仅最后一个背景允许拥有背景色。color不可以设置多个。

参考：

[使用CSS的多背景
](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds)

