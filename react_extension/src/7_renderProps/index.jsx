import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'
export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        Parent
        <A render={(name)=><C name={name}/>}/>
      </div>

    )
  }
}

class A extends Component {
  state={myName:'tom'}
  render() {
    const {myName} = this.state
    return (
      <div className="a">
        <h3>this is A</h3>
        {/* 调用xxx函数,并传入参数,并将返回的组件渲染出来 */}
        {this.props.render(myName)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>this is B: {this.props.name}</h3></div>
    )
  }
}