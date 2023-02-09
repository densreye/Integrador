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
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light, p-2 mb-2  text-white " style={{ backgroundColor: '#001c43'}}>
            <div className="container-fluid">
                
          
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
                        <Autorizado role='coordinador'
                            autorizado={
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/rutasdemedicion">
                                    Rutas de Medición
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/notificaciones">
                                        Notificaciones
                                    </NavLink>
                                </li>
                            </>
                            }/>
                                
                
                        <Autorizado role='admin'
                            autorizado={
                                <>
                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/aprobaciones">
                                        Aprobación Rúbricas
                                    </NavLink>
                                    </li>
             
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                        to="/rutasdemedicion">
                                            Rutas de Medición
                                        </NavLink>
                                        </li>
                              

                                    <li className="nav-item">
                                    <NavLink className="nav-link text-white" activeClassName={claseActiva} 
                                    to="/aprobacionesrutas">
                                        Aprobación Rutas de Medición
                                    </NavLink>
                                    </li>
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
                            className="nav-link btn btn-link text-white">Salir</Button>
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