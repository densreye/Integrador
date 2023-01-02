import {NavLink} from 'react-router-dom'

export default function Menu() {
    const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" 
                activeClassName={claseActiva} 
                to="/">STAC</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/rubricas">
                                Rúbricas
                            </NavLink>
                        </li>
                     
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/peliculas/filtrar">
                                Notificaciones
                            </NavLink>
                        </li>

                        
 
                    </ul>
                </div>
            </div>
        </nav>
    )
}