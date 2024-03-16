import React,{useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Message() {
  // const [count, setCount] = useState(0)
  const [messages] = useState([
    {id:1,title:'message001', content:'message content001'},
    {id:2,title:'message002', content:'message content002'},
    {id:3,title:'message003', content:'message content003'},
    {id:4,title:'message004', content:'message content004'},
  ])
  return (
    <div>
      <div>
        <ul>
          {
            messages.map((m) => {
              return (<li key={m.id}>
                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
              </li>
              )
            })
          }
        </ul>
        <br/>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
