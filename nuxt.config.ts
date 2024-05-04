// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    https: {
      key: "localhost-key.pem",
      cert: "localhost.pem",
    },
  },
  modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss"],
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
    },
  },
});
