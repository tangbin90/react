import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
        <h3>我是Home的内容</h3>
        {sum === 2? <Navigate to="/about" replace={true}/> : <h4>当前求和为：{sum}</h4>}
        <button onClick={e => setSum(sum + 1)}>点我+1</button>
    </div>
  )
}
