# Contributing to SriGuide

Thank you for your interest in contributing to SriGuide — a free, open-source travel guide PWA for Sri Lanka. This is a community effort, and thoughtful contributions are genuinely appreciated.

Before diving in, please take a few minutes to read this document in full. It will save you time and help your contribution land smoothly.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Before You Start](#before-you-start)
- [Reporting Issues & Templates](#reporting-issues--templates)
- [Branch & Workflow Strategy](#branch--workflow-strategy)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Content](#contributing-content)
- [Adding or Updating Translations](#adding-or-updating-translations)
- [Images & Media](#images--media)
- [Content Standards](#content-standards)
- [License](#license)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

There are many ways to help beyond writing code:

- Fixing typos, broken links, or outdated information
- Adding or improving travel tips and guides
- Translating content into a new language or improving an existing one
- Improving accessibility, performance, or PWA behavior
- Reporting inaccurate or misleading information
- Improving documentation

**For a full picture of what we're actively looking for and where help is most needed, visit the [Contributing page on the site](https://sri-guide.com/help-us).** That page is kept up to date with current priorities and open tasks — start there before opening anything here.

---

## Before You Start

### Small changes — go ahead

Typos, broken links, minor wording fixes, small factual corrections, content updates to existing pages — open a PR directly. No prior discussion needed.

### Large or structural changes — talk first

**Please reach out before putting significant time into a large change.** This includes:

- New sections, major content restructuring, or new guide pages
- New components or changes to existing component architecture
- Changes to Astro config, Starlight theme, or PWA configuration
- New features, analytics changes, or dependency additions
- Anything touching `astro.config.mjs`, or PWA service worker config

We may already be working on something similar, or the direction may not be right for the project. **Pull requests for large, undiscussed changes may need to be declined** — not because the work isn't good, but because we can't always integrate changes that weren't coordinated. Open an issue first and get a thumbs up before building.

---

## Reporting Issues & Templates

We have issue and pull request templates set up to make reporting and reviewing easier. Please use the appropriate template when opening an issue or PR — they prompt you for the information that's actually needed.

**Bug reports** should include:

- A clear description of the problem
- Where you found it (URL or file path)
- What you expected vs. what happened
- Screenshots or console output if relevant

**Content issues** (outdated info, factual errors, missing topics) should include the page URL and what needs to change.

For questions or open-ended discussions, open an issue and label it appropriately until a Discussions space is set up.

---

## Branch & Workflow Strategy

We do **not** push directly to `main` on code changes. All changes flow through PRs.

| Change type                                                    | Branch to use    | PR target |
| -------------------------------------------------------------- | ---------------- | --------- |
| Content updates, page edits, minor fixes, new guide components | `dev`            | `main`    |
| New themes, PWA features, analytics, major new functionality   | `feature/<name>` | `main`    |

**Current active branches:** `dev`, `feature/analytics`, `feature/pwa-3`

### What goes in `dev`

Day-to-day contributions: adding or editing guide content, updating existing pages, fixing typos, adding new components inside `src/components/`, minor config changes.

### What gets its own feature branch

Larger, self-contained work with its own scope — new PWA functionality, analytics integration, a new theme, a significant new site section. If you're unsure which category your change falls into, open an issue and ask.

### Working on an existing feature branch

If you want to contribute to work already in progress on a feature branch (e.g. `feature/pwa-3`), branch off that feature branch, not `dev`, and PR back into it.

---

## Pull Request Guidelines

1. Fork the repo and create your branch from the appropriate base (`dev` or the relevant `feature/*` branch — **not** `main`).
2. Use a descriptive branch name (if needed): `fix/broken-link-faq`, `content/add-train-tips`.
3. Keep PRs focused — one concern per PR. Avoid mixing unrelated changes.
4. Fill out the PR template when opening your pull request.
5. Link any related issue in the PR description (e.g. `Closes #42`).
6. Check that your changes work in both **light and dark themes** and different viewports (mobile/tablet/desktop).
7. Be responsive to review feedback. PRs with no response for an extended period may be closed.

PRs are reviewed when maintainer bandwidth allows — patience is appreciated.

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- A code editor — we use and recommend **VS Code** with the following extensions:
  - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) — syntax highlighting and IntelliSense for `.astro` files
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — automatic code formatting
  - [Code Spell Checker (cSpell)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) — catches spelling errors in content and code

The repo includes a `.vscode/` config that handles Prettier formatting on save and spell-check word allowlists — these will activate automatically once the extensions are installed.

### Getting started

```bash
# Clone your fork
git clone https://github.com/Camino-lk/SriGuide.git
cd SriGuide

# Install dependencies
npm install

# Start the local dev server
npm run dev
```

The dev server runs at `http://localhost:4321` by default.

### Available scripts

```bash
npm run dev        # Start local dev server
npm run build      # Production build (also runs postbuild fix-pagefind script)
npm run preview    # Preview the production build locally
```

> **Note on `postbuild`:** After `astro build`, a `fix-pagefind.js` script runs automatically. This patches a known issue where Pagefind-powered search fails in offline/PWA mode. Do not remove or skip this step when testing production builds.

---

## Project Structure

A quick map of where things live — knowing this will save you time:

```
src/
├── assets/
│   └── images/
│       └── guides/          # Guide page images (organised by page name)
├── components/
│   ├── astro/               # Starlight overrides
│   ├── home/                # Homepage-specific components
│   ├── Guides/              # Components used inside guide pages
│   ├── pwa/                 # PWA-related components (e.g. offline prompt)
│   └── misc/                # Other components (e.g. DonationPopup.astro)
├── content/
│   └── docs/                # All guide content as .mdx files
│       ├── (en — root, no subfolder)
│       └── es/              # Spanish locale content
├── fonts/                   # Web fonts
└── styles/                  # Global and shared styles

public/
├── audio/                   # Sinhala phrase audio snippets (used in guide pages)
└── img/                     # Public static images
```

### Adding new components

New components go in `src/components/` under the most appropriate subfolder:

- Overriding a Starlight default → `astro/`
- Used on the homepage → `home/`
- Used inside a guide page → `Guides/`
- PWA-related → `pwa/`
- Anything else → `misc/`

If you're unsure which folder fits, mention it in your PR and we'll sort it out.

---

## Contributing Content

Content lives in `src/content/docs/` as `.mdx` files. English is the root locale — there is no separate `en/` folder. Content is written in MDX and can include Astro components.

**When editing or adding content:**

- Write for a traveler who is new to Sri Lanka — assume no local knowledge
- Be factual, specific, and practical. Avoid vague advice ("be careful") in favour of actionable guidance
- Verify that information is current — outdated tips can actively mislead people
- Avoid promotional language. If you are affiliated with a service or operator you want listed, disclose it upfront
- No paid placements. Content is included on merit only and we reserve the right to reject such contents

**Markdown file paste settings:** The `.vscode/` config is set up so that when you paste an image file into an `.mdx` file in VS Code, it is automatically copied into `src/assets/images/guides/<page-name>/` and a Markdown image tag is inserted. Use this workflow when adding new images to content pages.

---

## Adding or Updating Translations

SriGuide uses Astro Starlight's built-in i18n support. English is the root locale (no subfolder). Other locales each have a dedicated folder inside `src/content/docs/`.

> For full background on how Starlight handles i18n, see the official docs: **[Starlight Internationalization Guide](https://starlight.astro.build/guides/i18n/)**

### Adding a new language

**1. Create the locale folder**

Inside `src/content/docs/`, create a folder named with the correct [BCP-47 locale code](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) (e.g. `fr` for French, `de` for German):

```
src/content/docs/es/    ← already exists (Spanish)
src/content/docs/fr/    ← example for a new French locale
```

**2. Copy and translate content files**

Copy the `.mdx` files you want to translate from the root `docs/` folder into your locale folder. Translate the content — you don't need to translate every page at once; untranslated pages will fall back to English automatically.

**3. Fix file paths — this is important**

Because locale folders are one level deeper than the English root, all internal paths in copied files need an extra `../` prefix.

| Path type        | English (root)                             | Translated locale (e.g. `es/`)                |
| ---------------- | ------------------------------------------ | --------------------------------------------- |
| Component import | `../../components/Guides/AppCards.astro`   | `../../../components/Guides/AppCards.astro`   |
| Image reference  | `../../assets/images/guides/page/img.avif` | `../../../assets/images/guides/page/img.avif` |
| Internal links   | `/travel-toolkit`                          | `/es/travel-toolkit`                          |

The existing `es/` locale has these corrections applied throughout — refer to any file there if you run into path errors.

**4. Update `astro.config.mjs`**

You need to register the new locale in two places:

Add to the `locales` object:

```js
locales: {
  root: {
    label: "English",
    lang: "en",
  },
  es: {
    label: "Español",
    lang: "es",
  },
  fr: {              // ← your new locale
    label: "Français",
    lang: "fr",
  },
},
```

Add translations for each sidebar label:

```js
sidebar: [
  {
    label: "Quick Essentials",
    translations: {
      es: "Esenciales rápidas",
      fr: "L'essentiel rapide",   // ← add your locale here for each item
    },
    link: "quick-essentials",
  },
  // ... repeat for all sidebar items
],
```

### Updating an existing translation

Find the corresponding file inside the locale folder (e.g. `src/content/docs/es/`) and edit it directly. No config changes needed unless you're adding new sidebar entries.

### Translation branches

Translations follow the same branch rules as content — they go through `dev` and PR to `main`. There's no need for separate per-language branches; translations are treated as content updates.

---

## Images & Media

- **Format:** All images must be in **AVIF** format (unless any other format is necessary). AVIF offers excellent compression at high quality and is the standard for this project.
- **Optimization:** Use **[Squoosh](https://squoosh.app/)** to convert and compress images before adding them. Keep file sizes as small as visually acceptable.
- **Location:** Guide page images go in `src/assets/images/guides/<page-name>/`. Static images that need to be publicly accessible go in `public/img/`.
- **Audio:** Sinhala phrase audio snippets live in `public/audio/` and are used in guide pages. If adding new audio, follow the same naming conventions already in use there.

Do not add unoptimized images (PNG, JPEG, WebP) to the `src/assets/` directory — convert them to AVIF first.

---

## Content Standards

SriGuide has no paid placements and no affiliate arrangements. The standard for inclusion is simple: does this genuinely help a traveler in Sri Lanka?

- Apps, services, and operators go through a basic vetting process before being listed
- If you're affiliated with something you want listed, say so upfront — we'll evaluate it on merit, but transparency matters
- Suggestions framed as promotions will not be accepted
- Accuracy matters more than completeness — if something is uncertain or out of date, leave it out or flag it

---

## License

SriGuide is licensed under the **[MIT License](./LICENSE)**. By contributing, you agree that your contributions will be licensed under the same terms.

---

## Code of Conduct

This project is a good-faith, community-oriented effort. Contributors are expected to engage respectfully and constructively. Harassment, bad-faith behavior, or deliberate submission of misleading travel information will not be tolerated and may result in being blocked from contributing.

We want SriGuide to remain a trustworthy resource for travelers. That starts with how this community operates.

---

_Thanks again for taking the time to contribute. Every improvement — big or small — makes this a better resource for every traveler who uses it._
