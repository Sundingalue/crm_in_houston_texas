import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard.jsx'

import './index.css' // este archivo lo crearemos luego para estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
