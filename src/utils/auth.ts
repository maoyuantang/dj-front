const TOKEN_KEY = "dj_access_token";

export const authStorage = {
  getToken: () => uni.getStorageSync(TOKEN_KEY) || "",
  setToken: (token: string) => uni.setStorageSync(TOKEN_KEY, token),
  clearToken: () => uni.removeStorageSync(TOKEN_KEY),
};

export { TOKEN_KEY };
