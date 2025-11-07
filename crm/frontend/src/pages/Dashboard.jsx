// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Agente INH" };

  // si no hay sesión, regresa al login
  if (!user || !user.name) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-6">
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#facc15" }}>
        ¡Bienvenido, {user.name}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#facc15", color: "#000" }}>
          <h2 className="text-xl font-semibold">📞 Llamadas Hoy</h2>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold">⏱️ Minutos Usados</h2>
          <p className="text-4xl font-bold mt-2">37 min</p>
        </div>

        <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#fde047", color: "#000" }}>
          <h2 className="text-xl font-semibold">💸 Crédito Disponible</h2>
          <p className="text-4xl font-bold mt-2">$21.50</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl p-6 shadow-lg" style={{ backgroundColor: "#1C1C1C" }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#facc15" }}>Resumen Diario</h2>
        <p className="text-gray-300">
          Este panel será actualizado en tiempo real con las llamadas realizadas, minutos usados y tareas pendientes.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
