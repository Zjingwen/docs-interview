[TOC]

<div STYLE="page-break-after: always;"></div>

# React的方法

![WechatIMG2006](https://lh3.googleusercontent.com/-jRhjzvFA3xI/W_uliAGt2wI/AAAAAAAAAF4/GbUq0TYYoagiQ2bhFq_GIQnako7FHnqkQCHMYCw/I/WechatIMG2006.png)
## 生命周期详解
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

<div STYLE="page-break-after: always;"></div>

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

<div STYLE="page-break-after: always;"></div>

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
* 唯一的会在服务端渲染调起的生命周期钩子函数。

### componentDidUpdate

```javascript
class A extends React.Component{
	componentDidUpdate(prevProps,prevState,snapshot){}
}
```
* update更新时，render之后，dom渲染后
* snapshot为getShapshotBeforeUpdae的return

<div STYLE="page-break-after: always;"></div>

### componentWillUnmount

```javascript
class A extends React.Component{
	componentWillUnmount(){}
}
```
* dom卸载

## 触发流程

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
<div STYLE="page-break-after: always;"></div>

forceUpdate()

```text
getDerivedStateFromProps()
render()
getShapshotBeforeUpdate()
componentDidUpdate()
```

<div STYLE="page-break-after: always;"></div>

## 触发生命周期的api

### setState 设置状态
setState((prevState)=>({object}),function callback])

```
// 完全写法
this.setState(prevState=>({
    ...prevState
}),()=>{
    ...
})

// 简单写法
this.setState({
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

<div STYLE="page-break-after: always;"></div>

## React.Component
* react的抽象基础类

```
class A extends React.Component{}
```

## React.PureComponent
* 内置一个浅比较，比较props和state，决定是否render，用于提高性能
* 只是进行浅对比，无法对比复合数据
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
<div STYLE="page-break-after: always;"></div>
## React.createRef
* 创建节点引用
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

## React.isValidElement
* 验证对象是否为React元素。返回true或false。

```
let D = React.createElement('div');
React.isValidElement(D);
```

## React.Children

* 遍历children，返回数组

```
array React.Children.map(children,function callback) 
```

* 遍历children，无返回

```
void React.Children.forEach(children,function callback) 
```

* 返回children的长度

```
number React.Children.count(children,function callback) 
```

* 判断children是否为1，不为1报错

```
void React.Children.only(children) 
```

* 把children，从对象转换为数组

```
array React.Children.toArray(children,function callback)
```

## React.Fragment

* 允许创建一对React.Fragment的元素，这样就不用额外创建用于包裹的元素

```
// 完全写法
render(){
    return(
        <React.Fragment>
            hello React
        </React.Fragment>
    )
}

// 缩略写法
render(){
    return(
        <>
            hello React
        </>
    )
}
```

## React.createElement

* 创建react对象

```
React.createElement(
    type,
  [props],
  [...children]
);
```

```
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

## React.createFactory

* 返回一个React元素的函数。

```
React.createFactory(type)
```

## React.cloneElement
* 克隆并返回一个新的React元素

```
class C extends React.Component {
  render(){
    var D = React.createElement('div');
    return React.cloneElement(
      D,
      null,
      'hello React'
    );
  }
}
```

## React.forwordRef

* 引用转发ref给组件

```
React.forwordRef(props,ref)
```

# React.Component的内置方法

## defaultProps

* 设置props的默认值

```
class A extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    };
    
    // 集成写法
    static defaultProps = {
        test: 'test',        
    };
}

// 外置写法
A.defaultPorps = {
    test: 'test',
}
```


# HOC 高级组件

解释

* 一个参数为React组件的函数，并且返回一个新函数。一个类工厂

优点

* 高内聚，低耦合
* 代码复用，高度模块化

基本用途

* 增删改props
* 渲染劫持

公式

```
React.Component function WrappedComponent(React.Component:Component)
```

简单例子

```
function WrappedComponent(Wrapped){
  return class extends React.Component{
    render(){
      const props = {
        context: 'React',
      }
      return <Wrapped {...props}/>;
    }
  }
};

class Child extends React.Component{
  render(){return <div>hello {this.props.context}</div>};
};

class App extends React.Component{
  render(){
    const HOCchild = WrappedComponent(Child);
    
    return(
      <div>
        <h1>App</h1>
        <HOCchild />
      </div>
    )
  }
};
```

注意

* 不要改变原始组件，使用组合的形式

```
// 错误示范
// WrappedComponent 中会覆盖组件的componentDidMount方法
// 而且使用者必须要知道被覆盖方法的具体用途，才能避免方法冲突覆盖

function WrappedComponent(Wrapped) {
  Wrapped.prototype.componentDidMount = ()=>{
    console.log('WrappedComponent');
  };

  return Wrapped;
};

class Child extends React.Component{
  componentDidMount(){
    console.log('Child');
  }
  render(){return <div>hello React</div>};
};

class App extends React.Component{
  render(){
    const HOCchild = WrappedComponent(Child);

    return(
      <React.Fragment>
        <HOCchild />
      </React.Fragment>
    )
  }
};
```

```
// 正确示范
function wrappedComponent(Wrapped){
    return class React.Component{
        componentDibMount(){
            console.log('componentDibMount')
        }
    };
};
```

* 不要直接修改HOC的props，最好独立变量

```
// 错误示范
// props中可能包含太多多余的属性，无法确保高阶组件的灵活度和可重用性
function WrappedComponent(Wrapped){
    return class React.Component{
        return <Wrapped {...this.props}/>
    }
}
```

```
// 正确
function WrappedComponent(Wrapped){
    return class React.Component{
        const {detail} = this.props;
        return <Wrapped {...detail} />
    }
}
```

* 包装显示名称，便于调试

```
function WrappedComponent(Wrapped){
  class WithSubscription extends React.Component{
    componentDidMount(){
      console.log('WrappedComponent');
    }
    render(){return <Wrapped/>}
  };

  function getDiplayName(W){
    return W.displayName || W.name || 'Component';
  }

  WithSubscription.displayName = `WithSubscription(${getDiplayName(Wrapped)})`

  return WithSubscription;
};
```

* 不要在render函数中使用高阶组件

```
TODO
```

* 必须将静态方法做拷贝

```
TODO
```

* Refs属性不能传递

```
TODO
```

# Context

```
TODO
```

# ReactDOM.createPortal

```
ReactDOM.createPortal(
    React.Component | JSX, // react组件
    element,// 节点元素
);
```

# componentDidCatch

```
TODO
```
* 为什么不用try/catch

# Render Props

```
TODO
```

# React.StrictMode

```
TODO
```

# React的事件池

```
TODO
```

# Hooks

* useState 状态挂钩

```
cosnt [当前状态值,更新函数] = useState(默认值)
```

* useEffect(function,[]) 效果挂钩

```
useEffect(()=>{},[]);
```

* useContext

```
TODO
```

* useReducer

```
TODO
```

* useCallback

```
TODO
```

* useMemo

```
TODO
```

* useRef

```
TODO
```

* useImperativeMethods

```
TODO
```

* useLayoutEffect

```
TODO
```


