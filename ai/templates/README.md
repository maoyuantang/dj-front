# 记录模板

- 用途：统一任务说明、接口联调和长期决定的记录结构。
- 边界：只保留无真实值的结构模板；不直接写项目事实，不用示例冒充生产数据。
- 读取时机：任务需要跨会话追溯、API 联调记录或长期决定时选择对应模板。
- 更新与责任：团队必填字段或治理流程改变时，由对应负责人更新。
- 权威来源：长期决定写入 [`../memory/decisions.md`](../memory/decisions.md)，API 状态参考 [`../../docs/api/README.md`](../../docs/api/README.md)。
- 项目示例：更换请求库使用 decision-record，单个 OpenAPI operation 联调使用 api-note。

一次性小任务不必机械创建文件；未确认字段必须写负责人和确认事件，不能让 AI 猜。
