import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Main() {
  useEffect(() => {
    toast.success("You have succesfully signed in", {
      position: "top-center",
      theme: "dark",
      autoClose: 2000,
    });
  }, []);
  return (
    <div>
      <div>Main</div>
      <ToastContainer />
    </div>
  );
}
