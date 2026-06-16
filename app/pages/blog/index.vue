<template>
  <!-- banner -->
  <section
    :style="`background: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_banner.png?raw=true') center/cover;`"
  >
    <div class="container py-md-22">
      <div class="text-center mb-md-10">
        <h2 class="fs-heading-xxx-large text-neutral-0 mb-2">BLOGS</h2>
        <p class="fs-heading-xx-large text-neutral-0">部落格</p>
      </div>
    </div>
  </section>
  <!--列表區  -->
  <section>
    <div class="container py-md-20">
      <div class="row">
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li
              v-for="item in blogList"
              :key="item.id"
              class="fs-heading-xx-small py-3 mx-auto text-center"
              :class="{ active: item.id === blogClick }"
              @click="blogClick = item.id"
              :style="{ cursor: 'pointer' }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="col-md-10">
          <ul class="list-unstyled">
            <li
              class="card-item"
              :class="{ 'mb-6': index < filterBlog.length - 1 }"
              v-for="(blog, index) in filterBlog"
              :key="blog.id"
            >
              <NuxtLink :to="blog.path">
                <div class="row">
                  <div class="col-md-6">
                    <img
                      :src="blog.image"
                      :alt="blog.title"
                      class="img-fluid object-fit-cover"
                    />
                  </div>
                  <div
                    class="col-lg-6 d-flex flex-column justify-content-center"
                  >
                    <div
                      class="d-flex align-items-center justify-content-start mb-3"
                    >
                      <template
                        v-for="(category, index) in blog.categories"
                        :key="category"
                      >
                        <span class="fs-paragraph-medium">{{ category }}</span>
                        <span
                          class="mx-2"
                          v-if="index < blog.categories.length - 1"
                          >·</span
                        >
                      </template>
                    </div>
                    <h3 class="fs-heading-small mb-3">
                      {{ blog.title }}
                    </h3>
                    <div
                      class="d-flex justify-content-lg-between align-content-center"
                    >
                      <time class="fs-paragraph-small" :datetime="blog.date">{{
                        blog.dateFormatted
                      }}</time>
                      <div class="d-flex align-items-center">
                        <span class="d-flex me-3">
                          <span class="material-symbols-outlined me-1">
                            visibility </span
                          >{{ blog.views }} views
                        </span>
                        <span class="d-flex">
                          <span class="material-symbols-outlined me-1">
                            share </span
                          >{{ blog.shares }} shares
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- 訂閱區 -->
  <Subscription />
</template>
<script setup>
const blogList = ref([
  { id: 1, name: "全部" },
  { id: 2, name: "品牌設計" },
  { id: 3, name: "平面設計" },
  { id: 4, name: "UIUX 設計" },
  { id: 5, name: "網頁設計" },
  { id: 6, name: "設計規範" },
  { id: 7, name: "前端技術" },
  { id: 8, name: "後端架構" },
  { id: 9, name: "AI 趨勢應用" },
]);
const blogClick = ref(1);
const { data: blogs } = await useAsyncData("blog-list", () => {
  return queryCollection("blog").all();
});

const filterBlog = computed(() => {
  if (!blogs.value) return [];
  if (blogClick.value === 1) return blogs.value;
  const name = blogList.value.find((item) => item.id === blogClick.value)?.name;
  return blogs.value.filter((i) => i.categories.includes(name));
});
</script>
<style scoped>
.active {
  background-color: #24140b !important;
  color: #ffffff;
}
</style>
