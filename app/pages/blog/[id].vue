<template>
  <!-- 麵包屑 -->
  <section class="bg-primary-900 text-neutral-0">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10 p-0">
          <nav
            :style="{ '--bs-breadcrumb-divider': `'>'` }"
            aria-label="breadcrumb"
            class="text-neutral-0"
          >
            <ol class="breadcrumb m-0 p-3">
              <li class="breadcrumb-item"><NuxtLink to="/">首頁</NuxtLink></li>
              <li class="breadcrumb-item">
                <NuxtLink to="/blog">部落格</NuxtLink>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                {{ blog?.title }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container py-md-20">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <div class="d-flex justify-content-md-between fs-paragraph-medium">
            <p>{{ blog?.categories.join(" · ") }}</p>
            <time datetime="{{ blog?.date }}">{{ blog?.dateFormatted }}</time>
          </div>

          <ContentRenderer v-if="blog" :value="blog"></ContentRenderer>
          <div class="d-flex justify-content-md-between fs-paragraph-medium">
            <div class="d-flex align-items-center">
              <span class="d-flex me-3">
                <span class="material-symbols-outlined me-1"> visibility </span
                >{{ blog?.views }} views
              </span>
              <span class="d-flex">
                <span class="material-symbols-outlined me-1"> share </span
                >{{ blog?.shares }} shares
              </span>
            </div>
            <div class="d-flex gap-3 mb-md-6">
              <NuxtLink to="https://www.google.com">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 border-neutral-700 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-share fs-4"></i>
                </span>
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 border-neutral-700 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-instagram fs-4"></i>
                </span>
              </NuxtLink>
              <NuxtLink to="https://www.line.me/tw/">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 border-neutral-700 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-line fs-4"></i>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container py-md-20">
      <div class="mb-md-10">
        <p class="fs-heading-xxx-small">相關文章</p>
        <h2 class="fs-heading-xx-large">RELATED BLOG</h2>
      </div>
      <IndexSwiperBlog />
    </div>
  </section>
</template>
<script setup>
const route = useRoute();
const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>
<style scoped>
/* 文章內文基本間距（_base.scss 把 margin 歸零了，這裡補回來） */
:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  line-height: 1.2;
  letter-spacing: 0.02em;
  margin-top: 16px;
  font-weight: 700;
}

:deep(p),
:deep(ul),
:deep(img),
:deep(table) {
  margin-top: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

/* 文章內圖片佔滿容器寬度 */
:deep(img) {
  width: 100%;
  height: auto;
}

/* 麵包屑分隔線 > 顏色（Bootstrap 用 ::before 畫，scoped 要 :deep()） */
:deep(.breadcrumb-item + .breadcrumb-item::before) {
  color: #fff;
}
@media (max-width: 768px) {
  /* 最後一項（文章標題）過長時省略成 … */
  :deep(.breadcrumb-item:last-child) {
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* 表格是 ContentRenderer 動態產生的，要用 :deep() 才套得到 */
:deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}
:deep(thead) {
  background-color: #24140b; /* 深咖啡表頭 */
  color: #fff;
}
:deep(th),
:deep(td) {
  padding: 24px;
  text-align: left;
  border-bottom: 1px solid #e0d5c8;
}
:deep(tbody tr:nth-child(odd)) {
  background-color: #fdf7f1; /* 米色斑馬紋 */
}
</style>
