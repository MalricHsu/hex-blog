// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@pinia/nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/all.scss"],
  app: {
    head: {
      htmlAttrs: { lang: "zh-Hant" },
      titleTemplate: "%s | Nelson Blog",
      title: "Nelson Blog",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
