// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  // TODO: Add site url
  integrations: [
    starlight({
      title: "SriGuide",
      // ---- Begin Customizations ----
      components: {
        Head: "./src/components/Head.astro",
        PageFrame: "./src/components/PageFrame.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      customCss: ["./src/styles/customstyles.css"],

      // ---- End Customizations ----
      logo: {
        light: "./src/assets/images/SriGuideLogo-LM-Xmas.svg",
        dark: "./src/assets/images/SriGuideLogo-DM-Xmas.svg",
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
    AstroPWA({}),
  ],
});
