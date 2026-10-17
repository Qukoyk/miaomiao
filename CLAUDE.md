# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

苗苗捉迷藏：Vite + TypeScript + Three.js 的 3D 捉迷藏网页游戏。1 鬼 + 5 逃离者，单人对 AI，两种模式，三张可选地图（默认随机）。仅中文，明亮可爱的暮色绘本风格，无外部模型/贴图/音频/字体/CDN。

当前源码在 `redesign` 分支；`main` 与 `gh-pages` 是最初版本，保持不动。

## 常用命令

```bash
npm install
npm run dev        # 开发服务器 http://localhost:5173
npm run typecheck  # tsc --noEmit（strict + noUnusedLocals/Parameters）
npm test           # vitest run
npm run build      # typecheck + vite build
npm run preview    # 预览生产构建
npm run deploy:redesign  # 构建并推送 dist/ 到 gh-pages-redesign（不碰 gh-pages）
```

- 测试在 `tests/`：`matchRules.test.ts`、`mapConfig.test.ts`。新增纯玩法逻辑时优先补测试。
- `npm run build` 会先跑 `typecheck`；未使用变量会导致构建失败。
- 部署：`npm run deploy:redesign` 只推 `gh-pages-redesign`；GitHub Pages 发布源需在仓库 Settings → Pages 手动切到该分支。回滚切回 `gh-pages`。普通 `git push` 不更新页面。

## 架构

### 启动与状态

- `src/main.ts` 只创建 `App`。
- `core/App.ts`：应用状态机（menu/loading/playing/paused/result）、渲染循环、暂停/重开/返回菜单、设置、全局 `window.__mm` 调试接口。
- `core/Session.ts`：单局容器。创建 `Scene`/`Camera`、`World`、`MatchRules`、玩家角色与 AI、粒子；每帧推进规则、玩家、AI、救援、接触、事件与粒子。`dispose()` 负责释放单局资源。
- `core/RenderSystem.ts`：共享 `WebGLRenderer`、质量档、DPR、后处理入口。
- `core/Input.ts`：全局键鼠/Pointer Lock/触摸视角；只在 App 构造时注册一次，单局不要重复添加 document 监听器。
- `core/Quality.ts`：移动端检测、画质档、减少动效偏好。
- `core/Disposal.ts`：`SharedAssets`（应用级几何/材质/CanvasTexture/SpriteMaterial 缓存）与 `DisposalBag`（单局资源）。

### 玩法规则（唯一来源）

- `gameplay/MatchRules.ts` 是接触、关押、救援、淘汰、胜负的唯一入口。实体/AI 只能读状态，不要自行改规则字段。
- `gameplay/events.ts`：`HiderRecord`（state/contactCount/jailCount/jailSlot/rescueProgress/invulnerableUntil/x/z）与事件类型。
- 规则：接触 3 次 → 关押（星星保持 3 颗显示，累计关押 +1）；救援 5 秒 → 当前星星清零、累计关押保留；累计关押 3 次 → 出局；5 分钟。
- 胜负：逃离者模式时间到玩家自由 = 胜，被关押 = 负，出局立即负；鬼模式 5 人全部关押/出局 = 胜，时间到未抓完 = 负。
- 每帧 `Session` 调用 `rules.drainEvents()` 处理表现与结算；新增事件时同步更新 `events.ts`、`Session.handleEvent`。

### 地图与场景

- `config/maps/`：`station.ts`、`park.ts`、`manor.ts` 是纯数据（出生点、关押区、巡逻点、藏点、道具列表）。`index.ts` 提供 `MAPS`、`resolveMap('random')`。
- `config/theme.ts`：色板、天空预设、角色配色；`config/rules.ts`：全部数值。
- `scene/World.ts`：按配置建地面、道具、关押区、天空、灯光、氛围粒子；持有 `CollisionWorld` 与 `NavGrid`。
- `scene/PropKit.ts`：三张地图共用的程序化道具工厂。所有尺寸与 `scene/propColliders.ts` 的碰撞尺寸保持一致；改视觉尺寸时同步改碰撞。
- `scene/mapCollision.ts`：道具碰撞 + 关押区围栏（朝 +x 开门）。视觉围栏与碰撞共用同一布局。
- 静态道具会被 `mergeStaticProps` 跨道具按材质合并；Sprite / InstancedMesh 会先脱出并烘焙世界变换。**新增静态道具时不要依赖逐网格的独立动画**，否则会被合批。带动画的道具（摩天轮、气球车、喷泉）标记 `mergeable=false`，旋转木马/茶杯只整体旋转，可合并。
- `config/maps/types.ts` 的 `JailConfig` 同时用于视觉和碰撞，别在实体里硬编码关押坐标。

### 导航与 AI

- `scene/CollisionWorld.ts`：2D AABB/圆碰撞、线段视线、相机避障。
- `scene/NavGrid.ts`：0.5m 网格 + A* + 路径拉直；出生点/藏点/关押槽的可达性由测试覆盖。
- `ai/Perception.ts`：鬼视野/遮挡、听觉事件、AI 逃离者对鬼的感知。
- `ai/GhostAI.ts`：巡逻 → 调查 → 追击 → 扑击；目标是玩家与 AI 逃离者的并集。
- `ai/HiderAI.ts`：救援 > 逃跑 > 躲藏/游走；藏点选择会避开鬼附近；寻路失败有回退。
- `ai/PathFollower.ts`：路径跟随、轴分离碰撞、侧移与卡住检测。

### 角色

- `entities/CharacterModel.ts`：程序化角色几何体、配饰与动画。关节层级为 hips → spine → chest → neck → head，手臂含肩/肘/腕，腿含髋/膝/踝；角色构造末尾会把每个动画关节内部静态网格按材质合并。头发（ponytail）、裙摆（skirt）、配饰、围巾、背包保留独立组做二次运动。`animate()` 接收 `CharacterMotion`（speed/moving/turnRate），程序化生成 idle/walk/run/crouch/jail/rescue/lunge/hit 姿态，并处理眨眼。新增角色网格时优先加到对应关节组。
- `entities/Character.ts`：把 `HiderRecord` 与模型连接，处理朝向、动画状态、受击/扑击/关押/出局。
- `entities/PlayerController.ts`：相机相对移动、体力、蹲下、鬼的扑击、被关押时的呼救。
- `entities/StatusBillboard.ts`：头顶 3 星星 + 3 关押绳结；纹理在角色 dispose 时释放。

### UI / 音频 / 后处理

- `ui/UIManager.ts`：所有屏幕（菜单、HUD、暂停、结算、加载、教程）的 DOM 创建与更新；`index.html` 只有 canvas、UI 根节点和横屏提示。
- `ui/MobileControls.ts`：摇杆、冲刺、扑击/呼救、暂停。
- `ui/icons.ts` / `ui/art.ts`：内联 SVG 图标与角色/地图插画；禁用 emoji 和外部字体。
- `fx/Audio.ts`：WebAudio 程序化音乐盒旋律、音效、心跳；首次用户手势后启动；静音存 `localStorage`。
- `fx/PostFX.ts`：仅高画质启用 Bloom；中/低画质直接渲染。
- `fx/CameraRig.ts`：第三人称越肩偏移、阻尼、2D 避障、FOV、震动。
- `fx/Particles.ts`：池化 Sprite 粒子。

### 性能约定

- 只允许一盏方向光投影；点光不投影。
- 画质档：high 2x DPR + Bloom；medium 1.5x；low 1x、无 Bloom。
- 静态道具/角色网格已按材质合并；新增大量小网格时考虑合并或 InstancedMesh。
- HUD 以 10Hz 更新；`Session.update` 的 dt 由 App 限制在 0.05s。
- 单局资源通过 `DisposalBag` 或对象的 `dispose()` 释放；`SharedAssets` 只应在 App 销毁时释放。

## 坐标与关键参数

- Y 向上，地面 XZ 平面。
- 地图边界：站台 `|x|<=33, |z|<=25`；游乐园 `|x|<=37, |z|<=29`；庄园 `|x|<=39, |z|<=31`。
- 关押区：站台 `(-27,-14.5)`；游乐园 `(-30,-22)`；庄园 `(-32,-25)`；半径 4，开向 +x。
- 游戏时长 300 秒；5 名逃离者；单轮 3 次接触；累计 3 次关押出局；救援 5 秒；接触/扑击判定 1.0/1.15；接触冷却 1 秒。
- 速度：玩家逃离者走 4.2 / 冲刺 6.8；AI 逃离者走 3.8 / 跑 5.9；AI 鬼巡逻 3.8 / 调查 4.8 / 追击 6.4 / 扑击 11.5；玩家鬼走 4.4 / 冲刺 6.8。

## 调试

`?debug=1` 后 `window.__mm` 提供：`start`、`pause`、`menu`、`getState`、`getSession`、`getHud`、`getPlayer`、`getHiders`、`getGhost`、`getAIStates`、`getRendererInfo`、`forceContact`、`forceRescue`、`setTime`、`step`、`teleport`、`teleportGhost`、`setCameraYaw`。

其他参数：`map=station|park|manor`、`mode=hider|ghost`、`seed=...`、`timeScale=...`、`mobile=1|0`、`autostart=1`。

## 代码约定

- 仅中文界面与文档；注释沿用中文（部分旧注释有英文+中文）。
- 不引入 React/Vue、物理引擎、行为树库或外部资源。
- 与项目风格一致：Three.js 几何体程序化构建、CSS 设计 token、内联 SVG。
- 改动规则先改 `MatchRules` 并补测试；改动地图先跑 `npm test` 验证可达性。
