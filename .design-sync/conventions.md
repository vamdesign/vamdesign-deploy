# VAM Design — building with this library

These are the real components from vamdesign.com, Vicki Morawietz's Next.js + Tailwind UX portfolio. Everything is on `window.VAMDesign`.

## Setup

Wrap the app in `SiteRouteProvider`. `Nav`, `LabDropdown` and `UseCasesDropdown` read the current route and **crash when their menus open** without it:

```jsx
const { SiteRouteProvider, Nav, Hero, Footer } = window.VAMDesign
<SiteRouteProvider pathname="/">
  <Nav />
  <main className="pt-24">…</main>
  <Footer />
</SiteRouteProvider>
```

- `Nav` is `position: fixed` and about 64px tall, so give the content below it `pt-24`.
- Images that components reference as `/images/...` load from https://vamdesign.com automatically. Use the same root paths for your own `<img>` tags.
- `BackgroundOpacityControl` and `CookieReset` are fixed bottom-right widgets. `BackgroundOpacityControl` only shows at the `md` breakpoint and up.

## Styling: Tailwind classes, but only ones that already exist

Styling is Tailwind utility classes compiled from the site. **Only classes the site already uses exist.** A class you invent (an arbitrary hex, or a size the site never uses) compiles to nothing, so use an inline `style` for anything outside the list below. Read `styles.css` (it imports `_ds_bundle.css`) before reaching for a new class.

| Role | Classes that exist |
|---|---|
| Brand teal (links, headings, labels) | `text-[#007EA7]`, `hover:text-[#005f7f]`, `border-[#007EA7]`, `bg-[#007EA7]`, `bg-[#007EA7]/80` |
| Body text | `text-[#2C3D4D]`, `text-gray-600`, `text-gray-700`, `text-[#5f5f5f]` (footer) |
| Accent (metric numerals only) | `text-orange-500`, `text-[#FF6700]` |
| Page backgrounds | `bg-white`, `bg-[#F0F6F9]`, `bg-gradient-to-b from-[#E0F0F7] to-[#F0F6F9]` |
| Type | `font-sans` (Space Grotesk, the default), `font-montserrat` (forms, legal, footer), `font-light` / `font-medium` / `font-semibold` / `font-bold`, `text-sm` to `text-4xl` |
| Layout | `site-container` (1280px max, 2rem gutters), `max-w-xl mx-auto`, `grid gap-8 sm:grid-cols-2 md:grid-cols-3`, `space-y-6` |
| Surfaces | `rounded-lg` / `rounded-xl` / `rounded-2xl`, `shadow-md` / `shadow-lg`, `border-gray-200` |

**Do not use shadcn's semantic tokens.** `bg-card`, `bg-popover`, `bg-accent`, `bg-destructive` and `text-muted-foreground` are not defined in this site's Tailwind config and render as nothing. Use the explicit colors above.

## Buttons are pills, never orange

There is no Button component. The site builds buttons with these classes:

```jsx
// primary: teal outline pill (passcode page, cookie banner)
<button className="rounded-full border border-[#007EA7] bg-white px-6 py-2 text-sm text-[#007EA7] hover:bg-[#f8f8f8] font-montserrat">Accept</button>
// on the pale-blue background (contact page)
<button className="rounded-[100px] border border-white bg-white/60 px-8 py-2.5 font-medium text-[#007EA7] hover:bg-white/90">Send Message</button>
```

Text links are `text-[#007EA7] hover:text-[#005f7f] font-medium` with `hover:underline underline-offset-4`.

## Components

- **Sections:** `Nav`, `FeaturedBadge`, `Hero`, `Offer`, `Portfolio`, `Impact`, `Footer`. They take no props, and their content is hard-coded.
- **Widgets:** `LabDropdown`, `UseCasesDropdown`, `Logo` / `LinkedInIcon` (color with `text-*`), `CookieConsent` (`fixedPosition={false}` keeps it in flow), `CookieReset`, `BackgroundOpacityControl`.
- **Primitives:** `Input`, `Textarea`, `Slider`, `Dialog` (with `DialogContent`, `DialogTitle`, `DialogClose`), `Carousel` (with `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`).

Each component's `.prompt.md` and `.d.ts` hold its API and a working example.

## Example: the contact form, as the site composes it

```jsx
const { Input, Textarea } = window.VAMDesign
<div className="bg-gradient-to-b from-[#E0F0F7] to-[#F0F6F9] p-8">
  <form className="max-w-xl mx-auto space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">Name*</label>
      <Input id="name" placeholder="Identify" className="w-full font-montserrat" />
    </div>
    <div>
      <label htmlFor="msg" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">Message*</label>
      <Textarea id="msg" placeholder="Let's start this collaboration!" className="w-full h-32 font-montserrat" />
    </div>
    <button className="rounded-[100px] border border-white bg-white/60 px-8 py-2.5 font-medium text-[#007EA7]">Send Message</button>
  </form>
</div>
```
