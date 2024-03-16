import React from 'react'
import {NavLink, Route, Routes, Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  function computedClassName({isActive}) {
    return isActive? 'list-group-item atguigu': 'list-group-item'
  }

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
            <NavLink className={computedClassName} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>  
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 6之后switch没有了, Swith 包之后匹配之后不接着匹配了*/}  
              <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/home" element={<Home/>}/>
                {/* 6之后redirect删除，换成Navigate */}
                {/* 一渲染试图就切换，url切换 */}
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
