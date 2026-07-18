# 测试与验证规则

只检查的命令与会改文件的命令必须分开。当前可用检查包括 `npm run type-check`、`npm run lint`、`npm run stylelint`、`npm run format:check`、`npm run test:run`、`npm run build:h5` 和 `npm run build:mp-weixin`；执行前按改动和目标平台选择，不机械全跑。

Vitest 使用 jsdom，`uni.*` 只在被测单元边界做可控 mock。测试应编码业务意图、状态转换和回归条件，不只断言组件能 mount 或函数被调用。Store、env、字段映射、鉴权清理等稳定逻辑适合单测；页面导航、授权弹窗、安全区、平台生命周期和真实网络需要开发者工具/真机。

不得把 unit test、type-check、H5 build、微信 build、开发者工具和真机验收互相替代。只报告实际运行的命令、退出结果和失败证据；跳过项说明原因和人工复核步骤。正例：分别记录“单测通过”和“微信真机未测”。反例：仅因 build 通过就说功能正确。
