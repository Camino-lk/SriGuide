// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://sri-guide.vercel.app",
  integrations: [
    starlight({
      title: "SriGuide",
      description:
        "Explore Sri Lanka with Confidence - practical, up-to-date travel tips for transport, stays, safety, and more.",
      editLink: {
        baseUrl: "https://github.com/Camino-lk/SriGuide/edit/main/",
      },
      lastUpdated: true,
      // ---- Begin Customizations ----
      components: {
        Head: "./src/components/astro/Head.astro",
        PageFrame: "./src/components/astro/PageFrame.astro",
        Banner: "./src/components/astro/Banner.astro",
        SocialIcons: "./src/components/astro/SocialIcons.astro",
        Footer: "./src/components/astro/Footer.astro",
      },
      customCss: [
        "./src/styles/customstyles.css",
        "./src/styles/font-face.css"
      ],

      // ---- End Customizations ----
      logo: {
        light: "./src/assets/images/SriGuideLogo-LM.svg",
        dark: "./src/assets/images/SriGuideLogo-DM.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Camino-lk/SriGuide",
        },
        {
          icon: "heart",
          label: "Support",
          href: "/help-us",
        },
      ],
      sidebar: [
        {
          label: "Quick Essentials",
          translations: { es: "Esenciales Rápidas" },
          link: "quick-essentials",
        },
        {
          label: "Getting Around",
          translations: { es: "Cómo Moverse" },
          link: "getting-around",
        },
        {
          label: "Where to Stay",
          translations: { es: "Dónde Alojarse" },
          link: "where-to-stay",
        },
        {
          label: "Food & Eats",
          translations: { es: "Comida y Bebidas" },
          link: "food-and-eats",
        },
        {
          label: "Things to Do",
          translations: { es: "Cosas para Hacer" },
          link: "things-to-do",
        },
        {
          label: "Trip Plans",
          translations: { es: "Planes de Viaje" },
          link: "trip-plans",
        },
        {
          label: "Culture & Etiquette",
          translations: { es: "Cultura y Etiqueta" },
          link: "culture-and-etiquette",
        },
        {
          label: "Safety & Health",
          translations: { es: "Seguridad y Salud" },
          link: "safety-and-health",
        },
        {
          label: "Emergency",
          translations: { es: "Emergencias" },
          link: "emergency",
        },
        {
          label: "FAQ",
          translations: { es: "Preguntas Frecuentes" },
          link: "faq",
        },
        {
          label: "Travel Toolkit",
          translations: { es: "Herramientas de Viaje" },
          link: "travel-toolkit",
        },
        {
          label: "Apps & Extras",
          translations: { es: "Aplicaciones y Extras" },
          link: "apps",
        },
      ],
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
    }),
    // ---- PWA Integration ----
    AstroPWA({
      workbox: {
        navigateFallback: "/",
        globPatterns: [
          "**/*.{js,css,html,svg,ico,png,jpg,jpeg,gif,webp,avif,mp3,woff,woff2}",
          "pagefind/**/*.{pf_fragment,pf_index,pf_meta,json,pagefind,js,wasm}",
        ],
      },
      registerType: "autoUpdate",
      manifest: {
        name: "SriGuide",
        short_name: "SriGuide",
        start_url: "/?utm_source=pwa",
        id: "/?utm_source=pwa",
        description:
          "Explore Sri Lanka with Confidence - practical, up-to-date travel tips for transport, stays, safety, and more.",
        theme_color: "#42b883",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          // mobile screenshots
          {
            src: "/screenshots/screenshot-n-1.jpg",
            sizes: "540x720",
            type: "image/jpeg",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/screenshot-n-2.jpg",
            sizes: "540x720",
            type: "image/jpeg",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/screenshot-n-3.jpg",
            sizes: "540x720",
            type: "image/jpeg",
            form_factor: "narrow",
          },
          // desktop
          {
            src: "/screenshots/screenshot-w-1.jpg",
            sizes: "1024x593",
            type: "image/jpeg",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-w-2.jpg",
            sizes: "1024x593",
            type: "image/jpeg",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-w-3.jpg",
            sizes: "1024x593",
            type: "image/jpeg",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
