# AI 协作基础设施使用手册

## 这套东西解决什么

这套基础设施让人和 AI 共用同一组项目事实、工程规则和交付流程。它首先为 AI 服务，减少每次重复解释技术栈、目录和边界；同时也让新队友知道 AI 为什么会读取这些文件、哪些内容可信、哪些仍需人确认。

它不替代源码、PRD、设计评审、OpenAPI、代码审查、测试、微信平台验收或发布责任。不同客户端的自动发现能力也不同，不能假定 Cursor、Cline、Codex 会自动加载完全相同的文件。

统一权威入口是 [`ai/bootstrap/bootstrap.md`](ai/bootstrap/bootstrap.md)。本手册解释“怎么用”，不复制全部规则；若本手册与代码或权威规则冲突，按事实优先级处理并修正文档。

## 它如何运行

```text
任务
  -> Cursor / Cline / Codex 薄入口
  -> ai/bootstrap/bootstrap.md
  -> 按任务选择 rules + knowledge + docs + workflow
  -> 读取目标代码和调用边界
  -> 最小范围修改与分层验证
  -> 汇报改动、已验证、未验证和风险
  -> 仅在事实或长期决定改变时回写 knowledge / docs / memory
```

事实冲突顺序：代码与配置 > 已验证 OpenAPI > `docs/` 和 `ai/knowledge/` > 已接受的 `ai/memory/decisions.md` > 临时 Prompt。代码用于证明“现在实现了什么”；团队明确提供的外部事实应保留来源和验证状态，例如 Swagger UI 可以“地址已提供，但当前不可达”，不能被写成完全未知。

## 完整工程 Bootstrap 怎么运行

Bootstrap 不只是生成 Markdown。团队先在可复用模板中选定技术契约；Agent 在计划阶段审计仓库，把每项归类为“已落地、已安装未配置、缺失必须落地、需要确认、阻塞”，给出兼容版本、修改范围、风险、验收和恢复方式。可逆的常规选择直接给推荐默认包，只有会改变真实产品、安全、生产或不可逆状态的事项才集中提问。计划获批后，Agent 才安装依赖、修改基础设施代码和配置、运行检查，并依据最终仓库重新生成 AI 文档。

安装或验证失败必须保留错误证据和恢复路径，不能把半成品写成完成。重复执行采用增量对账：保留人工业务知识、决定和 Review，只修正失效事实、补缺文件和更新技术库存。

当前 `dj-front` 已完成 Pinia、uview-plus、luch-request、env、鉴权脚手架、质量/测试和 hooks 的首次落地。它们的真实状态见 [`ai/knowledge/project.md`](ai/knowledge/project.md)，不是继续长期标注“目标约定尚未落地”。

## 目录地图

| 位置 | 用途 | 何时读取 | 谁在何时维护 |
|---|---|---|---|
| [`docs/`](docs/README.md) | PRD、API、设计、架构和发布等项目资料 | 任务涉及对应事实前 | 资料负责人或实际变更者在来源变化时 |
| [`ai/rules/`](ai/rules/README.md) | 可执行、可检查的长期工程约束 | 修改对应代码前 | 技术负责人和改变工程边界的人 |
| [`ai/prompts/`](ai/prompts/README.md) | 页面、API、Store、Bug 等单次任务输入模板 | 任务描述不完整时 | 经常执行该任务的人 |
| [`ai/workflows/`](ai/workflows/README.md) | 多阶段步骤、质量门、失败处理和产物 | 新页面、CRUD、联调、修 Bug、发布 | 流程或工程负责人 |
| [`ai/knowledge/`](ai/knowledge/README.md) | 当前技术和业务事实 | 需要理解项目现状时 | Agent 自动维护技术事实；业务负责人确认业务事实 |
| [`ai/memory/`](ai/memory/README.md) | 已确认的长期决定和重要事件 | 任务涉及历史约定时 | 决策参与者或执行治理变更的人 |
| [`ai/reviews/`](ai/reviews/README.md) | 有生命周期的审查报告 | Review 任务 | Reviewer；问题关闭后归档或删除 |
| [`.cursor/`](.cursor/README.md) | Cursor 薄适配入口 | Cursor 按 glob 自动或人工加载 | 工具配置维护者 |
| [`.clinerules/`](.clinerules/README.md) | Cline 薄适配入口 | Cline 支持的项目规则机制加载 | 工具配置维护者 |
| [`.mcp/`](.mcp/README.md) | MCP 状态、接入说明和无凭证示例 | 计划接入外部工具时 | 工具/安全负责人 |
| [`AGENTS.md`](AGENTS.md) | Codex 等工具可读的根入口 | AI 第一次进入项目 | AI 基础设施维护者 |

不要把聊天全文、猜测、真实密钥或重复规则放入这些目录。客户端入口只负责导航，详细规则始终回到 `ai/rules/`。

## 一次正常任务怎么跑

- 新页面：入口 + `project.md` + frontend/ui/architecture 规则 + new-page workflow + 对应 PRD/设计；涉及接口时才追加相关 OpenAPI operation 和 API 规则。
- API 联调：入口 + `project.md` + api/security 规则 + `docs/api/README.md` + api-integration workflow；不把完整 OpenAPI 无差别塞入上下文。
- Bug 修复：入口 + global + bugfix workflow + 复现所需代码；先获得证据和根因，再读取与根因相关的专项规则并做最小修复。

## 新人十分钟上手

1. 阅读本手册、[`project.md`](ai/knowledge/project.md) 和统一入口。
2. 给 AI 一个有范围和验收标准的低风险任务，要求它先列出准备读取的最小文件集。
3. 检查 AI 是否保护已有改动、只改任务范围，并用代码而不是文档猜测判断现状。
4. 查看 diff 和命令输出；确认“通过”的检查真的运行过，微信 UI/授权/真机仍单独人工验收。

首次任务可以直接使用：

```text
请先阅读 ai/bootstrap/bootstrap.md，复述目标、范围、假设和成功标准，并列出本任务需要读取的最小文件集。不要全量读取 ai/ 或完整 OpenAPI。保护工作区已有改动，只实现任务范围；结束时分别汇报改动、已验证、未验证和风险，不执行 Git 写操作。
```

## 谁负责完善什么

AI 每次审计后可以自动维护，不应长期让人逐个手填：

- 技术栈和真实版本、包管理器、npm scripts。
- 目录结构、入口、页面、路由、分包和已安装工具。
- env、request、store、鉴权等基础设施位置和当前状态。
- 测试/质量配置、真实可用命令及已经执行的检查记录。

只能由人或真实资料确认，AI 不能猜：

- 项目服务的用户、产品范围和非目标。
- 业务规则、核心实体、角色权限和公司术语。
- 设计稿链接、视觉验收标准和素材授权。
- 真实 API 语义、生产环境、发布负责人和运维责任。

AI 可以从 PRD、会议纪要、OpenAPI、设计稿中整理草稿，但必须保留来源并由负责人确认。

## 按事件维护，不用一次填完

| 事件 | 更新内容 |
|---|---|
| 首个真实页面开始 | 对应 PRD、设计来源、页面验收和业务术语 |
| 首次接口联调 | OpenAPI URL/快照、响应壳、鉴权/错误码、API note |
| 权限模型确认 | business、权限矩阵、鉴权决定和相关规则 |
| 首次测试版/发布 | deployment、环境来源、平台验收、发布/回滚责任 |
| 长期技术决定产生 | `decisions.md`，包含原因、替代和影响 |
| 技术栈或目录实际变化 | `project.md`、架构文档和相关 rules |

未知项也不是空白占位。统一写清“当前状态 / 为什么未知 / 负责人角色 / 最晚确认事件 / 确认依据 / 确认后更新文件”，让 AI 知道何时停止猜测、下一步找谁。

## 固定工程政策与默认决策包

- env 缺失明确失败，只提交 `.env.example`；真实环境值不得进入仓库或日志。
- check 命令与会改文件的 fix 命令分开；hooks 只处理 staged 文件和 commit message。
- unit test/H5 build 与微信开发者工具、真机、真实网络和发布验收分层汇报。
- 版本/peer/engine 冲突时停止，提供证据和恢复路径，不擅自升级无关依赖。
- 初始化默认使用 `VITE_API_BASE_URL`、按项目名派生的 Token key、Bearer 注入、幂等 401 清理和可替换登录占位页；真实联调时必须复核。
- 没有真实业务页时不造空分包；首次新增非核心业务域时再决定分包与预下载。
- Agent 需要提问时必须带“证据、为什么需要、推荐方案、替代方案、延期影响、最短回复方式”，不能只把开放题丢给人。

## 常见误用与失效识别

- 全量加载 `ai/` 或完整 OpenAPI，导致浪费上下文和引入无关约束。
- 在 Cursor、Cline、AGENTS 中复制多份规则，后来只改一份造成漂移。
- 把脚手架默认值、目录名或模型推测写成真实业务事实。
- 把 `.mcp/*.json` 示例当成 MCP 已启用，把 timeline 当 Git changelog，把 memory 当聊天归档。
- 文档中的路径、版本、命令与代码不一致，或规则引用不存在的工具，说明文档已经失效；当前任务应报告并最小修正。
- 在文档、日志、截图或示例配置中留下 Token、Cookie、真实 `.env`、私钥或个人数据。

发现问题时，由发现者提交最小文档修正；涉及长期规则或架构改变时由技术负责人复核并写入 decisions。
