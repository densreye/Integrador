import IndiceGeneros from "./rubricas/IndiceGeneros";
 
import CrearGenero from "./rubricas/CrearRubrica"
import EditarGenero from "./rubricas/EditarRubrica"


import RedireccionarALanding from './utils/RedireccionarALanding'

const rutas = [
    {path: '/rubricas/crear', componente: CrearGenero},
    {path: '/rubricas/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/rubricas', componente: IndiceGeneros, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;