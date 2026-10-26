# 苗苗捉迷藏

一款明亮、温柔的 3D 捉迷藏网页游戏。1 个鬼 + 5 个逃离者，第三人称视角，单人对 AI，支持电脑与手机。

---

## 游戏模式

- **当逃离者**：你 + 4 位 AI 队友，躲避 AI 鬼。坚持 5 分钟，并在时间结束时保持自由。
- **当鬼**：你负责追捕 5 位 AI 逃离者。把他们全部关进关押区即可获胜。

## 三张地图

开局菜单与角色选择同屏选择地图，**默认随机**：

| 地图 | 主题 | 特点 |
| --- | --- | --- |
| 火车站 | 童话火车站 | 雨棚、三节彩色列车、站钟、行李车、长椅 |
| 游乐园 | 月光游乐园 | 旋转木马、摩天轮、糖果摊、气球车、喷泉 |
| 庄园 | 绘本庄园 | 玻璃花房、洋馆、钟楼、树篱迷宫、凉亭 |

## 操作方式

### 电脑端

| 操作 | 功能 |
| --- | --- |
| W / A / S / D 或方向键 | 移动（相对镜头方向） |
| Shift | 冲刺（消耗体力） |
| 鼠标移动 | 调整视角 |
| 点击画面 | 锁定鼠标 |
| C | 蹲下（在藏点附近更隐蔽） |
| 空格 | 鬼：扑击 |
| F | 被关押时向队友呼救 |
| Esc | 暂停 / 继续 |

### 移动端

- 左下角摇杆：移动
- 右半屏滑动：调整视角
- 右下角按钮：冲刺 / 扑击 / 呼救
- 右上角按钮：暂停
- 在藏点附近站定片刻会自动蹲下
- 建议横屏游玩

## 游戏规则

1. 鬼接触逃离者 **3 次** 后，逃离者被关押在关押区。鬼每次命中后进入 **2.4 秒擦刀后摇**：期间无法再次攻击，移动速度降至 55%；未被关押的逃离者会获得 **2.2 秒 1.5 倍加速**，用来拉开距离。
2. 自由逃离者触碰被关押者 **5 秒** 即可救出；救援后当前星星清零，但 **累计关押次数保留**。
3. 同一角色累计被关押 **3 次** 后出局。第 3 次关押不再可救。
4. 每局固定 **1 个鬼 + 5 个逃离者**，玩家算其中一个；一局 **5 分钟**。
5. **逃离者胜利**：时间结束时玩家保持自由。玩家被关押则失败；玩家出局立即失败。
6. **鬼胜利**：5 位逃离者全部被关押或出局。时间结束时仍有自由逃离者则失败。
7. 蹲在灌木、行李、花坛、摊位后等藏点可以降低被鬼发现的距离；鬼有视野、听觉、最后已知位置与搜索行为。
8. 鬼可以蓄力扑击，命中判定略大；扑击落空会短暂硬直。

## 体验特色

- 统一的明亮暮色绘本风：暖灯、星光、糖果色，协调舒适，不阴暗恐怖。
- 程序化角色、道具、场景与 CanvasTexture，无外部模型/贴图/音频/字体/CDN。
- 保留人偶风格，头发拆成刘海、头顶、侧发、后脑、绑发与发饰分层组合，并精修脸部比例与五官位置；走路、奔跑、蹲下、关押、救援、扑击、受击都有程序化动画。
- 鬼命中后擦刀减速，逃生者受击后短暂加速，追逐有攻防节奏。
- 第三人称相机带阻尼、避障、FOV 变化与震动。
- AI 鬼会巡逻、听声调查、追击、扑击；AI 逃离者会躲藏、逃跑、救援，并使用导航网格寻路。
- WebAudio 程序化音乐盒旋律、环境音、脚步、心跳、抓捕/救援音效，支持静音并持久化。
- 桌面 60fps / 移动低画质 30fps 目标；静态道具与角色网格按材质合批，移动端自动降档。
- 教程、暂停、结算、地图选择、画质/音效设置完整。

## 技术栈

- **Vite** 构建
- **TypeScript**（strict）
- **Three.js** 0.160
- **Vitest** 核心规则/导航/地图校验测试

## 开发

```bash
npm install
npm run dev       # http://localhost:5173
```

常用检查：

```bash
npm run typecheck # tsc --noEmit
npm test          # vitest run
npm run build     # typecheck + vite build
npm run preview   # 预览生产构建
```

调试参数（仅开发/调试）：

```text
?debug=1&map=park&mode=hider&seed=42&timeScale=4&mobile=1
```

开启后可在控制台使用 `window.__mm` 的 `start`、`pause`、`menu`、`getHud`、`getPlayer`、`getHiders`、`getGhost`、`getAIStates`、`forceContact`、`forceRescue`、`setTime`、`step`、`teleport`、`teleportGhost`、`setCameraYaw` 等调试方法。

## 部署到 GitHub Pages

- `main`：最初的版本，保持不动。
- `redesign`：本次重设计的源码分支。
- `gh-pages`：原版线上部署分支，保持不动。
- `gh-pages-redesign`：重设计预览部署分支。

部署预览版：

```bash
npm run deploy:redesign
```

脚本会先构建，再把 `dist/` 推送到 `gh-pages-redesign`，**不会修改 `gh-pages`**。

然后在 GitHub 仓库 **Settings → Pages → Build and deployment**：

- Source 选择 **Deploy from a branch**
- Branch 选择 **`gh-pages-redesign`**，目录 **`/ (root)`**
- Save

线上地址仍是：https://qukoyk.github.io/miaomiao/

回滚：把 Pages 的 Branch 改回 **`gh-pages`** 即可。

> 注意：只执行 `git push` 不会更新 GitHub Pages；必须推送部署分支并在 Pages 设置中选择对应分支。

## 项目结构

```text
src/
├── main.ts                 # 入口
├── core/                   # App / Session / Input / RenderSystem / Quality / Disposal
├── config/
│   ├── maps/               # 三张地图的配置数据
│   ├── rules.ts            # 全部玩法数值
│   ├── theme.ts            # 色板、天空预设、角色配色
│   └── types.ts
├── gameplay/               # MatchRules 与事件
├── scene/                  # World / PropKit / CollisionWorld / NavGrid / Sky / Lighting
├── entities/               # Character / CharacterModel / PlayerController / StatusBillboard
├── ai/                     # Perception / GhostAI / HiderAI / PathFollower
├── fx/                     # CameraRig / Particles / Audio / PostFX
├── ui/                     # UIManager / MobileControls / icons / art
├── styles/                 # tokens / base / components / game
└── utils/                  # 数学与随机
tests/                      # Vitest
scripts/                    # 部署脚本
```

## 测试

```bash
npm test
```

覆盖：

- 3 次接触关押、救援后星星清零但累计关押保留、累计 3 次关押出局、命中后擦刀冷却、超时胜负。
- 三张地图的出生点、巡逻点、藏点、关押槽可达性。
- 从每个逃离者出生点到所有藏点的路径可达性。

## 许可证

MIT
