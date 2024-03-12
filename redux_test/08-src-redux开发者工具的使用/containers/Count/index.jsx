//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import React, { Component } from 'react'

class Count extends Component {
  state = {carName:"奔驰c63"}

  increment = ()=>{
    const {value} = this.selectNumber
    this.props.increment(value*1)
  }

  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.decrement(value*1)
  }

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.increment(value*1)
    }
  }

  incrementAsync = ()=>{
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1,1000)
  }

  render() {
    console.log('UI组件接收到的props是',this.props)
    return (
      <div>
        <h1>Current Sum is: {this.props.count}, All person number is: {this.props.renshu}</h1>
        <select ref={c => this.selectNumber = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>When result is odd will add</button>&nbsp;
        <button onClick={this.incrementAsync}>Async Add</button>&nbsp;
      </div>
    )
  }
}

//映射状态
// function mapStateToProps(state) {
//     return {count: state}
// }
// const mapStateToProps = state => ({count: state})

//映射操作状态的方法
// function mapDispatchToProps(dispatch){
//     return {
//         increment: number => dispatch(createIncrementAction(number)),
//         decrement: number => dispatch(createDecrementAction(number)),
//         incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     increment: number => dispatch(createIncrementAction(number)),
//     decrement: number => dispatch(createDecrementAction(number)),
//     incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
// })  

//用connect()()创建并暴露一个容器组件
export default connect(
    state => ({count: state.count, renshu:state.rens.length}),
    //原来写法
    // dispatch => ({
    //         increment: number => dispatch(createIncrementAction(number)),
    //         decrement: number => dispatch(createDecrementAction(number)),
    //         incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    //     })
    //简写    
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
)(Count)
