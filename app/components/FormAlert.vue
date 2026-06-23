<template>
  <div
    v-if="msg"
    class="toast-item d-flex align-items-center gap-2 px-4 py-3 rounded-3 fw-bold shadow"
    :style="
      isSuccess
        ? 'background-color: #d1e7dd; color: #157347; border-left: 4px solid #157347'
        : 'background-color: #f8d7da; color: #b02a37; border-left: 4px solid #b02a37'
    "
  >
    <i
      class="fs-5"
      :class="
        isSuccess ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'
      "
    ></i>
    <span>{{ msg }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
  msg: {
    type: String,
    default: "",
  },
});
const isSuccess = computed(() => props.type === "success");
</script>

<style scoped>
.toast-item {
  min-width: 260px;
  max-width: 360px;
}
</style>
