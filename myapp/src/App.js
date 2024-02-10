import React, { Component } from 'react'
import './App.css'
import './components/List'
import './components/Search'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {users:[]}//initialized state, users as as an array

  saveUsers = (users) =>{
    this.setState({users})
  }
  render() {
    const {users} = this.state
    return (
        <div className="container">
            <Search saveUsers={this.saveUsers}></Search>
            <List users={users}></List>
      </div>  
    )
  }
}
