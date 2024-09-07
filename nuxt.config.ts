// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  image: {},

  experimental: { appManifest: false },

  routeRules: {
    // prerender index route by default
    "/": { prerender: true, redirect: "/LandingPage" },
  },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxt/icon"],
  compatibilityDate: "2024-09-08",
});
