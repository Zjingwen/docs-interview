(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{309:function(t,e,a){"use strict";a.r(e);var r=a(38),v=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"高质量的react组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高质量的react组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 高质量的React组件")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h2",{attrs:{id:"如何拆分组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何拆分组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何拆分组件")]),t._v(" "),a("ul",[a("li",[t._v("确定组件边界")]),t._v(" "),a("li",[t._v("组件都应该是独立存在的")]),t._v(" "),a("li",[t._v("不同组件之间的通信交流")]),t._v(" "),a("li",[t._v("满足高内聚和低耦合")])]),t._v(" "),a("h2",{attrs:{id:"高内聚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高内聚","aria-hidden":"true"}},[t._v("#")]),t._v(" 高内聚")]),t._v(" "),a("ul",[a("li",[t._v("把逻辑紧密相关的内容放一个组件")]),t._v(" "),a("li",[t._v("展示内容用JSX、定义行为用javascript、定义样式用css")]),t._v(" "),a("li",[t._v("React天生具有高内聚的特定")])]),t._v(" "),a("h2",{attrs:{id:"低耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低耦合","aria-hidden":"true"}},[t._v("#")]),t._v(" 低耦合")]),t._v(" "),a("ul",[a("li",[t._v("不同组件之间的依赖关系尽量弱化。")]),t._v(" "),a("li",[t._v("根据功能点划分模块，让不同的组件去实现不同的功能。")])]),t._v(" "),a("h2",{attrs:{id:"如何选择使用prop和state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择使用prop和state","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何选择使用prop和state")]),t._v(" "),a("ul",[a("li",[t._v("prop和state都会引起组件的重新渲染")]),t._v(" "),a("li",[t._v("prop是组件的对外接口")]),t._v(" "),a("li",[t._v("state是组件的内部状态")])]),t._v(" "),a("h2",{attrs:{id:"prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop","aria-hidden":"true"}},[t._v("#")]),t._v(" prop")]),t._v(" "),a("ul",[a("li",[t._v("当prop的类型不是字符串类型时，在JSX中必须使用花括号"),a("code",[t._v("{}")]),t._v("把prop值包裹")]),t._v(" "),a("li",[t._v("函数类型的prop等于让父组件交给子组件一个回调函数")])]),t._v(" "),a("h2",{attrs:{id:"读取prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取prop","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取prop")]),t._v(" "),a("ul",[a("li",[t._v("在构造函数中调用"),a("code",[t._v("super(props)")]),t._v("，在组件实例渲染被构造之后，类实例的所有函数成员就可以通过"),a("code",[t._v("this.prop")]),t._v("访问到父组件传递过来的props值")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("constructor(props){\n    super(props);\n    ...\n}\n")])])]),a("h2",{attrs:{id:"proptypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proptypes","aria-hidden":"true"}},[t._v("#")]),t._v(" propTypes")]),t._v(" "),a("ul",[a("li",[t._v("React.PropTypes 自 React v15.5 起已弃用，使用 prop-types 库代替")]),t._v(" "),a("li",[t._v("限制组件支持哪些类型的prop")]),t._v(" "),a("li",[t._v("限制每个prop应该是什么样的数据格式")]),t._v(" "),a("li",[t._v("根据propTypes判断父组件是否正确地使用了组件的属性")]),t._v(" "),a("li",[t._v("定义类的propTypes属性，无疑是要占用一些代码空间，而且propTypes检查也是要消耗CPU计算资源的。开发者在代码中定义的propTypes，在开发过程中避免犯错，但是在发布产品代码时，用一种自动的方式将propTypes去掉，这样最终部署到产品环境的代码会更优")])]),t._v(" "),a("p",[t._v("TODO不同验证器例子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 原生类型\nPropTypes.array,// 数组类型\nPropTypes.boll,// 布尔类型\nPropTypes.func,// 函数类型\nPropTypes.number,// 数字类型\nPropTypes.object,// 对象类型\nPropTypes.string,// 字符串类型\nPropTypes.symbol,// 元祖类型\n\n// 可被渲染的元素\nPropTypes.node\n\n// React元素\nPropTypes.element\n\n// 声明类实例\nPropTypes.instanceOf(Message)\n\n// 限定特定值\nPropTypes.oneOf([option,...])\n\n// 限定类型\nPropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n    PropTypes.instanceOf(Message),\n])\n\n// 限定数组元素类型\nPropTypes.arrayOf(PropTypes.number)\n\n// 限定对象元素类型\nPropTypes.objectOf(PropTypes.number)\n\n// 限定对象属性以及类型\nPropTypes.shape({\n    color: PropsType.string,\n    fontSize: PropsType.number,\n})\n\n// 加上isRequired，父组件未提供，将会报错\nPropsTypes.func.isRequired\nPropsTypes.number.isRequired\n\n// 自定义检查器\ncustomProp: function (props, propsName, componentName){\n    if(!/matchme/.test(props[propName])) {\n        return new Error(\n            'Invalid prop' + propName + 'supplied to '+ componentName +' Validation failed'\n        )\n    }\n}\n\n// 提供一个自定义检查器\ncustomArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {\n    if (!/matchme/.test(propValue[key])) {\n      return new Error(\n        'Invalid prop `' + propFullName + '` supplied to' +\n        ' `' + componentName + '`. Validation failed.'\n      );\n    }\n})\n")])])]),a("p",[t._v("TODO 设定默认值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("defaultProps = {\n    name: 'Stranger',\n}\n")])])]),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[t._v("#")]),t._v(" state")]),t._v(" "),a("ul",[a("li",[t._v("state代表组件的内部状态，用于记录自身数据变化")]),t._v(" "),a("li",[t._v("通常在组件类的构造函数结尾处初始化state")]),t._v(" "),a("li",[t._v("通过对"),a("code",[t._v("this.state")]),t._v("的赋值完成对组件state的初始化")]),t._v(" "),a("li",[t._v("组件的state必须是一个javascript对象，不能是string或者number这样的简单数据类型")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("constructor(props){\n    supre(props);\n    this.state = {\n        ...\n    }\n}\n")])])]),a("h2",{attrs:{id:"state的读取和设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state的读取和设置","aria-hidden":"true"}},[t._v("#")]),t._v(" state的读取和设置")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("this.state")]),t._v("可以读取到组件当前的state值")]),t._v(" "),a("li",[t._v("修改必须通过"),a("code",[t._v("this.setState")]),t._v("函数")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("直接修改state的值，虽然事实上改变了组件内部状态，但只是野蛮地修改了state，却没有驱动组件进行重新渲染")]),t._v(" "),a("li",[a("code",[t._v("this.setState")]),t._v("函数所做的事情，首先是改变this.state的值，然后驱动组件经历更新过程，这样才有机会让this.state里新的值出现在界面上")])]),t._v(" "),a("h2",{attrs:{id:"prop和state的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop和state的对比","aria-hidden":"true"}},[t._v("#")]),t._v(" prop和state的对比")]),t._v(" "),a("ul",[a("li",[t._v("prop用于定义外部接口，state用于记录内部状态")]),t._v(" "),a("li",[t._v("prop的赋值在父组件使用组件时，state的赋值在组件内部")]),t._v(" "),a("li",[t._v("组件不应该改变prop的值，而state存在的目的就是让组件来改变的")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("严格来说，React并没有办法阻止你去修改传入的prop对象。所以，每个开发者就把这当作一个规矩，在编码中一定不要踩这儿的红线，不然最后可能遇到不可预料的bug")])]),t._v(" "),a("h2",{attrs:{id:"组件生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),a("ul",[a("li",[t._v("挂载过程（Mount）组件第一次在DOM树中渲染过程")]),t._v(" "),a("li",[t._v("更新过程（Update）组件被重新渲染的过程")]),t._v(" "),a("li",[t._v("卸载过程（Unmount）组件从DOM中删除的过程")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("三种不同的过程，React库会依次调用组件的一些成员函数，这些函数被称为生命周期。所以，要定制一个React组件，实际上就是定制这些生命周期")])]),t._v(" "),a("h2",{attrs:{id:"装载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装载过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 装载过程")]),t._v(" "),a("p",[t._v("constructor 组件类的实例")]),t._v(" "),a("ul",[a("li",[t._v("初始化state")]),t._v(" "),a("li",[t._v("绑定成员函数的this环境")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("在ES6语法中，类的每个成员函数在执行时的this并不是和类实例自动绑定的。而在构造函数中，this就是当前组件实例，所以为了方便将来调用，往往在构造函数中将这个实例的特定函数绑定this为当前实例")]),t._v(" "),a("li",[t._v("无状态的React组件不需要定义构造函数")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("getInitalState 初始化state")]),t._v(" "),a("ul",[a("li",[t._v("函数的返回值用来初始化组件的this.state")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("这个函数只在React.createClass方法创造的组件类才会用到")]),t._v(" "),a("li",[t._v("只出现在装载过程，在组件整个生命周期过程中，这个函数只被调用一次")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("getDefaultProps 初始化props")]),t._v(" "),a("ul",[a("li",[t._v("函数的返回值可以作为props的初始值")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("这个函数只在React.createClass方法创造的组件类才会用到")]),t._v(" "),a("li",[t._v("只出现在装载过程，在组件整个生命周期过程中，这个函数只被调用一次")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("render 生成JSX描述结构")]),t._v(" "),a("ul",[a("li",[t._v("返回一个JSX描述的结构，由React来操作渲染过程")]),t._v(" "),a("li",[t._v("组件在某些情况下选择没有东西可渲染，那就让render函数返回一个null或者false，等于告诉React，这个组件这次不需渲染任何DOM元素")]),t._v(" "),a("li",[t._v("完全根据"),a("code",[t._v("this.state")]),t._v("和"),a("code",[t._v("this.prop")]),t._v("来决定返回结果，而且不会产生任何副作用")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("render是一个必要函数，因为React.Component类对除了render之外的生命周期函数都有默认实现")]),t._v(" "),a("li",[t._v("在render函数中去调用this.setState毫无疑问是错误的，因为一个纯函数不应该引起状态改变")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("componentWillMount 生成结构前")]),t._v(" "),a("ul",[a("li",[t._v("会在调用render函数之前调用")]),t._v(" "),a("li",[t._v("发生在“将要装载”的时候，这个时候没有任何渲染结果，即使调用"),a("code",[t._v("this.setState")]),t._v("修改状态也不会引发重新渲染，所有可以在componentWillMount中做的事情，都可以提前到constructor中去做，这个函数存在的主要目的是为了和componentDidMount对称")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("可以在服务器端调用，也可以在浏览器端调用")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("componentDidMount 生成结构后")]),t._v(" "),a("ul",[a("li",[t._v("会在调用render函数之后调用")]),t._v(" "),a("li",[t._v("可以让React和其他库配合使用，因为componentDidMount之后DOM结构已经完全渲染，这个时候可以调用任意插件或者库来操作DOM")]),t._v(" "),a("li",[t._v("可以区分服务器端和浏览器端操作")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("render函数被调用之后，componentDidMount函数并不是会立刻调用，componentDidMount被调用的时候，render函数返回的东西已经引发了渲染，组件已经被“装载”到了DOM树上。componentDidMount可不是紧跟着render函数被调用，当所有组件的render函数都被调用之后，组件的componentDidMount才会连在一起被调用。因为render函数本身并不往DOM树上渲染或者装载内容，它只是返回一个JSX表示对象，然后由React库来根据对象决定如何渲染。而React库肯定是要把所有组件返回的结果综合起来，才知道该如何产生对应的DOM修改。所以，只有React库调用组件的render函数之后，才有可能最终完成装载，这个时候才会依次调用各个组件的componentDidMount函数作为装载过程的收尾。")]),t._v(" "),a("li",[t._v("只能在浏览器端被调用，在服务器端不会被调用，因为“装载”是一个创建完成组件并放到DOM树上的过程，那么，真正的“装载”是不可能在服务端完成的，因为服务端渲染并不会产生DOM树，通过React组件产生的只是一个纯脆的字符串而已。")])]),t._v(" "),a("h2",{attrs:{id:"更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),a("p",[t._v("componentWillReceiveProps(nextProps)")]),t._v(" "),a("ul",[a("li",[t._v("父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程，不管父组件传给子组件的props有没有改变，都会触发子组件的componentWillReceiveProps函数")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("this.setState")]),t._v("方法触发的更新过程不会调用这个函数，因为这个函数适合根据新的prop值（也就是nextProps）来计算出是不是需要更新内部状态state")]),t._v(" "),a("li",[t._v("nextProps代表的是这一次渲染传入的prop值，"),a("code",[t._v("this.prop")]),t._v("代表的上一次渲染时的prop值，只有两者有变化的时候才调用"),a("code",[t._v("this.setState")]),t._v("更新内容状态")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("每个组件都可以通过"),a("code",[t._v("this.forecUpdate()")]),t._v("函数来强制引发一次重绘、")]),t._v(" "),a("li",[t._v("在React组件中，完全可以只渲染一个子组件，而其他组件完全不需要渲染，这是提高React性能的重要方式")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("shouldComponentUpdate(nextProp,nextState) 决定一个组件什么时候需要渲染")]),t._v(" "),a("ul",[a("li",[t._v("render和shouldComponentUpdate，也是React生命周期中唯二两个要求有返回结果的函数")]),t._v(" "),a("li",[t._v("shouldComponentUpdate函数返回一个布尔值，告诉React库这个组件在这次更新过程中是否要触发渲染")]),t._v(" "),a("li",[t._v("更新过程中，React库首先调用shouldComponentUpdate函数，如果这个函数返回true，那么就会继续更新过程，接下来触发调用render函数；反之，如果得到一个false，那么就立刻停止更新过程，也就不会引发后续的渲染了")]),t._v(" "),a("li",[t._v("如果我们要定义shouldComponentUpdate，那么就要根据nextProp和nextState，外加"),a("code",[t._v("this.prop")]),t._v("和"),a("code",[t._v("this.state")]),t._v("来判断出是返回true还是返回false")]),t._v(" "),a("li",[t._v("默认方式是返回true，如果我们要追求更高性能，就不能满足于默认实现，需要定制这个函数shouldComponentUpdate")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("this.setState")]),t._v("函数引起的更新过程，并不是立刻更新组件的state值，在执行到函数shouldComponentUpdate的时候，this.state依然是this.setState函数执行之前的值，所以我们要做的实际上就是在nextProp和nextState、"),a("code",[t._v("this.prop")]),t._v("和"),a("code",[t._v("this.state")]),t._v("中互相对比")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("componentWillUpdate和componentDidUpdate，render更新前，render更新后")]),t._v(" "),a("ul",[a("li",[t._v("如果组件的shouldComponentUpdate函数返回true，React接下来就会依次调用对应组件的componentWillUpdate和componentDidUpdate函数")]),t._v(" "),a("li",[t._v("componentDidUpdate函数，并不是只在浏览器端才执行的，无论更新过程发生在服务端还是浏览器端，该函数都会被调用")])]),t._v(" "),a("p",[t._v("TOOD")]),t._v(" "),a("ul",[a("li",[t._v("实际上，使用React做服务端渲染时，基本不会经历更新过程，因为在服务器端只需要产出HTML字符串，一个装载过程就足够产出HTML了，所以正常情况下服务器端不会调用componentDidUpdate函数，如果调用了，说明我们的程序有错误，需要改进")])]),t._v(" "),a("h2",{attrs:{id:"卸载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 卸载过程")]),t._v(" "),a("p",[t._v("componentWillUnmount")]),t._v(" "),a("ul",[a("li",[t._v("React组件的卸载过程只涉及一个函数componentWillUnmount，当React组件要从DOM树上删除掉之前，对应的componentWillUnmount函数会被调用，所以这个函数适合做一些请理性的工作")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("componentWillUnmount中的工作往往和componentDidMount有关，比如，在componentDidMount中用非React的方法创造了一些DOM元素，如果撒手不管可能会造成内存泄漏，那就需要在componentWillUnmount中把这些创造的DOM元素清理掉")])]),t._v(" "),a("h2",{attrs:{id:"向组件外传递数据，如何让父组件知道子组件的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向组件外传递数据，如何让父组件知道子组件的状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 向组件外传递数据，如何让父组件知道子组件的状态")]),t._v(" "),a("ul",[a("li",[t._v("利用prop")]),t._v(" "),a("li",[t._v("组件的prop可以是任何javascript对象，而在javascript中，函数是一等公民，函数本身就可以被看做一种对象，既可以像其他对象一样作为prop的值从父组件传递给子组件，又可以被子组件作为函数调用")])]),t._v(" "),a("h2",{attrs:{id:"state和prop的局限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state和prop的局限","aria-hidden":"true"}},[t._v("#")]),t._v(" state和prop的局限")]),t._v(" "),a("ul",[a("li",[t._v("当数据出现重复，会带来一个问题就是如何保证重复的数据一致，如果数据存在多份而且不一致的情况，那就很难决定到底使用哪个数据作为正确结果")]),t._v(" "),a("li",[t._v("把数据源放在React组件之外形成全局状态，让各个组件保持全局状态的一致，这样就更容易控制")]),t._v(" "),a("li",[t._v("全局状态就是唯一的可靠的数据源")]),t._v(" "),a("li",[t._v("在一个应用中，包含三级或者三级以上的组件结构，顶层的祖父级组件想要传递一个数据给最低层的子组件，用prop方式，就只能通过父组件中转，也许中间那一层父组件根本用不上这个prop，但是依然要支持这个prop，扮演好搬运工的角色，只因为子组件用得上，这明显违反了低耦合的设计要求")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("ul",[a("li",[t._v("只用React的state来存储状态的一个缺点，那就是数据的冗余和重复")])])])},[],!1,null,null,null);e.default=v.exports}}]);