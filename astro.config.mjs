// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNext from "starlight-theme-next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: "SriGuide",
      // ---- Begin Customizations ----
      components: {
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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      defaultLocale: "en",
      locales: {
        en: { label: "English" },
        es: { label: "Español", lang: "es" },
      },
    }),
  ],
});
