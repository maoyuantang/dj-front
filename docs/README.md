# 项目资料

`docs/` 是人和 AI 共用的项目资料库，不是 AI 行为规则。这里保存已确认的 API、设计、需求、架构、部署和人工变更摘要；不保存密钥、临时聊天、无来源猜测或重复的工程规则。任务涉及某类事实前读取对应子目录，来源或事实变化后由资料负责人/实际变更者更新。

| 目录 | 内容 | 项目示例 |
|---|---|---|
| [`api/`](api/README.md) | OpenAPI 来源和单 operation 联调资料 | 后端 Swagger UI 地址与 JSON 同步状态 |
| [`design/`](design/README.md) | 设计稿、Token、字体、素材和验收 | 首个页面的 MasterGo/Figma 版本 |
| [`prd/`](prd/README.md) | 用户、范围、流程和验收 | 首个真实业务页面需求 |
| [`architecture/`](architecture/README.md) | 当前模块和平台边界 | request/env/store/路由位置 |
| [`deployment/`](deployment/README.md) | 环境、构建、上传、发布和回滚 | 微信测试版上传流程 |
| [`changelog/`](changelog/README.md) | 面向人的里程碑摘要 | 一次基础设施升级说明 |

代码和配置与文档冲突时，以代码证明当前实现，并报告/修正文档；业务含义仍需对应权威资料确认。实现规则见 [`../ai/rules/`](../ai/rules/README.md)。
