import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './utils/Menu';
import rutas from './route-config'
import configurarValidaciones from './validaciones'
import AutenticacionContext from 'Auth/AutenticacionContext';
import { claim } from 'Auth/auth.model';
import { obtenerClaims } from 'Auth/manejadorJWT';
import logo from 'Images/stac.png'
import Footer from 'utils/Footer';
configurarValidaciones();
 
function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(obtenerClaims());
  }, [])

  function actualizar(claims: claim[]) {
    setClaims(claims);
  }

  function esAdmin() {
    return claims.findIndex(claim => claim.nombre === 'role' && claim.valor === 'admin') > -1;
  }

  return (
    <>
   
      <BrowserRouter>

        <AutenticacionContext.Provider value={{ claims, actualizar }}>
        <header className="container">
      <div className="row p-4">
        <div className="col-md-12">
            <a href="/" title="Inicio">
              <img src={logo} alt="Inicio" className="img-responsive"/>
            </a>            
        </div>
      </div> 
         

      </header>
      <hr className="hr_header"></hr>
          <Menu />
         
            <Switch>
              {rutas.map(ruta =>
                <Route key={ruta.path} path={ruta.path}
                  exact={ruta.exact}>
                  {ruta.esAdmin && !esAdmin() ? <>
                    No tiene permiso para acceder a este componente
                    </> : <ruta.componente />}
                    <Footer></Footer>
                </Route>)}
            </Switch>
      
          
        </AutenticacionContext.Provider>
        

      </BrowserRouter>
   
    </>

  );
}


export default App;
