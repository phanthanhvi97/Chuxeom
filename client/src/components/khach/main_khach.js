import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import BanDo from './map'
class main_khach extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggingIn=true
        if(token===null){
            loggingIn=false
        }
        this.state={
            loggingIn
        }
    }
    dangxuat=()=>{
        localStorage.removeItem('token')
    }
    render() {
        if(this.state.loggingIn===false){
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <span className="navbar-brand">Chú xe ôm</span>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/main_khach/trothanhdoitac">Trở thành đối tác</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/main_khach/vechungtoi">Về chúng tôi</a>
                                </li>
                                
                            </ul>
                            <div className="nav-item dropdown">
                                    {/* eslint-disable-next-line */}
                                    <button className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Người dùng</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    {/* eslint-disable-next-line */}
                                        <button className="dropdown-item">Đổi mật khẩu</button>
                                        <a className="dropdown-item" href="/" onClick={this.dangxuat}>Đăng xuất</a>
                                    </div>
                            </div>
                        </div>
                    </nav>
                    <div class="row">
                        <div class="col-lg-2 mt-3">
                            hihi
                        </div>
                        <div class="col-lg-10 mt-3">
                            <BanDo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default main_khach; 