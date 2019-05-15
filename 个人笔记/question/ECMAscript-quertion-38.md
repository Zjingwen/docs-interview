# 编程题

假设有个

```
animalFetcher('g',function(result){
    console.log(result);
});
```
animalFetcher的第一个parameter可以看成是User input，第二个parameter是一个callback function，可以在console.log()，里面显示出results。
然后有几个Fetcher function 跟这个anmialFetcher一样，求问：

```
featchAll = combineFetchers([fruitFetcher,anmialFetcher,mineralFeatcher]);
featchAll('g',function(results){
    console.log(results)
});
```
1. 如何在这个fatchAll的function里面，显示出所有featchers results的集合。
2. 并请讨论，如果有几千个featchers的话，怎么优化？从前端和后端角度考虑。

