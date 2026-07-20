import { request } from "@/api/request";
import type { WechatLoginCredential, WechatPhoneCredential } from "@/platform/auth/types";

type ApiEnvelope<T> = { code: number; message: string; data: T };

export type AuthUser = {
  id: number;
  nickname: string;
  avatar: string | null;
  phone: string | null;
};

export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: AuthUser;
};

const unwrap = <T>(response: ApiEnvelope<T>): T => {
  if (response.code !== 200) throw new Error(response.message || "请求失败");
  return response.data;
};

export const authApi = {
  async sendSmsCode(phone: string) {
    const response = (await request.post("/auth/sms/send", {
      phone,
      purpose: "LOGIN",
    })) as unknown as ApiEnvelope<{ expiresIn: number }>;
    return unwrap(response);
  },

  async loginWithSms(phone: string, code: string) {
    const response = (await request.post("/auth/sms/login", {
      phone,
      code,
    })) as unknown as ApiEnvelope<AuthSession>;
    return unwrap(response);
  },

  async loginWithWechat(credential: WechatLoginCredential) {
    const response = (await request.post("/auth/wechat/login", credential)) as unknown as ApiEnvelope<AuthSession>;
    return unwrap(response);
  },

  async loginWithWechatPhone(
    loginCredential: WechatLoginCredential,
    phoneCredential: WechatPhoneCredential,
  ) {
    const response = (await request.post("/auth/wechat/phone-login", {
      loginCode: loginCredential.code,
      phoneCode: phoneCredential.code,
      channel: loginCredential.channel,
    })) as unknown as ApiEnvelope<AuthSession>;
    return unwrap(response);
  },

  async refresh(refreshToken: string) {
    const response = (await request.post("/auth/refresh", { refreshToken })) as unknown as ApiEnvelope<AuthSession>;
    return unwrap(response);
  },

  async logout(refreshToken: string) {
    const response = (await request.post("/auth/logout", { refreshToken })) as unknown as ApiEnvelope<{
      success: boolean;
    }>;
    return unwrap(response);
  },
};
