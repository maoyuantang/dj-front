<script setup lang="ts">
defineProps<{ active: "home" | "categories" | "cart" | "profile" }>();

const tabs = [
  { key: "home", label: "首页", icon: "⌂", url: "/pages/index/index" },
  { key: "categories", label: "分类", icon: "▦", url: "/pages/category/index" },
  { key: "cart", label: "购物车", icon: "♧", url: "/pages/cart/index" },
  { key: "profile", label: "我的", icon: "♙", url: "/pages/profile/index" },
] as const;

const go = (url: string, current: string) => {
  if (
    current === "home" ||
    current === "categories" ||
    current === "cart" ||
    current === "profile"
  ) {
    uni.reLaunch({ url });
  }
};
</script>

<template>
  <view class="shop-bottom-nav">
    <view
      v-for="tab in tabs"
      :key="tab.key"
      class="shop-nav-item"
      :class="{ active: active === tab.key }"
      @click="go(tab.url, tab.key)"
    >
      <text class="shop-nav-icon">
        {{ tab.icon }}
      </text>
      <text>{{ tab.label }}</text>
    </view>
  </view>
</template>
