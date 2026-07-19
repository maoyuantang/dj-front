<script setup lang="ts">
import { ref } from "vue";
import BottomNav from "@/components/shop/BottomNav.vue";

const categories = [
  "热门推荐",
  "粮油调味",
  "零食饮料",
  "清洁日化",
  "家居生活",
  "个护健康",
  "生鲜果蔬",
];
const active = ref(1);
const groups = [
  { title: "米面杂粮", items: ["五常大米", "杂粮组合", "有机面粉"] },
  { title: "食用油", items: ["花生油", "橄榄油", "玉米油"] },
  { title: "厨房调味", items: ["酱油醋", "调味料", "香辛料"] },
];
const images = [
  "/static/home/product-rice.png",
  "/static/home/product-snack.png",
  "/static/home/product-home.png",
];
const openSearch = () => uni.navigateTo({ url: "/pages/search/index" });
const openResults = () => uni.navigateTo({ url: "/pages/search/results" });
</script>

<template>
  <view class="shop-page with-nav category-page">
    <view class="category-search">
      <view
        class="shop-search"
        @click="openSearch"
      >
        <text class="shop-search-icon">
          ⌕
        </text><text>搜索商品</text>
      </view>
    </view>
    <view class="category-layout">
      <view class="category-aside">
        <view
          v-for="(item, index) in categories"
          :key="item"
          class="aside-item"
          :class="{ active: active === index }"
          @click="active = index"
        >
          {{ item }}
        </view>
      </view>
      <view class="category-main">
        <view class="category-banner">
          <text class="banner-title">
            一日三餐
          </text><text>好米好油，安心上桌</text>
        </view>
        <view
          v-for="group in groups"
          :key="group.title"
          class="category-group"
        >
          <view class="shop-row">
            <text class="group-title">
              {{ group.title }}
            </text><text
              class="shop-muted"
              @click="openResults"
            >
              全部 ›
            </text>
          </view>
          <view class="mini-grid">
            <view
              v-for="(item, index) in group.items"
              :key="item"
              class="mini-item"
              @click="openResults"
            >
              <image
                :src="images[index]"
                mode="aspectFill"
              />
              <text>{{ item }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <BottomNav active="categories" />
  </view>
</template>

<style lang="scss">
.category-page {
  background: #fff;
}

.category-search {
  padding: calc(16rpx + env(safe-area-inset-top)) 28rpx 14rpx;
  background: #fff;
}

.category-layout {
  display: grid;
  grid-template-columns: 180rpx minmax(0, 1fr);
  min-height: calc(100vh - 220rpx);
}

.category-aside {
  background: #edebe6;
}

.aside-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  color: #777;
}

.aside-item.active {
  color: #d94f2b;
  font-weight: 700;
  background: #fff;
}

.aside-item.active::before {
  position: absolute;
  left: 0;
  width: 6rpx;
  height: 40rpx;
  background: #d94f2b;
  border-radius: 4rpx;
  content: "";
}

.category-main {
  min-width: 0;
  padding: 28rpx 24rpx;
}

.category-banner {
  display: flex;
  height: 168rpx;
  padding: 34rpx;
  box-sizing: border-box;
  flex-direction: column;
  gap: 10rpx;
  color: #ded9cf;
  background: #33302b;
  border-radius: 16rpx;
}

.banner-title {
  color: #fff;
  font-size: 34rpx;
  font-weight: 700;
}

.category-group {
  margin-top: 40rpx;
}

.group-title {
  font-size: 28rpx;
  font-weight: 700;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx 12rpx;
  margin-top: 20rpx;
}

.mini-item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 10rpx;
  align-items: center;
  font-size: 20rpx;
}

.mini-item image {
  width: 100%;
  height: 132rpx;
  background: #f4f1eb;
  border-radius: 14rpx;
}
</style>
