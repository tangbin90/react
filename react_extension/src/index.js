import React from 'react'
import { createRoot } from "react-dom/client"
import {BrowserRouter} from 'react-router-dom'

import App from './App'


window.myRoot = createRoot(document.getElementById('root'))
window.myRoot.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
