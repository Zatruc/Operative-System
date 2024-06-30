import React from "react";
import { useNavigate } from "react-router-dom";
import AppStoreIcon from "../assets/icons/AppStore.svg";
import CalculatorIcon from "../assets/icons/Calculator.svg";
import ExcelIcon from "../assets/icons/Excel.svg";
import FolderIcon from "../assets/icons/Folder.svg";
import SpotifyIcon from "../assets/icons/Spotify.svg";
import VScodeIcon from "../assets/icons/VScode.svg";
import CalendarIcon from "../assets/icons/Calendar.svg";

const IconApp = ({ icon, url }) => {
  const navigate = useNavigate();

  const loadPage = () => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <div className="container my-1 p-2 rounded-md">
      <button
        type="button"
        className="box-border flex items-center justify-center"
        onClick={loadPage}
      >
        <img
          src={icon}
          className="bg-contain h-7 w-7 hover:scale-125"
          alt="App Icon"
        />
      </button>
    </div>
  );
};

export {
  AppStoreIcon,
  CalculatorIcon,
  ExcelIcon,
  FolderIcon,
  SpotifyIcon,
  VScodeIcon,
  CalendarIcon,
};
export default IconApp;
