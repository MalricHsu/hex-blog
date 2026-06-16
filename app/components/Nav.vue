<template>
  <nav class="navbar navbar-expand-lg bg-primary-50">
    <div class="container">
      <NuxtLink to="/">
        <img
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/47001d42324ec6a2c7d00cc74ea79d70c57d578a/2026-web-camp/device-pc.svg"
          alt="pcLogo"
        />
      </NuxtLink>

      <button
        class="navbar-toggler rounded-circle d-flex justify-content-center align-items-center"
        type="button"
        aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
        :style="{ width: '48px', height: '48px' }"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isOpen }">
        <ul class="list-unstyled fs-label-small ms-auto d-flex gap-6">
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
