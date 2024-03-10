import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import store from './redux/store'

//检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

store.subscribe(() => {
    root.render(<App></App>)
  })