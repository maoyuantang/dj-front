import { getPlatformKind, PlatformCapabilityError, type PlatformKind } from "@/platform/core";

export type ShareContent = { title: string; path: string; imageUrl?: string };

interface SharePlatformAdapter {
  readonly platform: PlatformKind;
  prepare(content: ShareContent): Promise<ShareContent>;
}

class WechatMiniProgramShareAdapter implements SharePlatformAdapter {
  readonly platform = "mp-weixin" as const;

  async prepare(content: ShareContent): Promise<ShareContent> {
    await new Promise<void>((resolve, reject) => {
      uni.showShareMenu({ menus: ["shareAppMessage", "shareTimeline"], success: () => resolve(), fail: reject });
    });
    return content;
  }
}

class UnsupportedShareAdapter implements SharePlatformAdapter {
  constructor(readonly platform: PlatformKind) {}
  prepare(_content: ShareContent): Promise<ShareContent> {
    void _content;
    return Promise.reject(new PlatformCapabilityError("share", this.platform));
  }
}

const platform = getPlatformKind();
export const sharePlatform: SharePlatformAdapter =
  platform === "mp-weixin" ? new WechatMiniProgramShareAdapter() : new UnsupportedShareAdapter(platform);
