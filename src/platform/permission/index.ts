import { getPlatformKind, PlatformCapabilityError, type PlatformKind } from "@/platform/core";

export type PermissionScope = "scope.userLocation" | "scope.camera" | "scope.writePhotosAlbum";

interface PermissionPlatformAdapter {
  readonly platform: PlatformKind;
  authorize(scope: PermissionScope): Promise<void>;
}

class WechatMiniProgramPermissionAdapter implements PermissionPlatformAdapter {
  readonly platform = "mp-weixin" as const;
  authorize(scope: PermissionScope): Promise<void> {
    return new Promise((resolve, reject) => uni.authorize({ scope, success: () => resolve(), fail: reject }));
  }
}

class UnsupportedPermissionAdapter implements PermissionPlatformAdapter {
  constructor(readonly platform: PlatformKind) {}
  authorize(_scope: PermissionScope): Promise<void> {
    void _scope;
    return Promise.reject(new PlatformCapabilityError("permission", this.platform));
  }
}

const platform = getPlatformKind();
export const permissionPlatform: PermissionPlatformAdapter =
  platform === "mp-weixin"
    ? new WechatMiniProgramPermissionAdapter()
    : new UnsupportedPermissionAdapter(platform);
