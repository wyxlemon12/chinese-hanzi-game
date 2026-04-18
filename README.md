# 书院 Shuyuan

一个面向儿童自主学习的汉字启蒙 MVP。当前版本围绕 `hanzi-writer` 构建，核心学习闭环是：

1. 看老师演示汉字笔顺
2. 进入描写 quiz
3. 完成关卡并记录奖励与进度

## 当前能力

- 移动端优先的学习端入口
- `首页 / 闯关 / 奖励 / 我的` 四段式导航
- 线性闯关课程流
- 单个汉字关卡的三段式体验
  - 演示段
  - 练习段
  - 结算段
- 基于本地匿名档案的学习进度保存
- 轻量内容后台视图
- Supabase 数据库 schema 草案：[`supabase/schema.sql`](/D:/project/hanzi-writing/shuyuan/supabase/schema.sql)

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Hanzi Writer
- Vitest + Testing Library

## 本地运行

```bash
npm install
npm run dev
```

## 验证命令

```bash
npm run test:ci
npm run typecheck
npm run lint
npm run build
```

## CI/CD

仓库已经补上 Craft 模式的 GitHub Actions 工作流：[`craft.yml`](/D:/project/hanzi-writing/shuyuan/.github/workflows/craft.yml)

- `Coding`：安装依赖、运行 `lint` 和 `typecheck`
- `Testing`：运行 `test:ci`
- `CI-CD`：执行生产构建并上传 `dist` 产物
- `Debug`：任一前序阶段失败时，汇总日志并生成结构化调试摘要

### 接入 GitHub

1. 把当前目录推到 GitHub 仓库
2. 确认 GitHub Actions 已启用
3. 把 `main` 设为受保护分支
4. 将 `Coding`、`Testing`、`CI-CD` 设为必需检查

### 接入 Vercel

1. 在 Vercel 中导入该 GitHub 仓库
2. Framework Preset 选择 `Vite`
3. Build Command 使用 `npm run build`
4. Output Directory 使用 `dist`
5. Production Branch 设为 `main`

仓库中还补了 [`vercel.json`](/D:/project/hanzi-writing/shuyuan/vercel.json) 和 [`.nvmrc`](/D:/project/hanzi-writing/shuyuan/.nvmrc)，方便统一运行环境。

更详细的接入步骤见：

- [GitHub 与 Vercel 接入说明](/D:/project/hanzi-writing/shuyuan/docs/github-vercel-setup.md)

## 数据与架构说明

- 当前运行时使用本地匿名学习档案与本地持久化仓储
- 未来接入 Supabase 时，可沿用 [`supabase/schema.sql`](/D:/project/hanzi-writing/shuyuan/supabase/schema.sql) 中的表结构
- quiz 主流程通过 `hanzi-writer` 的 `quiz()` 能力驱动，关卡完成依赖 quiz 成功完成
