import React from 'react'
import { useResolvedPath } from 'react-router-dom'

export default function News() {
  console.log('@@@',useResolvedPath('/users?id=001&name=Tom&age=20#qwe'))
  return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
  )
}
