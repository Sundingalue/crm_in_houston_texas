import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        CRM In Houston Texas
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}>
        Plataforma personalizada para agentes, clientes y analítica
      </p>

      <button style={{
        backgroundColor: '#FFD700',
        border: 'none',
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        color: '#000',
        transition: '0.3s'
      }}
        onClick={() => alert('Aquí irá el login del CRM')}
      >
        Entrar al CRM
      </button>
    </div>
  );
}

export default App;
