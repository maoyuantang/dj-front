# MCP 说明与模板

- 用途：记录 Swagger、设计和 Browser/DevTools MCP 的状态、接入边界和无凭证示例。
- 边界：允许说明和空配置模板；不创建活动连接、不虚构 Server、不保存真实 Token。
- 读取时机：团队准备让 AI 访问外部工具或排查 MCP 状态时读取。
- 更新与责任：工具/安全负责人验证客户端、Server、权限和数据范围后更新。
- 权威来源：实际配置格式以当前客户端官方文档为准；API/设计事实分别回写 [`docs/api`](../docs/api/README.md) 和 [`docs/design`](../docs/design/README.md)。
- 项目示例：AI 可直接读取已验证 OpenAPI JSON，不需要为了接口契约先配置 MCP。

当前没有 MCP Server 已启用；`servers.example.json` 和 Cursor 示例均不是活动配置。
