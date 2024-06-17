// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
    "~/assets/css/primevue.css",
  ],
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-primevue",
    "nuxt-icons",
    "nuxt-anchorscroll",
  ],
  alias: {
    img: "/<rootDir>/assets/img",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: "Aura", from: "~/presets/aura" },
  },
});
