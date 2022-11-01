import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class PostDepartamento extends Component {

    state = {
        status : false
    }

    inputId = React.createRef();
    inputNombre = React.createRef();
    inputLocalidad = React.createRef();
    crearDepartamento = (e) => {
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

        axios.post(url, departametoNew).then( res => {
            this.setState({
                status : true
            })
        })
    }

    render() {
        if(this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (<div>
                <h1>PostDepartamento</h1>

                <form>
                    <label>Id</label>
                    <input type="number" className='form-control' ref={this.inputId} required />
                    <label>Nombre</label>
                    <input type="text" className='form-control' ref={this.inputNombre} required />
                    <label>Localidad</label>
                    <input type="text" className='form-control' ref={this.inputLocalidad} required />

                    <button onClick={this.crearDepartamento} className="btn btn-info">Insertar departamento</button>
                </form>
            </div>)
        }
    }
}
