<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
const method = ref(0);
const methods = [
  { icon: "微", name: "微信支付", desc: "亿万用户的选择" },
  { icon: "卡", name: "银行卡支付", desc: "支持主流储蓄卡与信用卡" },
  { icon: "余", name: "账户余额", desc: "可用余额 ¥16.20" },
];
</script>
<template>
  <view class="shop-page with-fixed">
    <ShopHeader title="收银台" /><view class="payment-amount">
      <text class="shop-muted">
        支付剩余时间 14:59
      </text><view><text>¥</text><b class="amount-value">54.90</b></view><text class="shop-muted">
        日和集订单 202607190826
      </text>
    </view><view class="shop-surface payment-list">
      <text class="payment-title">
        选择支付方式
      </text><view
        v-for="(item, index) in methods"
        :key="item.name"
        class="payment-item"
        @click="method = index"
      >
        <text
          class="pay-icon"
          :class="{ wechat: index === 0 }"
        >
          {{ item.icon }}
        </text><view class="shop-grow">
          <b>{{ item.name }}</b><text class="shop-muted">
            {{ item.desc }}
          </text>
        </view><view
          class="radio"
          :class="{ active: method === index }"
        />
      </view>
    </view><view class="safe-note">
      平台安全保障 · 支付信息全程加密
    </view><view class="shop-fixed-button">
      <button
        class="shop-primary"
        @click="uni.redirectTo({ url: '/pages/payment/success' })"
      >
        确认支付 ¥54.90
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.payment-amount {
  display: flex;
  padding: 84rpx 40rpx;
  flex-direction: column;
  gap: 18rpx;
  align-items: center;
}

.payment-amount > view {
  display: flex;
  align-items: baseline;
}

.amount-value {
  font-size: 80rpx;
}

.payment-list {
  margin: 0 20rpx;
}

.payment-title {
  display: block;
  margin-bottom: 16rpx;
  font-size: 28rpx;
  font-weight: 700;
}

.payment-item {
  display: flex;
  gap: 20rpx;
  align-items: center;
  padding: 26rpx 0;
  border-top: 1rpx solid #eee;
}

.payment-item .shop-grow {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.pay-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72rpx;
  height: 72rpx;
  background: #eee;
  border-radius: 16rpx;
}

.pay-icon.wechat {
  color: #2c9d4c;
  background: #dfefe3;
}

.radio {
  width: 34rpx;
  height: 34rpx;
  border: 1rpx solid #ccc;
  border-radius: 50%;
}

.radio.active {
  box-sizing: border-box;
  background: #d94f2b;
  border: 9rpx solid #f8e4de;
}

.safe-note {
  margin: 36rpx;
  color: #999;
  text-align: center;
}
</style>
