import {Link, NavLink} from 'react-router-dom'
import Autorizado from 'Auth/Autorizado';
import Button from './Button';
import {useContext} from 'react';
import AutenticacionContext from 'Auth/AutenticacionContext';
import { logout } from 'Auth/manejadorJWT';
import { useState } from 'react';
export default function Menu() {

    const claseActiva = "active";
    const {actualizar, claims} = useContext(AutenticacionContext);
    function obtenerNombreUsuario(): string {
        return claims.filter(x => x.nombre === "email")[0]?.valor;
    }
    
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light, p-3 mb-2  text-white " style={{ backgroundColor: '#1e19ff'}}>
            <div className="container-fluid">
                
                <NavLink className="navbar-brand text-white" 
                activeClassName={claseActiva} 
                to="/">STAC</NavLink>
                <div className="collapse navbar-collapse"
                style={{display:'flex',justifyContent:'space-between'}}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                            to="/rubricas">
                                Rúbricas
                            </NavLink>
                        </li>
                        <Autorizado role='admin'
                            autorizado={
                                <>
                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/notificaciones">
                                        Notificaciones
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/usuarios">
                                        Usuarios
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/aprobaciones">
                                        Aprobación
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/rutasmedicion">
                                        Rutas de Medición
                                    </NavLink>
                                    </li>
                                </>        

                            }
                        />
                                              
 
                    </ul>
                    <div className="d-flex">
                        <Autorizado
                            autorizado={<>
                            <span className="nav-link">Hola, {obtenerNombreUsuario()}</span>
                            <Button 
                           
                               onClick={() => {
                                   logout();
                                   actualizar([]);
                               }}
                            className="nav-link btn btn-link text-white">Log out</Button>
                            </>}
                            noAutorizado={<>
                                <Link to="/Registro" className="nav-link btn btn-link text-white">
                                    Registro
                                        </Link>
                                <Link to="/Login" className="nav-link btn btn-link text-white">
                                    Login
                                        </Link>
                            </>}
                        />
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}