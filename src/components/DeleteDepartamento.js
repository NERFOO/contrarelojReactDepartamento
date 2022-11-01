import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class DeleteDepartamento extends Component {

    state = {
        status : false
    }

    deleteDept = () => {
        var id = this.props.id;
        var request = "/api/Departamentos/" + id;
        var url = Global.url + request;

        axios.delete(url).then( res => {
            this.setState({
                status : true
            })
        })
    }
    componentDidMount = () => {
        this.deleteDept();
    }

    render() {
        if (this.state.status == true) {
            return ( <Navigate to="/" />)
        } else {
            return (<div>
                <h1>DeleteDepartamento</h1>
            </div>)
        }
    }
}
