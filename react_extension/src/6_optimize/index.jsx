import React, { PureComponent } from 'react'
import './index.css'

const MyContext = React.createContext()
export default class A extends PureComponent {//PureComponent是一个类，继承自Component,对state内容做浅比较（引用对比），如果相同则不更新·

  state = {carName:"奔驰c63"}

  changeCar = () => {
    this.setState({carName:"迈巴赫"})
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log("Parent---shouldComponentUpdate")
  //   // console.log(nextProps,nextState)//目前的props和state
  //   // console.log(this.props, this.state)//接下来要变化的目标props和state
  //   // if(this.state.carName === nextState.carName) return false
  //   // else return true
  //   return !this.state.carName === nextState.carName
  // }

  render() {
    console.log("Parent---render")
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        <h4>我车的名字是: {this.state.carName}</h4>
        <Provider
        <B carName = "XYZ"/>
      </div>
    )
  }
}

class B extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("Parent---shouldComponentUpdate")
  //   console.log(nextProps,nextState)//目前的props和state
  //   console.log(this.props, this.state)//接下来要变化的目标props和state
  //   if(this.props.carName === nextProps.carName) return false
  //   else return true
  // }
  static contextType = MyContext
  render() {
    console.log("B---render")
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接收到的车是:{this.props.carName}</span>
      </div>
    )
  }
}

