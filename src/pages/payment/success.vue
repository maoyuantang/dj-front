<template>
  <view class="shop-page success-page">
    <view class="success-mark">
      ✓
    </view><text class="success-title">
      支付成功
    </text><view class="shop-price success-price">
      <text>¥</text><text class="value">
        54.90
      </text>
    </view><view class="delivery-card">
      <text class="truck">
        ▱
      </text><view>
        <b>预计明日 18:00 前送达</b><text class="shop-muted">
          商家正在加急为你备货
        </text>
      </view>
    </view><view class="success-actions">
      <button @click="uni.reLaunch({ url: '/pages/index/index' })">
        继续逛逛
      </button><button
        class="primary-outline"
        @click="uni.redirectTo({ url: '/pages/orders/index' })"
      >
        查看订单
      </button>
    </view><view class="earned">
      <text>本单获得</text><b class="earned-value">+54 积分</b><text class="shop-muted">
        积分可在下次购物时抵扣现金
      </text>
    </view>
  </view>
</template>
<style lang="scss">
.success-page {
  display: flex;
  padding: calc(140rpx + env(safe-area-inset-top)) 40rpx 40rpx;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.success-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130rpx;
  height: 130rpx;
  color: #fff;
  font-size: 68rpx;
  background: #d94f2b;
  border-radius: 50%;
}

.success-title {
  margin: 30rpx 0 16rpx;
  font-size: 40rpx;
  font-weight: 700;
}

.success-price .value {
  font-size: 56rpx;
}

.delivery-card {
  display: flex;
  width: 100%;
  gap: 24rpx;
  align-items: center;
  padding: 32rpx;
  margin: 72rpx 0 40rpx;
  box-sizing: border-box;
  background: #fff;
  border-radius: 16rpx;
  text-align: left;
}

.delivery-card > view {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.truck {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84rpx;
  height: 84rpx;
  color: #d94f2b;
  font-size: 38rpx;
  background: #f8e8df;
  border-radius: 16rpx;
}

.success-actions {
  display: flex;
  width: 100%;
  gap: 20rpx;
}

.success-actions button {
  flex: 1;
  height: 80rpx;
  padding: 0;
  margin: 0;
  line-height: 80rpx;
  background: #fff;
  border: 1rpx solid #ddd;
  border-radius: 16rpx;
}

.success-actions button::after {
  border: 0;
}

.success-actions .primary-outline {
  color: #d94f2b;
  border-color: #d94f2b;
}

.earned {
  display: flex;
  width: 100%;
  padding-top: 40rpx;
  margin-top: 60rpx;
  flex-direction: column;
  gap: 12rpx;
  border-top: 1rpx dashed #ddd;
}

.earned-value {
  color: #9b7448;
  font-size: 40rpx;
}
</style>
