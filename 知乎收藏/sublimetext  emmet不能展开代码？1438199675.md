# sublimetext emmet不能展开代码？

我也是这样的问题, 重启很多遍电脑了, 不解决问题.  
最终解决了, 重装pyv8解决的. 折腾了好几个小时, 竟然是大墙引起的问题. fuck.  

1, 到这里下载[emmetio/pyv8-binaries · GitHub](https://github.com/emmetio/pyv8-binaries)  
2, 下载那个pyv8-osx.zip那个包.  
3, 按照指引, 在sublime text2->preference->browser package, 看到那个pyv8的目录,  
4, 把刚刚下载的那个pyv8-osx.zip放到那个pyv8的目录.  
5, 然后这个世界清净了, 老子终于瞑目了.  

顺便描述一下解决过程.  
1, 用ctrl+`, 打开console, 看到一堆bug, 尤其集中在python的zip打不开.  
2, sublime.log_commands(True), 用这个命令, 让console喷出所有log.  
3, 然后, tab扩展比如div>p>a, 这样的代码.  
4, console显示这个: command: insert_best_completion {"default": " ", "exact": false}  
5, 结合之前的一堆报错, 基本就是去手工安装了, 我手工download了所有东西, sublime, emmet, pyv8, 然后一个一个安装, 最后发现就是前面说的解决方案, pyv8的自动下载有问题.