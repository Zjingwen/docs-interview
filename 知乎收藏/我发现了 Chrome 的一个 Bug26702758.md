# 我发现了 Chrome 的一个 Bug

![](https://pic4.zhimg.com/v2-a9782064bf87df8752875f947d4ccb9f_b.jpg)

> 本文归档于 [易浮的小窝](http:https://hyifu.github.io/2016/07/16/%25E6%2588%2591%25E5%258F%2591%25E7%258E%25B0%25E4%25BA%2586Chrome%25E7%259A%2584%25E4%25B8%2580%25E4%25B8%25AABug/)

Chrome 浏览器作为目前最受欢迎的浏览器之一，实在是又快又安全（又耗电又费内存），然而我在开发我们的店铺系统的时候，无意间发现有一个小 bug（其他浏览器均不会出现这种情况）

## **# 起源**

这段时间在开发我们的店铺系统，这中间一定会有的内容是登录注册之类模块。在这之前，由于 UI 的要求，我们需要在 PC 端自己实现一个完整的输入框组件，这个组件具备一个特别的动画效果：自己实现来一个缩小移动的 **_placeholder_** 提示。

你可以查看 友好速搭的官方示例店铺 [藤煤竹](http:http://moren.v.youhaosuda.com/)，我们希望的的效果如下：  

![](https://pic3.zhimg.com/v2-e84bfac6917a9a0b497c4e65637ba0a4_b.jpg)  

那么为什么说出现来一个 “BUG” 呢？首先来复现一下：

step1: 登录网站，一般 Chrome 就会提示是否记住密码，选择记住；

step2: 退出该账户，然后刷新页面，一般 Chrome 就会自动帮你填充表单，于是有很大概率出现下图：

![](https://pic4.zhimg.com/v2-5c7436047fe29e1183ffd529a61e5ba0_b.jpg)

这就是问题所在来，我们希望的效果是跟用户名那样子，而不是现在输入提示和自动填充的密码小圆点重叠在一起！这对我造成来很大的困扰。  

当然，我也在怀疑自己的代码的问题，那么就先来研究一下这个输入框的触发机制到底是怎样的。  

## **# 糟糕的挖坑历程**

所有类似的输入框我都封装了一个叫 **_YhsdInput_** 的类，里面有一些共有的方法和属性，通过实例化对象得到针对特殊输入框的行为，抛开这些，我们单就针对密码框谈一谈核心逻辑：

<div>

    $(function () {  var $input = $('#password')  $input.one('input propertychange', function () {    // 为方便展示，重新编排了实现，换成假如加上一个 class 就会触发特效    $input.val() && $input.addClass('active')  })})

</div>

逻辑可以简单认为这样：页面加载后，给输入框绑定一次性事件监听，当输入框出现了内容，就会给其加上一个 **_active_** 的 Class 表示当前输入框已经激活／有内容（这里不考虑复原问题如删除内容并移除焦点），因为是针对浏览器的自动填充的，所以这个逻辑理论上是正常的，因为自动填充表单会触发 **_propertychange_** 才是正常的逻辑。

经过我们的测试，浏览器们表现在意料之中，唯独 Chrome 例外  

那么这说明什么问题呢？我得到第一次结论是，Chrome 的自动填充并不会触发输入框的 **_propertychange_** 事件，但密码又确实被填充进去了，于是就会出现前面图片中诡异的 **_placeholder_** 和密码圆点共存的现象  

## ## 第一次尝试

为了解决这个问题，我们只好在代码中针对 Chrome 进行 hack，加上了以下的修复代码：

<div>

    if(window.navigator.userAgent.indexOf('Chrome') > -1) {  setTimeout(function () {    $input.val() && $input.addClass('active')  }, 300)}

</div>

我认为这样可行的理由是：既然不会在变动的时候触发 **_propertychange_** 事件，那么我就手动延迟监听输入框，如果被密码填充了，那总该可以取到值。至于 **300ms**，先随便填一个放上去。

结果……让人失望，还是没有预想中的效果，我还特意把时间改为长达 1 秒，然并卵。

## ## 第二次尝试

经过第一次尝试，我发现似乎 Chrome 自动填充的密码有两个特性：一是不会触发输入框自带的事件，二是用脚本取不到密码的存在。  

于是打开劫持工具，加入断点，有一些新发现。

Chrome 并不会在一进来就填充表单，甚至可以说是填充表单是已经执行完脚本后面的时，因此 **_DOM ready_** 的时候，脚本嗅探不到值。但是为什么我特意延迟脚本嗅探也还是拿不到值呢？  

焦灼地倒腾了半天，使用 **_debugger_** 调试出现了奇怪的事情：通过代码 **<u>$('input').val()</u>** 要么一直拿不到值（显示为空字符串，但明明界面是存在密码的，查看 DOM 修改 <u>**_type=_**_'_**_text_**</u>_<u>'</u>_ 也可以让密码明文显示），要么是一直可以拿到值……

## ## 发现秘密

一直到第二天，快要崩溃的时候，我发现如果我与页面**交互过**，比如随便点击了一下页面，反正就是页面有获得焦点（在控制台输入代码并没有让页面获得焦点），那么就可以通过代码 **<u>$('input').val()</u>** 拿到密码！

最最最奇怪的是，当你第一次与页面交互时，居然触发了之前死活不触发的 **_propertychange_** 事件（这里指最开始的 **<u>$input.one(handle)</u>**），也就是跟你期望一开始就发生的一样，只是延迟到了这个点。  

## ## 勉强的解决方式

有了新发现就好办了，我思考了几十分钟，认为这个是 Chrome 的一个安全机制，那么在用户开始与页面交互之前，用脚本是无法知道密码到底有没有被自动填充的，可以放弃前面的思路了。但是我也注意到，只有密码输入框会被这样限制，用户名那一栏是一切如期待进行中的。  

这里我想到了一个曲线救国的方案：  

<div>

    if(window.navigator.userAgent.indexOf('Chrome') > -1) {  setTimeout(function () {    // 找到用户名    var usr = $input.parents().find('.input[type=text]')    usr.val() && $input.addClass('active')  }, 300)}

</div>

很精妙吧？我们已经没法一开始就拿到密码，但是自动表单填充有一个地方被我注意到了：那就是自动填充总是成对出现的，在这个登录场景中，如果用户名没有被自动填充，密码肯定也没有。因此只需要判断用户名有没有被自动填充，就可以判断密码框的状态了！  

实际测试，一切如我所料地工作。然而好景不长，同事在虚拟机中测试时并没有按预料的触发，于是我又得出一个结论：在低端机器中，自动表单填充受限于机器性能，会不止 300ms，而这时，代码已经执行完了。  

于是最终我上线的版本是这样的：

<div>

    if(window.navigator.userAgent.indexOf('Chrome') > -1) {  var times = 0 // 给定一个计数器，最多重复20次，超过一秒我就认为没有填充  (function loop () {    times++    var usr = $input.parents().find('.input[type=text]')    if (usr.val()) {      $input.addClass('active')    } else if (times < 20) {      setTimeout(function () {        loop()      }, 50)    }  })()}

</div>

## **# 追踪**

总算项目中实现了设计师的要求，但这究竟是 Chrome 的一个 bug，还是我的实现有问题呢？抱着这个问题，我们先搜索一下网络，经过艰难的检索（事实上貌似很少有人会遇到这个奇怪的需求），我居然直接就在 _**chromium**_ 的 bug 反馈专区找到了这个 issue：  

[Issue 378419](http:https://bugs.chromium.org/p/chromium/issues/detail?id=378419)  

嗯，是14年中的问题，基本没人关注，甚至刚报上去的时候，版主还认为是原生的 _**placeholder**_ 中的 bug（笑）  

issues 中明确了只有 Chrome 会出现自动填充密码的 <u>**input.value === "" // true**</u>，里面果然出现了关键信息

> It seems to me that for some reason the autocompletion GUI state (visible password dots) is inconsistent with the DOM state (input.value == "") until an interaction with the user occurs.
> 
> The problem here is that while password.value reports empty string, the control is not actually empty

然而 Chrome 的开发者认为这确实是正常的逻辑，关闭了这个 issue，这意味着直到现在，Chrome 也还存在着这个特性。  

So，我还能说啥呢？因为这既可以认为是一个安全特性，也可以认为是一个体验的缺陷。不过我想，如果你也遇到了同样的问题，那么，我这一趟怼 bug 没有白走，你应该知道怎么 hack 了吧？但是我还是不明白为什么只有 Chrome 有这种实现，为什么不修？