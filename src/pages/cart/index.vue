<script setup lang="ts">
import { computed, ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
import BottomNav from "@/components/shop/BottomNav.vue";
import ProductCard from "@/components/shop/ProductCard.vue";
import { products } from "@/data/shop";
const selected = ref([true, false]);
const counts = ref([1, 1]);
const total = computed(() => (selected.value[0] ? (59.9 * counts.value[0]).toFixed(2) : "0.00"));
const change = (index: number, value: number) => {
  counts.value[index] = Math.max(1, counts.value[index] + value);
};
</script>

<template>
  <view class="shop-page with-nav cart-page">
    <ShopHeader
      title="购物车 (3)"
      :back="false"
      action="管理"
    /><view class="cart-body">
      <view class="delivery-tip">
        <text>▱</text><text class="shop-grow">
          再买 ¥39.10 即享免运费
        </text><text class="shop-brand">
          去凑单
        </text>
      </view><view class="shop-surface cart-shop">
        <view class="check-row">
          <view class="check active">
            ✓
          </view><b>日和集自营</b><text class="brand-tag">
            自营
          </text>
        </view><view
          v-for="(product, index) in products.slice(0, 2)"
          :key="product.name"
          class="cart-item"
        >
          <view
            class="check"
            :class="{ active: selected[index] }"
            @click="selected[index] = !selected[index]"
          >
            {{ selected[index] ? "✓" : "" }}
          </view><image
            :src="product.image"
            mode="aspectFill"
          /><view class="shop-grow cart-info">
            <b>{{ product.name }}</b><text class="spec">
              {{ product.subtitle }} 〉
            </text><view class="shop-row">
              <view class="shop-price">
                <text>¥</text><text class="value">
                  {{ product.price }}
                </text>
              </view><view class="stepper">
                <button @click="change(index, -1)">
                  −
                </button><text>{{ counts[index] }}</text><button @click="change(index, 1)">
                  +
                </button>
              </view>
            </view>
          </view>
        </view>
      </view><text class="recommend-title">
        猜你喜欢
      </text><view class="shop-product-grid">
        <ProductCard
          v-for="item in products.slice(1)"
          :key="item.name"
          :product="item"
        />
      </view>
    </view><view class="settle-bar">
      <view class="check active">
        ✓
      </view><text>全选</text><view class="total">
        <text>
          合计：<b class="total-value">¥{{ total }}</b>
        </text><small>已优惠 ¥20.00</small>
      </view><button @click="uni.navigateTo({ url: '/pages/checkout/index' })">
        去结算 (1)
      </button>
    </view><BottomNav active="cart" />
  </view>
</template>

<style lang="scss">
.cart-page {
  padding-bottom: calc(242rpx + env(safe-area-inset-bottom));
}

.cart-body {
  padding: 20rpx 16rpx 30rpx;
}

.delivery-tip {
  display: flex;
  gap: 16rpx;
  align-items: center;
  height: 76rpx;
  padding: 0 20rpx;
  color: #a5462d;
  background: #fff3ed;
  border-radius: 14rpx;
}

.cart-shop {
  margin-top: 16rpx;
}

.check-row {
  display: flex;
  gap: 16rpx;
  align-items: center;
}

.check {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 36rpx;
  height: 36rpx;
  color: #fff;
  border: 1rpx solid #ccc;
  border-radius: 50%;
}

.check.active {
  background: #d94f2b;
  border-color: #d94f2b;
}

.brand-tag {
  padding: 5rpx 10rpx;
  color: #d94f2b;
  font-size: 18rpx;
  background: #fbe9e3;
  border-radius: 8rpx;
}

.cart-item {
  display: flex;
  gap: 18rpx;
  align-items: center;
  margin-top: 28rpx;
}

.cart-item > image {
  width: 156rpx;
  height: 156rpx;
  border-radius: 16rpx;
}

.cart-info {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.spec {
  align-self: flex-start;
  padding: 8rpx;
  color: #888;
  font-size: 20rpx;
  background: #f3f2ef;
  border-radius: 8rpx;
}

.stepper {
  display: flex;
  align-items: center;
  background: #f3f2ee;
  border-radius: 10rpx;
}

.stepper button {
  width: 50rpx;
  height: 50rpx;
  padding: 0;
  margin: 0;
  line-height: 50rpx;
  background: transparent;
  border: 0;
}

.stepper button::after {
  border: 0;
}

.stepper text {
  min-width: 42rpx;
  text-align: center;
}

.recommend-title {
  display: block;
  margin: 38rpx 8rpx 20rpx;
  font-size: 28rpx;
  font-weight: 700;
}

.settle-bar {
  position: fixed;
  z-index: 21;
  right: 0;
  bottom: calc(126rpx + env(safe-area-inset-bottom));
  left: 0;
  display: flex;
  gap: 14rpx;
  align-items: center;
  height: 116rpx;
  padding: 16rpx 20rpx;
  box-sizing: border-box;
  background: #fff;
}

.total {
  display: flex;
  margin-left: auto;
  flex-direction: column;
  align-items: flex-end;
}

.total-value {
  color: #d94f2b;
}

.settle-bar button {
  height: 80rpx;
  padding: 0 30rpx;
  margin: 0;
  color: #fff;
  font-size: 22rpx;
  line-height: 80rpx;
  background: #d94f2b;
  border: 0;
  border-radius: 16rpx;
}

.settle-bar button::after {
  border: 0;
}
</style>
