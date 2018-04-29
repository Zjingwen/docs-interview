# 用什么软件做交互动画可以像 Photoshop 和 After Effects 那样同 Sketch 搭配？

新增这几天发布的 Origami 2.0 and Origami Live可以做到和 Sketch 整合使用，并且还能够输出代码，我翻译了一下官方的介绍。  

翻译：王镇雷

就在一年以前，我们发布了 Origami ——一款免费的可交互界面设计工具。我们在 Facebook 使用 Origami 设计了很多的产品，包括 Instagram，Messenger，Paper，Slingshot，Hyperlapse 和 Rooms。而在发布之后我们收到来自设计师们最迫切的一个需求，便是希望能够在 iPhone 和 iPad 上运行他们的 Origami 原型。  

今天，我们兴奋地发布了 [Origami Live for iOS](http://itunes.apple.com/app/id942636206)，还有全新版本的 [Origami for Mac](http://facebook.github.io/origami/)。Origami Live 作为一款 App，能够将你设计的交互原型如实模拟在 iPhone 和 iPad 上，而 Origami 2.0 则添加了许多新的特性，如代码输出，强大的手势支持，Sketch 整合，演说模式等等。

**Origami Live**

Origami Live 改变了我们在 Facebook 设计产品的方式。它允许设计师一边在 Mac 上修改设计，一边能够实时地在 iPhone 或 iPad 上查看原型的效果。我们可以快速尝试新的想法——使用多点触控、硬件传感器等——并且可以将这些特性简单地整合起来，并不需要写一行代码。然后，我们就可以把设备拿去给团队成员或用户体验，看起来甚至就像一个真实的产品最终版一样。

当我在 [Paper](http://facebook.com/paper) 设计团队时，我们几乎将整个 App 都用 Origami 来制作成原型。它让我们更加具有创意，也不断地带领团队沉浸在新的设计中。比如我们想要提升用户在 News Feed 中浏览图片的体验，大多数界面会将图片适配到整个屏幕，但由于大多数的图片都是横屏的，这使得竖屏时它们看起来非常小，并且也难以展示细节，用户常常需要点击图片或双指将其放大才能看的清楚。对 Paper 来说，我们希望用户能够在信息流中无缝查看所有模式的图片。

因此，我们思考，如果用户能够通过旋转手机使得图片也同样翻转会怎么样？几分钟后，我们就将设备的旋转与图片的位置绑定在了一起。我们可以快速地扭动原型以查看这种模式的工作细节。图片应该顺着转动的方向转动吗，还是通过相反的方向？物理移动的量如何转换成图片在屏幕中转动的量？如果设置得太灵敏，会使得图片的旋转过于剧烈，若太迟钝，又将导致旋转难以实现。我们可以通过设置一个滑动条来改变这个关联值，一边拖动鼠标一边尝试旋转设备，很快就能找到最合适的设置。

![](https://pic4.zhimg.com/4dba9032e6a484ada2a1d405496b321b_b.jpg)  

与此同时，我们还使用 Origami 去细化手机加速器、陀螺仪的数据使得最后图片的变化变得更加顺滑，其中太多的逻辑细节最终都运用在了 Paper 中。没有 Origami 和 Origami Live，就没有工程师和设计师无缝衔接。

**Origami 2.0**

**代码导出**

当设计和构建一个 Origami 原型时，你正在创造一个属于最终产品的高精度复制品。一旦决定了什么我们中意的设计，就需要着手与工程师合作将其实现在真实产品上。

我们所做的第一步就是统一并开源了 Origami 和多个平台 App 之间的动画引擎，包括 [Pop for iOS](https://code.facebook.com/posts/234067533455773/introducing-pop-the-animation-engine-behind-paper/)，[Rebound for Android](http://facebook.github.io/rebound/) 以及 [Rebound JS for web](http://facebook.github.io/rebound-js/examples/)。通过这种形式，产品开发能够真正与原型设计相吻合，而不再是浪费大量的时间去做那些困难的逼近。

但是我们依然觉得在产品中实现原型的设计是那么单调，比如做那些动画的弹性效果、开始和结束的值等等。

![](https://pic3.zhimg.com/e87c840ef82888ad2e9fe67d2736c682_b.jpg)  

在 Origami 2.0中，我们通过代码导出功能解决了上述问题。只要单击一个按钮，你就可以将你的原型导出为可以用于 iOS、Android 和 web 的真实代码。工程师们只要拷贝、粘贴这些代码到工程中，即可快速精确实现你的原型设计。

**演说模式**

五年前我开始在 Facebook 工作时，经常拿着那些静态的草图去演讲、分享我们正在设计的东西。我只能将草图一页一页地放出来，滚动播放他们然后解释如果按了这个按钮将会发生什么。

如今，我们希望能够将高保真、具备动画效果和交互功能的原型展示出去。当我们展示时，一块巨大的屏幕显示一台被握住的手机或平板，然后配合我们解说设计的细节与交互——点击、滑动和轻扫等等。听众能够身临其境地感受这些设计是如何运作的，并且理解最终产品会是什么样子。

![](https://pic3.zhimg.com/5e8cf6f1a2569fac1dbc8614e4c7bd36_b.jpg)  

在 Origami 2.0中，我们发布了这个功能。设计师可以随时进入全屏，展示一个处于真实场景下的原型——比如山顶、地铁站和碧昂斯的演唱会什么的，我特别中意那个在独木舟上使用手机的背景。整个过程中，你可以通过Origami Live 操纵手机和平板，同时显示器上也会同步呈现你所进行的操作。

**Sketch 整合**

使用最新的 [Sketch 插件](https://vimeo.com/facebookorigami/sketch)可以令你的原型与最终的视觉效果保持同步。Origami 2.0 允许用户将 Origami 和 Sketch 的图层连接起来。只要点击一个按钮，你就可以把整个 Sketch 中的设计更新到 Origami 文件中，只要一瞬间，并且整个原型还是在运行中的——所以你甚至可以在使用原型的过程中去更新界面。如果你使用 Photoshop，Origami 依然支持实时连接到 PS 文件。

**学习资源**

另外一个关于 Origami 的反馈信息是它太难学了。在我们的网站上并没有提供太多的帮助信息来协助设计师使用和学习 Origami。通过这个版本，我们让 Origami 更容易学习，新网站提供了一些列的[教学视频](http://facebook.github.io/origami/tutorials/)，帮助用户快速掌握 Origami 的高级特性。

我们还提供了一个[样例页面](http://facebook.github.io/origami/examples/)，大量的样例能够展示如何实现那些精致的交互和界面。如果你你还在思索学点什么，这是个好去处。只要把他们下载下来，看看是怎么实现的。

还没完，我们还提供了关于 Origami 的详细文档，介绍其每一个控件和功能的使用。

**更多**

Origami 2.0 带着大量新特性、强大的功能和更平缓的学习曲线来了，一个简单的快捷键就可以创造出令人惊叹的效果。一切，从[下载 Origami](http://facebook.github.io/origami/) 开始。

我们期待着你的创造。