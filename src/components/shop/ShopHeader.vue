<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    back?: boolean;
    action?: string;
  }>(),
  { back: true, action: "" },
);

const emit = defineEmits<{ action: [] }>();
</script>

<template>
  <view class="shop-header">
    <view
      class="shop-header-side"
      @click="back && uni.navigateBack()"
    >
      <text
        v-if="back"
        class="shop-header-back"
      >
        ‹
      </text>
    </view>
    <text class="shop-header-title">
      {{ title }}
    </text>
    <view
      class="shop-header-side right"
      @click="emit('action')"
    >
      {{ action }}
    </view>
  </view>
</template>
