import React, { Component } from 'react';
import { Redirect, Link} from "react-router-dom";
import BanDo from './map'
import {connect} from 'react-redux'
class main_khach extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggingIn = true
        if (token === null) {
            loggingIn = false
        }
        this.state = {
            loggingIn
        }
    }
    dangxuat = () => {
        localStorage.removeItem('token')
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
                                    <a className="nav-link" href="/main_khach/thongtinnguoidung">Thông tin người dùng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/main_khach/khachdoimatkhau">Đổi mật khẩu</a>
                                </li>
                            </ul>
                            <Link to='/'><button type="button" className="btn btn-danger" onClick={this.dangxuat}>Đăng xuất</button></Link>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-lg-2 mt-3">
                            <h3>Thông tin chuyến đi</h3>
                            Số km: {this.props.temp}<br/>
                            Giá tiền: {this.props.temp*2000} vnd<br/>
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={()=>this.onDatXe}>Đặt xe</button>
                        </div>                        
                        <div className="col-lg-10 mt-3">
                            <BanDo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(function(state){
        return {temp:state.temp}
    })(main_khach);
