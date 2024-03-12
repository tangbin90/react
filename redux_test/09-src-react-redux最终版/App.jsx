import React, { Component } from 'react'
import Count from './containers/Count'//引入Count容器组件
import Person from './containers/Person'//引入Person容器组件

export default class App extends Component {
  render() {
    return (
      // 给容器组件传递store
      <div>
      <Count/>
      <hr></hr>
      <Person/>
      </div>

    )
  }
}
