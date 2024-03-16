import React,{useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'

export default function Message() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const [messages] = useState([
    {id:1,title:'message001', content:'message content001'},
    {id:2,title:'message002', content:'message content002'},
    {id:3,title:'message003', content:'message content003'},
    {id:4,title:'message004', content:'message content004'},
  ])
  function showDetail(m) {
    navigate('detail',{
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content
    }
  })
  }

  return (
    <div>
      <div>
        <ul>
          {
            messages.map((m) => {
              return (<li key={m.id}>
                <Link to= "detail" state={{
                  id: m.id,
                  title: m.title,
                  content: m.content
                }}>{m.title}</Link>
                <button onClick={() => showDetail(m)}>show</button>
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
