# 神格石板属性计算模拟器 (Torchlight: Infinite Godstone Puzzle Simulator)

一款为游戏《火炬之光：无限》打造的网页版新神石板工具，旨在帮助玩家模拟和计算“神格石板”系统带来的复杂属性加成。通过可视化的操作，玩家可以自由搭配、旋转、翻转各种石板，并实时查看最终的属性收益。

**使用AI开发，有BUG正常！！！**

![应用截图](https://raw.githubusercontent.com/leeeee/TorchlightPuzzle/main/screenshot.png)

---

## ✨ 主要功能

- **可视化棋盘**: 提供一个与游戏内布局一致的十字形棋盘，支持直观的石板放置与移动。
- **新神石板库**: 包含了游戏中基于“秩序”类型可能用到的石板，点击即可轻松置入。
- **自由变换**: 支持对已放置的石板进行90度旋转和水平/垂直翻转，以探索最佳布局。
- **实时属性计算**: 自动计算所有已放置石板的属性总和，包括复杂的特殊属性联动。
- **高级逻辑模拟**:
    - 精确模拟“星星蛾火”的单向/四周复制。
    - 精确模拟“寰空神隙”的整侧复制。
    - 精确模拟“末神泪珠”的相邻加成效果。
    - 支持“双手序列”、“群星定势”等不同条件下的倍率计算。
- **属性编辑**: 支持对A、B、C类石板的固有属性进行编辑。

## 🛠️ 技术栈

- **前端框架**: [React](https://reactjs.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **编程语言**: [TypeScript](https://www.typescriptlang.org/)
- **UI 样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)

## 🚀 本地运行

1.  **克隆仓库**
    ```bash
    git clone https://github.com/leeeee/TorchlightPuzzle.git
    ```

2.  **进入项目目录**
    ```bash
    cd TorchlightPuzzle
    ```

3.  **安装依赖**
    ```bash
    npm install
    ```

4.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    应用将在 `http://localhost:5173` (或其他可用端口) 上运行。

---

感谢使用！
