# API 契约

本目录保存已验证 OpenAPI 契约和按 operation 拆分的联调记录，不保存 Token、完整敏感响应或手工编造的 schema。API 任务开始前由开发者/AI 读取本说明和相关 operation；契约变化后由后端/API 负责人或联调开发者同步。

## 当前状态

- Swagger UI：`http://localhost:3000/api-docs`，由团队在 Bootstrap 输入中提供；Cline 初始化审计时连接被拒绝，因此当前可用性未验证。
- OpenAPI JSON：待确认；不能仅凭 NestJS 惯例写死 `/api-docs-json`。
- 本地快照：当前没有 `docs/api/openapi.json`，未创建假文件。
- 前端请求边界：[`src/api/request.ts`](../../src/api/request.ts)，baseURL 来自 [`src/config/env.ts`](../../src/config/env.ts)。

后端/API 负责人最晚在首次联调前，通过后端 Swagger 初始化代码、Swagger UI Network 或只读 GET 确认 JSON URL。响应必须是 JSON 且顶层含 `openapi` 或 `swagger`；同步后记录来源 URL、日期、命令和版本。契约变化时同步相关类型、字段映射、测试和 [`api-note` 模板](../../ai/templates/api-note.md)。

日常只读取当前任务相关 endpoint/operation，避免无差别加载完整规范。Swagger/OpenAPI 与 MCP 的关系见 [`../../.mcp/swagger.md`](../../.mcp/swagger.md)，执行约束见 [`../../ai/rules/api.md`](../../ai/rules/api.md)。
