import React, { Component, lazy, Suspense } from 'react'
import {NavLink,Route, Routes} from 'react-router-dom'
import Loading from './Loading'
// import Home from './Home'
// import About from './About'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生HTML中靠<a>跳转不同页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* React 中通过路由链接切换组件 */}
                <NavLink className="list-group-item" to="/about">About</NavLink>
                <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading/>}>
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/Home" element={<Home/>}/>
                </Routes>
                </Suspense>

              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}
