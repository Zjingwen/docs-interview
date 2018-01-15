# gulp或者grunt中有哪些神一般的task?

介绍两个插件。  
这两个插件，是因为我花了近一天的时间各种搜索和试用，一直没找到合适的，尼玛然后就自己写了个。  
所以，我觉得，应该还是挺有用的，因为我一直没找到其他顺手的啊。  
1、[gulp-merge-link](https://www.npmjs.com/package/gulp-merge-link)  
用来合并JS和CSS引用的。  
e.g  

<div>

     gulp.task('merge',function(){gulp.src('*.css').pipe(   merge({       'css/all.css':['**/*.css'],       'js/all.js':['**/*.js']     },{debug:true}   )).pipe(gulp.dest('dist'))})

</div>

执行gulp merge前：  

<div>

     type="text/css" href="base.css" /> type="text/css" href="common.css" /><span>src=</span><span>"jquery.js"</span><span>><span>src=</span><span>"app.js"</span><span>>

</div>

执行后：  

<div>

     type="text/css" href="css/all.css" /><span>src=</span><span>"js/all.js"</span><span>>

</div>

类似插件: gulp-preprocess 不过它实现的是在HTML中声明，我特别讨厌这种在原代码中声明的方式，个人感觉很不爽  

2、[gulp-sprite2](https://www.npmjs.com/package/gulp-sprite2)  
至于为什么叫2，不是因为很二。。。  
因为是在gulp-css-spriter基础上改了一丢丢，所以取名为2，  
另外也因为雪碧图插件一堆堆的，各种重名只有加个2了，  
gulp-css-spriter是我觉得在这一堆堆里算是最好用的了，但是还有有两点很不爽，  
1)过滤采用的是在css文件中声明的方式，我说过了，我对于这种语法很不爽！  
2)不能实现分组。  
介于此，在原基础上，参数options添加了ignore属性，  
1)过滤：ignore:[ "img/*.gif" ]  
2)分组：创建多个task,  

好了，求赞。。。我就这点乐趣了。。。