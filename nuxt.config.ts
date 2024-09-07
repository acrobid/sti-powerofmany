// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  image: {
    provider: "ipx",
  },
  experimental: { appManifest: false },

  routeRules: {
    // prerender index route by default
    "/": { prerender: true, redirect: "/LandingPage" },
  },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxt/icon"],
});