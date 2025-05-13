// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["vuetify/styles", "@/assets/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
    },
  },
  components: true,
});
