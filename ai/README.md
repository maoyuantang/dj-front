# AI 工作区说明

`ai/` 存放 AI 可选择性读取的规则、任务模板、流程、事实和长期记忆，不存放业务源码、真实密钥或整段聊天。读取顺序是：先读 [`bootstrap/bootstrap.md`](bootstrap/bootstrap.md)，再按任务选择少量 rules、knowledge/docs、一个 prompt 和一个 workflow；禁止整树默认加载。

- `rules` 约束“必须/禁止怎么做”；`prompts` 帮人把一次任务说完整；`workflows` 规定多阶段交付方式。
- `knowledge` 记录当前事实；`memory` 只保留已确认的长期决定和重要事件；`reviews` 保存有生命周期的审查报告。
- 技术事实由 Agent 在代码/配置变化后更新，业务事实和长期决定必须由负责人或真实资料确认。

示例：接入一个接口时读取 bootstrap、project、api/security rules、create-api prompt、api-integration workflow 和对应 OpenAPI operation，不读取无关 UI、release 或全部 API 规范。
