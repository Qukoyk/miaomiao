# 苗苗捉迷藏

一款 3D 捉迷藏网页游戏。

---

## 游戏说明

### 游戏模式

- **逃离者模式**: 你扮演逃离者，躲避 AI 鬼的追捕，坚持 5 分钟获胜
- **鬼模式**: 你扮演鬼，追捕 AI 逃离者，抓到所有人获胜

### 操作方式

| 按键 | 功能 |
|------|------|
| W/↑ | 向前移动 |
| S/↓ | 向后移动 |
| A/← | 向左移动 |
| D/→ | 向右移动 |
| Shift | 冲刺 |
| 鼠标移动 | 调整视角 |
| Esc | 返回菜单 |

### 游戏规则

1. 鬼触碰逃离者 3 次后，逃离者会被关押
2. 被关押的逃离者可以被队友救援
3. 救援方式：触碰被关押的队友 5 秒
4. 逃离者坚持 5 分钟未被全部关押 = 逃离者胜利
5. 所有逃离者被关押 = 鬼胜利

---

## 安装部署

### 环境要求

- Node.js 18+ (https://nodejs.org/)

---

### 方法一：开发模式

```bash
# 1. 进入项目目录
cd miaomiao

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问 http://localhost:5173
```

---

### 方法二：生产构建

```bash
# 1. 进入项目目录
cd miaomiao

# 2. 安装依赖
npm install

# 3. 构建生产版本
npm run build

# 4. 启动预览服务器
npm run start

# 5. 打开浏览器访问 http://localhost:4173
```

---

### 方法三：静态文件部署

构建完成后，将 `dist` 文件夹部署到任何静态文件服务器：

```bash
npm run build
# dist 文件夹包含所有静态文件
```

部署选项：
- **Nginx/Apache**: 将 `dist` 文件夹内容复制到 web 服务器根目录
- **GitHub Pages**: 将 `dist` 内容推送到 gh-pages 分支（见下方说明）
- **Vercel/Netlify**: 直接连接 Git 仓库或拖放 `dist` 文件夹
- **Python 简易服务器**: `python -m http.server 8080 --directory dist`

---

### 方法四：GitHub Pages 部署

在线访问地址：https://qukoyk.github.io/miaomiao/

#### 首次部署

1. 在 GitHub 创建仓库
2. 推送代码到 main 分支
3. 执行以下命令部署到 gh-pages 分支：

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
cd dist
rm -rf .git
git init
git config user.email "你的邮箱"
git config user.name "你的用户名"
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin git@github.com:你的用户名/miaomiao.git
git push origin gh-pages --force
cd ..
```

4. 在 GitHub 仓库设置中：Settings → Pages → Source 选择 `gh-pages` 分支

#### 后续更新部署

修改代码后，重新部署：

```bash
# 1. 推送代码到 main 分支
git add .
git commit -m "更新说明"
git push origin main

# 2. 重新构建并部署到 gh-pages
npm run build
cd dist
rm -rf .git
git init
git config user.email "你的邮箱"
git config user.name "你的用户名"
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin git@github.com:你的用户名/miaomiao.git
git push origin gh-pages --force
cd ..
```

---

## 项目结构

```
miaomiao/
├── index.html          # 入口 HTML 文件
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── src/
    ├── main.ts         # 入口文件
    ├── game/
    │   ├── Game.ts     # 游戏主控制器
    │   ├── Player.ts   # 玩家控制器
    │   ├── Ghost.ts    # 鬼 AI
    │   ├── Hider.ts    # 逃离者 AI
    │   └── World.ts    # 3D 世界
    └── styles/
        └── main.css    # 样式
```

---

## 技术栈

- **Vite** - 构建工具
- **TypeScript** - 编程语言
- **Three.js** - 3D 图形库

---

## 许可证

MIT
