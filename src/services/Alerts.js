import Swal from "sweetalert2";

export const showMessage = (message, icon, position, timer) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: timer
    })
}