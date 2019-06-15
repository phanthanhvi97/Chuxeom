import React, { Component } from 'react'
// import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
export default class tttx extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
            _idxoa:'',
            idcanthaotac:''
        }
    }
    componentDidMount() {setInterval(() => {
        axios.post('http://localhost:8080/loadtaixe', {
            _id: localStorage.getItem('tokenadmin')
        })
            .then((kq) => {
                this.setState({
                    a: kq.data.kq,
                })
            })
    }, 100);
}
    xoa=()=>{
        axios.post('http://localhost:8080/adminxoataikhoantaixe',{
           _id :  this.state.idcanthaotac
        })
    }
    kichhoat=()=>{
        axios.post('http://localhost:8080/adminkichhoattaikhoantaixe',{
           _id :  this.state.idcanthaotac
        })
    }
    onChange=(event)=>{
        this.setState({
            idcanthaotac:event.target.value
        })
    }
    render() {
        let elements = this.state.a.map((a, index) => {
            return <tr key={index}>
                <td>{index}</td>
                <td>{a._id}</td>
                <td>{a.hoten}</td>
                <td>{a.bienso}</td>
                <td>{a.sdt}</td>
                <td>{a.vitien}</td>
                <td>{a.status === true ? 'Online' : 'Offline'}</td>
                <td>{a.del === true ? 'Deleted' : 'Undelete'}</td>
            </tr>
        })
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Bien So</th>
                            <th>SDT</th>
                            <th>Vi tien</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                <div className="form-group" style={{width:'200px'}}>
                  <input type="text"
                    className="form-control" name="idcanthaotac" id=""placeholder="ID cần thao tác" onChange={this.onChange}/>
                </div>
                <button type="button" className="btn btn-danger"onClick={this.xoa}>Xoá</button>
                <button type="button" className="btn btn-success ml-1" onClick={this.kichhoat}>Kích hoạt</button>
            </div>
        )
    }
}

