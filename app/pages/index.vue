<template>
  <!-- 介紹區 -->
  <section class="bg-primary-50 py-10 py-lg-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-8 mb-lg-0">
          <div class="mb-6 mb-lg-15">
            <h1 class="fs-heading-xxx-large mb-3 mb-lg-6">
              Hello<br />
              I’m Nelson
            </h1>
            <p class="fs-paragraph-medium mb-1">
              我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師
            </p>
            <p class="fs-paragraph-medium">
              喜歡把美學和程式結合，打造一個又一個精美的網頁設計！
            </p>
          </div>
          <div>
            <NuxtLink
              to="/contact"
              class="btn btn-neutral-700 rounded-999 me-lg-6 me-3"
              >與我聯絡</NuxtLink
            >
            <NuxtLink to="/" class="btn btn-outline-neutral-700 rounded-999"
              >我的履歷</NuxtLink
            >
          </div>
        </div>

        <div class="col-lg-7">
          <img
            class="w-100"
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- 服務項目 -->
  <section class="bg-primary-900 py-10 py-lg-20">
    <div class="container">
      <div class="mb-6 mb-lg-8">
        <p class="fs-heading-xxx-small text-neutral-0">服務項目</p>
        <h2 class="fs-heading-xxx-large text-neutral-0">SERVICES</h2>
      </div>
      <div class="row service-cards">
        <ServiceCard />
      </div>
    </div>
  </section>
  <!-- 專案作品 -->
  <section class="py-10 py-lg-20">
    <div class="container">
      <div class="mb-6 mb-lg-8">
        <p class="fs-heading-xxx-small text-center">專案作品</p>
        <h2 class="fs-heading-xxx-large text-center">PROJECTS</h2>
      </div>
      <div class="mb-6 mb-lg-8">
        <ProjectCard />
      </div>
      <div class="text-center">
        <NuxtLink to="/project" class="btn btn-neutral-700 rounded-999"
          >探索更多</NuxtLink
        >
      </div>
    </div>
  </section>
  <!-- 部落格 -->
  <section class="py-10 py-lg-20">
    <div class="container">
      <div
        class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-6 mb-lg-8"
      >
        <div>
          <p class="fs-heading-xxx-small">部落格</p>
          <h2 class="fs-heading-xxx-large">BLOGS</h2>
        </div>
        <div>
          <NuxtLink
            to="/project"
            class="btn btn-outline-neutral-700 rounded-999"
            >探索更多</NuxtLink
          >
        </div>
      </div>
      <IndexSwiperBlog />
    </div>
  </section>
  <!-- 訂閱 -->
  <Subscription />
</template>
<script setup>
useHead({ title: "首頁" });
</script>
<style scoped>
/* SERVICES 卡片：手機改成可左右滑動，lg 以上維持四欄 */
@media (max-width: 991.98px) {
  .service-cards {
    flex-wrap: nowrap;
    overflow-x: auto;
    /* 滑動更順、藏掉醜捲軸 */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  /* 隱藏滾動條 */
  .service-cards::-webkit-scrollbar {
    display: none;
  }
  .service-cards :deep(.col-12) {
    flex: 0 0 80%; /* 每張佔 80%，下一張露一角提示可滑 */
    max-width: 80%;
  }
}
</style>
