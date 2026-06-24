# Nelson Blog

一個以 **Nuxt 4** 打造的設計師／前端工程師個人作品集與部落格網站。整合 Nuxt Content（Markdown 文章）、Pinia（全域通知）、Bootstrap 5 客製主題與 RWD 響應式設計。

> hexschool 2026 六角學院切版練習作品。

---

## ✨ 功能特色

- **響應式設計（RWD）**：手機 / 平板 / 桌機皆完整適配，斷點設於 `lg`（992px）。
- **部落格系統**：以 Nuxt Content 撰寫 Markdown 文章，支援分類篩選、文章詳情頁、麵包屑、相關文章輪播。
- **服務頁**：可切換的服務項目、服務流程時間軸、客戶案例、FAQ 手風琴（純 Vue 控制，未依賴 Bootstrap JS）。
- **專案作品頁**：分類標籤橫向滑動篩選。
- **表單驗證**：訂閱電子報、聯絡表單，前後端共用 Zod schema 驗證。
- **全域通知（Toast）**：以 Pinia store 管理，任何頁面送出表單後右上角彈出提示。
- **SEO**：每頁 `useSeoMeta` 設定標題、描述與 Open Graph 社群分享預覽。
- **客製 favicon**：品牌色 N 字母標誌。

---

## 🛠 技術棧

| 類別     | 使用                                                      |
| -------- | --------------------------------------------------------- |
| 框架     | [Nuxt 4](https://nuxt.com/)、Vue 3                        |
| 內容     | [@nuxt/content](https://content.nuxt.com/) v3（Markdown） |
| 狀態管理 | [Pinia](https://pinia.vuejs.org/)                         |
| 樣式     | Bootstrap 5（客製 SCSS）、Bootstrap Icons                 |
| 表單驗證 | [Zod](https://zod.dev/)（前後端共用）                     |
| 輪播     | [Swiper](https://swiperjs.com/)                           |
| HTTP     | Axios                                                     |

---

## 🖥 渲染模式（SSR）

本專案採 **SSR（伺服器端渲染）**，為 Nuxt 預設（`nuxt.config.ts` 未設 `ssr: false`）。

- **運作方式**：整頁先在伺服器渲染成 HTML 送到瀏覽器，瀏覽器畫出後再以同一批元件接管互動（hydration）。爬蟲一進來即可取得完整內容，對 SEO 友善。
- **資料抓取**：頁面初始資料一律用 `useFetch` / `useAsyncData`（伺服器抓取後隨 HTML 一併送出，瀏覽器不重抓）；使用者觸發的一次性動作（表單送出）才用 `$fetch` / `axios`。
- **僅瀏覽器才能跑的內容**：會在水合時改動 DOM 的第三方套件（如輪播 Swiper）以 `<ClientOnly>` 包裹，避免 hydration mismatch；需用到 `window` / `document` / `localStorage` 的程式碼放在 `onMounted` 或 `<ClientOnly>` 內。

---

## 🚀 開始使用

### 環境需求

- Node.js 18 以上
- npm

### 安裝

```bash
npm install
```

### 開發

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

### 建置 / 預覽

```bash
npm run build     # 建置正式版
npm run preview   # 本機預覽建置結果
npm run generate  # 產生靜態網站
```

---

## 📁 專案結構

```
hex-blog/
├─ app/
│  ├─ assets/scss/        # Bootstrap 客製主題、色票、字級、共用樣式
│  ├─ components/         # Nav、Footer、FormAlert、ToastContainer、卡片等
│  ├─ layouts/            # default（含 Footer）、no-footer
│  ├─ pages/              # index、service、project、contact、blog/
│  │  └─ blog/
│  │     ├─ index.vue     # 文章列表 + 分類篩選
│  │     └─ [id].vue      # 文章詳情（讀取 Nuxt Content）
│  ├─ stores/             # Pinia store（toast 全域通知）
│  └─ app.vue
├─ content/blog/          # 部落格文章（Markdown）1.md ~ 5.md
├─ server/
│  ├─ api/                # 表單送出 API（訂閱、聯絡）
│  └─ utils/              # 假資料（service、projects、blogs…）
├─ shared/utils/          # 前後端共用：Zod 驗證 schema
├─ public/                # favicon.svg 等靜態檔
├─ content.config.ts      # Nuxt Content collection 定義
└─ nuxt.config.ts
```

---

## ✍️ 新增部落格文章

在 `content/blog/` 新增一個 `.md` 檔（檔名即網址，例如 `6.md` → `/blog/6`），最上方填寫 frontmatter：

```md
---
title: 文章標題
description: 文章摘要（用於 SEO）
image: 封面圖網址
categories: [UIUX 設計, 前端技術]
date: "2025-10-16"
dateFormatted: "Oct 16, 2025"
views: 110
shares: 2
---

## 這裡開始是內文

支援標準 Markdown、表格、圖片，也可內嵌 HTML 搭配 Bootstrap class。
```

> 文章欄位定義於 `content.config.ts` 的 collection schema。

---

## 🌐 部署

可部署至 Vercel、Netlify 等支援 Nuxt 的平台：

```bash
npm run build      # 產生 .output/
# 或靜態輸出
npm run generate   # 產生 .output/public/
```

將專案連結至平台後，建置指令使用 `nuxt build`、輸出目錄 `.output`，平台會自動偵測 Nuxt 並完成部署。

### Vercel 與內容資料庫注意事項

- 部署至 Vercel 時，server 程式碼會打包成 Serverless Function。`@nuxt/content` v3 底層的 SQLite 依賴 `better-sqlite3`（原生模組），不適合在 serverless 環境每次請求即時查詢。
- 本專案的部落格文章在 **建置階段（prerender）** 即產生靜態頁，上線後不需即時查資料庫，因此可正常運作 —— 維持 Nuxt Content 的預設行為即可。
- 若日後要加入「即時、會變動」的資料，請改用平台支援的雲端資料庫（如 Postgres、Upstash Redis），不要依賴本機 SQLite 檔。

---

## 📝 備註

- 表單送出 API 目前為示範用途（不會真的寄信／存資料庫）。
