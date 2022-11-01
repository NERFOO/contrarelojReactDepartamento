import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DetalleDepartamento extends Component {
    render() {
        return (<div>
            <br />
            <h1>DetalleDepartamento</h1>
            <br />

            <div className="card">
                <div className="card-header">
                    Detalles del departamento {this.props.nombre}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Id : {this.props.id}</h5>
                    <p className="card-text">Localidad : {this.props.localidad}</p>
                </div>
            </div>

            <br />
            <NavLink to="/" className="btn btn-success">Volver</NavLink>

        </div>)
    }
}
