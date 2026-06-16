<template>
  <nav class="navbar navbar-expand-md bg-primary-50 sticky-top">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand p-0 m-0">
        <!-- 手機：文字 logo -->

        <img
          class="d-md-none"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/47001d42324ec6a2c7d00cc74ea79d70c57d578a/2026-web-camp/device-mobile.svg"
          alt="pcLogo"
        />
        <!-- md 以上：圖片 logo -->
        <img
          class="d-none d-md-block"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/47001d42324ec6a2c7d00cc74ea79d70c57d578a/2026-web-camp/device-pc.svg"
          alt="pcLogo"
        />
      </NuxtLink>

      <button
        class="navbar-toggler d-md-none d-block rounded-circle d-flex justify-content-center align-items-center border-0"
        type="button"
        aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
        :style="{ width: '48px', height: '48px' }"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isOpen }">
        <ul
          class="list-unstyled fs-label-small d-flex flex-column flex-md-row text-center gap-3 gap-md-6 ms-md-auto py-3 py-md-0 mb-0"
          @click="isOpen = false"
        >
          <li class="py-1 px-3">
            <NuxtLink to="/service" class="nav-link">服務項目</NuxtLink>
          </li>
          <li class="py-1 px-3">
            <NuxtLink to="/project" class="nav-link">專案作品</NuxtLink>
          </li>
          <li class="py-1 px-3">
            <NuxtLink to="/blog" class="nav-link">部落格</NuxtLink>
          </li>
          <li class="py-1 px-3">
            <NuxtLink to="/contact" class="nav-link">與我聯絡</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
const isOpen = ref(false);
</script>
