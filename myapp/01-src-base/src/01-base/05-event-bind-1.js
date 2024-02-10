import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
        <input/>
        <button onClick={
            ()=>{
                console.log("click")
            }
        }>add1</button>

        <button onClick={ this.handleClick}>add2</button>
        <button onClick={ this.handleClick2}>add3</button>
        <button onClick={()=> this.handleClick2()}>add4</button>
      </div>
    )
  }

  handleClick(){
    console.log("click2" + this.a)
  }
  handleClick2 = () =>{
    console.log("click3" + this.a)
  }

  /*推荐 */
  handleClick3 = () =>{
    console.log("click4" + this.a)
  }
}
