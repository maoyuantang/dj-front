# dj-front

基于 Vue 3、TypeScript 和 uni-app 的前端项目；真实依赖和可用脚本以 `package.json` 为准。

<!-- AI-INFRA:START -->

## AI 协作入口

本项目的 AI 协作说明从 [`ai/bootstrap/bootstrap.md`](ai/bootstrap/bootstrap.md) 开始。

- 项目资料：[`docs/README.md`](docs/README.md)
- AI 规则与工作流：[`ai/README.md`](ai/README.md)
- 项目事实：[`ai/knowledge/project.md`](ai/knowledge/project.md)
- API 契约：[`docs/api/README.md`](docs/api/README.md)
- Cursor 适配：[`.cursor/README.md`](.cursor/README.md)
- Cline 适配：[`.clinerules/README.md`](.clinerules/README.md)
- MCP 状态：[`.mcp/README.md`](.mcp/README.md)
- 团队使用手册：[`AI-INFRASTRUCTURE.md`](AI-INFRASTRUCTURE.md)

AI 在修改代码前必须读取入口文件，并只加载与当前任务相关的上下文。代码和配置是项目事实的最高优先级；
无法确认的信息必须标记为待确认，不能猜测。

<!-- AI-INFRA:END -->
