import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './utils/Menu';
import rutas from './route-config'
import configurarValidaciones from './validaciones'
import AutenticacionContext from 'Auth/AutenticacionContext';
import { claim } from 'Auth/auth.model';
 
configurarValidaciones();

function App() {
  const [claims,setClaims]=useState<claim[]>([
    //{nombre:'email',valor:'viosalva@espol.edu.ec'},
    {nombre:'role',valor:'admin'}
  ])
  function esAdmin(){
    return claims.findIndex(claim=>claim.nombre=='role'&& claim.valor==='admin')>-1;

  }
 
  function actualizar(claims:claim[]){
    setClaims(claims);

  }
  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{claims,actualizar}}> 
          <Menu />
            <div className="container">
              <Switch>
                {rutas.map(ruta => 
                <Route key={ruta.path} path={ruta.path}
                  exact={ruta.exact}>
                    {ruta.esAdmin && !esAdmin()?<>
                      No tiene permiso para acceder a esta sección.
                    </>:<ruta.componente />}
                    
                  </Route>)}
              </Switch>
            </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>

    </>

  );
}

export default App;
