<script setup lang="ts">
import { ref } from "vue";
import { authPlatform } from "@/platform/auth";
import { authApi } from "@/api/auth";
import { useAuthStore } from "@/stores/auth";

const agreed = ref(false);
const submitting = ref(false);
const authStore = useAuthStore();

const goPhoneLogin = () => {
  uni.navigateTo({ url: "/pages/auth/phone-login/index" });
};

const loginByWechat = async () => {
  if (!agreed.value) {
    uni.showToast({ title: "请先同意服务协议", icon: "none" });
    return;
  }

  if (submitting.value) return;
  submitting.value = true;
  try {
    const credential = await authPlatform.loginWithWechat();
    const session = await authApi.loginWithWechat(credential);
    authStore.setSession(session);
    uni.reLaunch({ url: "/pages/index/index" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "微信登录失败，请稍后重试";
    uni.showToast({ title: message, icon: "none" });
  } finally {
    submitting.value = false;
  }
};
</script>

<template>
  <view class="quick-login-page">
    <view
      class="wechat-capsule"
      aria-hidden="true"
    >
      •••◉
    </view>
    <view class="brand-mark">
      日
    </view>
    <view class="brand-copy">
      <text class="brand-name">
        日和集
      </text>
      <text class="brand-slogan">
        认真挑选每一份日常
      </text>
    </view>
    <view class="hero">
      <image
        class="hero-image"
        src="/static/login/login-hero.png"
        mode="aspectFill"
      />
    </view>
    <button
      class="primary-button"
      :class="{ disabled: !agreed || submitting }"
      :disabled="submitting"
      @click="loginByWechat"
    >
      {{ submitting ? "登录中…" : "微信快捷登录" }}
    </button>
    <view
      class="phone-link"
      @click="goPhoneLogin"
    >
      使用手机号登录
    </view>
    <view
      class="agreement"
      @click="agreed = !agreed"
    >
      <view class="checkbox">
        {{ agreed ? "✓" : "" }}
      </view>
      <text>我已阅读并同意《用户协议》和《隐私政策》</text>
    </view>
  </view>
</template>

<style lang="scss">
.quick-login-page {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  min-height: 100vh;
  padding: 50px 22px 146.5px;
  background: #fbfaf7;
}

.wechat-capsule {
  position: absolute;
  top: 6px;
  right: 37px;
  padding: 6px 10px;
  color: #20221f;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  border: 1px solid #ddd;
  border-radius: 999px;
}

.brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  background: #d94f2b;
  border-radius: 18px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  padding-bottom: 6px;
}

.brand-name {
  color: #20221f;
  font-size: 25px;
  line-height: 37.5px;
  letter-spacing: 0.18em;
}

.brand-slogan {
  color: #777a72;
  font-size: 12px;
  line-height: 18px;
}

.hero {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.hero-image {
  display: block;
  width: 100%;
  height: 280px;
  border-radius: 22px;
}

.primary-button {
  width: 100%;
  height: 46px;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 46px;
  background: #d94f2b;
  border: 0;
  border-radius: 14px;
}

.primary-button::after {
  border: 0;
}

.primary-button.disabled {
  opacity: 0.58;
}

.phone-link {
  color: #555;
  font-size: 12px;
  line-height: 18px;
}

.agreement {
  display: flex;
  align-items: center;
  color: #969890;
  font-size: 9px;
  line-height: 13.5px;
}

.checkbox {
  box-sizing: border-box;
  width: 13px;
  height: 13px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-align: center;
  background: #0075ff;
  border-radius: 2.5px;
}
</style>
