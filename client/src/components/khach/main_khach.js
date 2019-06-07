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
                                    <a className="nav-link" href="#">Trở thành đối tác <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Về chúng tôi</a>
                                </li>
                                
                            </ul>
                            <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Người dùng</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Đổi mật khẩu</a>
                                        <a className="dropdown-item" href="/" onClick={this.dangxuat}>Đăng xuất</a>
                                    </div>
                            </div>
                        </div>
                    </nav>
                    <div class="row">
                        <div class="col-lg-2">
                            hihi
                        </div>
                        <div class="col-lg-10">
                            <BanDo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default main_khach; 