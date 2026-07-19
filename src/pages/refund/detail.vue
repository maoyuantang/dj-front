<script setup lang="ts">
import ShopHeader from "@/components/shop/ShopHeader.vue";
const steps = ["提交申请", "商家审核", "平台处理", "退款到账"];
</script>
<template>
  <view class="shop-page with-fixed">
    <ShopHeader title="售后详情" /><view class="refund-status">
      <text>◷</text><view>
        <text class="status-title">
          平台处理中
        </text><text>预计 24 小时内完成审核</text>
      </view>
    </view><view class="progress">
      <view
        v-for="(step, index) in steps"
        :key="step"
        :class="{ done: index < 2 }"
      >
        <text>{{ index < 2 ? "✓" : index + 1 }}</text><b>{{ step }}</b>
      </view>
    </view><view class="shop-surface refund-notice">
      <b>退款金额 ¥54.90</b><text class="shop-muted">
        审核通过后，将原路退回微信支付账户
      </text>
    </view><view class="shop-surface negotiate">
      <view class="shop-row">
        <b>协商记录</b><text class="shop-muted">
          共 2 条
        </text>
      </view><view>
        <b>日和集客服</b><text>您好，我们已收到您的申请，正在核实商品及物流情况。</text><small class="negotiate-time">今天 10:16</small>
      </view><view>
        <b>我的留言</b><text>外包装破损，已上传照片，请查看。</text><small class="negotiate-time">今天 09:58</small>
      </view>
    </view><view class="platform-tip">
      <text class="platform-icon">
        ✓
      </text><view class="platform-copy">
        <b>日和集售后保障</b><text>平台全程监督，保障退款安全到账</text>
      </view>
    </view><view class="fixed-actions">
      <button>撤销申请</button><button class="primary-outline">
        联系平台
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.refund-status {
  display: flex;
  gap: 28rpx;
  align-items: center;
  padding: 48rpx;
  color: #fff;
  background: #31342e;
}

.refund-status > text {
  color: #e7c98e;
  font-size: 64rpx;
}

.refund-status > view {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.status-title {
  font-size: 36rpx;
  font-weight: 700;
}

.progress {
  display: flex;
  padding: 40rpx 24rpx;
  background: #fff;
}

.progress > view {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12rpx;
  align-items: center;
  color: #999;
  font-size: 18rpx;
}

.progress > view:not(:last-child)::after {
  position: absolute;
  top: 22rpx;
  right: -38%;
  left: 62%;
  height: 2rpx;
  background: #ddd;
  content: "";
}

.progress view > text {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44rpx;
  height: 44rpx;
  background: #eee;
  border-radius: 50%;
}

.progress .done {
  color: #d94f2b;
}

.progress .done > text {
  color: #fff;
  background: #d94f2b;
}

.refund-notice,
.negotiate {
  margin: 18rpx;
}

.refund-notice {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
}

.negotiate > view:not(.shop-row) {
  display: flex;
  padding: 24rpx 0;
  flex-direction: column;
  gap: 12rpx;
  line-height: 1.6;
  border-top: 1rpx solid #eee;
}

.negotiate-time {
  color: #999;
}

.platform-tip {
  display: flex;
  gap: 20rpx;
  align-items: center;
  margin: 32rpx;
  color: #777;
}

.platform-icon {
  color: #d94f2b;
  font-size: 42rpx;
}

.platform-copy {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.fixed-actions {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 16rpx;
  padding: 18rpx 28rpx calc(20rpx + env(safe-area-inset-bottom));
  background: #fff;
}

.fixed-actions button {
  flex: 1;
  height: 76rpx;
  padding: 0;
  margin: 0;
  line-height: 76rpx;
  background: #fff;
  border: 1rpx solid #ddd;
  border-radius: 16rpx;
}

.fixed-actions button::after {
  border: 0;
}

.fixed-actions .primary-outline {
  color: #d94f2b;
  border-color: #d94f2b;
}
</style>
