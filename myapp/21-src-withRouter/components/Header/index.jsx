import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

    back = () =>{
        this.props.history.goBack();
      }
    
      forward = ()=>{
        this.props.history.goForward();
      }
    
      go = () =>{
        this.props.history.go(2);
      }
    

  render() {
    console.log('Props是', this.props);
    return (
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={()=> this.back()}>back</button>
            <button onClick={()=> this.forward()}>forward</button>
            <button onClick={()=> this.go()}>go</button>
        </div>
    )
  }
}

export default withRouter(Header)

//withRouter可以加工一般组件，让一般组件具有路由组件特有得API
//withRouter返回值是一个新组件