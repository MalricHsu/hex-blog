<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ToastContainer />
</template>
<script setup>
// 全域 SEO 預設
useSeoMeta({
  description:
    "Nelson 的設計與前端作品集，分享 UIUX 設計、網頁設計與前端開發的實務經驗。",
  ogType: "website",
  ogSiteName: "Nelson Blog",
  ogImage:
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true",
  twitterCard: "summary_large_image",
});
</script>
