# 前端架构

本文件描述可由仓库证明的模块边界，供新页面、API、Store 和架构变更前读取；不记录理想化的未来目录。入口、依赖方向或平台策略变化时由实际变更者同步本文件、[`project.md`](../../ai/knowledge/project.md) 和必要的 decisions。

当前应用由 `src/main.ts` 使用 `createSSRApp` 创建，注册 Pinia 和 uview-plus；页面由 `src/pages.json` 注册，目前是主包首页和登录占位页，无 TabBar/分包。`src/config/env.ts` 集中校验 baseURL，`src/api/request.ts` 统一请求、Bearer 注入和 401 处理，`src/stores/auth.ts` 与 `src/utils/auth.ts` 管理会话脚手架，`src/router/guard.ts` 当前只拦截 `navigateTo`。

页面依赖 store/API/工具，底层不能反向依赖页面；共享组件/composable 目录边界尚未由真实复用场景形成。uview-plus 已有基础样式，但项目主题和设计 Token 尚未确认。H5 曾完成初始化构建检查；微信 build、开发者工具、真机、真实 API 和发布架构仍需各自证据。

长期依赖方向和决策见 [`../../ai/rules/architecture.md`](../../ai/rules/architecture.md) 与 [`../../ai/memory/decisions.md`](../../ai/memory/decisions.md)。
