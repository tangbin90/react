import React from 'react'
import {useParams, useMatch} from 'react-router-dom'

export default function Details() {
  const {id, title, content} = useParams()
  // const x = useMatch('/home/message/detail/:id/:title/:content')
  // console.log(x)
  return (
    <ul>
      <li>No: {id}</li>
      <li>Title: {title}</li>
      <li>Content: {content}</li>
    </ul>
  )
}
