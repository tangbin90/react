import React, { Component } from 'react'
import './css/01-index.css' // Webpack

export default class App extends Component {
  render() {
    var myname = "kervin"
    var obj ={
        background:"yellow"
    }
    return (
      <div>
        {10+20}-{myname}
        <div style={obj}>1111111121</div>
        <div className="active">3333333333333333</div>
        <div style={{background:"red"}}>232132</div>
        {
          /* React recommend inline style */
        }
        <div id="myapp">555555555555555</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id = "username"/>
      </div>
      
    )
  }
}
