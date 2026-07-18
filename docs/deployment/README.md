# 构建与发布

本目录记录经验证的环境来源、构建、平台上传、审核、发布、回滚和责任人，不保存真实环境值或把本地 build 当成发布完成。发布检查前由开发者/AI 读取；发布/平台负责人在流程或环境变化时更新。

当前 `package.json` 提供 H5、微信小程序和其他平台的 dev/build scripts，以及 type-check、lint、stylelint、format check 和 unit test。Cline 初始化记录 H5 build 通过，但这不证明微信 build、开发者工具、真机、网络或生产发布。

待确认：CI、各环境注入方式、微信开发者工具导入目录、appid/合法域名、上传审核、版本策略、发布负责人和回滚方案。仓库无团队流程证据；发布/平台负责人最晚在首次测试版上传前确认，并在这里记录来源和步骤。发布前按 [`release-check`](../../ai/workflows/release-check.md) 使用真实命令，未经明确授权不上传或发布。
