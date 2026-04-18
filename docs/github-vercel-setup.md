# GitHub 与 Vercel 接入说明

这份文档用于把当前 `Shuyuan` 项目正式接入：

1. GitHub 仓库与 GitHub Actions
2. Vercel 自动部署

完成后，你会得到下面这条完整链路：

- 本地开发并提交代码
- 推送到 GitHub
- GitHub Actions 自动运行 `Coding / Testing / CI-CD / Debug`
- Pull Request 自动显示检查结果
- Vercel 自动生成预览环境
- 合并到 `main` 后自动发布生产环境

---

## 一、准备工作

开始之前，请先确认本地已经具备这些条件：

- 已安装 Git
- 已安装 Node.js 22
- 当前项目已经能本地通过下面这些命令

```bash
npm install
npm run test:ci
npm run lint
npm run build
```

如果这些命令本地都能通过，再继续后面的 GitHub 和 Vercel 接入。

---

## 二、接入 GitHub

### 1. 创建 GitHub 仓库

去 GitHub 新建一个仓库，建议：

- Repository name: `shuyuan`
- Visibility: 按你的需要选择 `Private` 或 `Public`
- 不要勾选自动生成 `README`、`.gitignore` 或 license

原因是本地项目已经有这些文件了，避免初始化后冲突。

---

### 2. 在本地初始化 Git 仓库

如果当前目录还不是 Git 仓库，在项目根目录执行：

```bash
git init
git branch -M main
```

然后把当前所有文件加入版本控制：

```bash
git add .
git commit -m "feat: initialize shuyuan mvp"
```

---

### 3. 绑定远程仓库并首次推送

把下面的 `<YOUR_GITHUB_REPO_URL>` 替换成你自己的 GitHub 仓库地址：

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

示例：

```bash
git remote add origin https://github.com/yourname/shuyuan.git
git push -u origin main
```

推送完成后，刷新 GitHub 仓库页面，确认代码已经上传。

---

### 4. 启用 GitHub Actions

项目里已经准备好了工作流文件：

- [craft.yml](/D:/project/hanzi-writing/shuyuan/.github/workflows/craft.yml)

推送后 GitHub 会自动识别它。

检查方式：

1. 打开仓库页面
2. 进入 `Actions`
3. 看到名为 `Craft Pipeline` 的工作流

第一次 push 到 `main` 后，应该会自动触发一次工作流。

---

### 5. 理解这条工作流在做什么

当前工作流有四个阶段：

#### `Coding`

会执行：

```bash
npm ci
npm run lint
npm run typecheck
```

用途：

- 检查代码风格
- 检查 TypeScript 类型错误

#### `Testing`

会执行：

```bash
npm ci
npm run test:ci
```

用途：

- 运行当前 Vitest 测试

#### `CI-CD`

会执行：

```bash
npm ci
npm run build
```

用途：

- 验证生产环境构建是否成功
- 上传 `dist` 构建产物

#### `Debug`

只会在前面任一阶段失败时触发。

用途：

- 下载日志
- 生成失败摘要
- 上传调试产物

调试脚本在：

- [ci-debug-report.mjs](/D:/project/hanzi-writing/shuyuan/scripts/ci-debug-report.mjs)

---

### 6. 配置分支保护

为了让这条管线真正变成“项目管理入口”，建议把 `main` 设为受保护分支。

GitHub 设置路径：

1. 进入仓库
2. `Settings`
3. `Branches`
4. `Add branch protection rule`

建议配置：

- Branch name pattern: `main`
- 勾选 `Require a pull request before merging`
- 勾选 `Require status checks to pass before merging`

然后把下面这些检查设为必需：

- `Coding`
- `Testing`
- `CI-CD`

如果后面接入了 Vercel，也建议把 Vercel 的部署状态一起设成必需检查。

---

### 7. 推荐的日常使用方式

不要直接在 `main` 上改代码，建议使用分支开发：

```bash
git checkout -b feat/add-new-lessons
```

开发完成后：

```bash
git add .
git commit -m "feat: add new lesson content"
git push -u origin feat/add-new-lessons
```

然后在 GitHub 上创建 Pull Request。

这样你会得到：

- 自动跑 `Coding / Testing / CI-CD`
- PR 页面可看到是否通过
- 后面接入 Vercel 后还能看到预览环境

---

## 三、接入 Vercel

### 1. 登录 Vercel

打开 [Vercel](https://vercel.com/) 并登录。

建议直接用 GitHub 账号登录，这样接入仓库最方便。

---

### 2. 导入 GitHub 仓库

在 Vercel 里：

1. 点击 `Add New...`
2. 选择 `Project`
3. 选择刚刚推送好的 GitHub 仓库 `shuyuan`

如果看不到仓库：

- 检查 GitHub 授权是否给了 Vercel
- 检查仓库是不是在正确的 GitHub 账号/组织下

---

### 3. 设置构建参数

导入项目时，按下面配置：

- Framework Preset: `Vite`
- Root Directory: 项目根目录
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

仓库里已经有这些辅助文件：

- [vercel.json](/D:/project/hanzi-writing/shuyuan/vercel.json)
- [.nvmrc](/D:/project/hanzi-writing/shuyuan/.nvmrc)

它们会帮助 Vercel 使用统一的构建约定。

---

### 4. 设置生产分支

在 Vercel 项目设置中确认：

- Production Branch = `main`

这样之后：

- Push 到功能分支或 PR 分支时，Vercel 会生成 Preview
- 合并到 `main` 时，Vercel 会自动发布 Production

---

### 5. 环境变量

当前项目第一版没有强依赖外部环境变量，可以先不配。

如果以后接入 Supabase，再在 Vercel 项目里补这些变量：

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

注意：

- 以 `VITE_` 开头的变量才会被前端读取
- 不要把服务端私钥放到前端环境变量里

---

### 6. 首次部署验证

导入完成后，Vercel 会自动做一次首次部署。

你需要确认：

1. 构建成功
2. 访问部署 URL 可以打开页面
3. 首页能正常显示
4. 能进入关卡页面
5. 生产构建资源能正常加载

如果失败，先看 Vercel 的 Build Logs。

---

## 四、把 GitHub 和 Vercel 串起来

完成上面两部分后，推荐按下面方式工作：

### 开发新功能

```bash
git checkout -b feat/your-feature
```

本地开发后先自测：

```bash
npm run test:ci
npm run lint
npm run build
```

然后提交并推送：

```bash
git add .
git commit -m "feat: your feature"
git push -u origin feat/your-feature
```

### 创建 Pull Request

创建 PR 后：

- GitHub Actions 会自动跑检查
- Vercel 会自动生成 Preview 环境

你可以在 PR 页面检查：

- GitHub Actions 是否全部通过
- Vercel Preview 是否可访问

### 合并到 main

PR 通过后合并到 `main`：

- GitHub Actions 会再次运行
- Vercel 会自动发布生产环境

---

## 五、失败时怎么排查

### 情况 1：GitHub Actions 失败

去 GitHub 仓库：

1. `Actions`
2. 打开失败的 `Craft Pipeline`
3. 看失败阶段

常见含义：

- `Coding` 失败：通常是 lint 或 typecheck 问题
- `Testing` 失败：通常是测试断言或运行环境问题
- `CI-CD` 失败：通常是生产构建失败

如果 `Debug` 也跑了，可以下载它上传的产物，里面会有：

- 日志文件
- 调试摘要

---

### 情况 2：Vercel 部署失败

去 Vercel 项目：

1. 打开对应部署
2. 查看 `Build Logs`

常见原因：

- Node 版本不一致
- 环境变量缺失
- 构建命令或输出目录配置错误
- 前端代码引用了浏览器环境之外不可用的对象

---

### 情况 3：GitHub Actions 通过，但 Vercel 页面打不开

优先检查：

1. `Output Directory` 是否是 `dist`
2. Vercel 是否使用了正确的生产分支 `main`
3. 路由是否都在前端内处理
4. 浏览器控制台是否有资源 404 或脚本报错

---

## 六、建议你第一次这样做

第一次接入时，建议按这个顺序：

1. 在 GitHub 创建空仓库
2. 本地 `git init`
3. 提交并推送到 `main`
4. 确认 GitHub Actions 首次运行成功
5. 再去 Vercel 导入仓库
6. 确认首次部署成功
7. 再开启 `main` 分支保护

这样排错最简单，因为你能清楚分辨问题出在 GitHub 还是 Vercel。

---

## 七、你后面最常用的命令

### 本地验证

```bash
npm run test:ci
npm run typecheck
npm run lint
npm run build
```

### 新功能开发

```bash
git checkout -b feat/your-feature
git add .
git commit -m "feat: your feature"
git push -u origin feat/your-feature
```

### 修复线上问题

```bash
git checkout -b fix/bug-name
```

修好后照常提 PR，让 GitHub Actions 和 Vercel Preview 先验证，再合并到 `main`。

---

## 八、仓库里和上线相关的关键文件

- GitHub Actions 工作流：
  - [craft.yml](/D:/project/hanzi-writing/shuyuan/.github/workflows/craft.yml)
- 调试摘要脚本：
  - [ci-debug-report.mjs](/D:/project/hanzi-writing/shuyuan/scripts/ci-debug-report.mjs)
- Vercel 配置：
  - [vercel.json](/D:/project/hanzi-writing/shuyuan/vercel.json)
- Node 版本约束：
  - [.nvmrc](/D:/project/hanzi-writing/shuyuan/.nvmrc)
- 项目主说明：
  - [README.md](/D:/project/hanzi-writing/shuyuan/README.md)

---

如果你想继续，我下一步可以直接帮你补一份：

- `GitHub 仓库初始化命令清单`

或者：

- `Vercel 后台逐项点击说明`

这样你可以完全照图操作。
