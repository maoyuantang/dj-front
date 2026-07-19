<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
import OrderProduct from "@/components/shop/OrderProduct.vue";
const type = ref(0);
const count = ref(1);
const description = ref("外包装运输中破损，米袋有轻微漏气。");
</script>
<template>
  <view class="shop-page with-fixed">
    <ShopHeader title="申请售后" /><view class="refund-body">
      <view class="shop-surface">
        <OrderProduct />
      </view><view>
        <text class="form-title">
          选择售后类型
        </text><view class="service-types">
          <view
            :class="{ active: type === 0 }"
            @click="type = 0"
          >
            <text class="service-icon">
              ¥
            </text><b>仅退款</b><small class="service-desc">未收到货或无需退货</small>
          </view><view
            :class="{ active: type === 1 }"
            @click="type = 1"
          >
            <text class="service-icon">
              □
            </text><b>退货退款</b><small class="service-desc">已收到货，需要寄回</small>
          </view>
        </view>
      </view><view class="shop-surface form-list">
        <view><text>退款原因</text><b>商品破损 ›</b></view><view>
          <text>退款数量</text><view class="stepper">
            <button @click="count = Math.max(1, count - 1)">
              −
            </button><text>{{ count }}</text><button @click="count++">
              +
            </button>
          </view>
        </view><view><text>退款金额</text><b class="shop-brand">¥54.90</b></view>
      </view><view>
        <text class="form-title">
          问题描述
        </text><textarea
          v-model="description"
          placeholder="请描述商品问题…"
        /><button
          class="upload"
          @click="uni.chooseImage({ count: 3 })"
        >
          <text>＋</text><small>上传凭证</small>
        </button>
      </view>
    </view><view class="shop-fixed-button">
      <button
        class="shop-primary"
        @click="uni.redirectTo({ url: '/pages/refund/detail' })"
      >
        提交申请
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.refund-body {
  display: flex;
  padding: 18rpx 16rpx 140rpx;
  flex-direction: column;
  gap: 36rpx;
}

.form-title {
  display: block;
  margin-bottom: 20rpx;
  font-size: 28rpx;
  font-weight: 700;
}

.service-types {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18rpx;
}

.service-types > view {
  display: flex;
  padding: 30rpx;
  flex-direction: column;
  gap: 12rpx;
  background: #fff;
  border: 1rpx solid #ddd;
  border-radius: 16rpx;
}

.service-types > view.active {
  background: #fff8f5;
  border-color: #d94f2b;
}

.service-desc {
  color: #888;
}

.service-icon {
  color: #d94f2b;
  font-size: 38rpx;
}

.form-list > view {
  display: flex;
  min-height: 90rpx;
  align-items: center;
  justify-content: space-between;
  border-top: 1rpx solid #eee;
}

.form-list > view:first-child {
  border: 0;
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

.refund-body textarea {
  width: 100%;
  height: 220rpx;
  padding: 24rpx;
  box-sizing: border-box;
  line-height: 1.6;
  background: #fff;
  border-radius: 16rpx;
}

.upload {
  display: flex;
  width: 144rpx;
  height: 144rpx;
  padding: 0;
  margin: 18rpx 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888;
  background: #fff;
  border: 1rpx dashed #bbb;
  border-radius: 16rpx;
}

.upload::after {
  border: 0;
}
</style>
