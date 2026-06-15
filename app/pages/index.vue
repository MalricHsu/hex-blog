<template>
  <!-- 介紹區 -->
  <section class="bg-primary-50">
    <div class="container">
      <div class="row align-items-center w-100">
        <div class="col-md-5">
          <div class="mb-md-15">
            <h1 class="fs-heading-xxx-large mb-md-6">
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
              class="btn btn-neutral-700 rounded-999 me-md-6"
              >與我聯絡</NuxtLink
            >
            <NuxtLink to="/" class="btn btn-outline-neutral-700 rounded-999"
              >我的履歷</NuxtLink
            >
          </div>
        </div>

        <div class="col-md-7">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- 服務項目 -->
  <section class="bg-primary-900 py-md-20">
    <div class="container">
      <div class="mb-md-8">
        <p class="fs-heading-xxx-small text-neutral-0">服務項目</p>
        <h2 class="fs-heading-xxx-large text-neutral-0">SERVICES</h2>
      </div>
      <div class="row">
        <ServiceCard />
      </div>
    </div>
  </section>
  <!-- 專案作品 -->
  <section class="py-md-20">
    <div class="container">
      <div class="mb-md-8">
        <p class="fs-heading-xxx-small text-center">專案作品</p>
        <h2 class="fs-heading-xxx-large text-center">PROJECTS</h2>
      </div>
      <div class="mb-md-8">
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
  <section class="py-md-20">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-md-8">
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
  <section
    class="position-relative"
    :style="`background: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription_bg.png?raw=true') center/cover; min-height: 440px;`"
  >
    <!-- 遮罩 -->
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark-60 bg-opacity-50"
    ></div>
    <!-- 內容 -->
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-5">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription.png?raw=true"
            alt="訂閱"
          />
        </div>
        <div class="col-md-7">
          <div class="p-20">
            <div class="mb-md-6">
              <p class="fs-heading-xxx-small text-neutral-0">訂閱電子報</p>
              <h2 class="fs-heading-xxx-large text-neutral-0">SUBSCRIPTION</h2>
            </div>
            <p class="fs-paragraph-medium text-neutral-0 mb-md-6">
              你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用
              AI 工具提升產能！
            </p>
            <div class="form-floating mb-3 position-relative">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" class="text-neutral-0">電子信箱</label>
              <button
                type="submit"
                class="btn btn-neutral-0 rounded-999 position-absolute end-0 top-50 translate-middle-y me-2 text-neutral-700"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
