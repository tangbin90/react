import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生HTML中靠<a>跳转不同页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* React 中通过路由链接切换组件 */}
              <MyNavLink to="/about" >About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
 
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route  path="/about" component={About}/>
                  <Route  path="/home" component={Home}/>
                  <Redirect to="/about/"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
