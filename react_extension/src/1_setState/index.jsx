import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        //对象式的setState
        //1.获取原来的count值
        // const { count } = this.state
        // //2.更新状态
        // this.setState({ count: count + 1 }, () => {
        //     console.log('setState回调函数', this.state.count)
        // })
        // console.log('count', this.state.count)
        
        //函数式的setState
        // this.setState((state, props) => {
        //     console.log(state, props)
        //     return { count: state.count + 1 }
        // })

        this.setState((state) => ({ count: state.count + 1 }))
    }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
