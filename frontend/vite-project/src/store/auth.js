// store/auth.js
import { create } from "zustand";

const saved = (() => {
  try {
    const raw = localStorage.getItem("inh_auth");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
})();

export const useAuthStore = create((set, get) => ({
  user: saved?.user || null,
  token: saved?.token || null,
  loading: false,
  error: null,

  login: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      // Simulación de login. Cambia por tu API cuando esté lista.
      await new Promise((r) => setTimeout(r, 500));
      const fakeUser = { id: 1, name: "Sundin", email };
      const fakeToken = "demo-token-123";

      const payload = { user: fakeUser, token: fakeToken };
      localStorage.setItem("inh_auth", JSON.stringify(payload));
      set({ ...payload, loading: false });
      return true;
    } catch (e) {
      set({ error: "No se pudo iniciar sesión", loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("inh_auth");
    set({ user: null, token: null });
  },
}));
