import IndiceGeneros from "./rubricas/IndiceGeneros";
 
import CrearRubrica from "./rubricas/CrearRubrica"
import EditarRubrica from "./rubricas/EditarRubrica"


import RedireccionarALanding from './utils/RedireccionarALanding'

const rutas = [
    {path: '/rubricas/crear', componente: CrearRubrica},
    {path: '/rubricas/editar/:id(\\d+)', componente: EditarRubrica},
    {path: '/rubricas', componente: IndiceGeneros, exact: true},
    {path: '*', componente: RedireccionarALanding},
    
];

export default rutas;