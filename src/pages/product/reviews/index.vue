<script setup lang="ts">
import ShopHeader from "@/components/shop/ShopHeader.vue";
const users = ["林间小满", "Momo生活家", "一颗青柠"];
const tags = ["全部 1.2万", "最新", "有图 328", "米香浓 896", "包装好 766"];
</script>

<template>
  <view class="shop-page">
    <ShopHeader title="商品评价" /><view class="score">
      <view class="score-overall">
        <text class="score-value">
          4.9
        </text><text>综合评分</text>
      </view><view>
        <text>商品质量 <b class="score-stars">★★★★★</b></text><text>物流速度 <b class="score-stars">★★★★★</b></text><text>服务态度 <b class="score-stars">★★★★★</b></text>
      </view>
    </view><view class="shop-tags review-tags">
      <view
        v-for="(tag, index) in tags"
        :key="tag"
        class="shop-tag"
        :class="{ active: index === 0 }"
      >
        {{ tag }}
      </view>
    </view><view class="review-list">
      <view
        v-for="(user, index) in users"
        :key="user"
        class="review-item"
      >
        <view class="shop-row">
          <view class="review-user">
            <text class="avatar">
              {{ user[0] }}
            </text><view class="review-user-copy">
              <b>{{ user }}</b><text class="stars">
                ★★★★★
              </text>
            </view>
          </view><text class="shop-muted">
            2026.07.{{ 12 - index }}
          </text>
        </view><text class="review-copy">
          米粒很饱满，打开有自然米香。煮出来软糯有嚼劲，家里人都喜欢，会回购。
        </text><image
          v-if="index === 0"
          src="/static/home/product-rice.png"
          mode="aspectFill"
        /><text
          class="shop-muted"
        >
          5kg 真空锁鲜装
        </text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.score {
  display: flex;
  gap: 90rpx;
  justify-content: center;
  padding: 40rpx;
  background: #fff;
}

.score > view {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.score-overall {
  align-items: center;
}

.score-value {
  color: #d94f2b;
  font-size: 72rpx;
  font-weight: 700;
}

.score-stars,
.stars {
  color: #e6a23c;
}

.review-tags {
  padding: 28rpx;
  background: #fff;
}

.review-item {
  padding: 32rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
}

.review-user {
  display: flex;
  gap: 16rpx;
  align-items: center;
}

.review-user-copy {
  display: flex;
  flex-direction: column;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68rpx;
  height: 68rpx;
  background: #e6c99a;
  border-radius: 50%;
}

.review-copy {
  display: block;
  margin: 24rpx 0;
  line-height: 1.7;
}

.review-item image {
  display: block;
  width: 100%;
  height: 300rpx;
  margin-bottom: 18rpx;
  border-radius: 16rpx;
}
</style>
