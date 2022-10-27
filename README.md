# Unnotech Frontend Engineer 前測

## [Demo Page](https://andrew781026.github.io/unnotech-interview/)

[![](./docs/showcase.png)](https://andrew781026.github.io/unnotech-interview/)

## 使用技術

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- [Daisyui (Tailwind CSS UI Components)](https://daisyui.com/)

## ICON 來源

- flaticon.com

## 開發環境

- 安裝 Node.js 14.17.0 以上

執行下述指令來啟動專案進行開發

```bash
# 使用 SSH 下載專案資料
~$ git clone git@github.com:andrew781026/unnotech-interview.git
~$ cd front
~$ npm i
~$ npm run dev
```

## 專案架構

```bash
<專案根目錄>
  ├── docs              # 開發相關文件
  └── front             # VUE 專案
       ├─public         # 靜態資源(例：favicon.ico)
       ├─index.html     # 專案入口
       ├─404.html       # gh-page 的 SPA 要用 404.html 來做 redirect
       └─src
          ├─api         # 呼叫 API 相關
          ├─assets      # 圖片 . ICON ...等素材
          │  └─icons
          ├─controllers # 控制類
          ├─components  # 元件類
          ├─router      # vue-router 相關
          ├─types       # TypeScript 定義檔
          └─views       # 頁面
```

## 為何選用上述套件

- Vue 3
  - Vue 3 使用 Proxy 有著更好的效能，並且支援 TypeScript，因此選用 Vue 3 來開發。

- TypeScript
  - 定義 book 的欄位 & 函式的輸入/輸出，在編譯階段及早發現 undefined 錯誤，與 IDE 輔助提示 book 有那些變數。

- Vite
  - 不用服務 IE 瀏覽器，利用 Vite 可以比 webpack 更快的編譯。

- Tailwind CSS
  - 重複使用 utility class，減少 CSS 檔案的大小，並且可以快速開發。

- Daisyui
  - Tailwind 的 UI 套件，預定義 button . navbar ...等 UI 元件，不用自己重複定義。

## 遇到的問題 & 解決方法

- 在 gh-page 上無法設定 try_files 讓根目錄去服務 SPA，因此利用 gh-page 找不到頁面時，會轉向到 404.html 來做 redirect 處理，[參考資料](https://github.com/rafgraph/spa-github-pages) 。
