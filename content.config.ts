import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page", // page = 會對應到網址
      source: "blog/**/*.md", // 抓 content/blog 底下所有 md
      schema: z.object({
        // 你的 frontmatter 自訂欄位
        image: z.string(),
        categories: z.array(z.string()),
        date: z.string(),
        dateFormatted: z.string(),
        views: z.number(),
        shares: z.number(),
      }),
    }),
  },
});
