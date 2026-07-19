<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
import OrderProduct from "@/components/shop/OrderProduct.vue";
const active = ref("全部");
const tabs = ["全部", "待付款", "待发货", "待收货", "售后"];
const orders = [
  { status: "待收货", action: "查看物流" },
  { status: "已完成", action: "再次购买" },
  { status: "退款中", action: "查看进度" },
];
const open = (index: number) =>
  uni.navigateTo({ url: index === 2 ? "/pages/refund/detail" : "/pages/orders/detail" });
</script>
<template>
  <view class="shop-page">
    <ShopHeader
      title="我的订单"
      action="⌕"
    /><view class="order-tabs">
      <view
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: active === tab }"
        @click="active = tab"
      >
        {{ tab }}
      </view>
    </view><view class="order-list">
      <view
        v-for="(order, index) in orders"
        :key="order.status"
        class="shop-surface order-card"
        @click="open(index)"
      >
        <view class="shop-row">
          <b>日和集自营</b><text class="shop-brand">
            {{ order.status }}
          </text>
        </view><OrderProduct /><view class="order-total">
          共1件　实付 <b>¥59.90</b>
        </view><view class="order-actions">
          <button>联系客服</button><button class="primary-outline">
            {{ order.action }}
          </button>
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
.order-tabs {
  display: flex;
  background: #fff;
}

.order-tabs view {
  flex: 1;
  height: 84rpx;
  color: #777;
  line-height: 84rpx;
  text-align: center;
}

.order-tabs .active {
  color: #d94f2b;
  font-weight: 700;
  border-bottom: 4rpx solid #d94f2b;
}

.order-list {
  display: flex;
  padding: 18rpx 16rpx;
  flex-direction: column;
  gap: 18rpx;
}

.order-total {
  margin: 18rpx 0;
  text-align: right;
}

.order-actions {
  display: flex;
  gap: 16rpx;
  justify-content: flex-end;
}

.order-actions button {
  height: 60rpx;
  padding: 0 26rpx;
  margin: 0;
  font-size: 22rpx;
  line-height: 58rpx;
  background: #fff;
  border: 1rpx solid #ddd;
  border-radius: 999rpx;
}

.order-actions button::after {
  border: 0;
}

.order-actions .primary-outline {
  color: #d94f2b;
  border-color: #d94f2b;
}
</style>
