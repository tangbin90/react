import React, { Component } from 'react'
import './css/02-cinema.css'
import Film from './cinemacomponent/Film'
import Cinema from './cinemacomponent/Cinema'
import Center from './cinemacomponent/Center'

export default class App extends Component {
    state = {
        list:[
            {
                id:1,
                text:"Movie"
            },
            {
                id:2,
                text:"Cinema"
            },
            {
                id:3,
                text:"Mine"
            }
        ],
        current:0
    }

    getContent(){
        switch(this.state.current){
        case 0: 
            return <Film></Film>
        case 1:
            return <Cinema></Cinema>
        case 2:
            return <Center></Center>
        default:
            return null
        }
     }

    render() {
        return (

            <div>
                {
                   this.getContent()
                }
                <ul>
                    {
                        this.state.list.map((item,index)=> 
                        <li key={item.id} 
                        className={ this.state.current=== index? 'active':''}
                        onClick={() => this.handleClick(index)}>{item.text}</li>)  
                    }
                </ul>
            </div>
        )
    }

    handleClick(index){
        this.setState({
            current:index
        })
    }
}
