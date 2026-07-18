# 项目知识

- 用途：保存当前技术事实、业务事实和规范术语。
- 边界：`project.md` 记录可审计技术画像，business/glossary 记录有来源业务知识；不放行为规则或任务过程。
- 读取时机：任务需要理解项目现状、业务边界或术语时读取相关文件。
- 更新与责任：Agent/实现者自动更新技术事实；产品、业务和 API 负责人确认业务事实。
- 权威来源：技术以代码/配置为准，业务以 PRD/OpenAPI/会议结论为准；冲突顺序见 [`../bootstrap/bootstrap.md`](../bootstrap/bootstrap.md)。
- 项目示例：新增 store 前读 project；确认会员角色后更新 business/glossary，不从页面名猜权限。

没有真实来源的信息保持结构化待确认，并写清负责人、最晚事件和更新位置。
