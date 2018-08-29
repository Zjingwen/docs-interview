# 对组件的理解

[TOC]

## Q：组件的构成

* 完整web端组件由高度解耦的html、css、js构成
* 组件的包涵4个生命周期：初始化、渲染、事件绑定、销毁
* 合理的接口设计

## Q：Vue组件

一个简单的vue组件必须包含：

* props：传递数据
* template： html模版
* $emit：事件传递
* activated：组件渲染完成
* deactivated：组件注销

```html
<div id="app">
    <keep-alive>
        <child-component :text="text" @on="callblock"></child-component>
    </keep-alive>
    <button onclick="destroy()">destroy</button>
</div>
<script type="text/template" id="ChildComponent">
    <div v-if="show">
        <h1>{{text}}</h1>
        <button @click="hanldClick">emit</button>
    </div>
</script>
```

```javascript
var childComponent = Vue.extend({
    name:'childComponents',
    template: document.getElementById('ChildComponent'),
    props:{
        text:{
            type: String
        }
    },
    data:function(){
        return {
            show: true,
        }
    },
    methods:{
        hanldClick(){
            console.log('hanldClick：'+this.text);
            this.$emit('on',this.text);
        },
    },
    activated(){
		console.group('activated');
		console.log(this.$el)
		console.groupEnd();
	},
	deactivated(){
		console.group('deactivated');
		console.log(this.$el)
		console.groupEnd();	
	}
});

var vm = new Vue({
    el: '#app',
    data: {
        text: 'hello world'
    },
    components:{
        childComponent: childComponent
    },
    methods:{
        callblock:function(val){
            console.log('callblock：'+val);
        },
    }
});

function destroy(){
    vm.$destroy();
}
```

## Q：Web Components

web components包含：

* Shadow DOM
* 自定义元素
* HTML 模板`<template></template>`
* HTML 导入



