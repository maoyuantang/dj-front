# API 联调工作流

- 触发条件：有可验证的 OpenAPI operation 或接口负责人提供的等价契约。
- 输入：规范 URL/版本/日期、operation、鉴权/错误、目标 UI、联调环境和验收。
- 前置检查：验证 JSON 顶层 `openapi`/`swagger`，定位 operation，检查 env、`src/api/request.ts` 和现有类型。
- 阶段：同步/定位契约 -> 定义输入输出 -> 字段映射 -> 接入 loading/error/auth/取消防重 -> 单测 -> 脱敏 Network 联调。
- 质量门：实现可追溯到契约，响应/错误/401/403 明确，相关检查通过，真实网络证据与 mock 分开。
- 失败处理：URL、operation 或关键语义缺失时停止生产实现，列出最小负责人问题；不伪造 `openapi.json`。
- 完成产物：operation 与来源、映射、代码文件、API note、命令/Network 结果和未解决项。
