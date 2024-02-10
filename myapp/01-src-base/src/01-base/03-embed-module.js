import React, { Component } from 'react'


class Navbar extends Component {
    render(){
        return <div> Navbar</div>
    }
}

function Swipper(){
    return <div>Swipper</div>
}

const Tabbar = ()=> <div>tabbar</div>


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swipper></Swipper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
