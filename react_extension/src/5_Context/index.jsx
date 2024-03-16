import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

export default class A extends Component {
  state = {userName:"tom", age:18}


  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log("Parent---shouldComponentUpdate")
  //   // console.log(nextProps,nextState)//目前的props和state
  //   // console.log(this.props, this.state)//接下来要变化的目标props和state
  //   // if(this.state.carName === nextState.carName) return false
  //   // else return true
  //   return !this.state.carName === nextState.carName
  // }

  render() {
    const {userName} = this.state
    const {age} = this.state  
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        <h4>我的名字是: {userName}</h4>
        <Provider value={{userName, age}}>
          <B/>
      </Provider>
      </div>
    )
  }
}

class B extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接收到的名字是:{this.context.userName}</span>
        <C/>
      </div>

    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     return (
//       <div className="grand">
//         <h3>我是Grand组件</h3>
//         <span>我接收到的名字是:{this.context.userName}, age:{this.context.age}</span>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div className="grand">
      <h3>我是Grand组件</h3>
      <Consumer>
        {
          value => {
            return <span>我接收到的名字是:{value.userName}, age:{value.age}</span>
          }
        }
      </Consumer>
    </div>
  )
}


