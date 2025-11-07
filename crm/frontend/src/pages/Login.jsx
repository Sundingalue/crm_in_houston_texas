// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Login básico (demo). Cambia esta lógica por la API real cuando quieras.
    if (!company || !password) {
      alert("Completa tus datos");
      return;
    }

    // Guarda el usuario en localStorage
    localStorage.setItem("user", JSON.stringify({ name: company }));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E0E0E]">
      <form
        onSubmit={handleLogin}
        className="bg-[#151515] p-10 rounded-2xl shadow-lg w-full max-w-md border border-[#2a2a2a]"
      >
        <h1 className="text-2xl font-bold text-center mb-6" style={{ color: "#facc15" }}>
          INH CRM — Acceso
        </h1>

        <label className="block mb-4">
          <span className="text-sm text-white">Empresa / Usuario</span>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="In Houston Texas"
            className="mt-1 block w-full px-4 py-2 bg-[#202020] border border-[#2f2f2f] rounded-md text-white focus:outline-none focus:border-[#facc15]"
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm text-white">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 bg-[#202020] border border-[#2f2f2f] rounded-md text-white focus:outline-none focus:border-[#facc15]"
          />
        </label>

        <button
          type="submit"
          className="w-full font-bold py-2 rounded-md"
          style={{ backgroundColor: "#facc15", color: "#000" }}
        >
          Entrar al Dashboard
        </button>
      </form>
    </div>
  );
};

export default Login;
