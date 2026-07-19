<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "@/components/shop/ProductCard.vue";
import { riceProducts } from "@/data/shop";
const active = ref("综合");
const filters = ["综合", "销量", "价格 ↕", "筛选"];
</script>

<template>
  <view class="shop-page results-page">
    <view class="search-head">
      <text
        class="back"
        @click="uni.navigateBack()"
      >
        ‹
      </text><view class="shop-search">
        <text class="shop-search-icon">
          ⌕
        </text><text>大米</text>
      </view><text class="search-action">
        搜索
      </text>
    </view>
    <view class="filter-row">
      <view
        v-for="item in filters"
        :key="item"
        :class="{ active: active === item }"
        @click="active = item"
      >
        {{ item }}
      </view>
    </view>
    <view class="result-note">
      为你找到 36 件商品
    </view>
    <view class="shop-product-grid result-grid">
      <ProductCard
        v-for="item in riceProducts"
        :key="item.name"
        :product="item"
      />
    </view>
  </view>
</template>

<style lang="scss">
.search-head {
  display: flex;
  gap: 18rpx;
  align-items: center;
  padding: calc(14rpx + env(safe-area-inset-top)) 24rpx 12rpx;
  background: #fff;
}

.search-head .back {
  font-size: 58rpx;
}

.search-head .shop-search {
  flex: 1;
}

.search-action {
  color: #d94f2b;
}

.filter-row {
  display: flex;
  background: #fff;
}

.filter-row view {
  flex: 1;
  height: 84rpx;
  color: #777;
  line-height: 84rpx;
  text-align: center;
}

.filter-row .active {
  color: #d94f2b;
  font-weight: 700;
  border-bottom: 4rpx solid #d94f2b;
}

.result-note {
  padding: 24rpx 28rpx;
  color: #888;
}

.result-grid {
  padding: 0 18rpx 40rpx;
}
</style>
