import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      // 给容器组件传递store
      <div><Count store={store}/></div>
    )
  }
}
