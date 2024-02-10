import React, { Component } from 'react'
import axios from 'axios'

export default class app extends Component {
//3000没有的资源会转发到5000，并非所有请求转发到5000
    getStudentData = ()=>{
        axios.get('http://localhost:3000/students').then(
            response=>{console.log('success', response.data);},
            error=>{console.log('error', error);}
        )
    }

    getCarData= ()=>{
      axios.get('http://localhost:3000/cars').then(
          response=>{console.log('success', response.data);},
          error=>{console.log('error', error);}
      )
    }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click To Get Student Data</button>
        <button onClick={this.getCarData}>Click To Get Cars Data</button>
      </div>
    )
  }
}
