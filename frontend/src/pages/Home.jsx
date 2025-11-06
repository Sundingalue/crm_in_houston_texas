import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/dashboard') // Redirige al dashboard
  }

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1>CRM In Houston Texas</h1>
      <p>Plataforma personalizada para agentes, clientes y analítica</p>
      <button 
        onClick={handleClick}
        style={{
          marginTop: '20px',
          backgroundColor: '#FFD700',
          color: '#000',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        Entrar al CRM
      </button>
    </div>
  )
}

export default Home
