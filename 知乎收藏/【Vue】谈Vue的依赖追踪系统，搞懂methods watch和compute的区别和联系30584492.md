# 【Vue】谈Vue的依赖追踪系统 ——搞懂methods watch和compute的区别和联系

![](https://pic2.zhimg.com/v2-dda8f01e4ad3e68aa4adfa75172e09aa_b.jpg)

> 之前一直在博客园写作，最近几天才开的知乎专栏，这段时间我会每天从博客园搬运一篇博客到知乎上来。才疏学浅， 谬误之处请不吝于评论区指教，谢谢大家。我的博客园博客地址： [外婆的彭湖湾 - 博客园](https:http://www.cnblogs.com/penghuwan/)

## 目录

*   _从作用机制和性质上看待methods,watch和computed的关系_
*   _watch和computed的对比_
*   _methods不处理数据逻辑关系，只提供可调用的函数_
*   _从功能的互补上看待methods,watch和computed的关系_

> 从作用机制和性质上看待methods,watch和computed的关系

图片标题[原创]:《他三个是啥子关系呢？》

![](https://pic3.zhimg.com/v2-f70b22e9abce971205ff000da8aac996_b.jpg)

首先要说，methods,watch和computed都是以函数为基础的，但各自却都不同

**而从作用机制和性质上看,methods和watch/computed不太一样，所以我接下来的介绍主要有两个对比：**

1.  methods和(watch/computed)的对比
2.  watch和computed的对比

_从作用机制上_

1.  watch和computed都是以Vue的依赖追踪机制为基础的，它们都试图处理这样一件事情：当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，也就是自动调用相关的函数去实现数据的变动。
2.  对methods:methods里面是用来定义函数的，很显然，它需要手动调用才能执行。而不像watch和computed那样，“自动执行”预先定义的函数

【总结】：methods里面定义的函数，是需要主动调用的，而和watch和computed相关的函数，会自动调用,完成我们希望完成的作用

_从性质上看_

1.  **methods**里面定义的是**函数**，你显然需要像"fuc()"这样去调用它（假设函数为fuc）
2.  **computed**是**计算属性**，事实上和和data对象里的数据属性是同一类的（使用上）,

例如：
```

    computed:{   fullName: function () { return this.firstName + lastName }}

```

你在取用的时候，用this.fullName去取用，就和取data一样（不要当成函数调用！！）

3**. watch**:类似于监听机制+事件机制：

例如：
```

    watch: {   firstName: function (val) {  this.fullName = val + this.lastName }}

```

firstName的改变是这个特殊“事件”被触发的条件，而firstName对应的函数就相当于监听到事件发生后执行的方法

> watch和computed的对比

说了这么多，下面先对watch和computed

![](https://pic3.zhimg.com/v2-7ed7710167ab764b99ff16b814441ee4_b.jpg)

首先它们都是以Vue的依赖追踪机制为基础的，它们的共同点是：都是希望在依赖数据发生改变的时候，被依赖的数据根据预先定义好的函数，发生“自动”的变化

我们当然可以自己写代码完成这一切，但却很可能造成写法混乱，代码冗余的情况。Vue为我们提供了这样一个方便的接口，统一规则

**但watch和computed也有明显不同的地方：**

watch和computed各自处理的数据关系场景不同

*   **watch**擅长处理的场景：一个数据影响多个数据
*   **computed擅**长处理的场景：一个数据受多个数据影响

_watch擅长处理的场景：一个数据影响多个数据_

![](https://pic4.zhimg.com/v2-44559dd39fda2e9b7dad2c6cf27a85b9_b.jpg)

(具体的看上图就ok，这里不再赘述)

对于watch，我们先从一个场景说起

在《海贼王》里面，主角团队的名称叫做：“草帽海贼团”

所以我们把船员依次称为：

草帽海贼团索隆,草帽海贼团娜美,以此类推。。。

**我们希望：当船团名称发生变更的时候，这艘船上所有船员的名字一起变更！！**

例如：

**有一天，船长路飞为了加强团队建设，弘扬海贼文化，决定“草帽海贼团”改名为“橡胶海贼团”（路飞是橡胶恶魔果实能力者）**

我们代码如下：
```

    var vm = new Vue({  el: '#app',  /*   data选项中的数据：   1.haiZeiTuan_Name --> 海贼团名称   2.船员的名称 = 海贼团名称（草帽海贼团） + 船员名称（例如索隆）    这些数据里存在这种关系：   （多个）船员名称数据 --> 依赖于 --> （1个)海贼团名称数据    一个数据变化 --->  多个数据全部变化  */  data: {    haiZeiTuan_Name: '草帽海贼团',    suoLong: '草帽海贼团索隆',    naMei: '草帽海贼团娜美',    xiangJiShi: '草帽海贼团香吉士'  },  /*   在watch中，一旦haiZeiTuan_Name（海贼团名称）发生改变   data选项中的船员名称全部会自动改变 （suoLong，naMei，xiangJiShi）   并把它们打印出来  */  watch: {    haiZeiTuan_Name: function (newName) {      this.suoLong = newName + '索隆' this.naMei = newName + '娜美' this.xiangJiShi = newName + '香吉士'      console.log(this.suoLong)      console.log(this.naMei)      console.log(this.xiangJiShi)    }  }}) // 更改watch选项中监控的主数据vm.haiZeiTuan_Name = '橡胶海贼团'

```

demo:

![](https://pic1.zhimg.com/v2-056586e2a113575ca65997dae4c546b3_b.jpg)

**于是船员们的称号前缀都被统一修改了！(原本是“草帽海贼团”)**

**但是我们的路飞船长又突发奇想：我这么喜欢吃肉，干脆我们叫做“肉肉海贼团”好了吧！**

我们把最下面的代码改为：
```

    // 更改watch选项中监控的主数据vm.haiZeiTuan_Name = '肉肉海贼团'

```

demo:

![](https://pic4.zhimg.com/v2-c9ca8ada7730d32359985efa7a97665a_b.jpg)

_computed擅长处理的场景：一个数据受多个数据影响_

![](https://pic3.zhimg.com/v2-52e31c31abfbf19863a2c33348875b65_b.jpg)

**我们再从一个场景说起**

**路飞的全名叫做：蒙奇-D-路飞，他想成为海贼王，但路飞的爷爷卡普（海军英雄）因此感到非常恼怒，于是把“路飞”改成了叫“海军王”，希望他能改变志向**

代码如下：
```

    var vm = new Vue({  el: '#app',  /*   data选项中的数据：firstName，secName,thirdName   computed监控的数据：lufei_Name   两者关系： lufei_Name = firstName + secName + thirdName   所以等式右边三个数据任一改变，都会直接修改 lufei_Name  */  data: {    // 路飞的全名：蒙奇·D·路飞    firstName: '蒙奇',    secName: 'D',    thirdName: '路飞'  },  computed: {    luFei_Name: function () {      return this.firstName + this.secName + this.thirdName    }  }}) // 将“路飞”改为“海军王”vm.thirdName = '海军王'// 打印路飞的全名 console.log(vm.luFei_Name) 

```

demo:

![](https://pic1.zhimg.com/v2-ae61c4455b5c4ff1547b374413427810_b.jpg)

但是：

**有一天，路飞的逗逼爷爷卡普，一不小心发现可能把族谱搞错了，实际上，他们不是“D”之一族，而是“H”一族，也就是说，“蒙奇-D-路飞”可能要叫做“蒙奇-H-路飞”了**

将最后一段代码改为如下：
```

    // 将“D”改为“H”vm.secName = 'H'// 打印路飞的全名console.log(vm.luFei_Name)

```

demo：

![](https://pic3.zhimg.com/v2-178cfe0ece4efd216a8920dc3a21b59f_b.jpg)

> methods不处理数据逻辑关系，只提供可调用的函数

相比于watch/computed，methods不处理数据逻辑关系，只提供可调用的函数
```

    new Vue({  el: '#app',  template: '{{ say() }}',  methods: {    say: function () {      return '我要成为海贼王'    }  }})

```

![](https://pic3.zhimg.com/v2-758bc37517b0ab3e7d1a2de0fc8b431d_b.jpg)

> 从功能的互补上看待methods,watch和computed的关系

![](https://pic4.zhimg.com/v2-d27bd075a02fcfd1f17b2c44a10a56a5_b.jpg)

在很多时候，computed是用来处理你使用watch和methods的时候无法处理，或者是处理起来并不太恰当的情况的

_利用computed处理methods存在的重复计算情况_

![](https://pic1.zhimg.com/v2-bc4ebd4a38a71f8e0af6c524a58e3891_b.jpg)

1.methods里面的函数就是一群“**耿直Boy**”，如果有其他父函数调用它，它会每一次都“乖乖”地执行并返回结果，即使这些结果很可能是相同的，是不需要的

2.而computed是一个“**心机Boy**”，它会以Vue提供的依赖追踪系统为基础，只要依赖数据没有发生变化,computed就不会再度进行计算

例子：
```

    new Vue({  el: '#app',  // 设置两个button，点击分别调用getMethodsDate,getComputedDate方法  template: 'methodscomputed',  methods: {    getMethodsDate: function () {      alert(new Date())    },    // 返回computed选项中设置的计算属性——computedDate    getComputedDate: function () {      alert(this.computedDate)    }  },  computed: {    computedDate: function () {      return new Date()    }  }

```

第一次点击methods按钮：

![](https://pic3.zhimg.com/v2-a247ee53f075eeadd60796864d4cd3ad_b.jpg)

第二次点击methods按钮：

![](https://pic4.zhimg.com/v2-e1151fc9fbdb98185d9bc004ac0ddaac_b.jpg)

注意两次点击methods返回的时间是不同的！！

第一次点击computed按钮：

![](https://pic4.zhimg.com/v2-f878cc659541e6ceed96e96d30c11a3e_b.jpg)

第二次点击computed按钮：

![](https://pic4.zhimg.com/v2-f878cc659541e6ceed96e96d30c11a3e_b.jpg)

注意两次点击computed返回的时间是相同的！！

1.  两次点击methods返回的时间是不同的
2.  注意两次点击computed返回的时间是相同的

【注意】为什么两次点击computed返回的时间是相同的呢？new Date()不是依赖型数据（不是放在data等对象下的实例数据），所以computed只提供了缓存的值，而没有重新计算

**只有符合：1.存在依赖型数据 2.依赖型数据发生改变这两个条件**,computed才会重新计算。

而methods下的数据，是每次都会进行计算的

_利用computed处理watch在特定情况下代码冗余的现象，简化代码_

![](https://pic1.zhimg.com/v2-8bc9c444b6e467ac4eb717801169506b_b.jpg)
```

    new Vue({  el: '#app',  data: {    fullName: '彭湖湾',    firstName: '彭',    secName: '湖',    thirdName: '湾'  },  // watch中的代码显然是同类型，重复的，它并不简洁，也不优雅   watch: {    firstName: function (newValue) {      this.fullName = newValue + this.secName + this.thirdName      console.log(this.fullName)    },    secName: function (newValue) {      this.fullName = this.firstName + newValue + this.thirdName      console.log(this.fullName)    },    thirdName: function (newValue) {      this.fullName = this.firstName + this.secName + newValue      console.log(this.fullName)    }  }})

```

watch中的代码显然是同类型，重复的，它并不简洁，也不优雅，所以我们可以把它变成这样
```

    new Vue({  el: '#app',  data: {    fullName: '彭湖湾',    firstName: '彭',    secName: '湖',    thirdName: '湾'  },  // 对watch中的代码进行重构，实现同样效果  computed: function () {    this.fullName = this.firstName + this.secName + this.thirdName    console.log(this.fullName)  }})

```

![](https://pic2.zhimg.com/v2-82e1d248b719311f9219395ee1be7f57_b.jpg)