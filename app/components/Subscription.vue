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
        <div class="col-md-5 px-0 px-md-3">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription.png?raw=true"
            alt="訂閱"
            class="w-100 h-100 object-fit-cover"
          />
        </div>
        <div class="col-md-7">
          <div class="p-6 p-md-20">
            <div class="mb-4 mb-md-6">
              <p class="fs-heading-xxx-small text-neutral-0">訂閱電子報</p>
              <h2 class="fs-heading-xxx-large text-neutral-0">SUBSCRIPTION</h2>
            </div>
            <p class="fs-paragraph-medium text-neutral-0 mb-4 mb-md-6">
              你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用
              AI 工具提升產能！
            </p>
            <div class="form-floating mb-3 position-relative">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" class="text-neutral-0">電子信箱</label>
              <button
                type="submit"
                class="btn btn-neutral-0 rounded-999 position-absolute end-0 top-50 translate-middle-y me-2 text-neutral-700"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
