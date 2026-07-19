import type { PlatformKind } from "@/platform/core";

export type WechatLoginCredential = {
  channel: "WECHAT_MINI_PROGRAM" | "WECHAT_H5" | "WECHAT_APP";
  code: string;
};

export type WechatPhoneCredential = {
  channel: "WECHAT_MINI_PROGRAM";
  code: string;
};

export type WechatPhoneEventDetail = {
  code?: string;
  errMsg?: string;
};

export interface AuthPlatformAdapter {
  readonly platform: PlatformKind;
  loginWithWechat(): Promise<WechatLoginCredential>;
  getWechatPhoneCredential(detail: WechatPhoneEventDetail): WechatPhoneCredential;
}

