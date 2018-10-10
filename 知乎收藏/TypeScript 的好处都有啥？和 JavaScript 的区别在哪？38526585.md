# TypeScript 的好处都有啥？和 JavaScript 的区别在哪？

这是一个之前面试被问到的问题。

不过以前并没有思考过这个问题，面试时又太紧张，并没有答好。

**在我看来 TypeScript 相对于 JavaScript ，除了静态类型外没带来任何东西。**

既然如此

## 静态类型有什么好处？

静态类型的好处到处都有说，这里就不说得太详细了，随便列一点。

*   杜绝手误导致的变量名写错。
*   自动完成。
*   重构支持。
*   类型可以一定程度上充当文档

对我来说最有用的就是这几点，特别是自动完成。

本人天生脑容量小，难以驾驭动态类型语言。

静态类型解放脑容量，自动完成让我不需要记忆哪个变量里有哪些属性，也不需要记完整的变量名。

函数上的类型约束外加尽量主动写纯函数让我在写函数实现的时候不需要关注函数之外的任何东西，注意力聚焦在当前函数。

当然，也不只有好处。

## 静态类型有哪些不足？

*   类型标注麻烦。
*   现阶段大部分静态类型语言的类型系统还不够强。
*   eval 和 new Function() 这种骚操作类型系统管不到。
*   需要编译，类型检查会增加编译时长，语法和类型系统复杂的话时间特别特别长，比如 scala。

标注麻烦的问题无法根绝，但是类型推导能解决大部分的类型标注问题。

类型系统不够强的问题会随着时间慢慢变好。

编译的问题在 ts 可能也并不算问题，ts 的类型检查并不影响 ts 编译成 js。

也就是说就算类型检查不通过 ts 也能跑起来。所以对 ts 来说类型检查可以从编译中提取出来，作为独立的编译和类型检查两部分。

先编译输出，再做类型检查，编译的部分相当于 babel 这种工具做的事。

类型检查也可以单独运行。

那么，

## TypeScript 的类型系统有哪些特点？

*   [图灵完备](https:https://github.com/Microsoft/TypeScript/issues/14833)。（虽然不太清楚这意味着什么）
*   渐进的类型系统，所有类型标注都是可选的，既是天使又是恶魔的 [any](https:https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md%233.1) 类型。（被 Haskell 大牛 [Colliot](https://www.zhihu.com/people/axurez) 称为 ts 类型系统的漏洞）
*   支持[局部类型推导](https:https://www.typescriptlang.org/docs/handbook/type-inference.html)。
*   丰富的类型层面的计算，如 [index types, mapped types, conditional types 等等](https:https://www.typescriptlang.org/docs/handbook/advanced-types.html)。
*   [支持鸭子类型](https:https://www.typescriptlang.org/docs/handbook/type-compatibility.html)。（或叫结构子类型？）
*   像 js 支持对象字面量一样支持方便的对象字面类型（object literal type），字符串和数字还有布尔值字面类型。
*   空安全。
*   基于控制流的类型分析。

还有许多我觉得比较平常的点就没有列出来，比如支持类型别名，泛型，协变逆变双变等等。

ts 是一门非常非常非常工程的语言，很强大，但是可能和优雅沾不上半点关系。

可选的类型标注搭配类型推导，让 ts 的类型系统更像是工具，而不是枷锁。好的产品是用完即走的。

有时候，稍微开个洞，能让事情变简单很多。比如 any。

鸭子类型加上上面提到的特性可以让你依旧感觉和 js 一样，像大海里的鱼一样自由。

[Null References: The Billion Dollar Mistake](https:https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare) ，而 js 里有两个 null（null 和 undefined），虽然前端通常不会造成非常严重的损失，但是 js 也慢慢被应用到不仅仅是前端的许多地方了。

ts 这么好，

## 怎么学 TypeScript？

成也渐进，败也渐进，有部分人通过可选的类型标注，一步一步无痛地过渡到学会 ts。

而另一部分人玩了一会儿，发现和写 js 并没有一丁点区别，而且还离开了熟悉的环境，就放弃了。

ts 并不会强迫你使用类型，所以就需要更强的动力来推动自己学习。

如果身边有会 ts 的朋友的话，对学习 ts 会比较有帮助。

多让会 ts 的朋友看自己的代码，改良自己的写法。多写，很容易就能学会。

如果身边没有会 ts 的人，其实我更建议先用 [JSDoc](https:https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript)。

使用 vscode 或者 webstorm 的时候直接写 JSDoc 就行了，vsc 或 webstorm 会依靠 ts 来提供类型推导和自动完成。

这样可以在工作或自己写东西的时候慢慢习惯并且主动去使用类型标注。

在使用一段时间后感觉 JSDoc 已经不够用了，满足不了自己的需求了，再开始使用 ts。

同时也要多主动去了解和学习一些 ts 的代码，不然的话，不知道 ts 有多好，自然就不会觉得 JSDoc 不够用。