<template>
  <TransitionGroup
    tag="div"
    name="toast"
    class="position-fixed top-0 end-0 p-3 d-flex flex-column gap-2"
    style="z-index: 1100"
  >
    <FormAlert
      v-for="t in toast.toasts"
      :key="t.id"
      :type="t.type"
      :msg="t.msg"
    />
  </TransitionGroup>
</template>
<script setup>
const toast = useToastStore();
</script>

<style scoped>
/* 通知進場/離場：從右側滑入、淡出 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
