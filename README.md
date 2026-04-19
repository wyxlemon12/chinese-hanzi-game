# Shuyuan

一个面向儿童自主学习的汉字启蒙原型项目，当前版本采用纯前端实现。

## 当前能力

- 项目冒险：预设主题任务线学习
- 自由单字：输入一个单字立即进入学习
- 新探险地图：输入知识点或随机生成 10 个单字组成的一组临时任务地图
- 单字学习页：演示、描一描、结算、古诗卡
- 本地持久化：
  - 学习进度
  - 自由单字结果
  - 临时探险地图

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Hanzi Writer
- Vitest + Testing Library
- Playwright

## 本地运行

```bash
npm install
npm run dev
```

## 验证命令

```bash
npm run test:ci
npm run test:e2e
npm run lint
npm run build
```

## 架构说明

- 当前项目不依赖 Supabase 或其他后端服务
- 所有内容生成、地图生成和持久化都在前端完成
- `新探险地图` 使用本地规则和本地内容种子生成
- `自由单字` 使用本地内容库与本地补全逻辑

## 部署

项目可以直接部署到静态托管平台，例如 Vercel。

构建配置：

- Build Command: `npm run build`
- Output Directory: `dist`
