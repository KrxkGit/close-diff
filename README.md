# Close Diff Views

<p align="center">
  <img src="images/icon.png" width="128" alt="Close Diff Views Icon"/>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=krxk.close-diff">
    <img src="https://img.shields.io/visual-studio-marketplace/v/krxk.close-diff?label=VS%20Marketplace" alt="Marketplace Version"/>
  </a>
  <a href="https://github.com/KrxkGit/close-diff/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/KrxkGit/close-diff" alt="License"/>
  </a>
</p>

> 一键批量关闭所有 Diff 编辑器标签页 / Batch close all diff editor tabs in one command.

---

## Features · 功能

VSCode 没有内置"批量关闭所有 Diff 视图"的命令，每次 Git 对比后需要逐个手动关闭。本扩展提供一条命令，一次性关闭所有打开的 Diff 标签页。

VSCode has no built-in command to close all diff editors at once. This extension adds a single command to close every open diff tab across all editor groups.

---

## Usage · 使用方式

### 命令面板 / Command Palette

`Ctrl+Shift+P` / `Cmd+Shift+P` → 输入 `Close All Diff Editors`

### 快捷键 / Keybinding

| 平台 | 快捷键 |
|------|--------|
| macOS | `Cmd+Shift+D` |
| Windows / Linux | `Ctrl+Shift+D` |

### 右键菜单 / Context Menu

在编辑器标题栏右键 → **Close All Diff Editors**（位于"关闭已保存"前面）

---

## Requirements · 环境要求

- VSCode `^1.80.0`

---

## Extension Settings · 扩展设置

本扩展无需任何配置，开箱即用。

This extension has no configurable settings.

---

## Release Notes · 更新日志

### 0.0.1

- 初始发布 / Initial release
- 支持批量关闭所有 Diff 视图 / Batch close all diff editor tabs
- 支持中英文 / Supports Chinese and English

---

## License

[MIT](LICENSE)
