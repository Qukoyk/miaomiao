# 苗苗捉迷藏

一款 3D 捉迷藏网页游戏。由苗苗小朋友Vibe Coding制作。
大人只是帮着打字输入指令。

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
- npm 9+ (https://www.npmjs.com/)

### 开发模式

```bash
# 1. 进入项目目录
cd miaomiao

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问 http://localhost:5173
```

### 生产构建

```bash
# 1. 构建项目
npm run build

# 2. dist 文件夹包含所有静态文件
```

### 部署方式

#### GitHub Pages 自动部署（推荐）

修改代码后，只需执行：

```bash
git add .
git commit -m "更新说明"
git push
```

GitHub Actions 会自动构建并部署到 GitHub Pages。

**在线访问地址**: https://qukoyk.github.io/miaomiao/

---

## 项目结构

```
miaomiao/
├── index.html          # 入口 HTML 文件
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── src/
    ├── main.ts          # 入口文件
    ├── game/
    │   ├── Game.ts          # 游戏主循环
    │   ├── Player.ts        # 玩家控制器
    │   ├── Ghost.ts         # 鬼角色（AI 或玩家）
    │   ├── Hider.ts         # 躲藏者（AI）
    │   ├── Joystick.ts      # 虚拟摇杆
    │   └── World.ts         # 场景构建
    ├── ui/
    │   └── Menu.ts          # 角色选择菜单
    ├── utils/
    │   └── helpers.ts       # 工具函数
    └── styles/
        └── main.css         # 样式文件
```

---

## 技术栈

- **Vite** - 构建工具
- **TypeScript** - 编程语言
- **Three.js** - 3D 图形库

---

## 许可证

MIT
