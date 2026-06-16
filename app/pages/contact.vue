<template>
  <!-- banner -->
  <section
    :style="`background: url('https://images.unsplash.com/photo-1510851896000-498520af2236?w=2000&q=80&auto=format&fit=crop') center/cover;`"
  >
    <div class="container py-12 py-md-22">
      <div class="text-center">
        <h2 class="fs-heading-xxx-large text-neutral-0 mb-2">CONTACT</h2>
        <p class="fs-heading-xx-large text-neutral-0">聯絡我們</p>
      </div>
    </div>
  </section>

  <!-- 聯絡表單 -->
  <section>
    <div class="container py-10 py-md-20">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="text-center mb-8 mb-md-10">
            <h3 class="fs-heading-medium mb-3">讓我們聊聊你的下一個專案</h3>
            <p class="fs-paragraph-medium mb-3">
              無論是品牌識別、網頁設計，還是前端開發與系統串接，<br
                class="d-none d-md-inline"
              />我都樂意傾聽你的想法，並提供最適合的解決方案。
            </p>
            <p class="fs-paragraph-medium mb-0">
              請填寫以下表單，告訴我你的需求與時程，<br
                class="d-none d-md-inline"
              />我會在 1～2 個工作天內主動與你聯繫，一起把想法變成作品。
            </p>
          </div>

          <!-- 聯絡資訊 -->
          <div
            class="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-8 text-center mb-8 mb-md-10"
          >
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-envelope fs-5"></i>
              <span class="fs-paragraph-medium">service@hexschool.com</span>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-clock fs-5"></i>
              <span class="fs-paragraph-medium">回覆時間：週一至週五 10:00–18:00</span>
            </div>
          </div>

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
                class="form-control rounded-40"
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
