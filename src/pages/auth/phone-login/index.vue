<script setup lang="ts">
import { ref } from "vue";

const phone = ref("");
const code = ref("");
const requesting = ref(false);

const goBack = () => uni.navigateBack();
const requestCode = () => {
  if (!/^1\d{10}$/.test(phone.value)) {
    uni.showToast({ title: "请输入正确的手机号", icon: "none" });
    return;
  }
  requesting.value = true;
  setTimeout(() => {
    requesting.value = false;
    uni.showToast({ title: "验证码待接入", icon: "none" });
  }, 300);
};
const submit = () => {
  if (!phone.value || !code.value) {
    uni.showToast({ title: "请完善登录信息", icon: "none" });
    return;
  }
  uni.showToast({ title: "登录接口待接入", icon: "none" });
};
</script>

<template>
  <view class="phone-page">
    <view class="header">
      <view
        class="back-button"
        @click="goBack"
      >
        <image src="/static/login/back.svg" />
      </view>
      <text class="header-title">
        手机号登录
      </text>
      <view class="header-spacer" />
    </view>
    <view class="form-content">
      <view class="intro">
        <text class="eyebrow">
          欢迎回来
        </text>
        <text class="form-title">
          输入手机号
        </text>
        <text class="hint">
          未注册的手机号将自动创建账户
        </text>
      </view>
      <view class="field-group">
        <text class="field-label">
          手机号
        </text>
        <view class="field">
          <text class="country">
            +86
          </text>
          <input
            v-model="phone"
            type="number"
            maxlength="11"
            placeholder="13888888260"
          >
        </view>
      </view>
      <view class="field-group">
        <text class="field-label">
          验证码
        </text>
        <view class="field">
          <input
            v-model="code"
            type="number"
            maxlength="6"
            placeholder="请输入6 位验证码"
          >
          <text
            class="code-action"
            :class="{ loading: requesting }"
            @click="requestCode"
          >
            {{ requesting ? "发送中" : "获取验证码" }}
          </text>
        </view>
      </view>
      <button
        class="submit-button"
        @click="submit"
      >
        登录
      </button>
      <view class="service-note">
        登录即代表同意相关服务协议
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.phone-page {
  min-height: 100vh;
  background: #fff;
  color: #20221f;
}

.header {
  height: 46px;
  padding: 42px 15px 0;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-button,
.header-spacer {
  width: 40px;
  height: 46px;
  display: flex;
  align-items: center;
}

.back-button image {
  width: 18px;
  height: 18px;
}

.header-title {
  font-size: 16px;
  line-height: 24px;
}

.header-spacer {
  justify-content: flex-end;
}

.form-content {
  padding: 42px 24px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.eyebrow {
  color: #d94f2b;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
}

.form-title {
  font-size: 27px;
  line-height: 40.5px;
}

.hint,
.service-note {
  color: #858880;
  font-size: 12px;
  line-height: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 10.25px;
}

.field-label {
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
}

.field {
  height: 48px;
  padding-right: 14px;
  padding-left: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #deddd8;
  border-radius: 12px;
}

.field input {
  flex: 1;
  min-width: 0;
  height: 48px;
  color: #555;
  font-size: 12px;
}

.country {
  color: #888;
  font-size: 12px;
  font-weight: 900;
}

.code-action {
  color: #d94f2b;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.code-action.loading {
  opacity: 0.55;
}

.submit-button {
  width: 100%;
  height: 46px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: #d94f2b;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 46px;
}

.submit-button::after {
  border: 0;
}

.service-note {
  text-align: center;
}
</style>
