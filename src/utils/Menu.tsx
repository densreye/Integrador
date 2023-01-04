import {Link, NavLink} from 'react-router-dom'
import Autorizado from 'Auth/Autorizado';
import Button from './Button';
import {useContext} from 'react';
import AutenticacionContext from 'Auth/AutenticacionContext';
 

export default function Menu() {
    const claseActiva = "active";
    const {actualizar, claims} = useContext(AutenticacionContext);
    function obtenerNombreUsuario(): string {
        return claims.filter(x => x.nombre === "email")[0]?.valor;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" 
                activeClassName={claseActiva} 
                to="/">STAC</NavLink>
                <div className="collapse navbar-collapse"
                style={{display:'flex',justifyContent:'space-between'}}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/rubricas">
                                Rúbricas
                            </NavLink>
                        </li>
                        <Autorizado role='admin'
                            autorizado={
                                <>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={claseActiva} 
                                    to="/notificaciones">
                                        Notificaciones
                                    </NavLink>
                                    </li>
                                </>        

                            }
                        />
                        

                        
 
                    </ul>
                    <div className='d-flex'>
                        <Autorizado
                        autorizado={
                        <>
                            <span className='nav-link'>Hola, {obtenerNombreUsuario()}</span>
                            <Button onClick={()=>{
                              
                                actualizar([]);}} >Log out</Button>
                        </>}
                        noAutorizado={<>
                        <Link to="/registro" className="nav-link btn btn-link" >
                            Registro
                        </Link>
                        <Link to="/login" className="nav-link btn btn-link" >
                            Login
                        </Link>

                        </>}
                        />

                    </div>
                </div>
            </div>
        </nav>
    )
}