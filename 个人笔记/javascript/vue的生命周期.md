# vue的生命周期
![](http://o7s01mlar.bkt.clouddn.com/lifecycle.png)

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
		
		<p v-text="view"></p>
		
		<input type="radio" id="1" value="ChildComponents1" v-model="view">
		<label for="components3"></label>
		<input type="radio" id="2" value="ChildComponents2" v-model="view">
		<label for="components3"></label>
		<input type="radio" id="3" value="ChildComponents3" v-model="view">
		<label for="components3"></label>
		
		<keep-alive>
			<components :is="view"></components>
		</keep-alive>

		<hr>
		
		<button onclick="destroy()">destroyed</button>
	</div>
</body>
<script type="text/x-template" id="components1">
	<p>components1</p>
</script>
<script type="text/x-template" id="components2">
	<p>components2</p>
</script>
<script type="text/x-template" id="components3">
	<p>components3</p>
</script>

<script>

	var ChildComponents1 = Vue.extend({
		template: "#components1",
		activated(){
			console.group("activated");
			console.log(this.$el);
			console.groupEnd();
		},
		deactivated(){
			console.group("deactivated");
			console.log(this.$el);
			console.groupEnd();
		}
	});
	var ChildComponents2 = Vue.extend({
		template: "#components2",
		activated(){
			console.group("activated");
			console.log(this.$el);
			console.groupEnd();
		},
		deactivated(){
			console.group("deactivated");
			console.log(this.$el);
			console.groupEnd();
		}
	});
	var ChildComponents3 = Vue.extend({
		template: "#components3",
		activated(){
			console.group("activated");
			console.log(this.$el);
			console.groupEnd();
		},
		deactivated(){
			console.group("deactivated");
			console.log(this.$el);
			console.groupEnd();
		}
	});

	var mountComponents = Vue.extend({
		template: "#components4"
	})

	var vm = new Vue({
		el:"#app",
		data:{
			view:'ChildComponents1',
			text:'1'
		},
		beforeCreate(){
			console.group("beforeCreate")
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		created(){
			console.group("created");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		beforeMount(){
			console.group("beforeMount");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		mounted(){
			console.group("mounted");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();	
		},
		beforeUpdate(){
			console.group("beforeUpdate");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		updated(){
			console.group("updated");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		beforeDestroy(){
			console.group("beforeDestroy");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
		},
		destroyed(){
			console.group("destroyed");
			console.log(this.view);
			console.log(this.$el);
			console.groupEnd();
    	},
		components:{
			ChildComponents1: ChildComponents1,
			ChildComponents2: ChildComponents2,
			ChildComponents3: ChildComponents3
		}
	});

	function destroy(){
    	vm.$destroy()
	}
</script>
</html>
```

