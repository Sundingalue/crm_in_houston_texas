// pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function Login() {
  const navigate = useNavigate();
  const { login, loading, error } = useAuthStore();
  const [email, setEmail] = useState("sundin@inh.com");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await login({ email, password });
    if (ok) navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white grid place-items-center px-4">
      <div className="w-full max-w-md bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800">
        <h1 className="text-2xl font-bold mb-1">Inicia sesión</h1>
        <p className="text-neutral-400 mb-6">
          Accede al CRM In Houston Texas.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              className="w-full rounded-lg bg-neutral-800 px-3 py-2 outline-none border border-neutral-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              className="w-full rounded-lg bg-neutral-800 px-3 py-2 outline-none border border-neutral-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          {error && (
            <div className="text-sm text-yellow-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-yellow-400 text-black font-semibold py-2 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
