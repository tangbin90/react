import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import store from './redux/store'


const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

store.subscribe(() => {
    root.render(<App></App>)
  })