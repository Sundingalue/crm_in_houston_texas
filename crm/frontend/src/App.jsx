// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAuth = !!localStorage.getItem("user"); // si hay user en localStorage

  return (
    <Router>
      {/* La Navbar solo aparece cuando el usuario está autenticado */}
      {isAuth && <Navbar />}

      <Routes>
        {/* Login (página pública) */}
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <Login />} />

        {/* Dashboard (protegido) */}
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* Cualquier otra ruta redirige según sesión */}
        <Route
          path="*"
          element={<Navigate to={isAuth ? "/dashboard" : "/"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
