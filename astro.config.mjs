// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://sri-guide.com",
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
        "./src/styles/font-face.css",
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
          translations: { es: "Esenciales rápidas" },
          link: "quick-essentials",
        },
        {
          label: "Getting Around",
          translations: { es: "Cómo moverse" },
          link: "getting-around",
        },
        {
          label: "Where to Stay",
          translations: { es: "Dónde alojarse" },
          link: "where-to-stay",
        },
        {
          label: "Food & Eats",
          translations: { es: "Comida y bebidas" },
          link: "food-and-eats",
        },
        {
          label: "Things to Do",
          translations: { es: "Cosas para hacer" },
          link: "things-to-do",
        },
        {
          label: "Trip Plans",
          translations: { es: "Planes de viaje" },
          link: "trip-plans",
        },
        {
          label: "Culture & Etiquette",
          translations: { es: "Cultura y etiqueta" },
          link: "culture-and-etiquette",
        },
        {
          label: "Safety & Health",
          translations: { es: "Seguridad y salud" },
          link: "safety-and-health",
        },
        {
          label: "Emergency",
          translations: { es: "Emergencias" },
          link: "emergency",
        },
        {
          label: "FAQ",
          translations: { es: "Preguntas frecuentes" },
          link: "faq",
        },
        {
          label: "Travel Toolkit",
          translations: { es: "Herramientas de viaje" },
          link: "travel-toolkit",
        },
        {
          label: "Apps & Extras",
          translations: { es: "Aplicaciones y extras" },
          link: "apps",
        },
        {
          label: "My Trip",
          translations: { es: "Mi viaje" },
          link: "my-trip",
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
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallbackDenylist: [/.*/],
        globIgnores: ["404.html", "**/screenshots/**"],
        // --- TIER 1: App shell
        globPatterns: [
          "**/*.{js,css,woff,woff2}",
          "**/*.{ico,svg}",
          // Home page - Images
          "_astro/hero-image*.webp",
          "img/testimonials/*.{webp,avif,jpg,png}",
          // Critical guide pages
          "index.html",
          "quick-essentials/index.html",
          "safety-and-health/index.html",
          "travel-toolkit/index.html",
          "faq/index.html",
          "emergency/index.html",
          // locale [es]
          "es/index.html",
          "es/emergency/index.html",
        ],
        runtimeCaching: [
          // --- TIER 2: Other HTML pages
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
              },
            },
          },

          // --- TIER 3: Images & Media
          {
            urlPattern: /\.(?:png|jpg|jpeg|gif|webp|avif)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },

          // --- TIER 4: Pagefind index
          {
            urlPattern: /\/pagefind\//,
            handler: "CacheFirst",
            options: {
              cacheName: "search-cache",
              expiration: {
                maxEntries: 120,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
              },
            },
          },
        ],
      },
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
