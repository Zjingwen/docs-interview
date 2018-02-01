# vue的生命周期

## 实例生命周期

![vue生命周期](http://o7s01mlar.bkt.clouddn.com/2018-01-31-vue生命周期.jpg)
![Vue 生命周期](http://o7s01mlar.bkt.clouddn.com/2018-01-31-Vue 生命周期.png)

vue实例化过程，是完全按照一个生命周期执行的。我将其分为3中，数据与模版初始化生命周期、数据变化生命周期、实例销毁生命周期。

数据与模版初始化生命周期：

* berforeCreate：data没有初始化，el没有获取
* create：data初始化，el没有获取
* berforeMount：el获取，但没有解析vue的template语法
* mount：解析template

实例销毁生命周期：

* berforeDestroy：实例销毁前
* destroy：实例销毁后

数据变化生命周期：

* berforeUpdate：数据变化前
* Update：数据变化后

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue 生命周期</title>
	<script src="https://cdn.bootcss.com/vue/2.5.13/vue.js"></script>
</head>
<body>
	<div id="app">
		<p v-text="text"></p>
		<input type="text" v-model="text">

		<hr>
		
		<button onclick="destroy()">destroyed</button>
	</div>
</body>

<script>

	var vm = new Vue({
		el:"#app",
		data:{
			text:'1'
		},
		beforeCreate(){
			console.group("beforeCreate")
			console.log(this.text);
			console.log(this.$el);

			console.groupEnd();
		},
		created(){
			console.group("created");
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
		},
		beforeMount(){
			console.group("beforeMount");
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
		},
		mounted(){
			console.group("mounted");
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();	
		},
		beforeUpdate(){
			console.group("beforeUpdate");
			console.log(this.text);
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
		},
		updated(){
			console.group("updated");
			console.log(this.text);
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
		},
		beforeDestroy(){
			console.group("beforeDestroy");
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
		},
		destroyed(){
			console.group("destroyed");
			console.log(this.text);
			console.log(this.$el);
			console.groupEnd();
    	}
	});

	function destroy(){
    	vm.$destroy()
	}
</script>
</html>
```

## 组件生命周期

![vue compone生命周期](http://o7s01mlar.bkt.clouddn.com/2018-01-31-vue compone生命周期.png)

组件也有它的生命周期，当用keep-alive时，组件的生命周期可以分为两个：

* activated：激活
* deactiated：停用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue组件生命周期keep-alive</title>
	<script src="https://cdn.bootcss.com/vue/2.5.13/vue.js"></script>
</head>
<body>
	<div id="app">
		<input type="radio" value="childComponents1" v-model="view">
		<input type="radio" value="childComponents2" v-model="view">
		<input type="radio" value="childComponents3" v-model="view">

		<keep-alive>
			<component :is="view"></component>
		</keep-alive>
	</div>
</body>
<script type="text/template" id="ChildComponents1">
	<div>ChildComponents1</div>
</script>
<script type="text/template" id="ChildComponents2">
	<div>ChildComponents2</div>
</script>
<script type="text/template" id="ChildComponents3">
	<div>ChildComponents3</div>
</script>
<script>
	var childComponents1 = Vue.extend({
		template: document.getElementById('ChildComponents1'),
		activated(){
			console.group('activated-childComponents1');
			console.log(this.$el)
			console.groupEnd();
		},
		deactivated(){
			console.group('deactivated-childComponents1');
			console.log(this.$el)
			console.groupEnd();	
		}
	});

	var childComponents2 = Vue.extend({
		template: document.getElementById('ChildComponents2'),
		activated(){
			console.group('activated-childComponents2');
			console.log(this.$el)
			console.groupEnd();
		},
		deactivated(){
			console.group('deactivated-childComponents2');
			console.log(this.$el)
			console.groupEnd();	
		}
	});

	var childComponents3 = Vue.extend({
		template: document.getElementById('ChildComponents3'),
		activated(){
			console.group('activated-childComponents3');
			console.log(this.$el)
			console.groupEnd();
		},
		deactivated(){
			console.group('deactivated-childComponents3');
			console.log(this.$el)
			console.groupEnd();	
		}
	});

	new Vue({
		el:"#app",
		data:{
			view:'childComponents1'
		},
		components:{
			childComponents1: childComponents1,
			childComponents2: childComponents2,
			childComponents3: childComponents3,
		}
	})
</script>
</html>
```

