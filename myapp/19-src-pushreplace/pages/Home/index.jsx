import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import {Switch,Route,Redirect} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
          <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <MyNavLink className="list-group-item" href="./home-news.html">News</MyNavLink> */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              {/* <MyNavLink className="list-group-item" href="./home-message.html">Message</MyNavLink> */}
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
              <Route  path="/home/message" component={Message}/>
              <Route  path="/home/news" component={News}/>
              <Redirect to="/home/news"/>
          </Switch> 
          </div>
      </div>
    )
  }
}
