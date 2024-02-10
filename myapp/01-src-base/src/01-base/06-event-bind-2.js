import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
        <input/>
        <button onClick={
            ()=>{
                console.log("click", this.a)
            }
        }>add1</button>

        <button onClick={ this.handleClick.bind(this)}>add2</button>
        <button onClick={ this.handleClick2}>add3</button>
        <button onClick={ this.handleClick2}>add3</button>
        <button onClick={()=> this.handleClick3()}>add4</button>
      </div>
    )
  }

  handleClick(){
    console.log("click2", this.a)
  }

  handleClick2 = () =>{
    console.log("click3" + this.a)
  }

    /*推荐 */
    handleClick3 = () =>{
      console.log("click4" + this.a)
    }
}

/*
apply call 改变this指向 自动执行
bind 改变指向 手动执行
*/
var obj1 = {
 name:"obj1",
 geteName(){
  console.log(this.name)
 }
}

var obj2 = {
  name:"obj2",
  geteName(){
   console.log(this.name)
  }
}

obj1.geteName.apply(obj2)
obj2.geteName.bind(obj2)()