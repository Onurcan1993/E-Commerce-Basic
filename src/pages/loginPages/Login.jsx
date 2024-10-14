import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";
import FormElement from "./FormElement";

export default function Login() {
  return (
    <div className="before:bg-login w-full h-screen bg-cover before:absolute before:left-0 before:right-0 p-2 before:top-0 before:bottom-0 before:opacity-65 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-2 items-center relative justify-center  w-2/5 h-3/5 bg-blue-700  p-4 rounded-md">
        <h1 className="bg-red-300 w-full text-center rounded-md  text-blue-600 py-2 select-none ">
          Login
        </h1>
        <FormElement />
        <ToastContainer />
      </div>
    </div>
  );
}
