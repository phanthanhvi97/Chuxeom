import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import BanDo from './map'
import axios from 'axios';

export default class main_taixe extends Component {
    constructor(props) {
        super(props)
        const tokentaixe = localStorage.getItem('tokentaixe')
        let loggingIn = true
        if (tokentaixe === null) {
            loggingIn = false
        }
        this.state = {
            loggingIn
        };
    };
    dangxuat = () => {
        var a= localStorage.getItem('tokentaixe')
        localStorage.removeItem('tokentaixe')
        console.log(a)
        axios.post('http://localhost:8080/taixedangxuat',{
            id: a,
            status: false
        })
        // .then
    }
    render() {
        if (this.state.loggingIn === false) {
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
                                    <a className="nav-link" href="/main_taixe/thongtintaixe">Thông tin đối tác</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/main_taixe/vechungtoi">Về chúng tôi</a>
                                </li>

                            </ul>
                            <div className="nav-item dropdown">
                                {/* eslint-disable-next-line */}
                                <button className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Đối tác</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    {/* eslint-disable-next-line */}
                                    <a href='main_taixe/taixedoimatkhau' className="dropdown-item" >Đổi mật khẩu</a>
                                    <a className="dropdown-item" href="/" onClick={this.dangxuat}>Đăng xuất</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-2 mt-5">
                        <h4>Chuyến đi của bạn</h4>


                    </div>
                    <div className="col-lg-10">
                        <BanDo/>
                    </div>
                </div>
            </div>
        )
    }
}
