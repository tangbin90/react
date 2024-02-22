import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub.js'

export default class Search extends Component {
    search = ()=>{
    // 发布消息，将对象作为数据部分
        console.log(this.keyWordElement.value)
    //解构赋值
    const {keyWordElement:{value: keyWord}} = this
    // this.props.updateAppState({isFirst:false, isLoading:true})
    PubSub.publish('aiguigu', [{isFirst:false, isLoading:true}]);
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        response => {
            //props可以访问传递给组件的各种属性
            // this.props.updateAppState({isLoading:false, users:response.data.items})
            PubSub.publish('aiguigu', [{isLoading:false, users:response.data.items}]);

        },
        error => {
            // this.props.updateAppState({isLoading:false, err:error.message})
            PubSub.publish('aiguigu', [{isLoading:false,  err:error.message}]);
        }
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
