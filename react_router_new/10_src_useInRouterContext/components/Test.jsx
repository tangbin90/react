import React from 'react'
import { useInRouterContext } from 'react-router-dom'

export default function Test() {
  console.log("@@", useInRouterContext())
  return (
    <div>Test</div>
  )
}
