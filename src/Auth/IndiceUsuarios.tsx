import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "utils/Button";
import confirmar from "utils/Confirmar";
import { urlCuentas } from "utils/endpoints";
import IndiceEntidad from "utils/IndiceEntidad";
import { usuarioDTO } from "./auth.model";
 
export default function IndiceUsuarios() {

    async function hacerAdmin(id: string) {
        await editarAdmin(`${urlCuentas}/hacerAdmin`, id);
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
     
 <div className="container col-lg-9">
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
        </div> )
}