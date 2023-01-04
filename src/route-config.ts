import IndiceRubricas from "./rubricas/IndiceRubricas";
 
import CrearRubrica from "./rubricas/CrearRubrica"
import EditarRubrica from "./rubricas/EditarRubrica"


import RedireccionarALanding from './utils/RedireccionarALanding'
import Registro from "Auth/Registro";
import Login from "Auth/Login";
import IndiceNotificaciones from "notificacion/IndiceNotificaciones";

const rutas = [
    {path: '/rubricas/crear', componente: CrearRubrica, exact: true,esAdmin:true},
    {path: '/rubricas/editar/:id(\\d+)', componente: EditarRubrica, exact: true,esAdmin:true},
    {path: '/rubricas', componente: IndiceRubricas, exact: true},
    {path: '/notificaciones', componente:  IndiceNotificaciones, exact: true},
    {path: '/registro', componente: Registro, exact: true},
    {path: '/login', componente: Login  },

    {path: '*', componente: RedireccionarALanding},
    
];

export default rutas;