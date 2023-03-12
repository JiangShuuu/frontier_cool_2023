# 2023_Frontier_前端測驗_01

## Random User
### 指定功能
#### 首頁
   - 以總數 3010 筆，並且可以自由選擇以每頁 10/30/50 筆資料呈現 (預設 30 筆)。
   - 可以切換 Card 和 List 模式 (預設為 Card 模式)。
   - Card 和 List 中顯示的資訊和可自由發揮，其中只要求一定要有 User 的頭像。
   - 點擊每一筆資料時會開啟一個 User 詳細資訊的 Modal，而點擊右上角的 X icon 或點擊 Modal 外的任意處皆可將Modal 關閉。
   - 可將任意使用者資料添加至我的收藏中。
   - 可將已添加至我的收藏的資料取消收藏。
   - 重新整理網頁會維持以下條件：
     - 每頁呈現幾筆。
     - 分頁。
     - 顯示模式。

○ 我的收藏
■ 取消收藏功能。
■ 其餘功能體驗與首頁一致。


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
