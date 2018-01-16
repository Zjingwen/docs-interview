# CSS的继承

## CSS中属性的继承
span继承了，来自codeClass的color。也就是说，子元素会从父元素继承属性，当然不是所有的CSS属性都有继承性，文本属性（color、font、line-height、text-align、text-decoration、other）是具有继承性的，而自身属性（width、height、margin、padding、border、background）和显示属性(display、position、float、list-style)是不具有继承性的。

```
.codeClass{color:#000000;}
<p class="codeClass"><span>你好</span>世界</p>
```


## CSS选择器的权重的表现
根据id（id选择器）>class（类选择器）>body（元素选择器）。Id选择器的权重为100，Class选择器的权重为10，Body选择器的权重为1

```css
//不同权重时的表现
p{color:#000;}
.codeClass{color:#cccccc;}
#codeId{color:#ffffff;}

<p class="codeClass" id="codeId">你好世界</p>
```

1. 最终显示的效果，你好世界的color为color：#ffffff，因为ID的权重是最高的，.codeClass和p都会被codeId屏蔽掉。
2. #codeid（权重100）>.codeClass（权重10）>p（权重1）
　　

## 相同权重时的表现
因为CSS会当权重相同时，CSS会遵循就近原则，如果使用`!important`，就会强制使用当前属性。

```css
p{color:#000;}
p{color;#fff;}
<p>你好世界</p>
```

1. 最终的显示效果，你好世界的color为color;#fff，，选择最新书写的css为最终显示效果。


## 权重的相加
CSS的权值是可以叠加计算的，从而导致影响最后的效果

```css
.codeClassing{color:#ffffff;}
.codeClass span{color:#cccccc;}
<p class="codeClass"><span class="codeClassing">你好</span>世界</p>
```

1. 最终的显示效果，你好世界的color为color：#cccccc，因为.codeClass(权重10)+span（权重1）=11，而.codeClassing(权重10)，.codeClass span>.codeClassing的所以最后显示效果为.codeClass span

## 总结
根据css权重的计算，可以更好的控制css在页面的表现效果，首先css开始书写时，使用权重最低的元素选择器，再使用类选择器，最后使用组合选择器，类选择器+元素选择器。这样的书写习惯，可以更好的控制CSS，不容易造成编程者无法理解css的显示权重。


