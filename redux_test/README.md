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

## 6. React Redux 数据共相版
1. 定义一个Person组件，和Count通过redux共享数据
2. 为Person组件编写reducer action 配置你constant 常量
3. 重点：Person的reducer和Count的Reducer要使用conbineReducer进行合并，合并之后总状态是一个对象
4. 交给store的总是reducer，最后注意在组件中取状态的时候要“取到位”
此处length就是我们要取出的数据
```jsx
    state => ({count: state.count, renshu:state.rens.length})
```

## 7. 纯函数
在 JavaScript 中，纯函数是一种特殊类型的函数，它具有以下特性：

确定性：对于相同的输入，纯函数总是返回相同的输出。这意味着如果你用相同的参数多次调用一个纯函数，它每次都会返回相同的结果。

无副作用：纯函数不会改变其外部环境或全局状态（不做网络请求，IO接口）。这意味着纯函数不会修改输入参数，也不会改变全局对象或变量。

redux的reducer必须是一个纯函数


```jsx
function personReducer(preState=initState,action){
    console.log('PersionReducer:',initState)
    const {type,data} = action
    switch (type) {
        case ADD_PERSON://添加一个人
        //此处不可以写成preState.unshift(data),因为unshift会改变原数组，(此处改变了输入参数)ui不会render因为浅对比无差异。而redux要求reducer不能改变原数组
            // preState.unshift(data);
            // console.log('PersionReducer:',preState);
            return [data, ...preState]
        default:
            return preState  
    }
}
```

## 8.开发者工具
1)yarn add redux-devtools-extension
2）store中进行配置
```jsx
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

```

## 9.求和案例react-redux最终版本
1.所有变量名字要规范，尽量出发对象的简写形式
2. reducers文件夹中编写index.js专门用于汇总并暴露所有的reducers