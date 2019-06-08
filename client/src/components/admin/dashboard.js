import React, { Component } from 'react'
import {Redirect} from "react-router-dom";

export default class dashboard extends Component {
    constructor(props) {
        super(props)
        const tokentaixe = localStorage.getItem('tokenadmin')
        let loggingIn = true
        if(tokentaixe===null){
            loggingIn=false
        }
        this.state = {
            loggingIn
        }
    }
    dangxuat=()=>{
        localStorage.removeItem('tokenadmin')
    }
    render() {
        if(this.state.loggingIn===false){
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
                day la dashboard
                <a onClick={this.dangxuat} href='/'>
                    dang xuat
                </a>
            </div>
        )
    }
}
