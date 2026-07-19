const TOKEN_KEY = "dj_access_token";
const REFRESH_TOKEN_KEY = "dj_refresh_token";

export const authStorage = {
  getToken: () => uni.getStorageSync(TOKEN_KEY) || "",
  setToken: (token: string) => uni.setStorageSync(TOKEN_KEY, token),
  clearToken: () => uni.removeStorageSync(TOKEN_KEY),
  getRefreshToken: () => uni.getStorageSync(REFRESH_TOKEN_KEY) || "",
  setRefreshToken: (token: string) => uni.setStorageSync(REFRESH_TOKEN_KEY, token),
  clearRefreshToken: () => uni.removeStorageSync(REFRESH_TOKEN_KEY),
  clear: () => {
    uni.removeStorageSync(TOKEN_KEY);
    uni.removeStorageSync(REFRESH_TOKEN_KEY);
  },
};

export { REFRESH_TOKEN_KEY, TOKEN_KEY };
