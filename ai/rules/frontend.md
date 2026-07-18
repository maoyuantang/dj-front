# 前端实现规则

## 适用范围与边界

适用于 `src/` 下 Vue 页面、组件、composable、store、路由和平台交互。使用 Vue 3 Composition API、TypeScript 和 uni-app 原生能力；页面在 `src/pages.json` 注册。页面负责编排，稳定展示/交互拆组件，跨页面领域状态进 Pinia；没有第二个真实使用点时不提前抽象。

## 页面、生命周期与导航

- `onLoad` 解析并校验一次性页面参数；`onShow` 只刷新回前台时需要的数据；`onHide` 暂停瞬时工作；`onUnload` 释放监听、定时器、请求和实例。
- 普通入栈用 `navigateTo`，替换当前页用 `redirectTo`，建立新根栈用 `reLaunch`，只有 `pages.json` 已注册 TabBar 才用 `switchTab`。
- 当前首页和登录占位页均在主包，无 TabBar/分包/预下载。不得虚构空分包；真实非核心业务域出现时再按域拆分并评估预下载。
- 当前 guard 只拦截 `navigateTo`。新增受保护入口时必须核对其他导航方式和直接启动场景，不能声称已有全路由权限覆盖。

## 数据、UI 与平台

- 业务请求复用 `src/api/request.ts`，环境读取复用 `src/config/env.ts`，不散落 `uni.request` 或 `import.meta.env`。
- Pinia 按业务域划分，区分服务端数据、会话和局部 UI；持久化说明 key、版本、过期、迁移和退出清理。当前 auth store 是可替换脚手架。
- uview-plus 已注册并引入基础样式，但项目主题、设计 Token 和组件封装边界尚未确认；不要声称已有统一视觉主题。
- 条件编译只包围真实平台差异；必须处理 loading、empty、error、disabled、重复触发和页面离开后的异步回调。
- 微信授权、隐私、storage、手机号等能力必须依据平台文档和真实业务确认；H5 单测/构建不能替代开发者工具或真机证据。

检查至少考虑 type-check、相关 lint/style/test 和目标构建，平台行为列出人工步骤。正例：`onLoad` 校验 `id`，通过统一 API 请求并在离页时清理。反例：每次 `onShow` 重复注册监听，或用 `navigateTo` 打开 TabBar 页面。
