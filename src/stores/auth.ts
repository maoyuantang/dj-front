import { defineStore } from "pinia";
import { authStorage } from "@/utils/auth";
import type { AuthSession, AuthUser } from "@/api/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: authStorage.getToken() as string,
    refreshToken: authStorage.getRefreshToken() as string,
    user: null as AuthUser | null,
  }),
  getters: { isAuthenticated: (state) => Boolean(state.token) },
  actions: {
    setToken(token: string) {
      this.token = token;
      authStorage.setToken(token);
    },
    setSession(session: AuthSession) {
      this.token = session.accessToken;
      this.refreshToken = session.refreshToken;
      this.user = session.user;
      authStorage.setToken(session.accessToken);
      authStorage.setRefreshToken(session.refreshToken);
    },
    clear() {
      this.token = "";
      this.refreshToken = "";
      this.user = null;
      authStorage.clear();
    },
  },
});
