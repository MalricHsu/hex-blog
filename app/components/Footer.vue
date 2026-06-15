<template>
  <section class="bg-primary-900">
    <div class="container p-20">
      <div class="row">
        <div class="col-md-5">
          <div class="mb-md-6">
            <p class="fs-heading-xxx-small text-neutral-0">與我聯繫</p>
            <h2 class="fs-heading-xxx-large text-neutral-0">CONTACT</h2>
          </div>
          <div class="mb-md-6">
            <p class="fs-paragraph-medium mb-1 text-neutral-0">
              若有數位產品設計和開發相關問題
            </p>
            <p class="fs-paragraph-medium mb-1 text-neutral-0">
              歡迎填寫表單 或 直接與我聯絡！
            </p>
          </div>
          <div class="mt-md-17">
            <div class="d-flex gap-3 mb-md-6">
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
          <form>
            <div class="row">
              <div class="col-6">
                <div class="form-floating mb-md-6">
                  <input
                    type="text"
                    class="form-control text-neutral-0 border-neutral-0"
                    id="contactName"
                    placeholder="姓名"
                  />
                  <label for="contactName" class="text-neutral-0">姓名</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating mb-md-6">
                  <input
                    type="tel"
                    class="form-control text-neutral-0 border-neutral-0"
                    id="contactPhone"
                    placeholder="手機號碼"
                  />
                  <label for="contactPhone" class="text-neutral-0"
                    >手機號碼</label
                  >
                </div>
              </div>
            </div>

            <div class="form-floating mb-md-6">
              <input
                type="email"
                class="form-control text-neutral-0 border-neutral-0"
                id="contactEmail"
                placeholder="電子信箱"
              />
              <label for="contactEmail" class="text-neutral-0">電子信箱</label>
            </div>

            <div class="form-floating mb-md-6">
              <textarea
                class="form-control text-neutral-0 border-neutral-0 rounded-40"
                id="contactRemark"
                placeholder="備註"
                style="height: 120px"
              ></textarea>
              <label for="contactRemark" class="text-neutral-0">備註</label>
            </div>

            <button
              type="submit"
              class="btn btn-neutral-0 text-neutral-700 rounded-999 w-100"
            >
              送出
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
