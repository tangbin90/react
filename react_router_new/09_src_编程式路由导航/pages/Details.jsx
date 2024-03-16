import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Details() {
  // const a = useLocation()
  // console.log(a)
  // const { id, title, content } = a.state
  const {state: {id, title, content}} = useLocation() 
  return (
    <ul>
      <li>No: {id}</li>
      <li>Title: {title}</li>
      <li>Content: {content}</li>
    </ul>
  )
}
