<script setup lang="ts">
export type ShopProduct = {
  name: string;
  subtitle: string;
  price: string;
  image: string;
};

defineProps<{ product: ShopProduct }>();

const openDetail = () => uni.navigateTo({ url: "/pages/product/detail/index" });
const add = (name: string) => uni.showToast({ title: `${name}已加入购物车`, icon: "none" });
</script>

<template>
  <view
    class="shop-product-card"
    @click="openDetail"
  >
    <image
      class="shop-product-image"
      :src="product.image"
      mode="aspectFill"
    />
    <view class="shop-product-info">
      <text class="shop-product-name">
        {{ product.name }}
      </text>
      <text class="shop-muted">
        {{ product.subtitle }}
      </text>
      <view class="shop-row">
        <view class="shop-price">
          <text>¥</text><text class="value">
            {{ product.price }}
          </text>
        </view>
        <button
          class="shop-round-add"
          aria-label="加入购物车"
          @click.stop="add(product.name)"
        >
          +
        </button>
      </view>
    </view>
  </view>
</template>
