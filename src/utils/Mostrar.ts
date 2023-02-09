import Swal from "sweetalert2";

export default function mostrar(
    onConfirm: any,
    titulo: string = "Criterio",
    textoBotonConfirmacion: string = "OK"
    ) {
    Swal.fire({
        title: titulo,
        confirmButtonText: textoBotonConfirmacion,
        imageHeight: 650,
        imageWidth: 1300,
        imageAlt: 'A tall image'
    }).then(result => {
        if (result.isConfirmed){
            onConfirm();
        }
    })
}
  