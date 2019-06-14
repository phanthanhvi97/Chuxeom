import React, { Component } from 'react';
import axios from 'axios';

export default class thongtintaixe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            avatar: '',
            bienso: '',
            hoten: '',
            sdt: '',
            vitien: '',
        }
    }
    componentWillMount() {
        axios.post('http://localhost:8080/loadthongtintaixe', {
            _id: localStorage.getItem('tokentaixe')
        })
            .then((kq) => {
                if (kq.data.status === false) {
                    alert('khong co tai khoan nay trong csdl')
                }
                else {
                    this.setState({
                        avatar: kq.data.kq.avatar,
                        bienso: kq.data.kq.bienso,
                        hoten: kq.data.kq.hoten,
                        sdt: kq.data.kq.sdt,
                        vitien: kq.data.kq.vitien,
                    })
                }
            })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-8">
                            <h1>Thông tin tài xế</h1><br/>
                            <div className="card mb-3" style={{maxWidth: "540px"}}>
                                
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={this.state.avatar} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Tên: {this.state.hoten}</h5>
                                            <p className="card-text">Biển số: {this.state.bienso} </p>
                                            <p className="card-text">SDT: {this.state.sdt} </p>
                                            <p className="card-text">Ví: {this.state.vitien}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a name="" id="" className="btn btn-primary" href="/main_taixe" role="button">Quay lại</a>
                        </div>
                        <div className="col-lg-2">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
