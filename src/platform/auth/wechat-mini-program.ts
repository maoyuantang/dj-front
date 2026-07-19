import type {
  AuthPlatformAdapter,
  WechatLoginCredential,
  WechatPhoneCredential,
  WechatPhoneEventDetail,
} from "./types";

export class WechatMiniProgramAuthAdapter implements AuthPlatformAdapter {
  readonly platform = "mp-weixin" as const;

  loginWithWechat(): Promise<WechatLoginCredential> {
    return new Promise((resolve, reject) => {
      uni.login({
        provider: "weixin",
        success: ({ code }) => {
          if (!code) {
            reject(new Error("微信未返回登录凭证"));
            return;
          }
          resolve({ channel: "WECHAT_MINI_PROGRAM", code });
        },
        fail: reject,
      });
    });
  }

  getWechatPhoneCredential(detail: WechatPhoneEventDetail): WechatPhoneCredential {
    if (!detail.code) throw new Error(detail.errMsg || "未获得微信手机号授权");
    return { channel: "WECHAT_MINI_PROGRAM", code: detail.code };
  }
}

