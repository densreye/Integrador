import React from "react";

export default function Footer() {
 
    return (
        <>
    <div className=" " style={{ backgroundColor: '#001c43'}}>
        
        <hr></hr>
 
        <ul className="menu nav ml-3">
            <li className="first leaf"><a href="http://www.abet.org/" target="_blank">ABET</a></li>
            <li className="leaf"><a href="http://www.aacsb.edu/" target="_blank">AACSB</a></li>
            <li className="leaf"><a href="http://www.senescyt.gob.ec/web/guest" target="_blank">SENESCYT</a></li>
            <li className="leaf"><a href="https://www.caces.gob.ec/" target="_blank">CACES</a></li>
            <li className="last leaf"><a href="http://www.ces.gob.ec/" target="_blank">CES</a></li>
        </ul>
 
  </div>
  <div className="col-md-12 col-sm-12 p-3" style={{ backgroundColor: '#f2fbff'}} >
        <p className="text-center">
        <b>Escuela Superior Politécnica del Litoral - Guayaquil - Ecuador Campus Gustavo Galindo</b><br/><br/>
            <b>©</b>El contenido de esta obra es de propiedad intelectual de la ESPOL, todos los derechos reservados, prohibida su reproducción total o parcial, comunicación pública o distribución sin autorización previa del titular de los derechos.
            </p>
    </div>
    <br/>
  </>
    )
}