import React, { Component } from 'react'
import qs from 'query-string'

let obj = {name:'tom', age: 18} // key=value&key=value url encoded string
console.log(qs.stringify(obj));

const DetailData = [
    {id:'01', content:'hello, world'},
    {id:'02', content:'hello, world again'},
    {id:'03', content:'hello, world again again!'},
]
export default class Detail extends Component {
  render() {
    console.log(this.props);
    //接收param参数
    // const {id, title} = this.props.match.params
    // const findResult = DetailData.find((detailObj) => {
    //     return detailObj.id === id
    // })
    //接收search 参数
    const {search} = this.props.location;
    const {id, title} = qs.parse(search);
    const findResult = DetailData.find((detailObj) => {
        return detailObj.id === id
    })
    return (
      <div>
        <li>ID: {id}</li>
        <li>Title:{title}</li>
        <li>Content: {findResult.content}</li>
      </div>
    )
  }
}
