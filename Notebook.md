# Change Source
## NRM
NRM use taobao
npm config set registry https://registry.npmmirror.com/
npm config set registry https://registry.npmjs.org/

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

## 路由
路由是一个映射关系
点击->改路径(history.push)->前端路由器监听路径(history.listen)路径匹配 -> Component
key value
path component/function
/home Home

### 路由分类
后端路由-value是function router.get(path, function(req, res))
前端路由-value是component <Route path="/test" componennt ={Test}>

BOM主要用于与浏览器窗口进行交互，而DOM则用于操作页面的内容和结构。
前端路由的基石是bom.history
```js
let history = History.createBrowserHistory() //直接使用h5推出的history的API
let history = HIstory.createHashHistory() // hash值 锚点跳转 demo.html#/test1
```

# React-router
## react-router-dom 的理解
react的一个插件库
专门实现一个SPA应用
机遇react的项目都会用到

## react-router-dom相关API
<BrowserRouter>
<HashRouter>
<Route>
<Redirect>
<Link>
<NavLink>

明确导航区和展示区
导航区的a标签改回Link
<Link to="/xxx"> Demo</Link>
展示区用Route做路径匹配
<Route path='/xxxx' component={Demo} />
App 最外侧包裹一个<BrowserRouter> 或者<HashRouter>

## 4. 路由组件和一般组件
1. 写法不同：
一般组件： <Demo/>
路由组件: <Route path="/demo" component={Demo} />
2. 存放位置不同:
一般组件: components
路由组件: pages
3. 接收到的props 不同
一般组件接收到传递的props
路由组件:接收到三个固定的组件: 
history:
  go: f go(n)
  goback: f goBack()
  goForward: f goForaward()
  push: push(path,state)
  replace: f replace(path,state)
 location
  pathname: "/about"
  search: ""
  state: undefined
match
  parames: {}
  path: "/about"
  url: "/about"

## 5. NavLink与封装NavLink
1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式文件
2. 标签体的内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体的内容

## 6. Swtch
1. path 和component一一对应
2. Switch提高匹配效率，一旦匹配结束不继续匹配（单一匹配）

## 7. 解决多级路径刷新页面样式丢失问题
1. public/index.html中引入样式时，不写./写/
2. public/index.html中引入样式时，不写./写%PUBLIC_URL

## 8. 严格匹配与模糊匹配
1. 默认模糊匹配，输入路径必须包含匹配路径
2. 开启严格匹配<Route exact path="/atguigu/about" component={About}/>
3. 不要祟拜你开，可能导致二级路由的问题

## 9. redirect
当所有路由无法匹配的时候，跳转到Redirect指定的路由
```js
<Switch>
  <Route exact path="/atguigu/about" component={About}/>
  <Route exact path="/atguigu/home" component={Home}/>
  <Redirect to="/about/"/>
</Switch>
```

## 10. 嵌套路由
1. 注册子路由需要写上父路由的path值
2. 路由匹配是按照路由注册的顺序进行的
```jsx
          <Switch>
              <Route  path="/home/message" component={Message}/>
              <Route  path="/home/news" component={News}/>
              <Redirect to="/home/news"/>
          </Switch> 
```

## 11. 向路由传递参数
1. Params参数(用得最多)
   路由链接携带参数， <Link to='/demo/test/tom/18'>detail</Link>
   注册路由声明接收： <Route path="demo/test/:name/:age" component = {Test}>
   接受参数: const{name, age}= this.props.match.params
2. Search参数(其次多)
   路由链接携带参数：<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
   注册无需声明：<Route path="/home/message/detail" component={Detail}/>
   接受参数：用querystring解析
``` jsx
const {search} = this.props.location;
const {id, title} = qs.parse(search);
const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id
})
```
3. State参数（再次多）
params search 参数会暴露数据在地址栏中
   路由链接携带参数：<Link to={{pathname: '/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
   注册无需声明：<Route path="/home/message/detail" component={Detail}/>
   接受参数：    const {id, title} = this.props.location.state || {};
   备注：刷新也可以保留参数

## 12. Push Replace
默认为Push模式可以指定Replace模式
```html
<Link replace to={{pathname: '/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
```

编程式路由导航
```jsx
  replaceShow = (id, title)=>{
    //实现跳转到Detail组件并且是replace跳转 params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //search 参数
    // this.props.history.replace(`home/message/detail?id=${id}&title=${title}`)
    //replaceShow跳转携带state参数
    this.props.history.replace(`/home/message/detail`, {id, title})
  }
```
借助this.props.history对象上得API对操作路由跳转，前进，后退操作
this.props.history.push
this.props.history.replace()
this.props.history.goBack()
this.props.history.goForward()
this.props.history.go()

一般组件没有history
export default withRouter(Header)

withRouter可以加工一般组件，让一般组件具有路由组件特有得API
withRouter返回值是一个新组件

## BrowserRouter与HashRouter得区别
1. 底层不一样
BrowserROuter使用得是H5得History API不兼容IE9以下版本
HashRouter使用得是URL德哈希值
2. url表现形式不一样
  BrowserRouter路径中没有#， 例如: localhost:3000/demo/test
  HashRouter的路径包含#， 例如: localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响
  (1) BrowserRouter没有任何影响，因为state保存在history对象中
  (2) HashRouter刷新后会导致路由state参数丢失

4. HashRouter可以用于解决一些路径错误相关问题
   1. 样式丢失

## UI组件库
material-ui
http://www.material-ui.com/#/

ant-design
heeps://ant.design/index-cn

Element for React
https://element.eleme.cn/#/zh-CN

Vant UI（Vue）


## Redux
与React统一状态管理，与React用得比较多。（Vuex在vue中管理状态
）

让其他组件可以随时拿到
一个组件要改变另一个组件得状态（通信）
不用比较吃力那就考虑使用，能不用就不用

obsidian://open?vault=Reading&file=Web%2FRedux

