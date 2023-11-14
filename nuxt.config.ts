// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  css: [
    "primevue/resources/themes/lara-light-teal/theme.css",
    "~/assets/css/main.css",
  ],
  primevue: {
    components: {
      include: ["Button", "Editor"],
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
