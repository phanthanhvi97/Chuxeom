import React, { Component } from 'react'
// import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
export default class ttkh extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: [],
        }
    }
    componentDidMount() {setInterval(() => {
        axios.post('http://localhost:8080/loadchuyendi', {
            // _id: localStorage.getItem('tokenadmin')
        })
            .then((kq) => {
                this.setState({
                    a: kq.data.kq,
                })
            })
    }, 100);
}
    render() {
        let elements = this.state.a.map((a, index) => {
            return <tr key={index}>
                <td>{index}</td>
                <td>{a.idkhach}</td>
                <td>{a.idtaixe}</td>
                <td>{a.quangduong}</td>
                <td>{a.sokm}</td>
                <td>{a.sotien}</td>
                <td>{a.status}</td>

            </tr>
        })
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID Khách</th>
                            <th>ID bác tài</th>
                            <th>Quãng đường</th>
                            <th>Số km</th>
                            <th>Số tiềm</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}

