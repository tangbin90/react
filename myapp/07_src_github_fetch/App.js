import React, { Component } from 'react'
import './App.css'
import './components/List'
import './components/Search'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: false
  }//initialized state, users as as an array
  //update app state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
      {
        //jsx属性展开
      }
        <List {...this.state}></List>
      </div>
    )
  }
}
