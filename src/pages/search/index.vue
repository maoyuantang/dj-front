<script setup lang="ts">
const hot = ["五常大米", "低糖零食", "抽纸整箱", "食用油", "洗衣凝珠", "苏打水"];
const goBack = () => uni.navigateBack();
const search = () => uni.navigateTo({ url: "/pages/search/results" });
</script>

<template>
  <view class="shop-page search-page">
    <view class="search-head">
      <text
        class="back"
        @click="goBack"
      >
        ‹
      </text><view class="shop-search">
        <text class="shop-search-icon">
          ⌕
        </text><input value="大米">
      </view><text
        class="search-action"
        @click="search"
      >
        搜索
      </text>
    </view>
    <view class="search-body">
      <view>
        <view class="shop-row">
          <text class="shop-section-title">
            搜索历史
          </text><text class="trash">
            ⌫
          </text>
        </view><view class="shop-tags history">
          <view class="shop-tag">
            大米
          </view><view class="shop-tag">
            洗衣液
          </view><view class="shop-tag">
            每日坚果
          </view>
        </view>
      </view>
      <view>
        <text class="shop-section-title">
          大家都在搜
        </text><view class="hot-grid">
          <view
            v-for="(item, index) in hot"
            :key="item"
            class="hot-item"
            @click="search"
          >
            <text class="rank">
              {{ index + 1 }}
            </text><text>{{ item }}</text><text
              v-if="index < 3"
              class="hot-badge"
            >
              热
            </text>
          </view>
        </view>
      </view>
      <view class="inspiration">
        <text class="inspiration-label">
          本周灵感
        </text><text class="inspiration-title">
          让早餐更从容
        </text><text>燕麦、坚果与醇香牛奶组合</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.search-page {
  background: #fff;
}

.search-head {
  display: flex;
  gap: 18rpx;
  align-items: center;
  padding: calc(14rpx + env(safe-area-inset-top)) 24rpx 12rpx;
}

.search-head .back {
  font-size: 58rpx;
}

.search-head .shop-search {
  flex: 1;
}

.shop-search input {
  flex: 1;
  height: 72rpx;
  font-size: 24rpx;
}

.search-action {
  color: #d94f2b;
}

.search-body {
  display: flex;
  flex-direction: column;
  gap: 68rpx;
  padding: 44rpx 32rpx;
}

.history {
  margin-top: 28rpx;
}

.trash {
  color: #777;
  font-size: 32rpx;
}

.hot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30rpx;
  margin-top: 30rpx;
}

.hot-item {
  display: flex;
  gap: 14rpx;
  align-items: center;
}

.rank {
  color: #d94f2b;
  font-weight: 700;
}

.hot-badge {
  padding: 2rpx 7rpx;
  color: #d94f2b;
  font-size: 16rpx;
  background: #fbe7df;
}

.inspiration {
  display: flex;
  padding: 42rpx;
  flex-direction: column;
  gap: 14rpx;
  color: #c9cbc5;
  background: #2f322c;
  border-radius: 16rpx;
}

.inspiration-label {
  color: #e7c98e;
}

.inspiration-title {
  color: #fff;
  font-size: 40rpx;
  font-weight: 700;
}
</style>
