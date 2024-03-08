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
import {INCREMENT, DECREMENT} from './constant'

const createIncrementAction = data => ({type: INCREMENT, data})   
const createDecrementAction = data => ({type: DECREMENT, data})
const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}

export {createIncrementAction, createDecrementAction, createIncrementAsyncAction}