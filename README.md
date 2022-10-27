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
  ├── docs  # 開發相關文件
  └── front # VUE 專案
       ├─public      # 靜態資源(例：favicon.ico)
       ├─index.html  # 專案入口
       ├─404.html    # gh-page 的 SPA 要用 404.html 來做 redirect
       └─src
          ├─api      # 呼叫 API 相關
          ├─assets   # 圖片 . ICON ...等素材
          │  └─icons
          ├─controllers # 控制類
          ├─components  # 元件類
          ├─router      # vue-router 相關
          ├─types       # TypeScript 定義檔
          └─views       # 頁面
```
