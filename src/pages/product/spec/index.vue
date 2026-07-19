<script setup lang="ts">
import { ref } from "vue";
const weight = ref("5kg");
const pack = ref("真空锁鲜装");
const count = ref(1);
const confirm = () => {
  uni.showToast({ title: "已加入购物车", icon: "success" });
  setTimeout(() => uni.navigateBack(), 500);
};
</script>

<template>
  <view class="shop-page spec-page">
    <image
      class="spec-background"
      src="/static/home/product-rice.png"
      mode="aspectFill"
    />
    <view
      class="spec-shade"
      @click="uni.navigateBack()"
    /><view class="spec-sheet">
      <text
        class="close"
        @click="uni.navigateBack()"
      >
        ×
      </text><view class="spec-product">
        <image
          src="/static/home/product-rice.png"
          mode="aspectFill"
        /><view>
          <view class="shop-price">
            <text>¥</text><text class="value">
              59.90
            </text>
          </view><text class="shop-muted">
            库存 1268 件
          </text><text>已选：{{ weight }} {{ pack }}</text>
        </view>
      </view><view>
        <text class="spec-title">
          净含量
        </text><view class="shop-tags">
          <view
            v-for="item in ['2.5kg', '5kg', '10kg']"
            :key="item"
            class="shop-tag"
            :class="{ active: weight === item }"
            @click="weight = item"
          >
            {{ item }}
          </view>
        </view>
      </view><view>
        <text class="spec-title">
          包装
        </text><view class="shop-tags">
          <view
            v-for="item in ['真空锁鲜装', '礼盒装']"
            :key="item"
            class="shop-tag"
            :class="{ active: pack === item }"
            @click="pack = item"
          >
            {{ item }}
          </view>
        </view>
      </view><view class="shop-row">
        <text class="spec-title">
          购买数量
        </text><view class="stepper">
          <button @click="count = Math.max(1, count - 1)">
            −
          </button><text>{{ count }}</text><button @click="count++">
            +
          </button>
        </view>
      </view><button
        class="shop-primary"
        @click="confirm"
      >
        确认加入购物车
      </button>
    </view>
  </view>
</template>

<style lang="scss">
.spec-page {
  position: relative;
  min-height: 100vh;
}

.spec-background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.spec-shade {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 58%);
}

.spec-sheet {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 36rpx 32rpx calc(32rpx + env(safe-area-inset-bottom));
  flex-direction: column;
  gap: 40rpx;
  background: #fff;
  border-radius: 32rpx 32rpx 0 0;
}

.close {
  position: absolute;
  top: 20rpx;
  right: 28rpx;
  font-size: 44rpx;
}

.spec-product {
  display: flex;
  gap: 24rpx;
}

.spec-product image {
  width: 192rpx;
  height: 192rpx;
  border-radius: 16rpx;
}

.spec-product > view {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
  justify-content: flex-end;
}

.spec-title {
  display: block;
  margin-bottom: 20rpx;
  font-size: 26rpx;
  font-weight: 700;
}

.stepper {
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #f3f2ee;
  border-radius: 12rpx;
}

.stepper button {
  width: 52rpx;
  height: 52rpx;
  padding: 0;
  margin: 0;
  line-height: 52rpx;
  background: transparent;
  border: 0;
}

.stepper button::after {
  border: 0;
}

.stepper text {
  min-width: 44rpx;
  text-align: center;
}
</style>
