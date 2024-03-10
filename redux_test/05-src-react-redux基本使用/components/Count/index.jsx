import React, { Component } from 'react'

export default class Count extends Component {
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
    
  }

  incrementAsync = ()=>{
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1,1000)
  }

  render() {
    // console.log('UI组件接收到的props是',this.props)
    return (
      <div>
        <h1>Current Sum is: {this.props.count}</h1>
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
