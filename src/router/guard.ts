import { authStorage } from "@/utils/auth";

export const LOGIN_PATH = "/pages/auth/login/index";
const PUBLIC_PATHS = new Set([LOGIN_PATH, "/pages/auth/phone-login/index", "/pages/index/index"]);

export const unauthorized = (redirect = "") => {
  const query = redirect ? `?redirect=${encodeURIComponent(redirect)}` : "";
  uni.reLaunch({ url: `${LOGIN_PATH}${query}` });
};

export const installRouteGuard = () => {
  uni.addInterceptor("navigateTo", {
    invoke: (args) => {
      if (PUBLIC_PATHS.has(args.url) || authStorage.getToken()) return args;
      unauthorized(args.url);
      return false;
    },
  });
};
