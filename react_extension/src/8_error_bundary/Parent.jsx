import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasError:''//用于标识子组件是否有错误
  }
  //当parent的子组件出错的时候，回触发getDeriveStateFromError调用
  static getDerivedStateFromError(error){
      console.log('@@@', error);
      return {hasError:error}
  }

  componentDidCatch(){
    console.log('渲染组件时出错','统计错误次数，发送给后台');
  }
  render() {
    return (
      <div>
        <h2>This is Parent</h2>
        {this.state.hasError? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
        </div>
    )
  }
}
