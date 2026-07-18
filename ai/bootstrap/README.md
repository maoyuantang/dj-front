# Bootstrap 入口说明

- 基础设施版本：`3.4`
- 初始化日期：`2026-07-18`
- 执行模式：首次初始化，由 Cline 审计和落地后经 Codex 对比补强
- 模板来源：`可不断优化的AI基础设施规范/cursor-ai-bootstrap-dj-front.md`

本目录存放 AI 第一次进入项目时读取的统一入口，不存放详细专项规则或聊天记录。任何任务先读 `bootstrap.md`，再按其中路由读取最少文件；技术栈、目录、请求层、路由或验证命令改变时，由实际变更者同步更新入口和 [`../knowledge/project.md`](../knowledge/project.md)。权威实现事实仍来自代码和配置。

项目示例：新增 uni-app 页面时从入口转到 frontend、ui、architecture 规则及 new-page workflow，而不是把整个 `ai/` 一次放入上下文。
