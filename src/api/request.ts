import Request from "luch-request";
import { getApiBaseUrl } from "@/config/env";
import { authStorage } from "@/utils/auth";
import { useAuthStore } from "@/stores/auth";
import { unauthorized } from "@/router/guard";

export const request = new Request({ timeout: 15000 });

request.setConfig((config) => {
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
  (error) => {
    if (error?.statusCode === 401) {
      useAuthStore().clear();
      unauthorized();
    }
    return Promise.reject(error);
  },
);
