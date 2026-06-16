<template>
  <!-- banner -->
  <section
    :style="`background: url('https://images.unsplash.com/photo-1510851896000-498520af2236?w=2000&q=80&auto=format&fit=crop') center/cover;`"
  >
    <div class="container py-md-22">
      <div class="text-center">
        <h2 class="fs-heading-xxx-large text-neutral-0 mb-2">CONTACT</h2>
        <p class="fs-heading-xx-large text-neutral-0">聯絡我們</p>
      </div>
    </div>
  </section>

  <!-- 聯絡表單 -->
  <section>
    <div class="container py-md-20">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p class="fs-paragraph-medium text-center mb-md-10">
            有任何專案合作或設計需求嗎？歡迎填寫以下表單，我會盡快與你聯繫。
          </p>

          <form>
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="姓名"
              />
              <label for="name">姓名</label>
            </div>

            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="電子信箱"
              />
              <label for="email">電子信箱</label>
            </div>

            <div class="form-floating mb-4">
              <textarea
                class="form-control"
                id="message"
                placeholder="訊息內容"
                style="height: 160px"
              ></textarea>
              <label for="message">訊息內容</label>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-neutral-700 text-neutral-0 rounded-999 px-8"
              >
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({ layout: "no-footer" });
</script>
