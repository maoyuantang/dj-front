# 创建 Store Prompt

- 目标：创建或扩展 Pinia store `{{store_name}}`。
- 必要输入：领域状态、拥有者、消费者、生命周期、持久化/过期/清理策略。
- 开始前读取：bootstrap、global/frontend/architecture/security/testing 规则、现有 stores、调用方和测试。
- 约束：只放跨页面领域状态；局部 UI 留在组件；持久化不得含不必要敏感信息；退出和清理必须明确。
- 执行步骤：确认所有权 -> 定义 state/getters/actions -> 设计错误和并发 -> 接入消费者 -> 测试状态转换与清理。
- 验收标准：边界有真实理由，类型稳定，持久化策略可解释，相关检查通过。
- 输出格式：状态契约、消费者、存储/清理策略、修改文件、验证和风险。

示例：会话状态进入 auth store；某个弹窗是否展开只留在页面组件。
