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
import RutaMedicion from "RutasMedicion/rutamed";

const rutas = [
    {path: '/rubricas/crear', componente: CrearRubrica, exact: true,esAdmin:true},
    {path: '/rubricas/editar/:id(\\d+)', componente: EditarRubrica, exact: true,esAdmin:true},
    {path: '/rubricas', componente: IndiceRubricas, exact: true},
    {path: '/notificaciones', componente:  IndiceNotificaciones, exact: true,esAdmin:true},
    {path: '/registro', componente: Registro, exact: true},
    {path: '/login', componente: Login  },
    {path: '/usuarios', componente: IndiceUsuarios, esAdmin: true},
    {path: '/aprobaciones', componente: IndiceAprobacion, exact: true,esAdmin:true},
    {path: '/rutasmedicion', componente: RutaMedicion, exact: true,esAdmin:true},
    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding},
    
    
];

export default rutas;