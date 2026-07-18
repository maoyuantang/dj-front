# Cline 适配说明

- 用途：为 Cline 提供与模型无关的项目规则入口。
- 边界：允许核心/frontend/API 薄入口；不绑定 GPT/Claude/Gemini，不复制权威规则全文。
- 读取时机：Cline 支持项目规则发现时加载；不支持时按官方设置人工启用。
- 更新与责任：Cline 规则机制或权威路径变化时，由工具维护者同步并记录实际启用方式。
- 权威来源：[`ai/bootstrap/bootstrap.md`](../ai/bootstrap/bootstrap.md) 和 [`ai/rules/`](../ai/rules/README.md)。
- 项目示例：接口任务加载 `20-api.md` 后继续读取权威 API/security 文档。

不能仅因这些文件存在就声称当前 Cline 版本一定会自动发现它们。
