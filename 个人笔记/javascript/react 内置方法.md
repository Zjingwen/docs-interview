# React的方法

[TOC]

## React.Component
* react实例

```
class A extends React.Component{}
```

## React.PureComponent
* 内置一个浅比较，比较props和state，决定是否render，用于提高性能
* 无法比较对象
* 用于避免无状态组件的重复渲染

```
 class A extends React.PureComponent{}
```

## React.memo
* 和React.PureComponent类似功能一直，但这是一个纯函数用法
* 只是进行浅对比，无法对比复合数据

```
const A = React.memo((props)=>{
    return JSX
},(prevState,prevProps)=>{
    return null |  true | false
})
```

## React.createRef
* 使用属性创建
* 通过ref属性附加到React元素
* 可以通过curent访问到节点
* ref更新发生在componentDidMount、componentDidUpdate时
* 无法在函数组件上使用，因为没有实例

```
class A extends React.Component{
    constructor(){
        super();
        this.aRef = React.createRef();
    }
    
    render(){
        return(
            <div ref={this.aRef}>hello react</div>
        )
    }
}
```

## React.isValidElement()
* 验证对象是否为React元素。返回true或false。

```
let D = React.createElement('div');
React.isValidElement(D);
```

