// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    "/": { prerender: true, redirect: "/LandingPage" },
  },

  modules: ["@nuxt/ui", "@nuxt/eslint"],
});
