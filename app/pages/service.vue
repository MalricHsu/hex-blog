<template>
  <!-- banner -->
  <section
    :style="`background: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/service_banner.png?raw=true') top center/cover;`"
  >
    <div class="container py-md-20">
      <div class="text-center mb-md-10">
        <h2 class="fs-heading-xxx-large text-neutral-0 mb-2">SERVICES</h2>
        <p class="fs-heading-xx-large text-neutral-0">服務項目</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <ul class="d-flex justify-content-center gap-6">
            <li
              v-for="(item, index) in service"
              :key="item.id"
              class="bg-neutral-0 p-md-8 list-unstyled text-center"
              :class="{ active: item.id === serviceID }"
              @click="serviceID = item.id"
            >
              <i :class="item.icon" class="fs-3 mb-3"></i>
              <div style="width: 187px">
                <p class="fs-heading-xxx-small">{{ item.code }}</p>
                <h5 class="fs-heading-medium line-height">{{ item.title }}</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- 服務流程 -->
  <section class="bg-primary-900">
    <div class="container py-md-20">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-5">
              <div>
                <p class="fs-heading-xxx-small text-neutral-0">SERVICE STEPS</p>
                <h2 class="fs-heading-xx-large text-neutral-0">服務流程</h2>
              </div>
            </div>
            <div class="col-md-7">
              <ul class="list-unstyled">
                <li
                  v-for="(step, index) in steps"
                  :key="index"
                  class="step-item d-flex align-items-start gap-6 mb-md-10"
                >
                  <span
                    class="step-number flex-shrink-0 d-flex align-items-center justify-content-center bg-neutral-0 text-primary-900 rounded-999 fs-heading-small"
                  >
                    {{ index + 1 }}
                  </span>
                  <div>
                    <h3 class="fs-heading-medium text-neutral-0 mb-3">
                      {{ step.title }}
                    </h3>
                    <p class="fs-paragraph-medium text-neutral-0 line-height">
                      {{ step.content }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 客戶案例 -->
  <section>
    <div class="container py-md-20">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <div class="mb-md-10">
            <p class="fs-heading-xxx-small">USER CASE</p>
            <h2 class="fs-heading-xx-large">客戶案例</h2>
          </div>
          <div class="row">
            <div v-for="project in topTwo" :key="project.id" class="col-md-6">
              <img
                class="case-img mb-3"
                :src="project.imagesPc"
                :alt="project.title"
              />
              <div class="d-flex justify-content-md-between mb-3">
                <span class="fs-paragraph-medium">{{
                  project.category.join(" · ")
                }}</span>
                <time class="fs-paragraph-small" datetime="2025-10-16">{{
                  project.date
                }}</time>
              </div>
              <h5 class="fs-heading-small mb-3">{{ project.title }}</h5>
              <div class="d-flex justify-content-md-between align-items-center">
                <p class="fs-paragraph-medium">{{ project.content }}</p>
                <NuxtLink
                  to="/"
                  class="text-neutral-0 fs-4 rounded-circle bg-neutral-700 p-3 flex-shrink-0 d-flex justify-content-center align-items-center"
                  style="width: 48px; height: 48px"
                  ><i class="bi bi-arrow-up-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 常見問題 -->
  <section>
    <div class="container py-md-20">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6">
              <p class="fs-heading-xxx-small">FAQ</p>
              <h2 class="fs-heading-xx-large">常見問題</h2>
            </div>
            <div class="col-md-6">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data: service } = await useFetch("/api/service");
const { data: projects } = await useFetch("/api/projects");
const topTwo = computed(() => {
  return projects.value?.slice(0, 2);
});
const serviceID = ref(1);

const steps = [
  {
    title: "需求訪談與視覺定位",
    content:
      "深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。",
  },
  {
    title: "概念發展與方案提案",
    content:
      "將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌獨特魅力。",
  },
  {
    title: "匠心編排與細節校正",
    content:
      "針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。",
  },
  {
    title: "專業檔案交付結案",
    content:
      "提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。",
  },
];
</script>
<style scoped>
li {
  cursor: pointer;
  transition: 0.2s;
}
.active {
  background-color: #24140b !important;
  color: #ffffff;
}
.step-number {
  width: 40px;
  height: 40px;
}
.step-item {
  position: relative;
}
.step-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 40px; /* 圓圈底部開始 */
  left: 20px; /* 圓圈寬度 56 的一半，對齊中心 */
  bottom: -2.5rem; /* 補上 mb-md-10 的間距，連到下一個圓 */
  width: 1px;
  background-color: #ffffff; /* primary-500 */
  transform: translateX(-50%);
}

.case-img {
  width: 100%;
  height: 305px; /* 想多高改這裡 */
  object-fit: cover;
  object-position: center;
}
</style>
