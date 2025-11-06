import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🚀 CRM In Houston Texas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta de cliente */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/20">
            <h2 className="text-lg font-semibold text-yellow-400">In Houston</h2>
            <p className="text-sm">info@inhoustontexas.us</p>
            <p className="text-sm">📞 +1 346-988-2323</p>
            <button className="mt-4 w-full bg-yellow-400 text-black font-bold py-2 rounded-xl hover:bg-yellow-300 transition">
              Exportar CSV
            </button>
          </div>

          {/* Puedes duplicar esta tarjeta y cambiarle el contenido para otros clientes */}
        </div>

        {/* Pie de página */}
        <div className="mt-10 text-center text-white/60 text-sm">
          CRM Panel • In Houston Texas © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
