import React from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

type UseSweetAlert = () => {
  toast: (message: string, icon: SweetAlertIcon) => void;
  confirmBox: (
    title: string,
    okMessage: string,
    cancelMessage: string,
    funcSuccess: () => any
  ) => void;
};

const useSweetAlert: UseSweetAlert = () => {
  const toast = (message: string, icon: SweetAlertIcon) => {
    let color: string;

    switch (icon) {
      case "error":
        color = "red";
        break;
      default:
        color = "#030303";
        break;
    }

    Swal.fire({
      icon: icon,
      text: message,
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      width: "300px",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-noanimation",
      },
      hideClass: {
        popup: "",
        backdrop: "",
      },
      background: "#ffffff",
      color: color,
    });
  };

  const confirmBox = (
    title: string,
    okMessage: string,
    cancelMessage: string,
    funcSuccess: () => any
  ) => {
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: "Ok",
      confirmButtonColor: "var(--accent-secondary)",
      denyButtonText: `Back`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await funcSuccess();
        Swal.fire({
          text: okMessage,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } else if (result.isDenied) {
        Swal.fire(cancelMessage, "", "info");
      }
    });
  };

  return { toast, confirmBox };
};

export default useSweetAlert;
