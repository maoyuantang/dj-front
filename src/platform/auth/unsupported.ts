import { PlatformCapabilityError, type PlatformKind } from "@/platform/core";
import type {
  AuthPlatformAdapter,
  WechatLoginCredential,
  WechatPhoneCredential,
  WechatPhoneEventDetail,
} from "./types";

export class UnsupportedAuthAdapter implements AuthPlatformAdapter {
  constructor(readonly platform: PlatformKind) {}

  loginWithWechat(): Promise<WechatLoginCredential> {
    return Promise.reject(new PlatformCapabilityError("wechat-login", this.platform));
  }

  getWechatPhoneCredential(_detail: WechatPhoneEventDetail): WechatPhoneCredential {
    void _detail;
    throw new PlatformCapabilityError("wechat-phone-number", this.platform);
  }
}
