# 设计一种请求方案，

:::tip
题目：
* 现在有一个接口api，请设计一种方案，连续请求接口10次，每次请求必须在上一次请求成功后发起，如果有一个接口请求失败，整个请求结束

提示：
* api:/rest/api/demo，请求方式：get
* 接口返回的数据结构如下{code: 200,result:[{}]}
* 可以使用axios发起请求，axios.get(api)，axios的get方法会返回一个promise对象
:::