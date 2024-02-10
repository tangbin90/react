import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        console.log(this.keyWordElement.value);
    //解构赋值
    const {keyWordElement:{value: keyWord}} = this
    console.log(keyWord);
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        response => {
            //props可以访问传递给组件的各种属性
            console.log(response)
            this.props.saveUsers(response.data.items)
        },
        error => {console.log('Failed', error);}
    )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
