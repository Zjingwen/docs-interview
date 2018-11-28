# React生命周期

![WechatIMG2006](https://lh3.googleusercontent.com/-jRhjzvFA3xI/W_uliAGt2wI/AAAAAAAAAF4/GbUq0TYYoagiQ2bhFq_GIQnako7FHnqkQCHMYCw/I/WechatIMG2006.png)

[TOC]

## api
### constructor 实例化

```javascript
class A extends React.Component{
	constructor(){
		super();
	}
}
```
* 实例化对象
* 继承React.Component
* 初始化state

### static getDerivedStateFromProps

```javascript
class A extends React.Component{
	static getDerivedStateFromProps(props,state){
		return Object
	}
}
```
* update更新时，render之前，dom渲染前
* 必须有初始化state
* 静态方法，没有this
* 可以return出对象，设置state

### shouldComponentUpdate

```javascript
class A extends React.Component{
	shouldComponentUpdate(nextProps, nextState){
		return Boolean
	}
}
```
* update更新时，render之前，dom渲染前
* return 一个布尔值来判断是否渲染
* 默认return true

### render

```javascript
class A extends React.Component{
	render(){
		return JSX
	}
}
```
* 将jsx渲染为真实DOM

### getShapshotBeforeUpdate

```javascript
class A extends React.Component{
	getShapshotBeforeUpdate(prevProps,prevState){
		return ‘getShapshotBeforeUpdate’
	}
	componentDidUpdate(prevProps,prevState,snapshot){
	   // TODO snapshot == ‘getShapshotBeforeUpdate’
	}
}
```
* update更新时，render之前，dom渲染前
* 无默认返回值，可返回null
* return 一个值，用来作为componentDidUpdate的第三个参数

### componentDidMount

```javascript
class A extends React.Component{
	componentDidMount(){}
}
```
* render之后，dom渲染后

### componentDidUpdate

```javascript
class A extends React.Component{
	componentDidUpdate(prevProps,prevState,snapshot){}
}
```
* update更新时，render之后，dom渲染后
* snapshot为getShapshotBeforeUpdae的return

### componentWillUnmount

```javascript
class A extends React.Component{
	componentWillUnmount(){}
}
```
* dom卸载

## 流程

### 初始化 

```text
constructor()
static getDerivedStateFromProps(props,state)
render()
componentDidMount()
```


### 属性更新
 New Props

```text
static getDerivedStateFromProps(props,state)
shouldComponentUpdate(nextProps, nextState)
render()
getSnapshotBeforeUpdate(prevProps,prevState)
componentDidUpdate()
```

setState()

```text
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
```

forceUpdate()

```text
getDerivedStateFromProps()
render()
getShapshotBeforeUpdate()
componentDidUpdate()
```

## 触发生命周期的api

### setState 设置状态
setState((prevState)=>({object}),function callback])

```
this.setState(prevState=>({
    ...prevState
}),()=>{
    ...
})
```

* 触发一轮生命周期`getDerivedStateFromProps->shouldComponentUpdate->render->getSnapshotBeforeUpdate->componentDidUpdate`
* prevState为当前组件的state值
* callback，为状态设置之后，state经过所有生命周期后调用

### forceUpage 强制更新
forceUpage(function callback)

```
this.forceUpage(()=>{
    ...
})
```

* 触发一轮生命周期`getDerivedStateFromProps->render->componentDidUpdate`
* callback，为生命周期之后调用

