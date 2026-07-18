# 规则目录

- 用途：保存 AI 和开发者可执行、可检查的长期工程约束。
- 边界：允许 global/frontend/API/UI/testing/security 等规则；不放 PRD、临时任务、聊天或客户端配置。
- 读取时机：任何任务先读 `global.md`，再按目标选择少量专项规则，禁止整目录默认加载。
- 更新与责任：工程边界、质量门或安全策略变化时，由实际变更者更新，技术负责人复核长期变化。
- 权威来源：代码/配置证明实现现状，本目录约束行为；客户端入口见 [`.cursor`](../../.cursor/README.md) 和 [`.clinerules`](../../.clinerules/README.md)。
- 项目示例：请求层改动读取 global、api、security、architecture，不加载无关 performance 或 git。

规则与实现冲突时先报告并修正文档，不能静默选择对自己方便的一边。
