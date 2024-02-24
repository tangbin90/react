# 71
## Send Request XHR
``` js
const xhr = new XMLHttpRequest()
```
Jquery基于XHR
缺点：回调地狱
> 回掉地狱是指在JavaScript等异步编程环境中，大量嵌套的回调函数导致代码难以理解和维护的现象。
``` js
$.get()

getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){
             getMoreData(c, function(d){
                 // 在这里处理最终的结果
             });
        });
    });
});
```
axios提供promise风格接口
> Promise风格是指使用Promise对象来处理异步操作的编程方法。Promise是ES6（ECMAScript 2015）中引入的一种新的原生构造函数，旨在改进异步编程的可读性和可维护性。Promise代表了一个异步操作的最终完成（或失败）及其结果值。使用Promise，可以避免回调地狱（Callback Hell）的问题，使得异步代码更加清晰和易于理解。
```js
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .catch(failureCallback);
```

## Send Request Fetch
XHR不符合关注分离原则：
https://segmentfault.com/a/1190000003810652
> 比如在前端开发中，HTML、CSS和JavaScript分别负责结构、表现和行为，这也是一种关注点分离的实践。这个原则建议将一个程序分解为互不干扰的部分，每一部分解决一个单一的关注点。通过这种方式，软件的可维护性、可扩展性和可复用性得到提高，同时减少各部分之间的依赖。

``` js
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send();
```

## github案例知识点

1. 带有网络请求的时候考虑失败情况
2. ES6中解构赋值和重命名
3. 消息订阅和发布机制
   1. 先订阅在发布
   2. 试用任何组件的同学
   3. 在组件的componentWillUnmount中取消订阅
4. fetch发送请求，关注分离的思想。

# Chapter 5: React Router

## SPA
1. single page web application, SPA
2. get data through ajax 
3. partially refresh