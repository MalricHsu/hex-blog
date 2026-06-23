<template>
  <section
    class="position-relative"
    :style="`background: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription_bg.png?raw=true') center/cover; min-height: 440px;`"
  >
    <!-- 遮罩 -->
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark-60 bg-opacity-50"
    ></div>
    <!-- 內容 -->
    <div class="container position-relative">
      <div class="row">
        <div class="col-lg-5 px-0 px-lg-3 mb-4 mb-lg-0">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription.png?raw=true"
            alt="訂閱"
            class="sub-img w-100 object-fit-cover"
          />
        </div>
        <div class="col-lg-7">
          <div class="p-6 p-lg-8 p-xl-20">
            <div class="mb-4 mb-lg-6">
              <p class="fs-heading-xxx-small text-neutral-0">訂閱電子報</p>
              <h2 class="fs-heading-xxx-large text-neutral-0">SUBSCRIPTION</h2>
            </div>
            <p class="fs-paragraph-medium text-neutral-0 mb-4 mb-lg-6">
              你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用
              AI 工具提升產能！
            </p>
            <form @submit.prevent="submitEmail">
              <div class="form-floating mb-3 position-relative">
                <input
                  class="form-control"
                  id="floatingInput"
                  placeholder="請輸入電子信箱"
                  v-model="email"
                />
                <label for="floatingInput" class="text-neutral-0"
                  >電子信箱</label
                >
                <button
                  type="submit"
                  :disabled="sending"
                  class="btn btn-neutral-0 rounded-999 position-absolute end-0 top-50 translate-middle-y me-2 text-neutral-700"
                >
                  {{ sending ? "送出中…" : "送出" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import axios from "axios";
const toast = useToastStore();

const email = ref("");
const sending = ref(false);

const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const submitEmail = async () => {
  if (!email.value) {
    toast.error("請輸入電子信箱");
    return;
  }

  if (!isValidEmail(email.value)) {
    toast.error("請輸入電子信箱正確格式");
    return;
  }

  sending.value = true;
  try {
    const res = await axios.post("/api/send-email", { email: email.value });
    toast.success(res.data.message);
    email.value = "";
  } catch (error) {
    toast.error(error.response?.data?.message || "送出失敗，請稍後再試");
  } finally {
    sending.value = false;
  }
};
</script>

<style scoped>
/* 手機：等比縮小、不裁切 */
.sub-img {
  height: auto;
}
/* lg 以上：填滿欄位、與右側文字等高、左右貼齊 */
@media (min-width: 992px) {
  .sub-img {
    height: 100%;
  }
}
</style>
