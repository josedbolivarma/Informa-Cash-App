import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import check from './sweetAlert.module.scss';
import { useCallback } from 'react';

// Custom hook for SweetAlert
export const useAlert = () => {

  // Success alert
  const showSuccess = useCallback((title: string, message: string) => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonColor: '#3085d6',
      customClass: {
        icon: check.customClass // Agrega la clase personalizada para el icono de check
      },
    });
  }, []);

  // Error alert
  const showError = useCallback((title: string, message: string) => {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonColor: '#d33',
      customClass: {
        icon: check.customClass // Agrega la clase personalizada para el icono de check
      },
    });
  }, []);

  // Info alert
  const showInfo = useCallback((title: string, message: string) => {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      confirmButtonColor: '#3085d6',
      customClass: {
        icon: check.customClass // Agrega la clase personalizada para el icono de check
      },
    });
  }, []);

  // Warning alert with confirmation
  const showConfirm = useCallback(async (title: string, message: string) => {
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        icon: check.customClass // Agrega la clase personalizada para el icono de check
      },
    });
    return result.isConfirmed;
  }, []);

  return {
    showSuccess,
    showError,
    showInfo,
    showConfirm
  };
};

// export const useAlert = () => {
//   const navigate = useNavigate();
//   // Success alert
//   const handleSuccessAlert = (message: string, path: string = "") => {
//     Swal.fire({
//       icon: "success",
//       title: message,
//       showConfirmButton: false,
//       timer: 1500,
//       customClass: {
//         icon: check.customClass // Agrega la clase personalizada para el icono de check
//       },
//       iconColor: '#fd7e14', // Cambia el color del icono de check aquí
//       confirmButtonColor: '#fd7e14',
//     }).then(() => {
//       if (path) {
//         navigate(`${process.env.PUBLIC_URL}/App/${path}`);
//       }
//     });
//   };

//   // Error alert
//   const handleErrorAlert = (message: string) => {
//     Swal.fire({
//       icon: "error",
//       title: message,
//       confirmButtonText: "OK",
//       iconColor: '#fd7e14', // Cambia el color del icono de check aquí
//       confirmButtonColor: '#fd7e14',
//     });
//   };

//   const handleEditConfirmation = async (message: string) => {
//     const result = await Swal.fire({
//       icon: "question",
//       title: message,
//       showCancelButton: true,
//       confirmButtonText: "Si",
//       cancelButtonText: "No",
//       iconColor: '#fd7e14', // Cambia el color del icono de check aquí
//       confirmButtonColor: '#fd7e14',
//     });

//     return result;
//   }

//   const handleAcceptConfirmation = async (message: string) => {
//     const result = await Swal.fire({
//       icon: "info",
//       title: message,
//       showCancelButton: false,
//       confirmButtonText: "Ok",
//       iconColor: '#fd7e14', // Cambia el color del icono de check aquí
//       confirmButtonColor: '#fd7e14',
//     });

//     return result;
//   }

//   return {
//     // Methods
//     handleSuccessAlert,
//     handleErrorAlert,
//     handleEditConfirmation,
//     handleAcceptConfirmation
//   }

// }