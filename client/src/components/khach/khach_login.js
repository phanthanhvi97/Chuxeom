import React, { Component } from 'react';
import axios from 'axios';
import {withRouter, Redirect} from "react-router-dom";

class Khach_Login extends Component {
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
        if(this.state.sdt!=='' && this.state.password !==''){
            axios.post('http://localhost:8080/xacthuckhach', {
            sdt: this.state.sdt,
            password: this.state.password
          })
          .then((kq)=>{
              if(kq.data.status!==true){
                alert('Dang nhap that bai')
              }
              else{
                // bake_cookie('id',kq.data.kq._id)
                localStorage.setItem('token',kq.data.kq._id)
                    // this.props.history.push('/main_khach')
                    this.setState({
                        loggedIn: true
                    })               
                alert('Dang nhap thanh cong')
                
              }
          })
        }
        else{
            alert('Khong duoc de trong')
        }
    }
    onRegister(){

        if(this.state.sdt!=='' && this.state.password !==''){
            axios.post('http://localhost:8080/dangky',{
            sdt: this.state.sdt,
            password: this.state.password
          })
          .then((kq)=>{
              if(kq.data===true){
                alert('Dang ky thanh cong')
              }
              else{
                  alert("Dang ky that bai")
              }
        })
        }
        else{
            alert('Khong duoc de trong')
        }
    }
    render() {
        // if(this.state.loggedIn){
        //     return <Redirect to='/main_khach'/>
        // }
        if(localStorage.getItem('token')){
            return <Redirect to ='/main_khach'/>
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <form >
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">SDT</label>
                                <input type="number" className="form-control" name="sdt" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mat khau</label>
                                <input type="password"  className="form-control" name="password" onChange={this.onChange} />
                            </div>
                            <button type="button" onClick={()=>this.onSubmit()} className="btn btn-primary">Đăng nhập</button>
                            <button type="button" style={{marginLeft: '5px'}} onClick={()=>this.onRegister()} className="btn btn-primary">Đăng ký</button>
                        </form>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Khach_Login); 