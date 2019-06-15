import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";
// import axios from 'axios';
import Tttx from './tttx'
import Ttkh from './ttkh'

import Ttcd from './ttcd'

export default class dashboard extends Component {
    constructor(props) {
        super(props)
        const tokentaixe = localStorage.getItem('tokenadmin')
        let loggingIn = true
        if (tokentaixe === null) {
            loggingIn = false
        }
        this.state = {
            loggingIn,
            component:'taixe'
        }
    }
    taixe=()=>{
        this.setState({component:'taixe'})
    }
    khachhang=()=>{
        this.setState({component:'khachhang'})
    }
    chuyendi=()=>{
        this.setState({component:'chuyendi'})
    }
    dangxuat = () => {
        localStorage.removeItem('tokenadmin')
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
                                    {/* eslint-disable-next-line */}
                                    <a className="nav-link">Administrator</a>
                                </li>
                            </ul>
                            <Link to='/'><button type="button" className="btn btn-danger" onClick={this.dangxuat}>Đăng xuất</button></Link>
                        </div>
                    </nav>
                    <div className="row mt-4">
                        <div className="col-lg-2" style={{ backgroundColor: 'green', height: '870px' }}>
                            <button type="button" className="btn btn-primary mt-5" onClick={this.taixe}>Thông tin tài xế</button>
                            <br/><br/>
                            <button type="button" className="btn btn-primary mt-5"onClick={this.khachhang}>Thông tin khách hàng</button>
                            <br/><br/>
                            <button type="button" className="btn btn-primary mt-5"onClick={this.chuyendi}>Thông tin chuyến đi</button>
                            {this.state.component}

                        </div>
                        <div className="col-lg-10">
                            {this.state.component==='taixe'?
                                <div>
                                    <h1>Thông tin tài xế</h1><br/>
                                    <Tttx />
                                </div>   
                                :this.state.component==='khachhang'?
                                <div>
                                    <h1>Thông tin khách hàng</h1>
                                    <Ttkh/>
                                </div>
                                :this.state.component==='chuyendi'?
                                <div>
                                    <h1>Thông tin chuyến đi</h1>
                                    <Ttcd/>
                                </div>:''
                                }
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
