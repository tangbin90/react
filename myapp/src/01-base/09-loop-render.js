import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list:[
            {
                text:"1111",
                id:1
            },
            {
                text:"222",
                id:2
            }, 
            {
                text:"3333",
                id:3
            }]
    }

  render() {
    var newlist = this.state.list.map(item => 
        <li key={item.id}>{item.text}</li>
    )
    return (
      <div>
        <ul>
            {
                newlist
            }
        </ul>
      </div>
    )
  }
}

