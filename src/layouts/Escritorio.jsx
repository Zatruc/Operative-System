import React from "react";
import Taskbar from "../components/Taskbar";
import Notifications from "../components/Notifications";

const Escritorio = ({ children }) => {
  return (
    <div className="relative w-screen h-screen bg-gray-800 text-white">
      {children}
      <Taskbar />
    </div>
  );
};

export default Escritorio;
