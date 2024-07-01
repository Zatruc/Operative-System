import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import Notifications from "../components/Notifications";
import WallpaperUploader from "../components/WallpaperUploader";
import { useLocation } from "react-router-dom";

const Escritorio = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const location = useLocation();

  return (
    <div
      className="relative h-screen w-screen"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {location.pathname === "/" && (
        <WallpaperUploader setBackgroundImage={setBackgroundImage} />
      )}
      {children}
      <Taskbar />
      <Notifications />
    </div>
  );
};

export default Escritorio;
