import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DeleteDepartamento from './components/DeleteDepartamento';
import Departamentos from './components/Departamentos';
import DetalleDepartamento from './components/DetalleDepartamento';
import PostDepartamento from './components/PostDepartamento';
import PutDepartamento from './components/PutDepartamento';

export default class Router extends Component {
    render() {

        function DetalleDept () {
            var { id, nom, loc } = useParams();
            return (<DetalleDepartamento id={id} nombre={nom} localidad={loc} />)
        }

        function PutDept () {
            var { id } = useParams();
            return (<PutDepartamento id={id} />)
        }

        function DeleteDept () {
            var { id } = useParams();
            return (<DeleteDepartamento id={id} />)
        }

        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Departamentos />}/>
                    <Route path='/nuevoDepartamento/' element={<PostDepartamento />}/>
                    <Route path='/detalleDepartamento/:id/:nom/:loc/' element={<DetalleDept />}/>
                    <Route path='/modificarDepartamento/:id/' element={<PutDept />}/>
                    <Route path='/eliminarDepartamento/:id/' element={<DeleteDept />}/>
                </Routes>
            </BrowserRouter>)
    }
}
