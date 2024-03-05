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

  replaceShow = (id, title)=>{
    //实现跳转到Detail组件并且是replace跳转 params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //search 参数
    // this.props.history.replace(`home/message/detail?id=${id}&title=${title}`)
    //replaceShow跳转携带state参数
    this.props.history.replace(`/home/message/detail`, {id, title})
  }

  pushShow = (id, title)=>{
    //实现跳转到Detail组件并且是replace跳转
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // this.props.history.push(`home/message/detail?id=${id}&title=${title}`)
    //push跳转携带state参数
    this.props.history.push(`/home/message/detail`, {id, title})

  }

  back = () =>{
    this.props.history.goBack();
  }

  forward = ()=>{
    this.props.history.goForward();
  }

  go = () =>{
    this.props.history.go(2);
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
                        {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                       {/*向路由组件传递search参数  */}
                        {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                        {/* 向路由组件传递state参数 */}
                        <Link replace to={{pathname: '/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
                        &nbsp;<button onClick={()=> this.pushShow(msgObj.id, msgObj.title)}>push</button>
                        &nbsp;<button onClick={()=> this.replaceShow(msgObj.id, msgObj.title)}>replace</button>
                  </li>
                )
              })
            }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
        {/* search参数无需声明接收，正常声明即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        {/* state参数无需声明接收，正常声明即可 */}
        <Route path="/home/message/detail" component={Detail}/>

        <button onClick={()=> this.forward()}>back</button>
        <button onClick={()=> this.back()}>forward</button>
        <button onClick={()=> this.go()}>go</button>
        </div>
    )
  }
}
