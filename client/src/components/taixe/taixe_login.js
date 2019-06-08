import React, { Component } from 'react'
import axios from 'axios';
import {withRouter, Redirect} from "react-router-dom";

class taixe_login extends Component {
    constructor(props) {
        super(props)
        let loggedIn=false
        this.state = {
            sdt: '',
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
        if (this.state.sdt !== '' && this.state.password !== '') {
            axios.post('http://localhost:8080/xacthuctaixe', {
                sdt: this.state.sdt,
                password: this.state.password
            })
                .then((kq) => {
                    if (kq.data.status !== true) {
                        alert('Dang nhap that bai')
                    }
                    else {
                        localStorage.setItem('tokentaixe', kq.data.kq._id)
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
        if(localStorage.getItem('tokentaixe')){
            return <Redirect to ='/main_taixe'/>
        }
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            Tai xe
                        </div>
                        <div class="col-lg-4">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">SDT</label>
                                    <input type="number" className="form-control" name="sdt" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mat khau</label>
                                    <input type="password" className="form-control" name="password" onChange={this.onChange} />
                                </div>
                                <button type="button" onClick={() => this.onSubmit()} className="btn btn-primary">Đăng nhập</button>
                            </form>
                        </div>
                        <div class="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(taixe_login)