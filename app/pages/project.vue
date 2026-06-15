<template>
  <!-- banner -->
  <section
    :style="`background: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_banner.png?raw=true') center/cover;`"
  >
    <div class="container py-md-22">
      <div class="text-center mb-md-10">
        <h2 class="fs-heading-xxx-large text-neutral-0 mb-2">PROJECTS</h2>
        <p class="fs-heading-xx-large text-neutral-0">專案作品</p>
      </div>
    </div>
  </section>
  <!-- 種類區 -->
  <section>
    <div class="container py-md-8">
      <ul
        class="list-unstyled d-flex justify-content-between fs-heading-xx-small"
      >
        <li
          v-for="(item, index) in headerTag"
          :key="item.id"
          class="d-flex align-items-center justify-content-center py-3 flex-fill"
          :style="{ cursor: 'pointer' }"
          :class="{ active: TagId === item.id }"
          @click="TagId = item.id"
        >
          {{ item.content }}
        </li>
      </ul>
    </div>
  </section>
  <!-- 專案區 -->
  <section>
    <div class="container pb-md-20">
      <div class="pb-md-20"><ProjectCard2 :tag="selectedTag" /></div>
      <div class="text-center">
        <NuxtLink to="/project" class="btn btn-neutral-700 rounded-999"
          >探索更多</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup>
const headerTag = [
  { id: 1, content: "全部" },
  { id: 2, content: "平面設計" },
  { id: 3, content: "網頁設計" },
  { id: 4, content: "前端切版" },
  { id: 5, content: "後端開發" },
];

const TagId = ref(1);

const selectedTag = computed(() => {
  return headerTag.find((tag) => tag.id === TagId.value)?.content;
});
</script>

<style scoped>
.active {
  background-color: #24140b !important;
  color: #ffffff;
  max-width: 100%;
}
</style>
