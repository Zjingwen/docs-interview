# vue的nextTick

## 数据变化与模版变化
vue中当数据变化后，模版并非立刻变化，中间有一个rendar过程，可是rendar是异步的。如果要准确获取节点变化后，vue提供了nextTick方法。

## Vue.nextTick和this.$nextTick
这两个方法的共同点是：

* 当数据变化时产生callblock

不同点是：

* Vue.nextTick的this是window
* this.$nextTick的this是当前上下文

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-nextTick</title>
	<script src="https://cdn.bootcss.com/vue/2.5.13/vue.js"></script>
</head>
<body>
	<div id="app">
		<input type="button" @click="onPush" value="onClick">
		<br>
		<span ref='test' v-text="content"></span>
	</div>
	<input type="button" onclick="handle()" value="onClick2">
</body>
<script>
	var vm = new Vue({
		el:"#app",
		data:{
			content: 'Hello Vue'
		},
		methods:{
			onPush(){
				this.content = this.content == 'Hello World' ? 'Hello Vue' : 'Hello World';

				console.group('methods');
				console.log(this.$refs.test.innerHTML);
				console.groupEnd();
				
				this.$nextTick(()=>{
					console.group('$nextTick-methods');
					console.log(this.$refs.test.innerHTML);
					console.groupEnd();
				})

				Vue.nextTick(function () {
					console.group('nextTick-methods');
					console.log(vm.$refs.test.innerHTML);
					console.groupEnd();
				})
				
			}
		},
		beforeCreate(){
			Vue.nextTick(function () {
				console.group('nextTick-beforeCreate');
		  		console.log(vm.$refs.test.innerHTML);
		  		console.groupEnd();
			});
			this.$nextTick(function () {
				console.group('$nextTick-beforeCreate');
		  		console.log(vm.$refs.test.innerHTML);
		  		console.groupEnd();
			})
		},
		mount(){
			this.$nextTick(()=>{
				console.group('$nextTick-mount');
				console.log(this.$refs.test.innerHTML);
				console.groupEnd();
			})
		},
		updated(){
			console.group('updated');
			console.log(this.content);
			console.groupEnd();
		},
		beforeUpdate(){
			console.group('beforeUpdate');
			console.log(this.content);
			console.groupEnd();
		}
	});

	Vue.nextTick(function () {
		console.group('nextTick');
		console.log(vm.$refs.test.innerHTML);
		console.groupEnd();
	});

	function handle(){
		vm.content = 'Hello World';

		Vue.nextTick(function () {
			console.group('nextTick-handle');
			console.log(vm.$refs.test.innerHTML);
			console.groupEnd();
		});
	}
</script>
</html>
```



