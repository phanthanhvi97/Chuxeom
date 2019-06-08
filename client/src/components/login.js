import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <a type="button" href='khach_login' className="btn btn-primary">Nguoi dung</a>
                <a type="button" href='taixe_login' className="btn btn-primary">Tai xe</a>
                <a type="button" href='admin_login' className="btn btn-primary">Admin</a>
            </div>
        )
    }
}

export default withRouter(Login); 