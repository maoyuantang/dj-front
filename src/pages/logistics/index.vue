<script setup lang="ts">
import ShopHeader from "@/components/shop/ShopHeader.vue";
const timeline = [
  { status: "运输中", copy: "快件已到达【上海转运中心】", time: "今天 14:32" },
  { status: "运输中", copy: "快件已从【南京中转场】发出", time: "今天 08:16" },
  { status: "已揽收", copy: "顺丰速运已收取快件", time: "昨天 18:45" },
  { status: "已下单", copy: "卖家已发货，等待快递揽收", time: "昨天 16:20" },
];
</script>
<template>
  <view class="shop-page">
    <ShopHeader title="物流详情" /><view class="logistics-hero">
      <view class="route-map">
        <view class="route-line" /><text class="city start">
          ●<small class="city-label">哈尔滨</small>
        </text><text class="truck">
          ▱
        </text><text class="city end">
          ●<small class="city-label">上海</small>
        </text>
      </view><view class="courier">
        <text>顺丰速运 SF148****826</text><text class="shop-brand">
          ◇ 联系快递员
        </text>
      </view>
    </view><view class="package-mini">
      <image
        src="/static/home/product-rice.png"
        mode="aspectFill"
      /><view class="shop-grow">
        <b>包裹 1 / 共 1 件商品</b><text class="shop-muted">
          五常稻花香大米 5kg
        </text>
      </view><text>›</text>
    </view><view class="timeline">
      <text class="timeline-title">
        物流动态
      </text><view
        v-for="(item, index) in timeline"
        :key="item.time"
        class="timeline-item"
        :class="{ active: index === 0 }"
      >
        <view class="dot" /><view>
          <b class="timeline-status">{{ item.status }}</b><text>{{ item.copy }}</text><small class="timeline-time">{{ item.time }}</small>
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
.logistics-hero {
  color: #fff;
  background: #30332e;
}

.route-map {
  position: relative;
  height: 300rpx;
}

.route-line {
  position: absolute;
  top: 150rpx;
  right: 116rpx;
  left: 116rpx;
  height: 4rpx;
  background: #777;
}

.city,
.truck {
  position: absolute;
  top: 130rpx;
  color: #e7c98e;
  font-size: 44rpx;
}

.city {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.city-label {
  margin-top: 16rpx;
  color: #fff;
  font-size: 20rpx;
}

.city.start {
  left: 90rpx;
}

.city.end {
  right: 90rpx;
  color: #d94f2b;
}

.truck {
  top: 116rpx;
  left: calc(50% - 35rpx);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70rpx;
  height: 70rpx;
  color: #d94f2b;
  background: #fff;
  border-radius: 50%;
}

.courier {
  display: flex;
  justify-content: space-between;
  padding: 24rpx;
  color: #333;
  background: #fff;
}

.package-mini {
  display: flex;
  gap: 20rpx;
  align-items: center;
  padding: 24rpx;
  margin: 18rpx;
  background: #fff;
  border-radius: 16rpx;
}

.package-mini image {
  width: 110rpx;
  height: 110rpx;
  border-radius: 14rpx;
}

.package-mini .shop-grow {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.timeline {
  padding: 36rpx;
  background: #fff;
}

.timeline-title {
  display: block;
  margin-bottom: 32rpx;
  font-size: 30rpx;
  font-weight: 700;
}

.timeline-item {
  position: relative;
  display: flex;
  gap: 28rpx;
  padding-bottom: 56rpx;
}

.timeline-item::before {
  position: absolute;
  top: 18rpx;
  bottom: 0;
  left: 8rpx;
  width: 2rpx;
  background: #ddd;
  content: "";
}

.timeline-item:last-child::before {
  display: none;
}

.dot {
  z-index: 1;
  width: 18rpx;
  height: 18rpx;
  margin-top: 8rpx;
  background: #bbb;
  border-radius: 50%;
}

.timeline-item > view:last-child {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.timeline-time {
  color: #999;
}

.timeline-item.active .dot {
  background: #d94f2b;
  box-shadow: 0 0 0 8rpx #f8e4de;
}

.timeline-item.active .timeline-status {
  color: #d94f2b;
}
</style>
