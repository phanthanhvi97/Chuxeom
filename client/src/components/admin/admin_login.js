import React, { Component } from 'react'
import axios from 'axios';
import { withRouter, Redirect } from "react-router-dom";


class admin_login extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
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
    onSubmit() {
        if (this.state.username !== '' && this.state.password !== '') {
            axios.post('http://localhost:8080/xacthucadmin', {
                username: this.state.username,
                password: this.state.password
            })
                .then((kq) => {
                    if (kq.data.status !== true) {
                        alert('Dang nhap that bai')
                    }
                    else {
                        localStorage.setItem('tokenadmin', kq.data.kq._id)
                        this.setState({
                            loggedIn: true
                        })
                        alert('Dang nhap thanh cong')

                    }
                })
        }
        else {
            alert('Khong duoc de trong')
        }
    }
    render() {
        if(localStorage.getItem('tokenadmin')){
            return <Redirect to ='/dashboard'/>
        }
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            Admin
                        </div>
                        <div className="col-lg-4">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Ten dang nhap</label>
                                    <input type="text" className="form-control" name="username" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mat khau</label>
                                    <input type="password" className="form-control" name="password" onChange={this.onChange} />
                                </div>
                                <button type="button" onClick={() => this.onSubmit()} className="btn btn-primary">Đăng nhập</button>
                            </form>
                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(admin_login)