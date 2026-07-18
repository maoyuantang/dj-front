# Git 与提交规则

AI 默认可以执行 `git status`、`git diff`、`git log` 等只读检查，以识别用户改动和验证范围；未经明确要求不得 add、commit、push、pull、rebase、reset、checkout、stash 或改变远端/历史。不得用破坏性清理隐藏无关改动。

当前 `pre-commit` 应只让 lint-staged 处理 staged 文件，不跑全量 build；`commit-msg` 只执行 commitlint。提交前向人展示变更摘要、真实验证、跳过项和风险。仓库没有可证明的分支/发布策略时保持待确认，不从 conventional commits 推断团队流程。
