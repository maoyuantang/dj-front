<template>
  <view class="shop-surface address-card">
    <text class="address-pin">
      ●
    </text>
    <view class="shop-grow">
      <b>林晓禾　138****8260</b><text>上海市徐汇区漕河泾街道 宜山路 888 号</text>
    </view>
    <text>›</text>
  </view>
</template>

<style lang="scss">
.address-card {
  display: flex;
  gap: 20rpx;
  align-items: flex-start;
}

.address-card .shop-grow {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  line-height: 1.55;
}

.address-pin {
  color: #d94f2b;
}
</style>
