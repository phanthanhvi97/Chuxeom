import React, { Component } from 'react'
import axios from 'axios';
// import { withRouter, Redirect } from "react-router-dom";

export default class khachdoimatkhau extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldpass: '',
            newpass: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onChangePass = () => {
        if (this.state.oldpass !== '' && this.state.newpass !== '') {
            axios.post('http://localhost:8080/khachdoipass', {
                oldpass: this.state.oldpass,
                newpass: this.state.newpass,
                _id:localStorage.getItem('token')
            })
                .then((kq) => {
                    if (kq.data.status === true) {
                        alert('Doi mat khau thanh cong')
                    }
                    else {
                        alert('Nhap sai mat khau')
                    }
                })
        }
        else {
            alert('Khong duoc de trong')
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        </div>
                        <div className="col-lg-4 mt-3">
                            <div className="form-group">
                                Mật khẩu cũ
                                <input type="password"
                                    className="form-control" name="oldpass" id="" placeholder="Old Pass" onChange={this.onChange} />
                                Mật khẩu mới
                                <input type="password"
                                    className="form-control" name="newpass" id="" placeholder="New Pass" onChange={this.onChange} />
                                <button type="button" className="btn btn-primary mt-2" onClick={this.onChangePass}>Gửi</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
