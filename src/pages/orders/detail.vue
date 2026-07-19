<script setup lang="ts">
import ShopHeader from "@/components/shop/ShopHeader.vue";
import AddressCard from "@/components/shop/AddressCard.vue";
import OrderProduct from "@/components/shop/OrderProduct.vue";
</script>
<template>
  <view class="shop-page with-fixed">
    <view class="status-head">
      <ShopHeader title="订单详情" /><view class="status-copy">
        <text class="package">
          □
        </text><view>
          <text class="status-title">
            卖家已发货
          </text><text>预计明日 18:00 前送达</text>
        </view>
      </view>
    </view><view class="order-detail-body">
      <view
        class="shop-surface logistics"
        @click="uni.navigateTo({ url: '/pages/logistics/index' })"
      >
        <text class="shop-brand">
          ▱
        </text><view class="shop-grow">
          <b>运输中 · 快件已到达上海转运中心</b><text class="shop-muted">
            今天 14:32
          </text>
        </view><text>›</text>
      </view><AddressCard /><view class="shop-surface">
        <b>日和集自营</b><OrderProduct /><view class="full-actions">
          <button @click="uni.navigateTo({ url: '/pages/refund/apply' })">
            申请售后
          </button><button>联系商家</button>
        </view>
      </view><view class="shop-surface info-list">
        <view><text>订单编号</text><b class="info-value">RHJ202607190826</b></view><view><text>下单时间</text><b class="info-value">2026-07-19 09:26</b></view><view><text>支付方式</text><b class="info-value">微信支付</b></view>
      </view><view class="shop-surface info-list">
        <view><text>商品总额</text><b class="info-value">¥79.90</b></view><view><text>优惠</text><b class="info-value">-¥25.00</b></view><view><text>实付款</text><b class="info-value shop-brand total-price">¥54.90</b></view>
      </view>
    </view><view class="fixed-actions">
      <button @click="uni.navigateTo({ url: '/pages/refund/apply' })">
        申请售后
      </button><button
        class="primary-outline"
        @click="uni.navigateTo({ url: '/pages/review/create' })"
      >
        确认收货
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.status-head {
  color: #fff;
  background: #31342e;
}

.status-head :deep(.shop-header) {
  color: #fff;
  background: transparent;
}

.status-copy {
  display: flex;
  gap: 36rpx;
  align-items: center;
  padding: 38rpx 50rpx 56rpx;
}

.status-copy > view {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.package {
  color: #e7c98e;
  font-size: 68rpx;
}

.status-title {
  font-size: 36rpx;
  font-weight: 700;
}

.order-detail-body {
  display: flex;
  padding: 18rpx 16rpx 130rpx;
  flex-direction: column;
  gap: 16rpx;
}

.logistics {
  display: flex;
  gap: 20rpx;
  align-items: center;
}

.logistics .shop-grow {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.full-actions {
  display: flex;
  gap: 16rpx;
}

.full-actions button {
  flex: 1;
  height: 60rpx;
  padding: 0;
  margin: 0;
  line-height: 60rpx;
  background: #fff;
  border: 1rpx solid #ddd;
  border-radius: 999rpx;
}

.full-actions button::after {
  border: 0;
}

.info-list > view {
  display: flex;
  justify-content: space-between;
  margin: 20rpx 0;
  color: #888;
}

.info-value {
  color: #333;
}

.total-price {
  font-size: 32rpx;
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
