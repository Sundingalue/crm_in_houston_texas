// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>IN HOUSTON TEXAS</div>
      <div style={styles.links}>
        <span style={styles.link} onClick={() => navigate("/dashboard")}>
          Dashboard
        </span>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #333",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#facc15",
    letterSpacing: "0.5px",
  },
  links: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
    color: "#fff",
  },
  logoutBtn: {
    backgroundColor: "#facc15",
    color: "#000",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
