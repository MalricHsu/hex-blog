<template>
  <section class="bg-primary-900">
    <div class="container p-6 p-md-20">
      <div class="row">
        <div class="col-md-5 mb-8 mb-md-0">
          <div class="mb-4 mb-md-6">
            <p class="fs-heading-xxx-small text-neutral-0">與我聯繫</p>
            <h2 class="fs-heading-xxx-large text-neutral-0">CONTACT</h2>
          </div>
          <div class="mb-4 mb-md-6">
            <p class="fs-paragraph-medium mb-1 text-neutral-0">
              若有數位產品設計和開發相關問題
            </p>
            <p class="fs-paragraph-medium mb-1 text-neutral-0">
              歡迎填寫表單 或 直接與我聯絡！
            </p>
          </div>
          <div class="mt-md-17">
            <div class="d-flex gap-3 mb-4 mb-md-6">
              <NuxtLink to="https://www.instagram.com/">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 text-neutral-0 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-instagram fs-4"></i>
                </span>
              </NuxtLink>
              <NuxtLink to="https://www.line.me/tw/">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 text-neutral-0 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-line fs-4"></i>
                </span>
              </NuxtLink>
              <NuxtLink to="https://tw.linkedin.com/">
                <span
                  class="d-flex align-items-center justify-content-center border border-1 text-neutral-0 rounded-circle"
                  style="width: 48px; height: 48px"
                >
                  <i class="bi bi-linkedin fs-4"></i>
                </span>
              </NuxtLink>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-envelope fs-5 text-neutral-0 me-2"></i>
              <span class="text-neutral-0 fs-paragraph-medium"
                >service@hexschool.com</span
              >
            </div>
          </div>
        </div>
        <!-- 聯絡表單 -->
        <div class="col-md-7">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-floating mb-4 mb-md-6">
                  <input
                    type="text"
                    class="form-control text-neutral-0 border-neutral-0"
                    id="contactName"
                    placeholder="姓名"
                    v-model="name"
                  />
                  <label for="contactName" class="text-neutral-0">姓名</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-floating mb-4 mb-md-6">
                  <input
                    type="tel"
                    class="form-control text-neutral-0 border-neutral-0"
                    id="contactPhone"
                    placeholder="手機號碼"
                    v-model="phone"
                  />
                  <label for="contactPhone" class="text-neutral-0"
                    >手機號碼</label
                  >
                </div>
              </div>
            </div>

            <div class="form-floating mb-4 mb-md-6">
              <input
                type="email"
                class="form-control text-neutral-0 border-neutral-0"
                id="contactEmail"
                placeholder="電子信箱"
                v-model="email"
              />
              <label for="contactEmail" class="text-neutral-0">電子信箱</label>
            </div>

            <div class="form-floating mb-4 mb-md-6">
              <textarea
                class="form-control text-neutral-0 border-neutral-0 rounded-40"
                id="contactRemark"
                placeholder="備註"
                style="height: 120px"
                v-model="note"
              ></textarea>
              <label for="contactRemark" class="text-neutral-0">備註</label>
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn btn-neutral-0 text-neutral-700 rounded-999 w-100"
            >
              {{ sending ? "送出中…" : "送出" }}
            </button>

            <!-- 訊息 -->
            <div
              v-if="successMsg"
              class="d-flex align-items-center gap-2 mt-3 px-3 py-2 rounded fw-bold"
              style="background-color: #d1e7dd; color: #157347"
            >
              <i class="bi bi-check-circle-fill"></i>
              <span>{{ successMsg }}</span>
            </div>
            <div
              v-if="errorMsg"
              class="d-flex align-items-center gap-2 mt-3 px-3 py-2 rounded fw-bold"
              style="background-color: #f8d7da; color: #b02a37"
            >
              <i class="bi bi-exclamation-circle-fill"></i>
              <span>{{ errorMsg }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";

const name = ref("");
const phone = ref("");
const email = ref("");
const note = ref("");

const sending = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const submitForm = async () => {
  successMsg.value = "";
  errorMsg.value = "";

  const result = contactSchema.safeParse({
    name: name.value,
    phone: phone.value,
    email: email.value,
    note: note.value,
  });

  if (!result.success) {
    errorMsg.value = result.error.issues
      .map((issue) => issue.message)
      .join("、");
    return;
  }

  sending.value = true;

  try {
    const res = await axios.post("/api/send-footerContact", result.data);
    successMsg.value = res.data.message;
    name.value = "";
    phone.value = "";
    email.value = "";
    note.value = "";
  } catch (error) {
    errorMsg.value = error.response?.data?.message || "送出失敗，請稍後再試";
  } finally {
    sending.value = false;
  }
};
</script>
