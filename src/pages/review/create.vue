<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
import OrderProduct from "@/components/shop/OrderProduct.vue";
const rating = ref(5);
const selected = ref([true, true, true, false]);
const tags = ["米香浓郁", "颗粒饱满", "包装严实", "物流很快"];
const content = ref("米粒饱满，煮出来香味很自然，家里人都很喜欢。");
const submit = () => {
  uni.showToast({ title: "评价提交成功", icon: "success" });
  setTimeout(() => uni.navigateBack(), 500);
};
</script>
<template>
  <view class="shop-page review-create">
    <ShopHeader title="评价商品" /><view class="review-compose">
      <OrderProduct /><view class="rating">
        <text>商品满意度</text><view>
          <text
            v-for="i in 5"
            :key="i"
            :class="{ dim: i > rating }"
            @click="rating = i"
          >
            ★
          </text>
        </view><b>非常满意</b>
      </view><view class="shop-tags">
        <view
          v-for="(tag, index) in tags"
          :key="tag"
          class="shop-tag"
          :class="{ active: selected[index] }"
          @click="selected[index] = !selected[index]"
        >
          {{ tag }}
        </view>
      </view><textarea
        v-model="content"
        placeholder="分享真实体验，帮助更多人做选择…"
      /><button
        class="upload"
        @click="uni.chooseImage({ count: 3 })"
      >
        <text>＋</text><small>添加图片</small>
      </button><view class="anonymous">
        <view class="check">
          ✓
        </view><view>
          <b>匿名评价</b><text class="shop-muted">
            你的头像和昵称不会展示
          </text>
        </view>
      </view><button
        class="shop-primary"
        @click="submit"
      >
        提交评价
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.review-create {
  background: #fff;
}

.review-compose {
  display: flex;
  padding: 24rpx;
  flex-direction: column;
  gap: 36rpx;
}

.rating {
  display: flex;
  padding: 30rpx 0;
  flex-direction: column;
  gap: 18rpx;
  align-items: center;
  border-top: 1rpx solid #eee;
}

.rating > view {
  display: flex;
  gap: 16rpx;
  color: #e7a83a;
  font-size: 54rpx;
}

.rating .dim {
  color: #ddd;
}

.review-compose textarea {
  width: 100%;
  height: 220rpx;
  padding: 24rpx;
  box-sizing: border-box;
  line-height: 1.6;
  background: #f4f3ef;
  border-radius: 16rpx;
}

.upload {
  display: flex;
  width: 144rpx;
  height: 144rpx;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888;
  line-height: 1.4;
  background: #fff;
  border: 1rpx dashed #bbb;
  border-radius: 16rpx;
}

.upload::after {
  border: 0;
}

.upload text {
  font-size: 46rpx;
}

.anonymous {
  display: flex;
  gap: 20rpx;
  align-items: center;
}

.anonymous .check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36rpx;
  height: 36rpx;
  color: #fff;
  background: #d94f2b;
  border-radius: 50%;
}

.anonymous > view:last-child {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}
</style>
