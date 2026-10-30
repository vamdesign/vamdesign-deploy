// Next.js inlines process.env.__NEXT_* at build time. Claude Design loads the
// bundle without Next, so next/link and next/image read them from here instead.
// Values mirror next.config.js (images.unoptimized, trailingSlash).
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

const g = globalThis
g.process ??= { env: {}, platform: 'browser', nextTick: (fn, ...args) => queueMicrotask(() => fn(...args)) }
g.process.env ??= {}
Object.assign(g.process.env, {
  __NEXT_IMAGE_OPTS: { ...imageConfigDefault, unoptimized: true },
  __NEXT_TRAILING_SLASH: true,
})

// Components reference the site's public/ assets by root path (/images/...),
// which only resolve on vamdesign.com. Point <img> sources at the live site,
// whether React sets them as an attribute or as the src property.
const SITE = 'https://vamdesign.com'
const toSite = (v) => (typeof v === 'string' && v.startsWith('/images/') ? SITE + v : v)
if (typeof Element !== 'undefined') {
  const setAttribute = Element.prototype.setAttribute
  Element.prototype.setAttribute = function (name, value) {
    return setAttribute.call(this, name, this.tagName === 'IMG' && name === 'src' ? toSite(value) : value)
  }
  const src = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src')
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    ...src,
    set(value) { src.set.call(this, toSite(value)) },
  })
}
