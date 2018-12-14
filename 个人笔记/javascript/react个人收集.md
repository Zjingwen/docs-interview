[TOC]

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

```
class Count extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  };

  static getDerivedStateFromProps(props){
    return {count: props.count*2};
  };

  render(){
    return (
      <React.Fragment>
        <p>Count-Child-state: {this.state.count}</p>
        <p>Count-Child-props: {this.props.count}</p>
      </React.Fragment>
    )
  }
};

class Time extends Component{
  constructor(props){
    super(props);
    this.state={
      time: this.props.time,
    }
  };

  static getDerivedStateFromProps(props,state){
    console.log(state);
    return null;
  };

  handleClick(){
    this.setState({
      time: new Date().toString()
    });
  }

  render(){
    const {time} = this.state;
    return(
      <React.Fragment>
        <input type='button' value='setState触发 详情看log' onClick={()=>this.handleClick()}/> 
        <p>{time}</p>
      </React.Fragment>
    )
  };
};

function GetDerivedStateFromPropsComponent (){
  const [count,setCount] = useState(0);
  const [time] = useState(new Date().toString());

  return (
    <Fieldset title='getDerivedStateFromProps'>
      <input type='button' value='new props ++' onClick={()=>setCount(s=>s+1)}/>
      <Count count={count}/>
      <Time time={time}/>
    </Fieldset>
  )
};
```

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

```
class Time extends Component{
  shouldComponentUpdate(nextPorps){
    if(this.props.time !== nextPorps.time){
      // 保证每次time不同时更新
      console.group('shouldComponent-props');
      console.log(nextPorps);
      console.log(this.props);
      console.groupEnd();
      return true;
    }
    return false;
  };
  
  render(){
    return(
      <React.Fragment>
        {this.props.time}
      </React.Fragment>
    )
  }
};

function ShuldComponentUpdateComponent() {
  const [time,setTime] = useState(new Date().toString());

  return(
    <Fieldset title='shuldComponentUpdate'>
      <input type='button' value='new Props' onClick={()=>setTime(new Date().toString())} />
      <Time time={time}/>
    </Fieldset>
  )
};
```

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

```
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.group('getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.groupEnd();
    if (prevProps.time !== prevState.time) {
      this.setState({
        time: prevProps.time,
      });
    }
    return 'getSnapshotBeforeUpdate';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
    console.groupEnd();
  }

  render() {
    return (
      <p>
        {this.state.time}
      </p>
    );
  }
}

function GetShapshotBeforeUpdateComponent() {
  const [time, setTime] = useState(new Date().toString());

  return (
    <Fieldset title='getShapshotBeforeUpdate'>
      <Child time={time} />
      <input type='button' value='更新时间' onClick={()=>setTime(new Date().toString())} />
    </Fieldset>
  );
}
```


### componentDidMount

```javascript
class A extends React.Component{
	componentDidMount(){}
}
```

* render之后，dom渲染后
* 唯一的会在服务端渲染调起的生命周期钩子函数。

```
class Time extends Component {
  componentDidMount() {
    console.log('ComponentDidMount');
  }

  render() {
    return (
      <p>{new Date().toString()}</p>
    );
  }
}

function ComponentDidMountComponent() {
  const [show, setShow] = useState(false);
  return (
    <Fieldset title='componentDidMount'>
      <input type='button' value='触发componentDidMount' onClick={()=>setShow(!show)} />
      { show && <Time />}
    </Fieldset>
  );
}
```

### componentDidUpdate

```javascript
class A extends React.Component{
	componentDidUpdate(prevProps,prevState,snapshot){}
}
```

* update更新时，render之后，dom渲染后
* snapshot为getShapshotBeforeUpdate的return

### componentWillUnmount

```javascript
class A extends React.Component{
	componentWillUnmount(){}
}
```
* dom卸载

```
class Time extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <p>{new Date().toString()}</p>
    );
  };
}

function ComponentWillUnmountComponent() {
  const [show, setShow] = useState(true);
  return (
    <Fieldset title='componentWillUnmount'>
      <input type='button' value='触发componentWillUnmount' onClick={()=> setShow(!show)} />
      {show && <Time />}
    </Fieldset>
  );
}
```

### componentDidCatch

```
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo.componentStack);
    this.setState({
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>error: {this.state.error}</h1>
          <p>
            errorInfo:{this.state.errorInfo}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
};
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

class Input extends Component {
  constructor() {
    super();
    this.state= {
      throw: false,
    };
  }

  handleClick() {
    this.setState((s)=>({
      throw: !s.throws,
    }));
  }

  render() {
    if (this.state.throw) throw new Error('I throw');
    return <input type='button' value='触发catch' onClick={()=> this.handleClick()} />;
  }
};

function ComponentDidCatchComponent() {
  return (
    <Fieldset title='componentDidCatch'>
      <ErrorBoundary>
        <Input />
      </ErrorBoundary>
    </Fieldset>
  );
};
```

* 只有在render中报错才会被捕获
* 为什么不用try/catch：try/catch更加适合命令式代码，而componentDidCatch会捕获组件树中的报错

## 触发流程

### 初始化 

```text
constructor()
static getDerivedStateFromProps(props,state)
render()
componentDidMount()
```

```
class Flow extends React.Component{
  constructor(){
    super();
    this.state = {};
    console.group('初始化阶段');
    console.log('constructor');
  };

  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps');
    return null;
  };

  componentDidMount(){
    console.log('componentDidMount');
    console.groupEnd();
  }
  
  render(){
    console.log('render');
    return (
      <p>
        constructor<br/>
        |<br/>
        static getDerivedStateFromProps()<br/>
        |<br/>
        render<br/>
        |<br/>
        componentDidMount<br/>
      </p>
    )
  };
}


function MountingComponent (){
  const [show,setShow] = useState(false);

  return (
    <Fieldset title='初始化阶段'>
      <input type='button' value='查看初始化阶段，详情看log' onClick={()=>setShow(!show)}/>
      {show && <Flow/>}
    </Fieldset>
  )
};
```

### 属性更新
 New Props

```
static getDerivedStateFromProps(props,state)
shouldComponentUpdate(nextProps, nextState)
render()
getSnapshotBeforeUpdate(prevProps,prevState)
componentDidUpdate()
```

```
class Flow extends React.Component{
  state = {};

  static getDerivedStateFromProps(){
    console.group('触发传递新的props');
    console.log('getDevivedStateFromProps');
    return null;
  };

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.groupEnd();
  };

  render(){
    console.log('render');
    return(
      <React.Fragment>
        <p>{this.props.title}</p>
        <p>
          static getDevivedStateFromPorps <br/>
          | <br/>
          shouldComponentUpdate <br/>
          | <br/>
          getSnapshotBeforeUpdate <br/>
          | <br/>
          componentDidUpdate
        </p>
      </React.Fragment>
    )
  }
};

function NewpropsComponent(){
  const [time,setTime] = useState(new Date().toString());

  return (
    <Fieldset title='传递新的props'>
      <input type='button' value='触发传递新的props' onClick={()=>setTime(new Date().toString())}/>
      <Flow title={time}/>
    </Fieldset>
  )
};

export default NewpropsComponent;
```

setState()

```
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
```

```
class SetStateComponent extends React.Component{
  state = {
    time: new Date().toString(),
  };
  
  static getDerivedStateFromProps(){
    console.group('设置属性');
    console.log('getDerivedStateFromProps');
    return null;
  };

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true;
  };

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.groupEnd();
  };

  handleClick(){
    this.setState({
      time: new Date().toString()
    });
  }

  render(){
    console.log('render');
    return (
      <Fieldset title='设置属性'>
        <input type='button' value='更新时间' onClick={()=>this.handleClick()} />
        <p>{this.state.time}</p>
        static getDerivedStateFromProps <br />
        | <br />
        shouldComponentUpdate <br />
        | <br />
        render <br />
        | <br />
        getSnapshotBeforeUpdate <br />
        | <br />
        componentDidUpdate <br />
      </Fieldset>
    )
  }
}
```


forceUpdate()

```text
getDerivedStateFromProps()
render()
getShapshotBeforeUpdate()
componentDidUpdate()
```

```
class ForceUpdateComponent extends React.Component{
  state = {};

  static getDerivedStateFromProps(){
    console.group('forecUpdate更新');
    console.log('getDerivedStateFromProps');
    return true;
  };

  getSnapshotBeforeUpdate(){
    console.log('getShapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.groupEnd();
  }

  render(){
    console.log('render')
    return(
      <Fieldset title='forecUpdate更新'>
        <input type='button' value='触发forecUpdae' onClick={()=>this.forceUpdate()} /> <br/>
        static getDerivedStateFromProps <br/>
        | <br/>
        getShapshotBeforeUpdate <br/>
        | <br/>
        componentDidUpdate <br/>
      </Fieldset>
    )
  }
}
```

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

## React.lazy

```
TODO
```

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

## useState 状态钩

> 用来设置和更新状态

```
const [状态变量,更新函数] = useState(默认值)
```

```
function A(){
  const [count, setCount] = useState(0);

  return(
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>++</button>
      <button onClick={()=>{setCount(count-1)}}>--</button>
    </React.Fragment>
  )
};
```

## useEffect(function,[]) 效果钩

> 基本格式

```
useEffect(()=>{
    // componentDidMount
    // componentDidUpdate
    return ()=>{
        // componentWillUnmount
    }
},[]);
```

> useEffect是componentDidMount、componentDidUpdate、componentWillUnmount的结合。
> 默认情况下，useEffect，会在每次componentDidMount、componentDidUpdate时执行。
> 可以拿到DOM结构

```
function A(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.getElementById('useEffect-A-count').innerText = `count: ${count}`;
  });

  function handleClick(){
    setCount(count+1);
  };

  return (
    <Fieldset title='useEffect-简单状态'>
      <p id='useEffect-A-count'></p>
      <input type='button' value='更新' onClick={handleClick}/>
    </Fieldset>
  )
};
```

> 如何在组件compoenntWillUnmount时触发useEffect

```
function B(){
  const [show,setShow] = useState(true);
  function Child(){
    useEffect(()=>{
      console.log('componentDidMount');
      return ()=>{
        console.log('componentWillUnmount');
      }
    })
    return <p>B-Child</p>
  };

  return (
    <Fieldset title='useEffect-在componentWillUnmunt时触发'>
      <p>请查看log</p>
      <input type='button' value='show' onClick={()=>setShow(!show)}/>
      {show && <Child/>}
    </Fieldset>
  )
};
```

> 利用第二个参数，让useEffect不会过度渲染
> 为空数组，表示不依赖props或者state，将不会更新
> 数组内表示当新的赋值，如果新值和旧值不想等，就更新

```
function D(){
  const [count,setCount] = useState(0);
  const [double,setDouble] = useState(count*2);
  const [three,setThree] = useState(count*3);
  
  useEffect(()=>{
    setDouble(count*2);
  },[count*2])

  useEffect(()=>{
    setThree(count);
  },[])// 为空数组，表示不依赖props或者state，将不会更新

  return (
    <Fieldset title='userEffect-利用第二个参数跳过效果优化'>
      <p>+1: {count}</p>
      <p>*2: {double}</p>
      <p>not: {three}</p>
      <input type='button' value='click' onClick={()=>setCount(count+1)}/>
    </Fieldset>
  )
};
```

## useLayoutEffect(function,[])

> DOM渲染前反应的钩子
> 基本配置和useEffect一致

```
function E(){
  const [name,setName] = useState(null);
  useLayoutEffect(()=>{
    setTimeout(()=>{
      setName('useLayoutEffect');
    },3000);
  },[]);
  useEffect(()=>{
    setTimeout(()=>{
      setName('useEffect');
    },3000);
  },[]);

  return(
    <Fieldset title='useLayoutEffecth和useEffect的区别'>
      <span id='e-useEffect'>{name}</span>
    </Fieldset>
  )
}
```

## useContext(createContext)

> 参数在所有子组件中都能获取

```
const CountContext = createContext();
function F(){
  function ChildA(){
    const countChild = useContext(CountContext);
    return (
      <p>
        Child A count: {countChild}
      </p>
    )
  };

  function ChildB(){
    const countChild = useContext(CountContext);
    return (
      <p>
        Child B count: {countChild}
      </p>
    )
  };

  const [count,setCount] = useState(0);

  return (
    <Fieldset title='useContext'>
      <CountContext.Provider value={count}>
        <ChildA />
        <ChildB />
      </CountContext.Provider>
      <input type='button' value='++' onClick={()=>setCount(count+1)}/>
    </Fieldset>
  )
}
```

## useReducer(reducer,initialState)

> 类似redux的功能

```
const [state,dispatch] = useReducer(reducer,initialState,{action});
// const [属性,动作] = useReducer(动作函数,初始值属性,初始动作);
// 如何触发：dispatch(type);
```

```
function reducer(state,action){
  switch(action){
    case 'reset':
      return 0;
      break;
    case 'increment':
      return state+1;
      break;
    case 'decrement':
      return state-1;
      break;
    default:
      return state;
  };
};

function useReduceComponent(){
  const [state,dispatch] = useReducer(reducer,0,'reset');

  return (
    <Fieldset title='useReduce'>
      <p>{state}</p>
      <input type='button' value='++' onClick={()=>dispatch('increment')}/>
      <input type='button' value='--' onClick={()=>dispatch('decrement')}/>
      <input type='button' value='reset' onClick={()=>dispatch('reset')}/>
    </Fieldset>
  );
};
```

## useCallback(()=>{},[])

> 返回一个记忆的memoized，默认情况下会记录上一次传递的值
> 可以替代shouldComponentUpdate使用

```
function MemoizedConst ({num}){
  const memoizedCallback = useCallback(()=>{
    return num;
  },[]);

  return (
    <Fieldset title='MemoizedConst'>
      <p>记忆 num > {memoizedCallback()}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function UseCallbackComponent (){
  let [num,setNum] = useState([1,2,3]);
  useEffect(()=>{
    setTimeout(function(){
      setNum([3,4,5])
    },3000);
  },[]);
  
  return (
    <Fieldset title='useCallback'>
      <MemoizedConst num={num}/>
    </Fieldset>
  );
};

// [1,2,3]
// dely 3000ms
// [3,4,5]
```

> 保存事件，让组件不会重复创建新方法，当你重复点击时，InputComponentState的handleClick的事件总是由组件新创建的。而InputComponentCallback的handleClick会被记忆下来，不会新创建。有利于提高性能。

```
let InputComponentStateFunc = null;
function InputComponentState(){
  const [state,setState] = useState(0);
  function handleClick(){
    setState(state=> state+1);
  };
  
  console.group('InputComponentStateFunc');
    console.log(InputComponentStateFunc === handleClick);
  console.groupEnd();

  InputComponentStateFunc = handleClick;

  return (
    <Fieldset title='InputComponentState'>
      <input type='button' value={state} onClick={handleClick}/>
    </Fieldset>
  )
};

let InputComponentCallbackFunc = null;
function InputComponentCallback(){
  const [state,setState] = useState(0);
  const handleClick = useCallback((event) => {
    setState(state=> state+1);
    event.persist();
  },[]);
  
  console.group('InputComponentCallbackFunc');
    console.log(InputComponentCallbackFunc === handleClick);
  console.groupEnd();
  
  InputComponentCallbackFunc = handleClick;

  return (
    <Fieldset title='InputComponentCallback'>
      {}
      <input type='button' value={state} onClick={handleClick}/>
    </Fieldset>
  )
};

function UseCallbackComponent (){
  return (
    <Fieldset title='useCallback'>
      <InputComponentState />
      <InputComponentCallback />
    </Fieldset>
  );
};
```

## useMemo(function,[])
> 和useCallback基本一致，我还没发现有什么区别Q。Q

```
function MemoizedLet({num}){
  const memo = useMemo(()=> num,[]);

  return (
    <Fieldset title='MemoizedLet'>
      <p>记忆 num > {memo}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function MemoizedConst({num}){
  const memo = useMemo(()=> num,[num]);

  return (
    <Fieldset title='MemoizedConst'>
      <p>记忆 num > {memo}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function useMemoComponent(){
  const [num,setNum] = useState([1,2,3]);

  useEffect(()=>{
    setTimeout(()=>{
      setNum([3,4,5]);
    },3000);
  },[]);

  return (
    <Fieldset title='useMemoComponent'>
      <MemoizedLet num={num} />
      <MemoizedConst num={num}/>
    </Fieldset>
  )
};
```

## useRef()

> 返回一个ref对象，这个对象将维持在组件的整个生命周期

```
function useRefComponent(){
  const inputEl = useRef(null);
  
  function handleClick(){
    inputEl.current.focus();
  }
  return(
    <Fieldset title='useRef'>
      <input type='input' placeholder='useRef' ref={inputEl} />
      <input type='button' value='获取焦点' onClick={handleClick} />
    </Fieldset>
  )
};
```

## useImperativeMethods(ref,()=>({}))

> 向父组件公开ref实例
> 只能应用于forwardRef(props,ref)

```
function FancyInput(props,ref){
  const inputRef = useRef(null);
  useImperativeMethods(ref,()=>({
    focus: ()=>{
      inputRef.current.focus();
    }
  }));

  return <input type='input' placeholder='useRef' ref={inputRef}/>
};

const Input = forwardRef(FancyInput);

function UseImperativeMethodsComponent(){
  const fancyInputRef = useRef(null);
  function handleClick(){
    fancyInputRef.current.focus();
  };

  return (
    <Fieldset title='UseImperativeMethods'>
      <Input ref={fancyInputRef}/>
      <input type='button' value='获取焦点' onClick={handleClick}/>
    </Fieldset>
  )
};
```

## useMutationEffect(function,[])

> 和useEffect、useLayoutEffect类似
> useMutationEffect会在更新阶段触发

```
function Effect(){
  const [state,setState] = useState('请看log')
  useEffect(()=>{
    setTimeout(()=>{
      console.log('useEffect');
    });
  },[]);

  useLayoutEffect(()=>{
    setTimeout(()=>{
      console.log('useLayoutEffect');
    });
  },[]);

  useMutationEffect(()=>{
    setTimeout(()=>{
      console.log('useMutationEffect');
    });
  },[]);

  return (
    <React.Fragment>
      {state}
    </React.Fragment>
  )
}

function useMutationEffectComponent(){
  const [show,setShow] = useState(false);
  return (
    <Fieldset title='useMutationEffect'>
      { show && <Effect />}
      <input type='button' value='show' onClick={()=>setShow(!show)}/>
    </Fieldset>
  )
};
```

# 无ES6创建React Component

```
# create-react-class
```

