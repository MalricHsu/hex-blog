<template>
  <div class="accordion" id="faqAccordion">
    <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button gap-4"
          :class="{ collapsed: openIndex !== index }"
          type="button"
          @click="toggle(index)"
        >
          <span class="fs-heading-xx-small">
            {{ String(index + 1).padStart(2, "0") }}
          </span>
          <span class="fs-heading-xx-small">{{ faq.question }}</span>
        </button>
      </h2>
      <div class="faq-panel" :class="{ open: openIndex === index }">
        <div class="accordion-body fs-paragraph-medium">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: faqs } = await useFetch("/api/accordion");

const openIndex = ref(0);
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
/* 手風琴展開動畫*/
.faq-panel {
  max-height: 0; /* 收合 */
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.faq-panel.open {
  max-height: 500px; /* 展開 */
}

.accordion-item {
  border-bottom: 1px solid #24140b;
}
</style>
