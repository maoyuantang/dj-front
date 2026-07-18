# 项目画像

本文件记录 Agent 可从仓库重新审计的技术事实。依赖、scripts、路由、目录或基础设施代码变化后由执行变更的人或 Agent 同步更新；版本以 `package.json` 和锁文件为准，不在这里复制完整依赖表。

| 项目事实 | 值 | 证据 | 状态 |
|---|---|---|---|
| 项目/包名 | `dj-front` | 仓库目录、`package.json#name` | 已确认 |
| 框架与语言 | Vue 3 + TypeScript + uni-app | `package.json`、`tsconfig.json`、源码 | 已确认 |
| 构建与包管理 | Vite 5 + npm，lockfile v3 | `vite.config.ts`、`package-lock.json` | 已确认 |
| 主要目标 | 微信小程序；仓库也保留 H5 等平台 scripts | 团队约定、`package.json`、`manifest.json` | 主要目标已确认；其他端验收待确认 |
| 入口与路由 | `src/main.ts`、`src/pages.json` | 源码 | 已确认 |
| 当前页面 | 首页 `pages/index/index`；登录占位页 `pages/auth/login/index` | `src/pages.json` | 已确认；登录页仅为可替换脚手架 |
| TabBar/分包/预下载 | 当前均未配置 | `src/pages.json` | 已确认现状；首次出现真实业务域时决定 |
| 状态管理 | Pinia 2；当前有 auth store | `package.json`、`src/stores/auth.ts` | 已落地 |
| UI 组件库 | uview-plus 3，已注册并引入基础样式 | `package.json`、`src/main.ts` | 已落地；项目主题规范待设计确认 |
| 请求层 | luch-request 3，统一实例位于 `src/api/request.ts` | 依赖与源码 | 已落地；真实响应壳/错误码待 OpenAPI 确认 |
| 环境变量 | `VITE_API_BASE_URL` 由 `src/config/env.ts` 集中读取；缺失或占位时抛错 | `.env.example`、源码 | 已落地 |
| 鉴权脚手架 | storage key 为 `dj_access_token`；Bearer 注入；401 清理并跳登录 | `src/utils/auth.ts`、request、guard | 已落地的默认脚手架；真实后端语义待联调确认 |
| 导航拦截 | `uni.addInterceptor('navigateTo')`；首页和登录页公开 | `src/router/guard.ts`、`src/main.ts` | 已落地；目前只拦截 `navigateTo` |
| 代码质量 | type-check、ESLint、Prettier、Stylelint | `package.json` 和根配置 | 已落地 |
| 测试 | Vitest 1 + Vue Test Utils + jsdom | `package.json`、`vitest.config.ts` | 已落地；单测不证明小程序行为 |
| 提交卡口 | Husky + lint-staged + commitlint | `.husky/`、配置、scripts | 已落地 |
| 已执行基线 | Cline 初始化报告记录 type-check、lint、stylelint、format check、unit test 和 H5 build 通过 | 初始化命令输出/本次工作区 | 历史结果；后续任务需重新按风险验证 |
| 微信验收 | 微信构建、开发者工具与真机结果未记录在 AI 文档 | 无验收记录 | 待确认 |
| Swagger UI | `http://localhost:3000/api-docs` | 团队在 Bootstrap 输入中提供 | 地址已知；本次连接失败，可用性待验证 |
| OpenAPI JSON | 尚未确认 | 无有效 JSON 响应或后端配置证据 | 待确认 |
| 产品/权限/设计/发布 | 仓库暂无 PRD、权限矩阵、设计源和发布责任资料 | 审计结果 | 待确认 |

待确认项不能靠常见做法补齐。OpenAPI 由后端/API 负责人最晚在首次联调前确认；业务和权限由产品/业务负责人最晚在首个相关功能评审前确认；设计由设计负责人最晚在首个视觉还原任务前确认；发布流程由发布负责人最晚在首次测试版上传前确认。确认后分别更新 `docs/`、`business.md`、本表和相关规则。
