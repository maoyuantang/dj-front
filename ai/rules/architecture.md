# 架构规则

页面/组件可以依赖 composable、store、API 和通用工具，底层模块不能反向依赖页面或 UI。API 层负责传输与领域字段映射，不导入组件；store 负责跨页面领域状态，不承担页面布局；页面负责组合状态并呈现 loading/empty/error 等用户状态。

共享组件应有两个真实使用点，或拥有稳定且独立的交互边界；单次页面片段先留在页面内。公共工具不得偷偷读取页面状态或真实环境值。改变请求响应壳、鉴权持久化、页面/分包归属、平台策略、公共依赖或模块所有权时，先评估调用方和迁移范围，并在 `ai/memory/decisions.md` 记录长期决定。

当前已确认边界见 [`../knowledge/project.md`](../knowledge/project.md) 和 [`../../docs/architecture/README.md`](../../docs/architecture/README.md)。正例：API 模块返回领域类型，页面决定展示。反例：request 层直接弹业务页面 Toast 或跳转某个具体业务页。
