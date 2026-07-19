import { getPlatformKind, PlatformCapabilityError, type PlatformKind } from "@/platform/core";

export type PaymentRequest = {
  orderNo: string;
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: "RSA" | "MD5";
  paySign: string;
};

interface PaymentPlatformAdapter {
  readonly platform: PlatformKind;
  pay(request: PaymentRequest): Promise<void>;
}

class WechatMiniProgramPaymentAdapter implements PaymentPlatformAdapter {
  readonly platform = "mp-weixin" as const;

  pay(request: PaymentRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        provider: "wxpay",
        orderInfo: request,
        timeStamp: request.timeStamp,
        nonceStr: request.nonceStr,
        package: request.package,
        signType: request.signType,
        paySign: request.paySign,
        success: () => resolve(),
        fail: reject,
      });
    });
  }
}

class UnsupportedPaymentAdapter implements PaymentPlatformAdapter {
  constructor(readonly platform: PlatformKind) {}

  pay(_request: PaymentRequest): Promise<void> {
    void _request;
    return Promise.reject(new PlatformCapabilityError("payment", this.platform));
  }
}

const platform = getPlatformKind();
export const paymentPlatform: PaymentPlatformAdapter =
  platform === "mp-weixin"
    ? new WechatMiniProgramPaymentAdapter()
    : new UnsupportedPaymentAdapter(platform);
