import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import { Navigate } from 'react-router-dom';

export default class PutDepartamento extends Component {

    state = {
        status : false ,
        departamento : {}
    }

    cargarDepartamento = () => {
        var id = this.props.id;
        var request = "/api/Departamentos/" + id;
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                departamento : res.data
            })
        })
    }
    componentDidMount = () => {
        this.cargarDepartamento();
    }

    inputId = React.createRef();
    inputNombre = React.createRef();
    inputLocalidad = React.createRef();
    putDept = (e) => {
        e.preventDefault();

        var id = parseInt(this.inputId.current.value);
        var nombre = this.inputNombre.current.value;
        var localidad = this.inputLocalidad.current.value;

        var departametoNew = {
            numero : id ,
            nombre : nombre ,
            localidad : localidad
        }

        var request = "/api/Departamentos/";
        var url = Global.url + request;

        axios.put(url, departametoNew).then( res => {
            this.setState({
                status : true
            })
        })
    }

    render() {
        if(this.state.status == true) {
            return(<Navigate to="/" />)
        } else {
            return (<div>
                <h1>PutDepartamento</h1>

                <form>
                    <label>Id</label>
                    <input type="number" className='form-control' defaultValue={this.state.departamento.numero} ref={this.inputId} required />
                    <label>Nombre</label>
                    <input type="text" className='form-control' defaultValue={this.state.departamento.nombre} ref={this.inputNombre} required />
                    <label>Localidad</label>
                    <input type="text" className='form-control' defaultValue={this.state.departamento.localidad} ref={this.inputLocalidad} required />

                    <button onClick={this.putDept} className="btn btn-info">Modificar departamento</button>
                </form>
            </div>)
        }
    }
}
