import Request from "luch-request";
import { getApiBaseUrl } from "@/config/env";
import { authStorage } from "@/utils/auth";
import { unauthorized } from "@/router/guard";

export const request = new Request({ timeout: 15000 });
const refreshRequest = new Request({ timeout: 15000 });
let refreshPromise: Promise<string> | null = null;

request.setConfig((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

refreshRequest.setConfig((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

request.interceptors.request.use((config) => {
  const token = authStorage.getToken();
  if (token) config.header = { ...config.header, Authorization: `Bearer ${token}` };
  return config;
});

request.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const config = error?.config;
    const isRefreshRequest = String(config?.url || "").includes("/auth/refresh");
    const alreadyRetried = Boolean(config?.custom?.authRetried);
    const refreshToken = authStorage.getRefreshToken();
    if (error?.statusCode === 401 && refreshToken && config && !isRefreshRequest && !alreadyRetried) {
      try {
        refreshPromise ??= refreshAccessToken(refreshToken);
        const accessToken = await refreshPromise;
        config.custom = { ...config.custom, authRetried: true };
        config.header = { ...config.header, Authorization: `Bearer ${accessToken}` };
        return request.request(config);
      } catch {
        authStorage.clear();
        unauthorized();
      } finally {
        refreshPromise = null;
      }
    } else if (error?.statusCode === 401) {
      authStorage.clear();
      unauthorized();
    }
    return Promise.reject(error);
  },
);

const refreshAccessToken = async (refreshToken: string) => {
  const response = (await refreshRequest.post("/auth/refresh", { refreshToken })) as unknown as {
    code: number;
    message: string;
    data: { accessToken: string; refreshToken: string };
  };
  if (response.code !== 200 || !response.data?.accessToken) throw new Error("登录状态已失效");
  authStorage.setToken(response.data.accessToken);
  authStorage.setRefreshToken(response.data.refreshToken);
  return response.data.accessToken;
};
