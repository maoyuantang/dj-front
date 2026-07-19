<script setup lang="ts">
const go = (url: string) => uni.navigateTo({ url });
const toast = (title: string) => uni.showToast({ title, icon: "none" });
</script>

<template>
  <view class="shop-page with-fixed detail-page">
    <view class="detail-hero">
      <image
        src="/static/home/product-rice.png"
        mode="aspectFill"
      /><view class="detail-nav">
        <button @click="uni.navigateBack()">
          ‹
        </button><view>
          <button @click="toast('已收藏')">
            ♡
          </button><button>•••</button>
        </view>
      </view><text class="pager">
        1 / 5
      </text>
    </view>
    <view class="detail-body">
      <view class="shop-surface">
        <view class="shop-row">
          <view class="shop-price">
            <text>¥</text><text class="value">
              59.90
            </text><text class="old">
              ¥79.00
            </text>
          </view><text class="sale">
            已售 2.6万+
          </text>
        </view><text class="detail-title">
          五常稻花香大米 2025 新米
        </text><text class="shop-muted">
          核心产区 · 真空锁鲜 · 当季现磨
        </text><view class="benefits">
          <text>自营正品</text><text>坏单包赔</text><text>48小时发货</text>
        </view>
      </view>
      <view class="shop-surface options">
        <view><b>优惠</b><text>满99减20 · 可领5元券</text><text>›</text></view><view @click="go('/pages/product/spec/index')">
          <b>已选</b><text>5kg 真空锁鲜装，1件</text><text>›</text>
        </view><view><b>配送</b><text>上海市徐汇区 · 明日达</text><text>›</text></view>
      </view>
      <view class="shop-surface">
        <view class="shop-row">
          <b>商品评价 12,682</b><text
            class="shop-brand"
            @click="go('/pages/product/reviews/index')"
          >
            好评 98% ›
          </text>
        </view><view class="review-quote">
          “米粒饱满，煮饭很香，包装也很干净。”
        </view>
      </view>
      <view class="shop-surface story">
        <text class="story-title">
          认真挑一袋好米
        </text><text class="shop-muted">
          来自北纬 45° 黄金水稻带，阳光充足，灌溉水源清澈。
        </text><image
          src="/static/home/rihe-hero.png"
          mode="aspectFill"
        />
      </view>
    </view>
    <view class="buy-bar">
      <view
        class="mini-action"
        @click="toast('店铺页面待接入')"
      >
        <text>▣</text><small>店铺</small>
      </view><view
        class="mini-action"
        @click="toast('客服功能待接入')"
      >
        <text>◇</text><small>客服</small>
      </view><button
        class="cart-button"
        @click="go('/pages/product/spec/index')"
      >
        加入购物车
      </button><button
        class="buy-button"
        @click="go('/pages/checkout/index')"
      >
        立即购买
      </button>
    </view>
  </view>
</template>

<style lang="scss">
.detail-hero {
  position: relative;
  height: 700rpx;
  background: #f1eee7;
}

.detail-hero > image {
  width: 100%;
  height: 100%;
}

.detail-nav {
  position: absolute;
  top: calc(20rpx + env(safe-area-inset-top));
  right: 24rpx;
  left: 24rpx;
  display: flex;
  justify-content: space-between;
}

.detail-nav view {
  display: flex;
  gap: 12rpx;
}

.detail-nav button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64rpx;
  height: 64rpx;
  padding: 0;
  margin: 0;
  font-size: 36rpx;
  line-height: 64rpx;
  background: rgb(255 255 255 / 86%);
  border: 0;
  border-radius: 50%;
}

.detail-nav button::after {
  border: 0;
}

.pager {
  position: absolute;
  right: 24rpx;
  bottom: 24rpx;
  padding: 10rpx 18rpx;
  color: #fff;
  background: rgb(34 34 34 / 60%);
  border-radius: 999rpx;
}

.detail-body {
  display: flex;
  padding: 16rpx;
  flex-direction: column;
  gap: 16rpx;
}

.old {
  margin-left: 10rpx;
  color: #aaa;
  font-size: 20rpx;
  text-decoration: line-through;
}

.sale {
  padding: 6rpx 12rpx;
  color: #d94f2b;
  font-size: 18rpx;
  background: #fbe9e3;
  border-radius: 8rpx;
}

.detail-title {
  display: block;
  margin: 16rpx 0 8rpx;
  font-size: 34rpx;
  font-weight: 700;
}

.benefits {
  display: flex;
  gap: 28rpx;
  margin-top: 24rpx;
  color: #946c46;
  font-size: 20rpx;
}

.options view {
  display: grid;
  grid-template-columns: 84rpx 1fr 28rpx;
  padding: 22rpx 0;
  border-bottom: 1rpx solid #eee;
}

.options view:last-child {
  border: 0;
}

.review-quote {
  padding: 20rpx;
  margin-top: 24rpx;
  background: #f7f5f0;
  border-radius: 14rpx;
}

.story {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.story-title {
  font-size: 36rpx;
  font-weight: 700;
}

.story image {
  width: 100%;
  height: 300rpx;
  border-radius: 14rpx;
}

.buy-bar {
  position: fixed;
  z-index: 20;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 14rpx;
  align-items: center;
  padding: 14rpx 20rpx calc(14rpx + env(safe-area-inset-bottom));
  background: #fff;
}

.mini-action {
  display: flex;
  width: 72rpx;
  flex-direction: column;
  align-items: center;
}

.mini-action > text {
  font-size: 34rpx;
}

.buy-bar button {
  flex: 1;
  height: 84rpx;
  padding: 0;
  margin: 0;
  font-size: 22rpx;
  line-height: 84rpx;
  border: 0;
  border-radius: 16rpx;
}

.buy-bar button::after {
  border: 0;
}

.cart-button {
  color: #563a13;
  background: #efc27b;
}

.buy-button {
  color: #fff;
  background: #d94f2b;
}
</style>
