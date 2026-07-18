# API 审查清单

- [ ] OpenAPI/等价契约的 URL、版本、日期和 operation 可追溯。
- [ ] method、path、参数、body、响应映射、错误和权限与契约一致。
- [ ] 复用统一 request/env，页面没有散落底层请求或响应壳解析。
- [ ] loading、取消/超时、重试、防重、401/403 和错误恢复明确。
- [ ] Token、Authorization、个人数据和服务响应在日志/截图中脱敏。
- [ ] 类型、单测、mock 和真实 Network 证据边界清楚，未联调项已说明。
- [ ] 契约变化已同步 API note、相关类型/测试和必要文档。
