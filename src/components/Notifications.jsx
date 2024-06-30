import React from "react";

const Notifications = () => (
  <div className="absolute top-5 right-5 bg-gray-700 p-4 rounded-lg">
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
  </div>
);

export default Notifications;
