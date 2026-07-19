<script setup lang="ts">
import ShopHeader from "@/components/shop/ShopHeader.vue";
import AddressCard from "@/components/shop/AddressCard.vue";
import OrderProduct from "@/components/shop/OrderProduct.vue";
</script>
<template>
  <view class="shop-page with-fixed">
    <ShopHeader title="确认订单" /><view class="checkout-body">
      <AddressCard /><view class="shop-surface">
        <view class="shop-row">
          <b>日和集自营</b><text class="delivery">
            预计明日送达
          </text>
        </view><OrderProduct /><view class="line-row">
          <text>配送方式</text><b>普通快递 · 免运费</b>
        </view><view class="line-row">
          <text>订单备注</text><text class="shop-muted">
            选填，请与商家协商一致
          </text>
        </view>
      </view><view class="shop-surface price-list">
        <view><text>商品金额</text><b>¥79.90</b></view><view><text>店铺优惠</text><b class="shop-brand">-¥20.00</b></view><view><text>运费</text><b>¥0.00</b></view><view><text>优惠券</text><b class="shop-brand">暂无可用</b></view>
      </view><view class="points">
        <view class="check">
          ✓
        </view><view class="points-copy">
          <b>使用 500 积分抵扣 ¥5</b><text class="shop-muted">
            当前积分 1,280
          </text>
        </view>
      </view>
    </view><view class="pay-bottom">
      <view class="pay-summary">
        <small>共1件，合计</small><view class="shop-price">
          <text>¥</text><text class="value">
            54.90
          </text>
        </view>
      </view><button @click="uni.navigateTo({ url: '/pages/payment/index' })">
        提交订单
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.checkout-body {
  display: flex;
  padding: 18rpx 16rpx 130rpx;
  flex-direction: column;
  gap: 16rpx;
}

.delivery {
  color: #9c7143;
}

.line-row {
  display: flex;
  justify-content: space-between;
  padding: 24rpx 0;
  border-top: 1rpx solid #eee;
}

.price-list > view {
  display: flex;
  justify-content: space-between;
  margin: 20rpx 0;
}

.points {
  display: flex;
  gap: 20rpx;
  align-items: center;
  padding: 28rpx;
  background: #fff;
  border-radius: 16rpx;
}

.points .check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36rpx;
  height: 36rpx;
  color: #fff;
  background: #d94f2b;
  border-radius: 50%;
}

.points-copy {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.pay-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 28rpx;
  align-items: center;
  justify-content: flex-end;
  padding: 16rpx 24rpx calc(16rpx + env(safe-area-inset-bottom));
  background: #fff;
}

.pay-summary {
  text-align: right;
}

.pay-bottom button {
  height: 80rpx;
  padding: 0 36rpx;
  margin: 0;
  color: #fff;
  line-height: 80rpx;
  background: #d94f2b;
  border: 0;
  border-radius: 16rpx;
}

.pay-bottom button::after {
  border: 0;
}
</style>
