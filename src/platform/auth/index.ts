import { getPlatformKind } from "@/platform/core";
import { UnsupportedAuthAdapter } from "./unsupported";
import { WechatMiniProgramAuthAdapter } from "./wechat-mini-program";
import type { AuthPlatformAdapter } from "./types";

const createAuthPlatformAdapter = (): AuthPlatformAdapter => {
  const platform = getPlatformKind();
  if (platform === "mp-weixin") return new WechatMiniProgramAuthAdapter();
  return new UnsupportedAuthAdapter(platform);
};

export const authPlatform = createAuthPlatformAdapter();
export type { WechatPhoneEventDetail } from "./types";

