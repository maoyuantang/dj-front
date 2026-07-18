# 接入 API Prompt

- 目标：接入 OpenAPI operation `{{api_operation}}`。
- 必要输入：已验证契约来源、鉴权/错误语义、目标页面、验收和联调环境。
- 开始前读取：bootstrap、project、global/api/architecture/security/testing 规则、`docs/api/README.md`、api-integration workflow、现有 request 和调用方。
- 约束：复用 `src/api/request.ts`；不编造字段、成功码、凭证或生产地址；只读取相关 operation。
- 执行步骤：验证规范 -> 定位 operation -> 定义输入输出 -> 映射传输字段 -> 接入 loading/error/auth/防重 -> 单测与脱敏 Network 联调。
- 验收标准：代码可追溯到契约，错误和鉴权策略明确，相关检查通过，真实网络未测时明确说明。
- 输出格式：operation/来源、字段映射、修改文件、命令与 Network 证据、待确认项。

示例：接入 `getProfile` 时引用真实 operationId；若 JSON 地址仍不可用，停止编写生产类型并列出 API 负责人需要确认的最小信息。
