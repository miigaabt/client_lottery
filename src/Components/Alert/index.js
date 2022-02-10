import React from "react";
import { ToastContainer, toast } from "react-toastify";

function Alert(data, type) {
  if (type === "200") {
    return toast.success(data);
  } else if (type === "400") {
    return toast.warning(data);
  } else if (type === "401") {
    return toast.error(data);
  }
}

export default Alert;
