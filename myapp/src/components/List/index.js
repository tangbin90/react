import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div className="row">
                {
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
