import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

  constructor(){
    super()
    axios({
      url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1335157",
      method:"get",
      headers:{
        'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"170620968529523605192705","bc":"310100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data)
    })
    //axios 第三方库，请求数据
    // axios
    // .get("https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1335157")
    // .then(res=>{})
    // .catch(err=>{
    //   console.log(err)
    // })
  }

  render() {
    return (
      <div>Cinema</div>
    )
  }
}
