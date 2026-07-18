import { defineStore } from "pinia";
import { authStorage } from "@/utils/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({ token: authStorage.getToken() as string }),
  getters: { isAuthenticated: (state) => Boolean(state.token) },
  actions: {
    setToken(token: string) {
      this.token = token;
      authStorage.setToken(token);
    },
    clear() {
      this.token = "";
      authStorage.clearToken();
    },
  },
});
