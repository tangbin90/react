## 求和案例redux精简版
(1)去除Count自身的状态
(2)src下建立：
src
    -redux
        -store.js
        -count_reducer.js
（3）store.js
    1)引入redux中的createStore函数，创建一个store
    2）createStore调用的时候要传入一个为其服务的reducer
    3) 记得暴露store对象
 (4) count_reducer.js
    1)reducer的本质是一个函数，接收: preState, action, 返回加工后的装填
    2）reducer有两个作用：初始化状态， 加工状态
    3）reducer被第一次调用时，时store自动触发的，传递的preState时undefined
（5）在index.js中检测store中状态的改变， 一旦发生改变重新渲染<APP/>

redux只负责管理状态，状态的改变驱动着页面展示，需要自己明确指定。
```jsx
const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

store.subscribe(() => {
    root.render(<App></App>)
  })
```

## 求和案例redux完整版
新增文件:
   1. count_action.js 专门用于创建action对象
   2. constant.js 放置action中的type

## 求和案例redux异步action版本
(1)明确： 延迟的动作不想交给组件自身，想交给action
(2)何时需要异步action: 想要对状态进行操作，但是具体的数据靠异步任务返回。
(3) 具体编码
    1. yarn add redux-thunk 配置在store中
    2. 创建action的函数不在返回一个一般对象， 而是一个函数，函数中写异步任务
    3. 异步任务有结果之后，分发一个同步的action去真正操作数据。
    4. 异步action不是必须要写的，完全可以自己等待异步任务结束了分发同步action，也就是写在Count中
   
## React-redux基本使用
1. 明确两个概念：
   UI组件： 不能使用任何redux的API，只负责页面的呈现和交互  
   容器组件：负责和redux通信，将结果交给UI
2. 如何创建于个容器组件--靠react-redux的connect函数
   connect(mapStateToProps, mapDIspatchToProps)(UI组件)
    -mapStateToProps：映射状态，返回值是一个对象
    -mapDispatchToProps:映射操作状态的的方法，返回值是一个对象
3. 备注: 容器组件中的store是靠props传进去的，而不是在容器组件中直接引入的。

## React-redux优化
1. 容器和UI组件整合成一个文件
2. 无需自己给容器组件传递store，给<App/>包裹一个<Provider store = {store}>即可
3. 使用了react-redux之后再也不用自己检测redux中状态的改变，容器组件自己可以完成这个工作。
4. mapDispatchToProps也可以简单的写成一个对象
5. 一个组件要和redux"打交道”要经过几步
   1. 定义好UI组件 --不暴露
   2. 引入connect生成一个容器组件，并暴露写法如下:
```jsx
export default connect(
    state => ({count: state}),//映射状态
    //映射操作状态的方法 
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
)(Count)
```
    3. 在UI组件中通过this.props.xxxx读取和操作状态
