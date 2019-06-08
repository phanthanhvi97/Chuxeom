import React, { Component } from 'react'
import {Redirect} from "react-router-dom";

export default class main_taixe extends Component {
    constructor(props) {
        super(props)
        const tokentaixe = localStorage.getItem('tokentaixe')
        let loggingIn = true
        if(tokentaixe===null){
            loggingIn=false
        }
        this.state = {
            loggingIn
        };
    };

    dangxuat=()=>{
        localStorage.removeItem('tokentaixe')
    }
    render() {
        if(this.state.loggingIn===false){
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
                day la main tai xe
                <a onClick={this.dangxuat} href='/'>
                    dang xuat
                </a>
            </div>
        )
    }
}
