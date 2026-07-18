# 标准工作流

- 用途：定义重复任务的触发、输入、前置检查、阶段、质量门、失败处理和产物。
- 边界：允许 new-page/API/CRUD/Bug/release 流程；不保存具体需求，也不替代专项规则。
- 读取时机：在 bootstrap 和相关 rules 之后，只选择一个最匹配当前任务的 workflow。
- 更新与责任：真实 scripts、平台流程或质量门变化时，由流程负责人或实际变更者更新。
- 权威来源：统一入口见 [`../bootstrap/bootstrap.md`](../bootstrap/bootstrap.md)，规则见 [`../rules/`](../rules/README.md)。
- 项目示例：OpenAPI 不可用时，`api-integration.md` 要求停止字段实现并输出负责人问题，而不是继续猜。

一次任务同时满足多个流程时，明确主流程并只追加必要质量门，避免重复步骤冲突。
