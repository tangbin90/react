import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import store from './redux/store'
import { Provider } from 'react-redux'

//检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
const root = createRoot(document.getElementById('root'))
root.render(
  /* 此处需要用Provider包裹App组件，这样App中的所有后代容器组件都能接收到store
  */
  <Provider store={store}>
  <App></App>
  </Provider>
)
