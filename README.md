# Nelson Blog

一個以 **Nuxt 4** 打造的設計師／前端工程師個人作品集與部落格網站。整合 Nuxt Content（Markdown 文章）、Pinia（全域通知）、Bootstrap 5 客製主題與 RWD 響應式設計。

> hexschool 2026 六角學院切版練習作品。

---

## ✨ 功能特色

- **響應式設計（RWD）**：手機 / 平板 / 桌機皆完整適配。
- **部落格系統**：以 Nuxt Content 撰寫 Markdown 文章，支援分類篩選、文章詳情頁、麵包屑、相關文章輪播。
- **服務頁**：可切換的服務項目、服務流程時間軸、客戶案例、FAQ 手風琴（純 Vue 控制，未依賴 Bootstrap JS）。
- **專案作品頁**：分類標籤橫向滑動篩選。
- **表單驗證**：訂閱電子報、聯絡表單，前後端共用 zod schema 驗證。
- **全域通知（Toast）**：以 Pinia store 管理，任何頁面送出表單後右上角彈出提示。
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
├─ shared/utils/          # 前後端共用：zod 驗證 schema
├─ public/                # favicon.svg 等靜態檔
└─ nuxt.config.ts
```

---

## ✍️ 新增部落格文章

在 `content/blog/` 新增一個 `.md` 檔（檔名即網址，例如 `6.md` → `/blog/6`），最上方填寫 frontmatter：

```md
---
title: 文章標題
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

## 🧩 重點設計

- **共用驗證 schema**：放在 `shared/utils/`，Nuxt 4 會自動匯入到「前端元件」與「伺服器 API」兩邊，確保前後端驗證一致。
- **全域 Toast**：`app/stores/toast.js` 管理通知清單，`ToastContainer.vue` 負責顯示，`FormAlert.vue` 為通知外觀元件。
- **響應式字級**：`_base.scss` 以 media query 在不同斷點調整 `.fs-heading-*` 字級，避免大標在小螢幕爆版。

---

## 📝 備註

- 表單送出 API 目前為示範用途（不會真的寄信／存資料庫）。

```

```
