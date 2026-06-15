<template>
  <div
    v-for="(project, index) in filterProjects"
    :key="project.id"
    class="position-relative overflow-hidden d-flex align-items-center"
    :class="{ 'mb-md-6': index < filterProjects.length - 1 }"
    :style="`background: url('${project.imagesPc}') center/cover; min-height: 397px;`"
  >
    <div class="ms-md-7 bg-primary-50 p-md-8" style="max-width: 386px">
      <time
        datetime="2025-10-26"
        class="d-block fs-paragraph-small text-center mb-3"
        >{{ project.date }}</time
      >
      <p class="fs-paragraph-medium text-center mb-3">
        {{ project.category.join(" · ") }}
      </p>
      <h3 class="fs-heading-small text-center line-height mb-3">
        {{ project.title }}
      </h3>
      <p class="fs-paragraph-medium text-center mb-3">
        {{ project.content }}
      </p>
      <div class="text-center">
        <NuxtLink to="/project" class="btn btn-neutral-700 rounded-999">
          前往專案
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: projects } = await useFetch("/api/projects");

const props = defineProps({
  tag: {
    type: String,
    default: "全部",
  },
});

const filterProjects = computed(() => {
  if (!projects.value) return [];
  if (props.tag === "全部") return projects.value;
  return projects.value.filter((project) => {
    return project.category.includes(props.tag);
  });
});
</script>
