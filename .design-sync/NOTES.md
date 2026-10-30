# design-sync notes: VAM Design (vamdesign-portfolio)

Claude Design project: https://claude.ai/design/p/61953805-9606-48b0-b5dc-2fe3fb2a07d8 (pinned in config.json).

## Setup a re-sync needs (not committed, recreate per clone)
- This is a Next.js app, not a published package. The converter looks for `node_modules/<pkg>`, so link the repo into itself:
  `ln -sfn .. node_modules/vamdesign-portfolio` (wiped by `npm ci`; re-create it every time).
- The `source-kit.mjs` fork imports bare deps, so create `ln -sfn ../.ds-sync/node_modules .design-sync/node_modules`.
- Run `buildCmd` from config.json first. It compiles Tailwind into `.design-sync/.cache/site.css` (gitignored), which is `cssEntry`.
- Build without `--entry` (synth-entry mode from `components/`).

## Why the repo-local pieces exist
- `overrides/source-kit.mjs`: the synth entry uses `export *`, which drops `export default function Nav` and the other site sections, so the fork re-exports defaults by name. It also skips `components/ui/sheet.tsx` (a byte-for-byte copy of slider.tsx; two `export *` of `Slider` makes esbuild drop it), imports `next-shim.mjs` first, groups `components/ui` as **ui** and `components/` as **site**, and finds compound parts (`DialogClose`) inside their parent file.
- `next-shim.mjs`: Next inlines `process.env.__NEXT_*` at build time. Without it, every card throws `process is not defined`. `__NEXT_IMAGE_OPTS` must spread `imageConfigDefault` (partial config gives `deviceSizes is not iterable`). It also rewrites `<img>` `/images/...` to https://vamdesign.com/images/... by patching both `setAttribute` and the `HTMLImageElement.src` setter (React uses the property, so the attribute patch alone isn't enough).
- `next-provider.tsx` → `SiteRouteProvider` (via `extraEntries` + `cfg.provider`): `usePathname()` is null outside Next, and LabDropdown/UseCasesDropdown call `pathname.replace` when their menus open.

## Scope decisions (from the owner, 2026-10-30)
- Sync **only components the site actually imports**: 14 site components + Input, Textarea, Slider, Dialog/DialogContent/DialogTitle/DialogClose, Carousel parts. Everything else in `components/ui` is unused shadcn scaffolding and is excluded via `componentSrcMap: null`, as are SocialProof, ModeToggle, ThemeProvider (unused), SectionAuth/SubpageAuth (passthroughs).
- The site's buttons are hand-styled teal pills, never the shadcn `Button` (its default variant is orange text). Don't bring Button back with orange previews.
- Leave the site code alone. Dead CSS in `app/globals.css` (`.clara-page`, `.btn`, `.btn-outline`, `.gradient-text`, Arial body font) and unused `.dark` / `--chart-*` / `--sidebar-*` tokens are documented here, not removed.
- Previews mirror real page usage: Input/Textarea come from `app/contact/page.tsx`, Dialog from the case-study image lightbox, Carousel from `app/uc/litman/details`.

## Findings
- `tailwind.config.js` doesn't define shadcn's `card`, `popover`, `muted`, `accent` or `destructive` colors (or `tailwindcss-animate`), so those classes are no-ops on the live site too. Previews and conventions use explicit colors instead.
- Tailwind JIT only emits classes found in `components/`, `app/` and `.design-sync/previews/`. Anything the design agent invents compiles to nothing (conventions.md says so).

## Known render warns
- `[FONT_MISSING] "Geneva"`: comes from `.font-verdana` (`Verdana, Geneva, sans-serif`), a system-font stack used only on the Clara page. Not a brand font. Accepted.

## Re-sync risks
- **Live-site images:** Portfolio, FeaturedBadge and the Dialog/Carousel previews load from vamdesign.com. If those paths change or the site goes down, the images break. The badge PNG is 2856px wide, so captures can run before it loads; re-capture if it shows as broken.
- **Next internals:** the shim and provider import `next/dist/shared/lib/image-config` and `hooks-client-context.shared-runtime`. A Next major upgrade can move them; check the first build after upgrading.
- **Viewport overrides:** `BackgroundOpacityControl` needs a card viewport of at least 768px wide (it's `hidden md:flex`); its override sets 820.
- **Exclusion list:** `componentSrcMap` lists 116 excluded names. If the site starts importing another `components/ui` part, remove its `null` entry and author a preview.
- **Hard-coded content:** site sections (Hero, Offer, Impact, Portfolio) are prop-less and hard-code their copy. Previews change whenever the site copy does.
