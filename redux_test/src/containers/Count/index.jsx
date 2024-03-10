import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createIncrementAction } from '../../redux/count_action'

class Count extends Component {
    add = () => {
        this.props.increment(1)
    }
  render() {
    return (
      <div>
      <h2>当前求和为: {this.props.total}</h2>
      <button onClick={this.add}> Click Me </button>
      </div>
    )
  }
}

export default connect(
    state => ({total: state}),  
    {
        increment: createIncrementAction
    }
)(Count)