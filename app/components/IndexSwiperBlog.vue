<template>
  <Swiper
    :modules="[Pagination, Autoplay]"
    :slides-per-view="1"
    :space-between="24"
    :autoplay="{ delay: 3000 }"
    :breakpoints="{
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    }"
  >
    <SwiperSlide v-for="blog in blogs" :key="blog.id">
      <NuxtLink :to="`/blog/${blog.id}`">
        <article>
          <img
            :src="blog.image"
            :alt="blog.title"
            class="w-100 mb-3"
            style="aspect-ratio: 16 / 9; object-fit: cover"
          />
          <p class="fs-paragraph-medium mb-3">
            {{ blog.categories.join(" · ") }}
          </p>
          <h3 class="fs-heading-small mb-3">{{ blog.title }}</h3>
          <div class="fs-paragraph-small d-flex justify-content-between">
            <time :datetime="blog.date">{{ blog.dateFormatted }}</time>
            <div>
              <div class="d-flex align-items-center">
                <span class="d-flex me-3">
                  <span class="material-symbols-outlined me-1">
                    visibility </span
                  >{{ blog.views }} views
                </span>
                <span class="d-flex">
                  <span class="material-symbols-outlined me-1"> share </span
                  >{{ blog.shares }} shares
                </span>
              </div>
            </div>
          </div>
        </article></NuxtLink
      >
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const { data: blogs } = await useFetch("/api/blogs");
</script>
