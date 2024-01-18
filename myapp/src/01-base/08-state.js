import React, { Component } from 'react'

export default class myApp extends Component {
  myRef = React.createRef()

  state = {
    myShow:true
  }

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <button ref={this.myRef}  onClick={this.onButtonClick}>{this.state.myShow?"Fav":"unFav"}</button>

      </div>
    )
  }

  onButtonClick = ()=>{
       this.setState({
        myShow:!this.state.myShow
       })
  }
}
