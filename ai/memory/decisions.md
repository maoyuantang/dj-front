# 长期决定

## 2026-07-18：统一 AI 规则源

- 背景：项目需要同时适配 Cursor、Cline、Codex 和不同模型。
- 决定：以 `ai/` 与 `docs/` 为权威内容；`.cursor/`、`.clinerules/` 和 `AGENTS.md` 只做薄入口，并按任务选择性读取。
- 原因：减少规则漂移、冲突和上下文浪费。
- 影响：规则变化更新权威文件，不在客户端入口复制全文。
- 状态：已接受。

## 2026-07-18：前端工程化基础契约

- 背景：团队在功能开发前选定统一状态、UI、请求、环境、质量、测试和提交工具。
- 决定：采用 Pinia、uview-plus、luch-request、集中 env、uni-app 原生路由与导航拦截、ESLint、Prettier、Stylelint、Vitest + Vue Test Utils、Husky + lint-staged + commitlint。
- 原因：建立一致的项目边界和质量入口。
- 影响：业务代码复用统一 request/env/store；新增依赖或改变这些边界需评估并记录新决定。
- 状态：已接受并已在仓库落地。

## 2026-07-18：可替换的鉴权默认值

- 背景：初始化时没有真实后端鉴权语义和正式登录页面。
- 决定：暂用 `VITE_API_BASE_URL`、`dj_access_token`、Bearer Token、401 清理会话并 `reLaunch` 到登录占位页；不创建虚假业务分包。
- 原因：这些默认值可逆、语义明确，能先建立安全脚手架。
- 影响：首次真实联调必须用 OpenAPI/后端行为核对 Token、响应壳、401 和跳转策略；正式登录设计到位后替换占位页。
- 状态：临时接受，等待首次真实联调复核。

后续决定使用 [`../templates/decision-record.md`](../templates/decision-record.md) 的日期、背景、决定、原因/替代、影响、负责人、证据和状态结构；被替代时保留历史并链接新决定。
