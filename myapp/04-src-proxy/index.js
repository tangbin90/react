import React from 'react'
import { createRoot } from "react-dom/client";
import App from './proxy.js'

const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

/* jsx == js + xml */
