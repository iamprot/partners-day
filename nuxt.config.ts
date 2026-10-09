// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon/module', '@nuxtjs/google-fonts'],
  ssr: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png?v=2" },
      ],
    },
  },
      googleFonts: {
        families: {
            Unbounded: "200..900",
            "Open Sans": "300..800"
        },
    },
})
