import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub.js'

export default class Search extends Component {
    search = async ()=>{
    // 发布消息，将对象作为数据部分
        console.log(this.keyWordElement.value)
    //解构赋值
    const {keyWordElement:{value: keyWord}} = this
    // this.props.updateAppState({isFirst:false, isLoading:true})
    PubSub.publish('aiguigu', [{isFirst:false, isLoading:true}]);

    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //     response => {
    //         //props可以访问传递给组件的各种属性
    //         // this.props.updateAppState({isLoading:false, users:response.data.items})
    //         PubSub.publish('aiguigu', [{isLoading:false, users:response.data.items}]);

    //     },
    //     error => {
    //         // this.props.updateAppState({isLoading:false, err:error.message})
    //         PubSub.publish('aiguigu', [{isLoading:false,  err:error.message}]);
    //     }
    // )

    // 发送网络请求，未优化
    // fetch(`/api1/search/users?q=${keyWord}`).then(
    //     //联系服务器成功或者失败，服务器对话能不能建立
    //     response=> {
    //         console.log('success!');
    //         return response.json()
    //     },
    //     error => {
    //         console.log('failed', error);
    //         return new Promise(()=>{})
    //     }
    // ).then(
    //     response => { console.log(response)},
    //     error => {console.log('failed')}
    // )
    //优化版本
    // fetch(`/api1/search/users?q=${keyWord}`).then(
    //     //联系服务器成功或者失败，服务器对话能不能建立
    //     response=> {
    //         console.log('success!');
    //         return response.json()
    //     }
    // ).then(
    //     response => { console.log(response)}
    // ).catch(
    //     error => {console.log('error offline', error);}
    // )
    //继续优化版本
    try {
        const response = await fetch(`/api1/search/users?q=${keyWord}`)
        const data = await response.json();
        PubSub.publish('aiguigu', [{isLoading:false, users:data.items}]);
        console.log(data);
    } catch(error){
        console.log('请求出错', error);
        PubSub.publish('aiguigu', [{isLoading:false,  err:error.message}]);
    }


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
