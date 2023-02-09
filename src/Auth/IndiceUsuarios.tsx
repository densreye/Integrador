import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "utils/Button";
import confirmar from "utils/Confirmar";
import { urlCuentas } from "utils/endpoints";
import IndiceEntidad from "utils/IndiceEntidad";
import { usuarioDTO } from "./auth.model";
import Autorizado from "Auth/Autorizado";

export default function IndiceUsuarios() {

    async function hacerAdmin(id: string) {
        await editarAdmin(`${urlCuentas}/hacerAdmin`, id);
    }
    async function hacerCoordinador(id: string) {
        await editarAdmin(`${urlCuentas}/hacerCoordinador`, id);
    }

    async function removerAdmin(id: string) {
        await editarAdmin(`${urlCuentas}/removerAdmin`, id);
    }

    async function editarAdmin(url: string, id: string) {
        await axios.post(url, JSON.stringify(id),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )

        Swal.fire({
            title: 'Exito',
            text: 'Operación realizada con éxito',
            icon: 'success'
        })
    }

    return (
                <Autorizado role="admin"
                                    autorizado={<><div className="container col-lg-9">
                                    <IndiceEntidad<usuarioDTO>
                                        url={`${urlCuentas}/listadoUsuarios`}
                                        titulo="Usuarios"
                                    > 
                                        {usuarios => <>
                                       
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr className="color">
                                                        <th>Correo</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {usuarios?.map(usuario =>
                                                    <tr key={usuario.id} className="color"><td>
                                                            {usuario.email}
                                                        </td>
                                                        <td> 
                                                            <Button
                                                                onClick={() => confirmar(() => hacerAdmin(usuario.id),
                                                                    `¿Desea hacer a ${usuario.email} admin?`, 'Realizar')}
                                                                    style={{ backgroundColor: '#001c43'}}    >
                                                                Hacer Admin</Button>
                                                                <Button 
                                                                onClick={() => confirmar(() => hacerCoordinador(usuario.id),
                                                                    `¿Desea hacer a ${usuario.email} Coordinador?`, 'Realizar')}
                                                                     className="btn btn-secondary m-2 "    >
                                                                Hacer Coordinador</Button>
                                                            <Button className="btn btn-danger" style={{ marginLeft: '2rem' }}
                                                                onClick={() => confirmar(() => removerAdmin(usuario.id),
                                                                    `¿Desea remover a ${usuario.email} como admin?`, 'Realizar')}>
                                                                Remover Admin</Button>
                                                        </td>
                            
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                       
                                        </>}
                                    
                                    </IndiceEntidad>
                                    </div> </>}
                                    
                                    noAutorizado={<>
                                        <b className="p-4">No autorizado para revisar este componente.</b>
                                    </>}/>
 )
}