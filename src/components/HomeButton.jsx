import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition duration-300"
      onClick={handleClick}
    >
      🏠
    </button>
  );
};

export default HomeButton;
