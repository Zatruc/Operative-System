import React, { useState } from "react";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`absolute top-5 right-5 ${
          isOpen ? "bg-gray-700 p-4 w-auto h-auto" : "bg-orange-600 w-10 h-10"
        } rounded-lg cursor-pointer transition-all duration-500 ease-in-out`}
        onClick={toggleNotifications}
      >
        {!isOpen ? (
          <div className="flex items-center justify-center w-full h-full">
            <span role="img" aria-label="bell" className="text-xl">
              🔔
            </span>
          </div>
        ) : (
          <>
            <h1 className="pb-2 font-bold">Notificaciones</h1>
            <hr className="pb-2" />
            <div className="mb-2 bg-gray-600 p-2 rounded-lg">
              <h2 className="font-semibold">Agenda</h2>
              <p>¡Tiene un evento programado para hoy!</p>
            </div>
            <div className="mb-2 bg-gray-600 p-2 rounded-lg">
              <h2 className="font-semibold">Seguridad</h2>
              <p>No se ha encontrado ninguna amenaza.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Notifications;
