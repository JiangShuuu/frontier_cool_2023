# 2023_Frontier_前端測驗_01

## Random User
### 部署網址
#### 使用Netlify部署
https://stately-malabi-43e7bd.netlify.app/
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
#### 我的收藏
   - 取消收藏功能。
   - 其餘功能體驗與首頁一致。

### 特別說明 & 遇到的困難
   - 由於一次呼叫 API 拿 3010 筆資料, 短時間換頁約5~6次後會造成 429錯誤, 故使用 "vue-query" 做前端快取, 避免換頁時造成 429, 目前預設快取時間為 30 秒
   - 第二次使用 pug 切版, 花了一點時間上手
   - 近期比較常使用 React, 也花了一點時間找回 Vue 的熟悉感
   - (待解) 使用 pug 後, 無法在 .vue 內直接 import Type, 目前還未知原因, 但因不影響需求, 故暫時以 wip 註解起來
   - (待解) inject 的 Type 使用方式待查詢, 因不影響需求, 故暫時以 wip 註解起來
### 使用套件
   - vue-router: 用於路由切換
   - tanstack/vue-query: 用於前端資料快取
   - lodash-es: 用於資料格式整理
   - vueuse/head: 用於頁面 SEO
   - axios: 用於呼叫 api
   - pug: 題目版型需求
   - tailwindcss: css 切版使用
   - eslint: 用於限制格式
   - prettier: 用於整理格式
## 如何執行本專案
### 使用 node 版本 
   - node v16.18.1, yarn 1.22.19, npm 8.19.2
### 執行步驟
1. 開啟終端機建立資料夾或到指定存放位置
2. 在該資料夾位置，將專案 clone 到本地
   ```
   git clone https://github.com/JiangShuuu/frontier_cool_2023.git
   ```
3. 進入專案後 yarn or npm install
   ```
   cd 01
   yarn 
   ```
4. 安裝完成後，開啟專案
   ```
   yarn dev
   ```
#### 終端機顯示此行訊息代表成功運行，打開瀏覽器進入網址：
```
  VITE v4.1.4  ready in 174 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```