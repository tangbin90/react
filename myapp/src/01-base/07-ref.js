import React, { Component } from 'react'

export default class App extends Component {

  myref = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={this.handleClick2}> add1</button>
      </div>
    )
  }
  handleClick2 = ()=>{
    console.log("click1", this.myref.current.value)
    }

}


//ref引用的写法，可以从另一个组件中引用当前组件，并得到value