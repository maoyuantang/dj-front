<script setup lang="ts">
import BottomNav from "@/components/shop/BottomNav.vue";

type Product = {
  name: string;
  subtitle: string;
  price: string;
  image: string;
};

const categories = [
  { label: "粮油调味", icon: "米" },
  { label: "休闲零食", icon: "食" },
  { label: "酒水饮料", icon: "饮" },
  { label: "清洁日化", icon: "净" },
  { label: "家居生活", icon: "家" },
  { label: "生鲜果蔬", icon: "鲜" },
  { label: "个护美妆", icon: "护" },
  { label: "全部分类", icon: "全" },
];

const products: Product[] = [
  {
    name: "五常稻花香大米",
    subtitle: "新米 · 5kg",
    price: "59.90",
    image: "/static/home/product-rice.png",
  },
  {
    name: "每日坚果轻享装",
    subtitle: "7日装 · 175g",
    price: "29.90",
    image: "/static/home/product-snack.png",
  },
  {
    name: "植萃洗衣液",
    subtitle: "低泡易漂 · 2kg",
    price: "39.90",
    image: "/static/home/product-home.png",
  },
];

const showPending = (name: string) => {
  uni.showToast({ title: `${name}页面将在后续步骤完成`, icon: "none" });
};

const addToCart = (product: Product) => {
  uni.showToast({ title: `${product.name}已加入购物车`, icon: "none" });
};

const open = (url: string) => uni.navigateTo({ url });
</script>

<template>
  <view class="home-page">
    <view class="home-top">
      <view class="delivery-row">
        <view>
          <text class="delivery-label">
            送至
          </text>
          <view class="address">
            <text class="pin">
              ●
            </text>
            <text>徐汇区宜山路</text>
          </view>
        </view>
        <button
          class="sign-button"
          @click="showPending('签到')"
        >
          签到 +5
        </button>
      </view>
      <view
        class="search-bar"
        @click="open('/pages/search/index')"
      >
        <text class="search-icon">
          ⌕
        </text>
        <text>搜索商品</text>
      </view>
    </view>

    <view class="home-content">
      <view class="hero">
        <image
          class="hero-image"
          src="/static/home/rihe-hero.png"
          mode="aspectFill"
        />
        <view class="hero-mask" />
        <view class="hero-copy">
          <text>日常好物焕新季</text>
          <text class="hero-title">
            满 99 减 20
          </text>
          <button @click="open('/pages/search/results')">
            立即选购
          </button>
        </view>
      </view>

      <view class="category-grid">
        <view
          v-for="category in categories"
          :key="category.label"
          class="category-item"
          @click="
            open(category.label === '全部分类' ? '/pages/category/index' : '/pages/search/results')
          "
        >
          <view class="category-icon">
            {{ category.icon }}
          </view>
          <text>{{ category.label }}</text>
        </view>
      </view>

      <view class="product-section">
        <view class="section-heading">
          <view>
            <text class="section-title">
              限时好价
            </text>
            <text class="section-note">
              今日 24:00 结束
            </text>
          </view>
          <view
            class="more"
            @click="open('/pages/search/results')"
          >
            更多 ›
          </view>
        </view>
        <scroll-view
          class="horizontal-products"
          scroll-x
          :show-scrollbar="false"
        >
          <view class="horizontal-products-inner">
            <view
              v-for="product in products"
              :key="product.name"
              class="product-card compact"
              @click="open('/pages/product/detail/index')"
            >
              <image
                class="product-image"
                :src="product.image"
                mode="aspectFill"
              />
              <view class="product-info">
                <text class="product-name">
                  {{ product.name }}
                </text>
                <text class="product-subtitle">
                  {{ product.subtitle }}
                </text>
                <view class="product-bottom">
                  <view class="price">
                    <text>¥</text><text class="price-value">
                      {{ product.price }}
                    </text>
                  </view>
                  <button
                    class="add-button"
                    aria-label="加入购物车"
                    @click.stop="addToCart(product)"
                  >
                    +
                  </button>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="product-section">
        <view class="section-heading">
          <text class="section-title">
            为你精选
          </text>
        </view>
        <view class="product-grid">
          <view
            v-for="product in products.slice(0, 2)"
            :key="product.name"
            class="product-card"
            @click="open('/pages/product/detail/index')"
          >
            <image
              class="product-image"
              :src="product.image"
              mode="aspectFill"
            />
            <view class="product-info">
              <text class="product-name">
                {{ product.name }}
              </text>
              <text class="product-subtitle">
                {{ product.subtitle }}
              </text>
              <view class="product-bottom">
                <view class="price">
                  <text>¥</text><text class="price-value">
                    {{ product.price }}
                  </text>
                </view>
                <button
                  class="add-button"
                  aria-label="加入购物车"
                  @click.stop="addToCart(product)"
                >
                  +
                </button>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <BottomNav active="home" />
  </view>
</template>

<style lang="scss">
.home-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: calc(126rpx + env(safe-area-inset-bottom));
  color: #20221f;
  font-size: 24rpx;
  background: #f6f5f1;
}

.home-top {
  padding: calc(20rpx + env(safe-area-inset-top)) 32rpx 36rpx;
  color: #fff;
  background: #d94f2b;
}

.delivery-row,
.address,
.product-bottom,
.section-heading {
  display: flex;
  align-items: center;
}

.delivery-row,
.product-bottom,
.section-heading {
  justify-content: space-between;
}

.delivery-label {
  display: block;
  margin-bottom: 6rpx;
  font-size: 18rpx;
  opacity: 0.82;
}

.address {
  gap: 8rpx;
  font-size: 26rpx;
  font-weight: 700;
}

.pin {
  font-size: 17rpx;
}

.sign-button {
  height: 56rpx;
  padding: 0 20rpx;
  margin: 0;
  color: #fff;
  font-size: 22rpx;
  line-height: 54rpx;
  background: rgb(255 255 255 / 10%);
  border: 1rpx solid rgb(255 255 255 / 42%);
  border-radius: 999rpx;
}

.sign-button::after,
.hero-copy button::after,
.add-button::after {
  border: 0;
}

.search-bar {
  display: flex;
  gap: 16rpx;
  align-items: center;
  height: 72rpx;
  padding: 0 24rpx;
  margin-top: 28rpx;
  color: #969890;
  background: #fff;
  border-radius: 24rpx;
}

.search-icon {
  font-size: 34rpx;
  line-height: 1;
}

.home-content {
  display: flex;
  flex-direction: column;
  gap: 36rpx;
  padding: 24rpx 16rpx 10rpx;
}

.hero {
  position: relative;
  height: 308rpx;
  overflow: hidden;
  border-radius: 34rpx;
}

.hero-image,
.hero-mask {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hero-mask {
  background: linear-gradient(90deg, rgb(51 29 20 / 70%), rgb(51 29 20 / 0%));
}

.hero-copy {
  position: absolute;
  top: 56rpx;
  left: 36rpx;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
}

.hero-title {
  margin: 12rpx 0;
  font-size: 48rpx;
  font-weight: 700;
}

.hero-copy button {
  height: 48rpx;
  padding: 0 22rpx;
  margin: 0;
  color: #4c2b1e;
  font-size: 20rpx;
  line-height: 48rpx;
  background: #fff;
  border: 0;
  border-radius: 999rpx;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28rpx 12rpx;
  padding: 8rpx;
}

.category-item {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  align-items: center;
  font-size: 20rpx;
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86rpx;
  height: 86rpx;
  color: #b64a2d;
  font-weight: 800;
  background: #fff4eb;
  border-radius: 28rpx;
}

.product-section {
  min-width: 0;
}

.section-heading {
  min-height: 52rpx;
  margin-bottom: 18rpx;
  padding: 0 8rpx;
}

.section-heading > view {
  display: flex;
  gap: 14rpx;
  align-items: baseline;
}

.section-title {
  font-size: 32rpx;
  font-weight: 700;
}

.section-note,
.more {
  color: #777a72;
  font-size: 20rpx;
}

.horizontal-products {
  width: 100%;
  white-space: nowrap;
}

.horizontal-products-inner {
  display: inline-flex;
  gap: 20rpx;
  padding-right: 8rpx;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20rpx;
}

.product-card {
  overflow: hidden;
  background: #fff;
  border-radius: 28rpx;
}

.product-card.compact {
  width: 290rpx;
  white-space: normal;
}

.product-image {
  display: block;
  width: 100%;
  height: 300rpx;
  background: #f1efe9;
}

.compact .product-image {
  height: 264rpx;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  padding: 20rpx 22rpx 22rpx;
}

.product-name {
  overflow: hidden;
  font-weight: 700;
  line-height: 1.45;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-subtitle {
  color: #8b8d86;
  font-size: 20rpx;
}

.price {
  display: flex;
  align-items: baseline;
  color: #d94f2b;
  font-size: 20rpx;
}

.price-value {
  font-size: 40rpx;
  font-weight: 700;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48rpx;
  height: 48rpx;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 34rpx;
  line-height: 46rpx;
  background: #d94f2b;
  border: 0;
  border-radius: 50%;
}
</style>
