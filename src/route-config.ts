import IndiceRubricas from "./rubricas/IndiceRubricas";
 
import CrearRubrica from "./rubricas/CrearRubrica"
import EditarRubrica from "./rubricas/EditarRubrica"


import RedireccionarALanding from './utils/RedireccionarALanding'
import Registro from "Auth/Registro";
import Login from "Auth/Login";
import IndiceNotificaciones from "notificacion/IndiceNotificaciones";
import LandingPage from "LandingPage";
import IndiceUsuarios from "Auth/IndiceUsuarios";
import IndiceAprobacion from "Aprobacion/aprobacion";
import RutaMedicion from "RutasMedicion/IndiceRutaMed";
import CrearRuta from "RutasMedicion/CrearRuta";
import EditarRuta from "RutasMedicion/EditarRuta";
import IndiceAprobacionRutas from "AprobacionRutas/aprobacionrutas";


const rutas = [
    {path: '/rubricas/crear', componente: CrearRubrica, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/rubricas/editar/:id(\\d+)', componente: EditarRubrica, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/rubricas', componente: IndiceRubricas, exact: true,esCoordinador:true},
    {path: '/notificaciones', componente:  IndiceNotificaciones, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/registro', componente: Registro, exact: true},
    {path: '/login', componente: Login  },
    {path: '/usuarios', componente: IndiceUsuarios, esAdmin: true},
    {path: '/aprobaciones', componente: IndiceAprobacion, exact: true,esAdmin:true},
    {path: '/rutasdemedicion/crear', componente: CrearRuta, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/rutasdemedicion/editar/:id(\\d+)', componente: EditarRuta, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/rutasdemedicion', componente: RutaMedicion, exact: true,esAdmin:true,esCoordinador:true},
    {path: '/aprobacionesrutas', componente: IndiceAprobacionRutas, exact: true,esAdmin:true},

  

    
    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding},
    
    
];

export default rutas;