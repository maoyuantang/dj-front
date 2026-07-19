<script setup lang="ts">
import BottomNav from "@/components/shop/BottomNav.vue";
import ProductCard from "@/components/shop/ProductCard.vue";
import { products } from "@/data/shop";
const orderEntries = [
  { icon: "¥", label: "待付款" },
  { icon: "□", label: "待发货" },
  { icon: "▱", label: "待收货", badge: "1" },
  { icon: "◇", label: "待评价" },
  { icon: "◷", label: "退款/售后" },
];
const services = [
  { icon: "●", label: "地址管理", url: "/pages/profile/addresses" },
  { icon: "券", label: "领券中心", url: "/pages/profile/coupons" },
  { icon: "♡", label: "我的收藏" },
  { icon: "◇", label: "联系客服" },
  { icon: "卡", label: "支付设置" },
  { icon: "□", label: "发票助手" },
];
const goService = (item: { label: string; url?: string }) =>
  item.url
    ? uni.navigateTo({ url: item.url })
    : uni.showToast({ title: `${item.label}待接入`, icon: "none" });
</script>
<template>
  <view class="shop-page with-nav">
    <view class="profile-head">
      <view class="program-pill">
        •••　◉
      </view><view class="profile-user">
        <text class="avatar">
          林
        </text><view class="shop-grow">
          <text class="user-name">
            林晓禾
          </text><text>日和会员 · Lv.3</text>
        </view><text>设置</text>
      </view><view class="member-card">
        <view><small class="member-label">RIHE MEMBER</small><b>日和会员</b><text>本月已为你节省 ¥36.50</text></view><button>查看权益</button>
      </view><view class="profile-stats">
        <view><b class="stat-value">1,280</b><text>积分</text></view><view><b class="stat-value">6</b><text>优惠券</text></view><view><b class="stat-value">2</b><text>收藏</text></view><view><b class="stat-value">8</b><text>足迹</text></view>
      </view>
    </view><view class="profile-body">
      <view class="shop-surface">
        <view class="shop-row">
          <text class="block-title">
            我的订单
          </text><text
            class="shop-muted"
            @click="uni.navigateTo({ url: '/pages/orders/index' })"
          >
            全部订单 ›
          </text>
        </view><view class="order-entries">
          <view
            v-for="item in orderEntries"
            :key="item.label"
            @click="uni.navigateTo({ url: '/pages/orders/index' })"
          >
            <view class="entry-icon">
              <text>{{ item.icon }}</text><text
                v-if="item.badge"
                class="badge"
              >
                {{ item.badge }}
              </text>
            </view><text>{{ item.label }}</text>
          </view>
        </view>
      </view><view class="shop-surface service-card">
        <text class="block-title">
          常用服务
        </text><view class="service-grid">
          <view
            v-for="item in services"
            :key="item.label"
            @click="goService(item)"
          >
            <text class="service-icon">
              {{ item.icon }}
            </text><text>{{ item.label }}</text>
          </view>
        </view>
      </view><text class="recommend-title">
        专属推荐
      </text><view class="shop-product-grid">
        <ProductCard
          v-for="item in products.slice(0, 2)"
          :key="item.name"
          :product="item"
        />
      </view>
    </view><BottomNav active="profile" />
  </view>
</template>
<style lang="scss">
.profile-head {
  position: relative;
  padding: calc(56rpx + env(safe-area-inset-top)) 28rpx 36rpx;
  color: #fff;
  background: #30332e;
}

.program-pill {
  position: absolute;
  top: calc(12rpx + env(safe-area-inset-top));
  right: 28rpx;
  padding: 10rpx 18rpx;
  font-weight: 700;
  border: 1rpx solid #777;
  border-radius: 999rpx;
}

.profile-user {
  display: flex;
  gap: 20rpx;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96rpx;
  height: 96rpx;
  color: #543d27;
  font-size: 40rpx;
  font-weight: 700;
  background: #e6c89a;
  border-radius: 50%;
}

.profile-user .shop-grow {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  color: #c5c7c2;
}

.user-name {
  color: #fff;
  font-size: 36rpx;
  font-weight: 700;
}

.member-card {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30rpx;
  margin-top: 36rpx;
  color: #4a3822;
  background: #e5c894;
  border-radius: 16rpx;
}

.member-card > view {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.member-label {
  letter-spacing: 2rpx;
}

.member-card button {
  height: 56rpx;
  padding: 0 20rpx;
  margin: 0;
  color: #f2dbb0;
  font-size: 18rpx;
  line-height: 56rpx;
  background: #4a3822;
  border: 0;
  border-radius: 999rpx;
}

.member-card button::after {
  border: 0;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 36rpx;
}

.profile-stats > view {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
  align-items: center;
  color: #c5c7c2;
}

.stat-value {
  color: #fff;
  font-size: 32rpx;
}

.profile-body {
  padding: 18rpx 16rpx 40rpx;
}

.block-title {
  font-size: 28rpx;
  font-weight: 700;
}

.order-entries {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.order-entries > view {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  align-items: center;
  font-size: 18rpx;
}

.entry-icon {
  position: relative;
  font-size: 40rpx;
}

.badge {
  position: absolute;
  top: -12rpx;
  right: -16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rpx;
  height: 28rpx;
  color: #fff;
  font-size: 16rpx;
  background: #d94f2b;
  border-radius: 50%;
}

.service-card {
  margin-top: 18rpx;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 34rpx 10rpx;
  margin-top: 30rpx;
}

.service-grid > view {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  align-items: center;
  font-size: 18rpx;
}

.service-icon {
  color: #6b6e66;
  font-size: 40rpx;
}

.recommend-title {
  display: block;
  margin: 38rpx 8rpx 20rpx;
  font-size: 28rpx;
  font-weight: 700;
}
</style>
