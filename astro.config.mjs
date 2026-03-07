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
        Head: "./src/components/Head.astro",
        PageFrame: "./src/components/PageFrame.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        Footer: "./src/components/Footer.astro",
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
          href: "https://www.buymeacoffee.com/dilshanh",
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
          label: "Safety & Health",
          translations: { es: "Seguridad y Salud" },
          link: "safety-health",
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
        navigateFallback: "/404",
        globPatterns: [
          "**/*.{js,css,html,svg,ico,png,jpg,jpeg,gif,webp,woff,woff2}",
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
            src: "/screenshots/screenshot-n-1.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/screenshot-n-2.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/screenshot-n-3.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "narrow",
          },
          // desktop
          {
            src: "/screenshots/screenshot-w-1.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-w-2.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-w-3.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
