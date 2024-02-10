import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

  constructor(){
    super()
    this.state={
      cinemaList:[],
      backCinemaList:[]
    }
    axios({
      url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1335157",
      method:"get",
      headers:{
        'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"170620968529523605192705","bc":"310100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas)
      this.setState({
        cinemaList:res.data.data.cinemas,
        backCinemaList:res.data.data.cinemas
      })
    })

  }

  render() {
    return (
      <div>
        <input onInput={this.handleInput}/>
          {
            this.state.cinemaList.map(item=>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            )
          }
      </div>
    )
  }

  handleInput = (event) => {
    var cinemaListTmp = this.state.backCinemaList.filter(
      item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
      || item.address.toUpperCase().includes(event.target.value.toUpperCase())
     )
     this.setState({ 
      cinemaList:cinemaListTmp
     })
    console.log(cinemaListTmp)
  }
}
