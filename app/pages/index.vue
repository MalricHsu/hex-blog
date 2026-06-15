<script setup lang="ts">
import Subscription from "~/components/Subscription.vue";
</script>

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
  <Subscription />
</template>
