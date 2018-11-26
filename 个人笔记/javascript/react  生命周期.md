# react Api

## 生命周期
![WechatIMG2006](https://lh3.googleusercontent.com/-jRhjzvFA3xI/W_uliAGt2wI/AAAAAAAAAF4/GbUq0TYYoagiQ2bhFq_GIQnako7FHnqkQCHMYCw/I/WechatIMG2006.png)

### 初始化 

constructor()
![1111](https://lh3.googleusercontent.com/-wmMQlmj5un0/W_umLsPZnXI/AAAAAAAAAGA/rJGJA5Nl6SAktPRCATCBvvwuT560YmD9ACHMYCw/I/1111.png)

* render之前

static getDerivedStateFromProps(props,state)
![2222](https://lh3.googleusercontent.com/-wZA9hOsoblk/W_unzF082YI/AAAAAAAAAGM/tcooJBpI-N8tak3HV0yReEcM1NzX4386QCHMYCw/I/2222.png)

* update更新时，render之前，dom渲染前
* 直接返回一个对象，设置为state，或者为null
* 必须同时有props和state，该方法才能成立，不然会产生警告
* 静态方法，无法访问this

render()
![3333](https://lh3.googleusercontent.com/-EaBD8NxH5WY/W_uojVAouTI/AAAAAAAAAGg/QQPW7UwtCogPDVj2Mglp1MwpUjsbaR6yQCHMYCw/I/3333.png)

* 渲染、挂载DOM

componentDidMount()
![4444](https://lh3.googleusercontent.com/-x2C-9p3EBk0/W_uo1_mUH8I/AAAAAAAAAGo/cSZ8eoJ2t9wePIHvokKalL08sA-kbe8DwCHMYCw/I/4444.png)

* update后，render之前，dom渲染后

### 属性更新
> New Props

static getDerivedStateFromProps(props,state)

shouldComponentUpdate(nextProps, nextState)
![5555](https://lh3.googleusercontent.com/-mnu4d5jYyt4/W_uty3xyXdI/AAAAAAAAAHA/ABGl5vRh5zwf_oDL0kAXvWDV45bLdYaMQCHMYCw/I/5555.png)

* update更新时，render之前，dom渲染前
* 监听props、state变化
* 以参数的形式传入新的props、state
* 返回布尔值来控制render是否更新

render()

getSnapshotBeforeUpdate(prevProps,prevState)
![666](https://lh3.googleusercontent.com/-XQA4rGcO77Q/W_u1-QLhE_I/AAAAAAAAAHY/YgI39cWAjykqQVrnxN5CQnVOafjI14nnwCHMYCw/I/666.png)


* update更新时，render之后，dom渲染之前
* 返回一个值，作为componentDidUpdate的第三个参数

componentDidUpdate()
![777](https://lh3.googleusercontent.com/-AG9bvrDpj5o/W_u2Y6hmZmI/AAAAAAAAAHg/hnd2VB5s6f0DlbdrSBD4L5avh438-FmxgCHMYCw/I/777.png)


* update更新时，render之后，dom渲染之后

> setState()

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

> forceUpdate()

getDerivedStateFromProps()
render()
getShapshotBeforeUpdate()
componentDidUpdate()

### 组件卸载
componentWillUnmount()
![888](https://lh3.googleusercontent.com/-2v-VMowkk9k/W_u2ssZpwwI/AAAAAAAAAHo/t2fBPYefpzw8vuC-7l-Tkq8oUEzWHrj9QCHMYCw/I/888.png)

* dom卸载后

## state of props

### 设置状态
setState(object nextState[, function callback])

### 替换状态
replaceState(object nextState[,function callback])

### 设置属性
setProps(object nextProps[,function callback])

### 替换属性
replaceProps(object nextProps[,function callback])

## 强制更新
forceUpage([function callback])

## 获取DOM
DOMElement findDOMNode()

## 判断组件挂载状态
bool isMounted()



