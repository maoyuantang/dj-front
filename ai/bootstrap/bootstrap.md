# 项目 AI 统一入口

## 项目概况

`dj-front` 是以微信小程序为主要目标的 Vue 3 + TypeScript + uni-app 前端，使用 Vite 和 npm。当前已落地 Pinia、uview-plus、基于 luch-request 的统一请求层、集中 env、导航鉴权脚手架、Vitest、ESLint、Stylelint、Prettier、Husky、lint-staged 和 commitlint。入口为 `src/main.ts`，页面在 `src/pages.json` 注册；精确版本和当前能力以 [`../knowledge/project.md`](../knowledge/project.md) 为准。

## 事实优先级

发生冲突时按以下顺序处理：

1. 代码、配置、锁文件和实际命令结果，用于判断实现现状。
2. 已验证的 OpenAPI，用于判断接口契约。
3. `docs/` 与 `ai/knowledge/` 中有来源的项目资料。
4. `ai/memory/decisions.md` 中已接受的长期决定。
5. 当前任务 Prompt 中的临时信息。

团队明确提供但仓库无法自证的外部事实，例如 Swagger UI 地址，应标为“团队已提供、可用性待验证”，不能直接降级为未知。若临时指令与代码或已接受决定冲突，先说明冲突再请求确认。

## 按任务读取

| 任务 | 最小必读内容 | 按需追加 |
|---|---|---|
| 新页面/组件 | `global.md`、`frontend.md`、`ui.md`、`architecture.md`、`new-page.md`、目标代码 | 相关 PRD、设计、API 规则 |
| API 联调 | `global.md`、`api.md`、`security.md`、`docs/api/README.md`、`api-integration.md` | 相关 OpenAPI operation、页面/store |
| Store/鉴权 | `global.md`、`frontend.md`、`architecture.md`、`security.md`、相关调用方 | API 契约、持久化决定 |
| Bug 修复 | `global.md`、`bugfix.md`、目标边界和最近测试 | 与根因相关的专项规则 |
| 代码审查 | `global.md`、`testing.md`、`security.md`、`review-code.md`、目标 diff | 相关架构/API/UI 规则；默认不改代码 |
| 发布检查 | `global.md`、`testing.md`、`security.md`、`release-check.md`、部署资料 | 目标平台和环境资料 |

不要默认加载整个 `ai/` 或完整 OpenAPI；先定位任务边界和相关 operation。

## 标准执行流程

1. 复述目标、范围、非目标、假设和可验证的成功标准。
2. 检查工作区并保护用户已有改动；读取目标文件、调用方、导出、公共工具和最近测试。
3. 以最小正确改动实现；遇到多个合理解释或高副作用决定时集中询问并给出推荐方案。
4. 运行与风险相称的真实检查，区分只检查的命令与会自动修复文件的命令。
5. 仅当事实或长期决定改变时更新 knowledge、docs 或 memory，不把聊天过程写成长期记忆。
6. 按“改动 / 已验证 / 未验证 / 风险 / 后续”汇报；失败、跳过和平台人工验收必须分开说明。

## 不可违反的边界

- 不猜技术栈、接口字段、权限、产品范围或设计意图，不把脚手架占位当成真实业务。
- 不写入或输出 Token、Cookie、密码、私钥、真实 `.env` 值和未脱敏的个人数据。
- 不覆盖无关用户改动，不顺手重构、升级依赖或格式化任务外文件。
- 未经明确要求不执行 add、commit、push、pull、rebase、reset、checkout、stash 等 Git 写操作。
- 不把 unit test 或 H5 build 说成微信开发者工具、真机、网络联调或发布验收。
- 环境变量缺失必须明确失败；不得静默使用空字符串或把生产地址写死在源码中。
