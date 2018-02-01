# Array方法

## forEach()
遍历array，不返回

```
var a = [1, 2, 3, 4, 5]
a.forEach(function (value, index) {
  console.log('index:' + index)
  console.log('value:' + value)
  console.log('---------')
})
```
## map()
遍历array，必须返回一个符合条件的新数组

```
var a = [1, 2, 3, 4, 5]
var b = a.map(function (value, index) {
  console.log('index:' + index)
  console.log('value:' + value)
  console.log('----------')
  return value
})
console.log(b)
```

## filter()
对array进行筛选，返回满足条件的新数组

```
var a = [1, 2, 3, 4, 5]
var b = a.filter(function (value, index) {
  return value < 5
})
console.log(b)
```

## every()
对array进行筛选，当前array全部元素满足条件返回true，反之有一个不符合条件，返回false

```
var a = [1, 2, 3, 4, 5]
var b = a.every(function (value) {
  return value < 6
  // return value < 5
})
console.log(b)
```
## some()
对array进行筛选，当前array中某一个元素满足条件返回true，全部不符合条件返回false

```
var a = [1, 2, 3, 4, 5]
var b = a.some(function (value) {
  // return value < 1
  return value < 5
})
console.log(b)
```

## reduce()
对array的元素进行折叠，将每一对元素进行一定操作，合并为一个结果

```
var a = [1, 2, 3, 4, 5]
var sum = a.reduce(function (x, y) {
  return x + y
}, 0)
console.log(sum)
```

## reduceRight()
和reduce结果相同，区别是，按照倒序进行操作

```
var a = [1, 5]
var sum = a.reduceRight(function (x, y) {
  return x - y
})
console.log(sum)
```

## indexOf()
对array进行搜索，如果指定值存在返回指定值在array中的项数，如果不存在，返回-1

```
var a = [1, 2, 3, 4, 5]
console.log(a.indexOf(2))
console.log(a.indexOf(0))
```

