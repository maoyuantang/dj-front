# Swagger / OpenAPI 与 MCP

Swagger UI 是人查看接口的网页，OpenAPI JSON 是机器契约，MCP 只是可选连接方式，三者不能混为一谈。团队提供的 UI 地址为 `http://localhost:3000/api-docs`，本次连接失败；JSON 地址仍待从后端配置、UI Network 或有效响应确认。

接入前只用安全 GET/HEAD 验证 JSON 顶层 `openapi`/`swagger`，不保存 HTML、不调用写接口、不把生产 Token 放进配置。确认后更新 [`docs/api/README.md`](../docs/api/README.md)。当前状态：未配置 Swagger MCP。
