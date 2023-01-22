import Swal from "sweetalert2";

export default function confirmarEstado(
  onConfirm: any,
  titulo: string = "¿Desea actualizar el estado?",
  textoBotonConfirmacion: string = "Aprobar"
) {
    Swal.fire({
        title: titulo,
        confirmButtonText: textoBotonConfirmacion,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then(result => {
        if (result.isConfirmed){
            onConfirm();
        }
    })
}