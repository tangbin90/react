import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Details() {
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  const x = useLocation()
  console.log(x)
  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=haha&content=abcdabcd')}>
          click me to update
        </button>
      </li>
      <li>No: {id}</li>
      <li>Title: {title}</li>
      <li>Content: {content}</li>
    </ul>
  )
}
