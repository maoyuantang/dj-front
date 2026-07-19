<script setup lang="ts">
withDefaults(defineProps<{ count?: number }>(), { count: 1 });
</script>

<template>
  <view class="shop-order-product">
    <view class="shop-order-thumb">
      <image
        src="/static/home/product-rice.png"
        mode="aspectFill"
      />
    </view>
    <view class="shop-grow">
      <b>五常稻花香大米</b><text class="shop-muted">
        5kg · 真空锁鲜装
      </text><view class="shop-price">
        <text>¥</text><text class="value">
          59.90
        </text>
      </view>
    </view>
    <text>×{{ count }}</text>
  </view>
</template>
