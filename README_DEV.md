# 书院汉字探究 - 开发文档

## 项目地址

**WSL 路径：** `/mnt/d/project/hanzi-writing/shuyuan`

**Windows 访问路径（文件管理器）：** `\\wsl$\Ubuntu\mnt\d\project\hanzi-writing\shuyuan`

**浏览器访问（当前 dev server）：** http://localhost:5173

---

## 启动命令

```bash
cd /home/dev/shuyuan
npm run dev
```

---

## 当前运行的进程

- **Vite dev server** PID=25395
- **监听：** 0.0.0.0:5173（所有网络接口）
- **访问地址：** http://localhost:5173

---

## 端口占用情况

| 端口 | 状态 | 说明 |
|------|------|------|
| 5173 | 占用 | 当前 dev server（PID 25395） |
| 5174 | 空闲 | 无进程 |
| 5175 | 空闲 | 无进程 |

---

## 杀进程命令

### WSL 里杀：
```bash
pkill -f "vite"
```

### Windows CMD 里杀：
```bash
taskkill /F /IM node.exe
```

---

## 已修复的问题（2026-04-18）

1. **两轮后卡住** — `submitAnswer` 原本只接受 `WAITING_ANSWER` 状态，现在 `SHOW_NEW_ANGLE`、`GIVE_HINT` 状态也接受输入
2. **动画太快** — `strokeAnimationSpeed: 1→0.5`，`delayBetweenStrokes: 200→600`
3. **欢迎页打字选字** — 输入框可输入任意预设字（人/日/山/水/木/休/明/林/坐/好）
4. **useState 违规放置** — `inputChar` state 从 if 块内移到组件顶层

---

## 技术栈

- React 18 + Vite + TypeScript
- Tailwind CSS（Khan Academy Kids 配色）
- Hanzi Writer（笔画动画）
- Framer Motion + canvas-confetti（动画特效）
- 纯前端硬编码对话树，无后端

---

## 预设汉字

`人、日、山、水、木、休、明、林、坐、好`

---

## 关键文件

| 文件 | 说明 |
|------|------|
| `src/App.tsx` | 主界面，欢迎页+探究页 |
| `src/components/HanziGrid.tsx` | 田字格+Hanzi Writer 动画 |
| `src/components/AITutor.tsx` | AI 导师头像+聊天气泡 |
| `src/components/ChatInput.tsx` | 儿童友好输入框+语音 |
| `src/components/Celebration.tsx` | 撒花特效 |
| `src/hooks/useDialogueMachine.ts` | 对话状态机 |
| `src/data/hanziScripts.ts` | 10字对话树数据 |
| `tailwind.config.js` | Khan Academy Kids 色板 |
