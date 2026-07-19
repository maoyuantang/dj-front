<script setup lang="ts">
import { ref } from "vue";
import ShopHeader from "@/components/shop/ShopHeader.vue";
const defaultAddress = ref(0);
const addresses = ref([
  {
    name: "林晓禾",
    phone: "138****8260",
    address: "上海市徐汇区漕河泾街道 宜山路888号",
    tag: "默认",
  },
  { name: "林女士", phone: "136****1028", address: "浙江省杭州市西湖区文三路 138 号", tag: "家" },
  {
    name: "林晓禾",
    phone: "138****8260",
    address: "上海市浦东新区张江高科技园区 科苑路 88 号",
    tag: "公司",
  },
]);
const remove = (index: number) => addresses.value.splice(index, 1);
const add = () => uni.showToast({ title: "新增地址表单待接入", icon: "none" });
</script>
<template>
  <view class="shop-page with-fixed">
    <ShopHeader title="地址管理" /><view class="address-list">
      <view
        v-for="(item, index) in addresses"
        :key="item.address"
        class="shop-surface address-item"
      >
        <view class="address-person">
          <text class="address-tag">
            {{ item.tag }}
          </text><b>{{ item.name }}　{{ item.phone }}</b>
        </view><text class="address-copy">
          {{ item.address }}
        </text><view class="address-actions">
          <view @click="defaultAddress = index">
            <view
              class="radio"
              :class="{ active: defaultAddress === index }"
            />设为默认
          </view><view>
            <text>编辑</text><text @click="remove(index)">
              删除
            </text>
          </view>
        </view>
      </view>
    </view><view class="shop-fixed-button">
      <button
        class="shop-primary"
        @click="add"
      >
        ＋ 新增收货地址
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.address-list {
  display: flex;
  padding: 18rpx 16rpx 130rpx;
  flex-direction: column;
  gap: 18rpx;
}

.address-person {
  display: flex;
  gap: 16rpx;
  align-items: center;
}

.address-tag {
  padding: 4rpx 10rpx;
  color: #d94f2b;
  font-size: 18rpx;
  background: #f7e4dc;
  border-radius: 6rpx;
}

.address-copy {
  display: block;
  margin: 22rpx 0;
  line-height: 1.6;
}

.address-actions {
  display: flex;
  justify-content: space-between;
  padding-top: 20rpx;
  color: #888;
  border-top: 1rpx solid #eee;
}

.address-actions > view {
  display: flex;
  gap: 20rpx;
  align-items: center;
}

.radio {
  width: 34rpx;
  height: 34rpx;
  border: 1rpx solid #ccc;
  border-radius: 50%;
}

.radio.active {
  box-sizing: border-box;
  background: #d94f2b;
  border: 9rpx solid #f8e4de;
}
</style>
