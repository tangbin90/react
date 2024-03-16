import React from 'react'
import {NavLink, useRoutes} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
  //根据路由表生成路由组件
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/home">Home</NavLink>  
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 6之后switch没有了, Swith 包之后匹配之后不接着匹配了*/}  
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
