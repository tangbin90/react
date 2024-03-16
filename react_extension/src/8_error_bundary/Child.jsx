import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users:[
        //     {id:'001', name:'tom', age:18},
        //     {id:'001', name:'jack', age:8},
        //     {id:'001', name:'peiqi', age:28},
        // ]
        users:'abc'
    }
    render() {
    return (
    <div>
        <h2>
            This is Child Component
            {
                this.state.users.map((userObj)=>{
                    return <h4 key={userObj.id}>{userObj.name} --- {userObj.age} </h4>
                })
            }
        </h2>
    </div>

    )
  }
}
