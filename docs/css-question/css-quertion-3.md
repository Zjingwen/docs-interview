# CSS 文字溢出1行、2行、3行显示省略号

[demo](http://jsbin.com/xujohitihi/edit?html,css,output)

```
// 溢出一行省略号
.text_overflow1{
  width: 100px;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap; 
}

// 溢出多行省略号
.text_overflow2{
  width: 100px;
  
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  -webkit-line-clamp: 2;// 修改数值即可
  -webkit-box-orient: vertical;
}
```

解答


参考

[关于文字内容溢出用点点点(…)省略号表示](https://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)

