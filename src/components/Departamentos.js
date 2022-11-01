import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import loading from './../assets/images/loading.gif';

export default class Departamentos extends Component {

    state = {
        status : false ,
        oficios : []
    }

    cargarDepartamentos = () => {
        var request = "/api/Departamentos/";
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                oficios : res.data
            })
        })
    }
    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status == false) {
            return(<img src={loading} alt="cargando" style={{width:"100%"}} />)
        } else {
            return (<div>
                <br />
                <NavLink to="/nuevoDepartamento/" className="btn btn-success">Crear nuevo</NavLink>
                <br />
                <br />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DEPARTAMENTO</th>
                            <th>LOCALIDAD</th>
                            <th>CRUD</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return (<tr key={index}>
                                <td>{oficio.numero}</td>
                                <td>{oficio.nombre}</td>
                                <td>{oficio.localidad}</td>
                                <td>
                                    <NavLink to={`/detalleDepartamento/${oficio.numero}/${oficio.nombre}/${oficio.localidad}`} className="btn btn-success">Detalles</NavLink>
                                    <NavLink to={"/modificarDepartamento/" + oficio.numero} className="btn btn-info">Modificar</NavLink>
                                    <NavLink to={"/eliminarDepartamento/" + oficio.numero} className="btn btn-danger">Eliminar</NavLink>
                                </td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>)
        }
    }
}
