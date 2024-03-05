import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
  state = {
    messageArr: [
      {id:'01', title:'message1'},
      {id:'02', title:'message2'},
      {id:'03', title:'message3'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
            {
              messageArr.map((msgObj) =>{
                return (
                  <li key={msgObj.id}>
                    {/* 向路由组件传递params参数 */}
                        <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  </li>
                )
              })
            }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
        </div>
    )
  }
}
