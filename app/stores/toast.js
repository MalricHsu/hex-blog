export const useToastStore = defineStore("toast", () => {
  //畫面上通知的清單 state
  const toasts = ref([]);
  //操作 method
  const addToast = (type, msg) => {
    const id = Date.now();
    toasts.value.push({ id, type, msg });
    setTimeout(() => removeToast(id), 3000);
  };
  const success = (msg) => addToast("success", msg);
  const error = (msg) => addToast("error", msg);

  const removeToast = (id) => {
    return (toasts.value = toasts.value.filter((toast) => toast.id !== id));
  };

  return { toasts, success, error, removeToast };
});
