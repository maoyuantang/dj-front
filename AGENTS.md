# AI 项目入口

进入项目后先阅读 [`ai/bootstrap/bootstrap.md`](ai/bootstrap/bootstrap.md)，再按任务路由读取最小必要上下文。项目事实见 [`ai/knowledge/project.md`](ai/knowledge/project.md)，团队使用方式见 [`AI-INFRASTRUCTURE.md`](AI-INFRASTRUCTURE.md)。

- 代码和配置是实现状态的最高优先级证据；OpenAPI、项目资料和已确认决定按入口中的顺序使用。
- 开始编码前声明假设、范围和成功标准；先读目标文件、直接调用方、导出和相关测试。
- 不猜业务规则，不覆盖用户改动，不泄露凭证，不做任务外重构。
- 未经明确要求不执行 Git 写操作；只运行与改动风险相称的非破坏性检查。
- 结束时分别汇报改动、已验证、未验证和剩余风险，不虚构结果。

本文件是跨工具的简短入口，不保证所有 AI 客户端会自动发现；客户端适配文件只负责导航，不复制权威规则。
