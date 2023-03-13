# 2023_Frontier_前端測驗_02

## Nested Key-Value Pair Tree Viewer
### 部署網址
https://deft-axolotl-d3570b.netlify.app/
### 指定功能
   - 畫面分為兩側，一側為輸入區，一側為預覽區。
   - 輸入區中，每行 (Pair) 有兩個輸入框，一個用來輸入 Key，另一個用來輸入 Value。
   - Key 的輸入欄可以用 . 符號來標示其 Value 應屬於巢狀物件中某一節點的值。
   - 使用者可自行增減行數。
   - 尚未輸入任何字符時，輸入框內預設皆為空字串，如果使用者只輸入Value，但 Key 值為空時，該行 (Pair) 不會顯示在預覽區。
   - 預覽區中，須清楚呈現對應輸入區內容的巢狀物件結構。

### 特別說明 & 遇到的困難
   - 處理資料結構, 將現有陣列變成樹狀結構
   - 右側顯示處理, 使用遞迴元件方式處理
   - (待解) 使用 pug 後, 無法在 .vue 內直接 import Type, 目前還未知原因, 但因不影響需求, 故暫時以 wip 註解起來
   - (待解) inject 的 Type 使用方式待查詢, 因不影響需求, 故暫時以 wip 註解起來
### 使用套件
   - vue-router: 用於路由切換
   - lodash-es: 用於資料格式整理
   - pug: 題目版型需求
   - tailwindcss: css 切版使用
   - uuid: 物件專屬id 使用

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
   cd 02
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