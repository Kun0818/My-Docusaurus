---
title: "[Vite] 使用Vite建立React專案"
keywords: [vite, Vite, React, react]
description: 新手起步都會使用CRA建立或啟動專案，但是你會發現專案越大，啟動的速度也會越久。
author: Kun0818
og:title: 使用Vite建立React專案。
og:description: 新手起步都會使用CRA建立或啟動專案，但是你會發現專案越大，啟動的速度也會越久。
sidebar_position: 1
---

## 前言
剛開始學React的我，都是用create-react-app簡稱CRA，來建立我們的專案，使用CRA有好有壞。

我們在這邊先不探討，有什麼優缺點。

但是當一個專案的檔案數量太多、很大的厚候，使用CRA開啟Server的速度就會變得非常慢，在HMR的速度上也會受影響。

這背後的原理，後面越慢慢跟大家做解釋。

如果有興趣看Vite官方文件，可以[點此](https://vitejs.dev/)喔!

我們先看如何用Vite建立React專案吧!!



## 使用Vite建立專案
> 在使用 Vite 以前，要注意 Node 的版本應為 14.18+ 或 16+。

:::note 官方說明
Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
:::

---

### 建立React專案
- NPM
```
npm create vite@latest 你的專案名稱 -- --template react
```
- Yarn
```
yarn create vite 你的專案名稱 --template react
```

### 到專案目錄
```
cd 你的專案名稱
```

### 執行install指令
- NPM
```
npm install
```
- Yarn
```
yarn install
```
---

到這邊之後我們先告一段落。你應該可以發現Vite建立專案真的快很多。

但是在這邊有一些小提醒。

:::tip Vite建立的React專案小提醒 
- 檔案名稱不能是.js 結尾，應更改為.jsx。
- index.html 是在專案根目錄，並非 public 資料夾。
- 如需將網頁進行部署，需在 vite.config.js 中去定義 Base URL。
:::

---

### 啟動專案
```
npm run dev
```
