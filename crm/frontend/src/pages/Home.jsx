import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-start bg-black text-white">
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">CRM In Houston Texas</h1>
        <p className="text-lg mb-8">Plataforma personalizada para agentes, clientes y analítica</p>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => navigate('/login')}
        >
          Entrar al CRM
        </button>
      </div>
      <div className="w-1/2 bg-neutral-800 h-full" />
    </div>
  )
}
