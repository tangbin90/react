import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome, please type keyword and click search</h2> :
                    isLoading? <h2>Loading </h2>:
                    //内联样式必须用大括号，外层表示是jsx语法，内部表示将一个具有 color 属性为 'red' 的样式对象传递给了<h2>元素的style属性
                    err? <h2 style={{color:'red'}}>{err}</h2> :
                    this.props.users.map((userObj) =>{
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                    <img src={userObj.avatar_url} alt="icon_picture" style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
