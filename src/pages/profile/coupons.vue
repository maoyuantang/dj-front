<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
const active = ref(0);
const tabs = ["可使用 6", "已使用 3", "已过期 2"];
const coupons = [
  { value: "20", threshold: "满99可用", name: "全场通用券", date: "25" },
  { value: "10", threshold: "满59可用", name: "粮油调味专享", date: "26" },
  { value: "5", threshold: "无门槛", name: "新会员见面礼", date: "27" },
];
</script>
<template>
  <view class="shop-page">
    <ShopHeader title="优惠券中心" /><view class="coupon-hero">
      <text>今日好券</text><small>领券购物，下单更划算</small>
    </view><view class="coupon-tabs">
      <view
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="{ active: active === index }"
        @click="active = index"
      >
        {{ tab }}
      </view>
    </view><view class="coupon-list">
      <view
        v-for="item in coupons"
        :key="item.value"
        class="coupon"
      >
        <view class="coupon-value">
          <view>
            <text>¥</text><b class="coupon-number">{{ item.value }}</b>
          </view><small>{{ item.threshold }}</small>
        </view><view class="shop-grow">
          <b>{{ item.name }}</b><text class="shop-muted">
            有效期至 2026.07.{{ item.date }}
          </text><small>使用规则</small>
        </view><button @click="uni.reLaunch({ url: '/pages/index/index' })">
          去使用
        </button>
      </view>
    </view><view class="claim">
      <view class="shop-row">
        <b>更多好券</b><text class="shop-muted">
          每日更新
        </text>
      </view><view class="claim-card">
        <view><b>¥15</b><small>满129可用</small></view><text class="shop-grow">
          家居清洁专享券
        </text><button @click="uni.showToast({ title: '领取成功', icon: 'success' })">
          立即领取
        </button>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
.coupon-hero {
  display: flex;
  padding: 48rpx;
  flex-direction: column;
  gap: 10rpx;
  color: #fff;
  background: #31342e;
}

.coupon-hero > text {
  font-size: 36rpx;
  font-weight: 700;
}

.coupon-tabs {
  display: flex;
  background: #fff;
}

.coupon-tabs > view {
  flex: 1;
  height: 84rpx;
  color: #777;
  line-height: 84rpx;
  text-align: center;
}

.coupon-tabs .active {
  color: #d94f2b;
  font-weight: 700;
  border-bottom: 4rpx solid #d94f2b;
}

.coupon-list {
  display: flex;
  padding: 20rpx 16rpx;
  flex-direction: column;
  gap: 18rpx;
}

.coupon {
  display: grid;
  min-height: 188rpx;
  grid-template-columns: 190rpx 1fr 116rpx;
  align-items: center;
  overflow: hidden;
  background: #fff;
  border-radius: 16rpx;
}

.coupon-value {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d94f2b;
  background: #fff1eb;
}

.coupon-number {
  font-size: 64rpx;
}

.coupon .shop-grow {
  display: flex;
  padding: 16rpx;
  flex-direction: column;
  gap: 12rpx;
}

.coupon > button {
  height: 60rpx;
  padding: 0 14rpx;
  margin: 0 18rpx 0 0;
  color: #d94f2b;
  font-size: 20rpx;
  line-height: 58rpx;
  background: #fff;
  border: 1rpx solid #d94f2b;
  border-radius: 999rpx;
}

.coupon > button::after {
  border: 0;
}

.claim {
  padding: 28rpx;
}

.claim-card {
  display: flex;
  gap: 20rpx;
  align-items: center;
  padding: 28rpx;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 16rpx;
}

.claim-card > view {
  display: flex;
  flex-direction: column;
  color: #d94f2b;
}

.claim-card button {
  padding: 12rpx 18rpx;
  margin: 0;
  color: #fff;
  font-size: 20rpx;
  line-height: 1.4;
  background: #d94f2b;
  border: 0;
  border-radius: 999rpx;
}

.claim-card button::after {
  border: 0;
}
</style>
