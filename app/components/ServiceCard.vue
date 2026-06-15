<template>
  <div v-for="item in service" :key="item.id" class="col-md-3">
    <div class="bg-neutral-0 p-md-6">
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <span class="fs-heading-xxx-small">{{ item.code }}</span>
          <h3 class="fs-heading-medium">{{ item.title }}</h3>
        </div>
        <div class="ms-0">
          <i :class="item.icon" class="ms-auto fs-3"></i>
        </div>
      </div>
      <div class="d-flex">
        <p class="fs-paragraph-medium me-3">{{ item.description }}</p>
        <NuxtLink
          to="/"
          class="text-neutral-0 fs-4 rounded-circle bg-neutral-700 p-3 flex-shrink-0 d-flex justify-content-center align-items-center"
          style="width: 48px; height: 48px"
          ><i class="bi bi-arrow-up-right"></i
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: service } = await useFetch("/api/service");
</script>
