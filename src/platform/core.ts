export type PlatformKind = "mp-weixin" | "h5" | "app" | "unknown";

export class PlatformCapabilityError extends Error {
  constructor(
    public readonly capability: string,
    public readonly platform: PlatformKind,
  ) {
    super(`${capability} is not available on ${platform}`);
    this.name = "PlatformCapabilityError";
  }
}

export const getPlatformKind = (): PlatformKind => {
  const platform = uni.getSystemInfoSync().uniPlatform;
  if (platform === "mp-weixin") return "mp-weixin";
  if (platform === "web") return "h5";
  if (platform === "app") return "app";
  return "unknown";
};

