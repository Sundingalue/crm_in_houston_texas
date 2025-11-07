// pages/Dashboard.jsx
import { useAuthStore } from "../store/auth";

export default function Dashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <div className="font-bold">CRM In Houston Texas</div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-300 text-sm">
            {user ? `Hola, ${user.name}` : ""}
          </span>
          <button
            onClick={logout}
            className="rounded-lg bg-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-700"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
          <h2 className="font-semibold mb-2">Resumen</h2>
          <p className="text-neutral-400 text-sm">
            Aquí irá el resumen de agentes, llamadas, minutos y $.
          </p>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
          <h2 className="font-semibold mb-2">Próximas tareas</h2>
          <ul className="text-neutral-300 text-sm space-y-1">
            <li>• Integrar métricas ElevenLabs</li>
            <li>• Widgets ON/OFF</li>
            <li>• Exportación CSV</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
          <h2 className="font-semibold mb-2">Actividad</h2>
          <p className="text-neutral-400 text-sm">
            Últimos movimientos del sistema y usuarios.
          </p>
        </section>
      </main>
    </div>
  );
}
