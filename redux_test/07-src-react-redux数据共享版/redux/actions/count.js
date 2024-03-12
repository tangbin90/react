/*
该文件专门为Count组件生成action对象
*/
// function createIncrementAction(data) {
//     return {type: 'increment', data}
// }

// function createDecrementAction(data) {
//     return {type: 'decrement', data}
// }

// function createIncrementAsyncAction(data, time) {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(createIncrementAction(data))
//         }, time)
//     }
// }
import {INCREMENT, DECREMENT} from '../constant'

//同步action, 返回值为对象
const createIncrementAction = data => ({type: INCREMENT, data})   
const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action, 为了解决异步问题, 需要借助redux-thunk中间件，action的返回值为函数，而不是一般的对象，函数中可以执行异步代码
// 异步action中会传入同步action, 通过store.dispatch()方法来触发同步action。此处传给store一个函数，store会传入dispatch
//Store.dispatch() 方法会返回传入的 action。这样你就可以在任意地方发起 action。
const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}

export {createIncrementAction, createDecrementAction, createIncrementAsyncAction}