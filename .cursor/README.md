# Cursor 适配说明

- 用途：让 Cursor 按任务导航到统一入口和权威规则。
- 边界：允许薄 `.mdc` 和无凭证 MCP 示例；不复制规则全文、不保存项目事实或真实凭证。
- 读取时机：Cursor 根据 `alwaysApply`/globs 自动或人工加载；实际行为以当前客户端版本为准。
- 更新与责任：权威路径、源码目录或 Cursor 规则格式改变时，由工具维护者同步。
- 权威来源：[`ai/bootstrap/bootstrap.md`](../ai/bootstrap/bootstrap.md) 和 [`ai/rules/`](../ai/rules/README.md)。
- 项目示例：编辑 `src/api/request.ts` 时，`20-api.mdc` 导航到 API/security 规则。

`mcp.json.example` 不是活动配置；启用 MCP 前按当前客户端文档在本地配置并审查权限。
