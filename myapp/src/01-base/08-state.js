import React, { Component } from 'react'

export default class myApp extends Component {
  constructor(){
    super()
    this.state = {
        myShow:true,
        myName:'xiaomign'
      } 
  }

  render() {
    return (
      <div>
        <h1>Welcome to React {this.state.myName}</h1>
        <button ref={this.myRef}  onClick={this.onButtonClick}>{this.state.myShow?"Fav":"unFav"}</button>

      </div>
    )
  }

  onButtonClick = ()=>{
       this.setState({
        myShow:!this.state.myShow,
        myName:"xiaoming"
       })
  }
}
