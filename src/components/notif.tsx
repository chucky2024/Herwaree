import React, { useEffect } from "react";
import { ToastContainer, toast as toastInstance } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  toast: {
    type: "success" | "error";
    message: string;
  };
}

const ToastNotification: React.FC<ToastProps> = ({ toast }) => {
  useEffect(() => {
    if (toast) {
      // Display the toast notification based on its type
      if (toast.type === "success") {
        toastInstance.success(toast.message);
      } else if (toast.type === "error") {
        toastInstance.error(toast.message);
      }
    }
  }, [toast]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToastNotification;
