import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"
import { Check, X, Smartphone } from "lucide-react"
import ResetDemoButton, { DEMO_SRC } from "./ResetDemoButton"

export const metadata: Metadata = {
  title: "MakerPilot — Mobile Inventory App | VAM Design Lab",
  description:
    "MakerPilot is a mobile-first inventory management app for Etsy sellers and independent makers. A portfolio prototype demonstrating iOS-quality UI/UX design and front-end engineering.",
}

// ─── Data ────────────────────────────────────────────────────────────────────

const competitors = [
  { name: "Craftybase",  mobile: false, showSale: false, leadTime: false, etsy: true,  target: "Production makers",          pricing: "$24–$149/mo", hero: false },
  { name: "Inventora",   mobile: false, showSale: false, leadTime: false, etsy: true,  target: "Makers & manufacturers",     pricing: "Free–$120/mo", hero: false },
  { name: "KatanaMRP",   mobile: false, showSale: false, leadTime: false, etsy: true,  target: "Small business",             pricing: "Free–$899/mo", hero: false },
  { name: "Sortly",      mobile: true,  showSale: false, leadTime: true,  etsy: false, target: "Medium–Large business",      pricing: "Free–$149/mo", hero: false },
  { name: "MakerPilot",  mobile: true,  showSale: true,  leadTime: true,  etsy: true,  target: "Independent makers",   pricing: "Free–$59/mo",  hero: true },
]

const pricingTiers = [
  { name: "Starter",    price: "$0",     color: "#6B7280", borderColor: "border-gray-300",    who: "Just getting started",      items: "10 items",    channels: "1 channel sync" },
  { name: "Maker",      price: "$9/mo",  color: "#1A9E8F", borderColor: "border-[#1A9E8F]",   who: "Tory's entry point",        items: "50 items",    channels: "2 channel sync", popular: true },
  { name: "Studio",     price: "$24/mo", color: "#007EA7", borderColor: "border-[#007EA7]",   who: "Serious side hustlers",     items: "100 items",   channels: "3 channels + variants" },
  { name: "Pilot Pro",  price: "$59/mo", color: "#FF6600", borderColor: "border-[#FF6600]",   who: "Full-time makers",          items: "Unlimited",   channels: "All channels + AI" },
]

/** Lab phone — iPhone 16 Light SVG overlay (asset 383×785, screen hole 7,4 369×777 rx=58) */
const PHONE_ASSET_W = 383
const PHONE_ASSET_H = 785
const PHONE_SCREEN_INSET = { left: 7, top: 4, right: 7, bottom: 4 } as const
const PHONE_HOLE_RX = 58
const PHONE_FRAME_W = 248
const PHONE_FRAME_H = Math.round((PHONE_FRAME_W * PHONE_ASSET_H) / PHONE_ASSET_W)
const PHONE_SCREEN_W =
  PHONE_FRAME_W *
  ((PHONE_ASSET_W - PHONE_SCREEN_INSET.left - PHONE_SCREEN_INSET.right) / PHONE_ASSET_W)
const PHONE_SCREEN_H =
  PHONE_FRAME_H *
  ((PHONE_ASSET_H - PHONE_SCREEN_INSET.top - PHONE_SCREEN_INSET.bottom) / PHONE_ASSET_H)
const PHONE_SCREEN_LEFT = (PHONE_FRAME_W * PHONE_SCREEN_INSET.left) / PHONE_ASSET_W
const PHONE_SCREEN_TOP = (PHONE_FRAME_H * PHONE_SCREEN_INSET.top) / PHONE_ASSET_H
/** Clip only the screen hole — never the outer shell (side buttons sit outside the body curve) */
const PHONE_SCREEN_RADIUS = (PHONE_HOLE_RX * PHONE_FRAME_W) / PHONE_ASSET_W
/**
 * Fill screen width exactly (no side gaps under bottom bars).
 * Slight top crop is OK — Lab paints its own status bar.
 */
const PHONE_APP_W = 393
const PHONE_APP_H = 852
const PHONE_SCALE = PHONE_SCREEN_W / PHONE_APP_W
const PHONE_APP_OFFSET_X = 0
const PHONE_APP_OFFSET_Y = PHONE_SCREEN_H - PHONE_APP_H * PHONE_SCALE

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Pill({ yes }: { yes: boolean }) {
  return yes ? (
    <span
      className="inline-flex items-center justify-center bg-[#E6F4F1] text-[#0F6E56] w-6 h-6 rounded-full"
      aria-label="Yes"
    >
      <Check className="w-3 h-3" strokeWidth={3} />
    </span>
  ) : (
    <span
      className="inline-flex items-center justify-center bg-[#F3F4F6] text-[#9CA3AF] w-6 h-6 rounded-full"
      aria-label="No"
    >
      <X className="w-3 h-3" strokeWidth={2} />
    </span>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MakerPilotPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 bg-white">
        <div className="site-container px-4 py-12">

          {/* ── HERO ──────────────────────────────────────────────────────── */}
          <header className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
              <div className="min-w-0 flex-1">
                {/* Logo + title */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-8">
                  <div className="relative w-36 h-12 sm:w-48 sm:h-16 flex-shrink-0">
                    <Image
                      src="/images/makerpilot/MakerLogo.png"
                      alt="MakerPilot logo"
                      fill
                      sizes="(min-width: 640px) 192px, 144px"
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] leading-tight">
                    Inventory management for independent makers
                  </h1>
                </div>

                <div className="font-montserrat text-lg text-[#2C3D4D] leading-relaxed space-y-4">
                  <p>
                    Many makers handcraft every item they sell while managing sales across online shops, craft shows, and
                    weekend markets. Production can take weeks, yet inventory is often tracked through spreadsheets, notes
                    apps, desktop tools, or not at all. MakerPilot keeps inventory within reach wherever makers sell, helping
                    them record sales, see what is running low, plan around lead times, and know what to make next.
                  </p>
                </div>
              </div>

              {/* Project meta card */}
              <aside className="w-full md:w-56 lg:w-64 flex-shrink-0 bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-space-grotesk text-[11px] font-bold uppercase tracking-wide text-[#007EA7] mb-1">
                      Role
                    </dt>
                    <dd className="font-montserrat text-sm text-[#2C3D4D]">
                      Senior UX Product Designer + Front-End Developer
                    </dd>
                  </div>
                  <div>
                    <dt className="font-space-grotesk text-[11px] font-bold uppercase tracking-wide text-[#007EA7] mb-1">
                      Timeline
                    </dt>
                    <dd className="font-montserrat text-sm text-[#2C3D4D]">
                      ~1 month of active work
                    </dd>
                  </div>
                  <div>
                    <dt className="font-space-grotesk text-[11px] font-bold uppercase tracking-wide text-[#007EA7] mb-1">
                      Platform
                    </dt>
                    <dd className="font-montserrat text-sm text-[#2C3D4D]">
                      iOS-first mobile
                    </dd>
                  </div>
                  <div>
                    <dt className="font-space-grotesk text-[11px] font-bold uppercase tracking-wide text-[#007EA7] mb-1">
                      Tools
                    </dt>
                    <dd className="font-montserrat text-sm text-[#2C3D4D]">
                      Figma, Cursor, React + TypeScript
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </header>

          {/* ── TRY MAKERPILOT ──────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Try MakerPilot
            </h2>
            <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4">
              <p>
                The product is the quickest way to understand the problem it solves. Explore the live demo, record a
                sale, and see how MakerPilot turns an inventory update into a clear next step. Then continue through the
                case study to see the research, product thinking, and design decisions behind it.
              </p>
            </div>
          </section>

          {/* ── LIVE DEMO ───────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <div
                className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-14 px-5 sm:px-10 pt-10 sm:pt-12 pb-10"
                style={{ background: '#0a0a0a', borderRadius: '16px' }}
              >

                {/* Left column — text */}
                <div className="w-full md:flex-1 flex flex-col justify-start">
                  <h2
                    className="font-space-grotesk text-2xl sm:text-3xl font-bold leading-tight mb-4"
                    style={{ color: '#ffffff' }}
                  >
                    Live Demo
                  </h2>
                  <div
                    className="font-montserrat text-sm leading-relaxed space-y-4 mb-6"
                    style={{ color: '#a8a8a8' }}
                  >
                    <p>
                      Tory sells handmade ceramic mugs through Etsy and weekend craft shows. Each piece takes three to
                      four weeks to make, so every sale affects what she needs to produce next.
                    </p>
                    <p>
                      For the past six months, she has been using MakerPilot to track inventory, spot shifts in demand,
                      and plan production before stock runs out.
                    </p>
                    <p>Here are a few ways to explore the demo:</p>
                  </div>
                  <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      <>
                        Tap <strong className="font-semibold text-[#c8c8c8]">Get Started</strong> or{' '}
                        <strong className="font-semibold text-[#c8c8c8]">Sign In</strong> and go through the
                        quick setup. Choose your channel, and see Tory&apos;s current inventory.
                      </>,
                      <>
                        Choose your Channel and Connect. Continue to the Inventory Page to see Tory&apos;s work.
                      </>,
                      <>
                        Tap on the <strong className="font-semibold text-[#c8c8c8]">Studio</strong> tab first for her
                        six month snapshot: what needs making, and what is climbing or cooling.
                      </>,
                      <>
                        Now explore Tory&apos;s <strong className="font-semibold text-[#c8c8c8]">Inventory</strong>. Tap
                        on any item to update its stock, adjust its low-stock alert, or change its production lead time.
                        You can also add a new product, import one from a connected sales channel, or remove an item.
                      </>,
                      <>
                        Return to the <strong className="font-semibold text-[#c8c8c8]">Studio</strong> and see how the
                        new data informs you, telling you what has shifted and what to make next.
                      </>,
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="font-montserrat text-sm leading-snug flex items-start gap-3"
                        style={{ color: '#a8a8a8' }}
                      >
                        <span
                          className="flex-shrink-0 mt-[5px]"
                          style={{
                            display: 'block',
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: '#1A9E8F',
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column — phone + reset */}
                <div className="flex-shrink-0 flex flex-col items-center gap-5">
                  {/* iPhone SVG includes side buttons; do NOT clip the outer shell */}
                  <div
                    className="relative"
                    style={{
                      width: PHONE_FRAME_W,
                      height: PHONE_FRAME_H,
                      // overflow visible so left/right hardware buttons are not cut off
                      overflow: 'visible',
                      background: 'transparent',
                      boxShadow: 'none',
                      filter: 'none',
                    }}
                  >
                    {/* Screen only — clipped to the display hole; SVG frame paints bezel + buttons on top */}
                    <div
                      style={{
                        position: 'absolute',
                        left: PHONE_SCREEN_LEFT,
                        top: PHONE_SCREEN_TOP,
                        width: PHONE_SCREEN_W,
                        height: PHONE_SCREEN_H,
                        overflow: 'hidden',
                        borderRadius: PHONE_SCREEN_RADIUS,
                        clipPath: `inset(0 round ${PHONE_SCREEN_RADIUS}px)`,
                        WebkitClipPath: `inset(0 round ${PHONE_SCREEN_RADIUS}px)`,
                        background: '#E5F0F0',
                        zIndex: 1,
                      }}
                    >
                      <iframe
                        src={DEMO_SRC}
                        title="MakerPilot live demo"
                        style={{
                          position: 'absolute',
                          top: PHONE_APP_OFFSET_Y,
                          left: PHONE_APP_OFFSET_X,
                          width: PHONE_APP_W,
                          height: PHONE_APP_H,
                          border: 'none',
                          background: '#E5F0F0',
                          transform: `scale(${PHONE_SCALE})`,
                          transformOrigin: 'top left',
                        }}
                      />

                      {/* Status bar — Figma Appearance asset */}
                      <img
                        src="/images/makerpilot/Appearance_Dark.svg"
                        alt=""
                        style={{
                          position: 'absolute',
                          top: '4px',
                          left: '11px',
                          width: 'calc(100% - 22px)',
                          height: '14px',
                          objectFit: 'contain',
                          zIndex: 9,
                          pointerEvents: 'none',
                          background: 'transparent',
                          display: 'block',
                        }}
                      />

                      {/* Dynamic Island */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '7px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60px',
                          height: '15px',
                          background: '#000',
                          borderRadius: '20px',
                          zIndex: 10,
                          pointerEvents: 'none',
                        }}
                      />
                    </div>

                    {/* Full device chrome (bezel + volume/power buttons) above the screen */}
                    <img
                      src={`/images/makerpilot/iPhone_16_Light.svg?v=frame3`}
                      alt=""
                      width={PHONE_FRAME_W}
                      height={PHONE_FRAME_H}
                      className="pointer-events-none absolute inset-0 z-20 select-none"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        boxShadow: 'none',
                        filter: 'none',
                      }}
                      draggable={false}
                    />
                  </div>

                  <ResetDemoButton />
                </div>

              </div>
            </div>
          </section>

          {/* ── MEET THE MAKER ──────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Meet the Maker
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4 lg:flex-1 lg:min-w-0">
                <p>
                  Tory pilots a one-woman ceramics studio between a day job, weekend craft shows, and an Etsy shop.
                  Everything is handmade on a three to four week cycle.
                </p>
                <p>
                  After shows she doesn&apos;t always update her online inventory. If an online order comes in for a piece
                  that has already sold out, that is a lost sale.
                </p>
                <p>
                  Thousands of independent makers work this way, juggling art fairs, online shops, and production pieces
                  without an easy, consistent way to keep inventory current.
                </p>
                <p>
                  MakerPilot was built for that gap. App open, sale recorded, inventory updated and synced in moments.
                </p>
                <p>
                  The problem is one I know firsthand as I make ceramics and sell through Etsy and craft shows, the
                  inspiration for this app came from real life pain points.
                </p>
              </div>
              <div className="w-full min-w-0 max-w-2xl lg:flex-shrink-0">
                <Image
                  src="/images/makerpilot/Tory_Persona_sm.png"
                  alt="Tory Haylor — Independent maker persona"
                  width={800}
                  height={500}
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="w-full h-auto max-w-2xl"
                />
              </div>
            </div>
          </section>

          {/* ── WHERE EXISTING TOOLS FALL SHORT ─────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Where Existing Tools Fall Short
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
              <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4 lg:w-[34%] lg:flex-shrink-0">
                <p>
                  Inventory platforms are built for a desktop, and for businesses with more complex operations.
                  Craftybase and Inventora handle materials tracking and order management for production makers; Katana
                  MRP reaches further into manufacturing. General mobile apps like Sortly are easier to use on the go, but
                  they track items rather than multichannel craft sales or handmade production cycles.
                </p>
                <p>
                  The gap was never more features. It was the maker whose whole business lives on her phone: selling in
                  the moment, syncing across channels, and catching what is running low before it sells out again,
                  especially when a platform like Etsy sells a piece without ever signaling that stock has run low.
                </p>
              </div>
              <div className="w-full lg:flex-1 min-w-0 rounded-lg border border-[#007EA7]/20 p-3 sm:p-4">
                <table className="w-full font-montserrat text-sm border-collapse table-fixed">
                  <thead>
                    <tr className="border-b border-[#007EA7]/15">
                      {["Tool", "Mobile App", "Point of Sale", "Lead Time Alerts", "Channel Integration", "Target User", "Pricing"].map((h) => (
                        <th
                          key={h}
                          className={`text-[9px] uppercase tracking-widest text-[#9CA3AF] font-semibold text-left pb-3 pr-2 leading-tight ${
                            h === "Tool" ? "w-[18%]" : h === "Target User" || h === "Pricing" ? "w-[14%]" : "w-[10%]"
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c, i) => (
                      <tr
                        key={c.name}
                        className={`${c.hero ? "bg-[#E6F4F1]" : ""} ${
                          i < competitors.length - 1 ? "border-b border-[#007EA7]/10" : ""
                        }`}
                      >
                        <td className={`py-3 pr-2 font-space-grotesk font-bold text-xs sm:text-sm ${c.hero ? "text-[#0F6E56] pl-2" : "text-[#2C3D4D]"}`}>
                          {c.name}
                          {c.hero && (
                            <span className="mt-1 block w-fit text-[9px] bg-[#1A9E8F] text-white px-1.5 py-0.5 rounded-full font-montserrat font-semibold uppercase tracking-wide">
                              This project
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-2"><Pill yes={c.mobile} /></td>
                        <td className="py-3 pr-2"><Pill yes={c.showSale} /></td>
                        <td className="py-3 pr-2"><Pill yes={c.leadTime} /></td>
                        <td className="py-3 pr-2"><Pill yes={c.etsy} /></td>
                        <td className={`py-3 pr-2 text-[11px] leading-snug ${c.hero ? "text-[#0F6E56] font-semibold" : "text-[#5f5f5f]/80"}`}>{c.target}</td>
                        <td className={`py-3 text-[11px] leading-snug ${c.hero ? "text-[#0F6E56] font-semibold pr-2" : "text-[#5f5f5f]/80"}`}>{c.pricing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── FROM LIVED PROBLEM TO WORKING PRODUCT ───────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              From Lived Problem to Working Product
            </h2>
            <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4">
              <p>
                MakerPilot began with a problem I knew firsthand: selling ceramics across Etsy and craft shows while
                inventory gradually stopped matching what was actually available.
              </p>
              <p>
                Early flows established the concept, but building a working mobile app exposed the decisions that static
                screens could not. Navigation was reduced from four tabs to three, overlapping stock states were combined,
                and desktop conventions were replaced with mobile-first interactions.
              </p>
              <p>
                The scope stayed focused on the core workflow: keeping inventory current wherever a maker sells and
                turning those updates into clearer production decisions. More complex channel management, Etsy variations,
                and multi-user functionality were intentionally deferred while the foundation was refined.
              </p>
            </div>
          </section>

          {/* ── DESIGN DECISIONS ────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Design Decisions
            </h2>
            <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4 mb-8 max-w-3xl">
              <p>
                MakerPilot was built as a working app, not static screens, and that choice drove every decision. A
                running product pushes back. It shows you where your design is speaking the wrong language, promising
                things it cannot do, or solving a problem the maker does not actually have.
              </p>
              <p>
                Over about a month of building, the app kept correcting me, and the story of MakerPilot is really the
                story of those corrections.
              </p>
            </div>

            <div className="relative border-l-2 border-[#007EA7]/25 ml-3 pl-8 sm:pl-10 space-y-10 mb-8">
              {[
                {
                  num: "01",
                  title: "Learning to speak the maker's language.",
                  intro: "The earliest decisions were about stripping developer thinking out of the interface.",
                  bullets: [
                    "A center action button looked like Add but recorded a sale, so it went. Navigation dropped from four tabs to three.",
                    "Two inventory states, sold-out and low-stock, collapsed into one, because stock at zero and stock below threshold call for the same action: make more.",
                    "A cryptic @ 4 became Make more @ 4, language that reads as a production reminder rather than a database rule.",
                  ],
                },
                {
                  num: "02",
                  title: "Making it behave like a real app.",
                  intro: "Once the foundation held, the decisions turned to how the app feels under a thumb.",
                  bullets: [
                    "Delete moved to the far left of the edit screen, deliberate friction opposite the resting thumb, while duplicate stayed one tap away.",
                    "Browser-style popups and toasts were refused in favor of confirmations that slide in place, because a maker glancing at her phone between sales should never meet a web pattern.",
                    "A select-all was left out of listings import on purpose, because bulk-adding would quietly undercut the free tier the product depends on.",
                  ],
                },
                {
                  num: "03",
                  title: "Reframing what the app is for.",
                  intro: "The largest turn came last, when the app's purpose itself shifted.",
                  bullets: [
                    "Home had been a rear-view sales dashboard. Reframed around stock, velocity, and lead time, it became Studio: a forward-looking answer to what do I make next.",
                    "Adding an item split into two paths, because makers on Etsy already have listings. The real job was importing what exists, not creating from scratch.",
                    "Required fields on the Add form dropped from a competitor's eight to three.",
                  ],
                },
              ].map(({ num, title, intro, bullets }) => (
                <div key={num} className="relative">
                  <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-8 h-8 bg-white border border-[#007EA7] flex items-center justify-center">
                    <span className="font-space-grotesk text-xs font-bold text-[#007EA7]">{num}</span>
                  </div>
                  <h3 className="font-space-grotesk text-base sm:text-lg font-bold text-[#2C3D4D] mb-2">
                    {title}
                  </h3>
                  <p className="font-montserrat text-sm sm:text-base italic text-[#007EA7] mb-4 leading-relaxed">
                    {intro}
                  </p>
                  <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 mt-[7px]"
                          style={{
                            display: "block",
                            width: "5px",
                            height: "5px",
                            background: "#007EA7",
                          }}
                        />
                        <span className="font-montserrat text-sm text-[#5f5f5f]/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="font-montserrat text-sm sm:text-base italic text-[#5f5f5f]/80 leading-relaxed max-w-3xl">
              None of this came from a research budget or an A/B test. It came from building the thing, watching it
              behave, and knowing the maker firsthand.
            </p>
          </section>

          {/* ── KEY SCREENS ─────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              Key Screens
            </h2>
            <p className="font-montserrat text-sm text-[#9CA3AF] mb-6">
              Screenshots coming — Chrome DevTools device emulator + Figma iPhone 16 mockup
            </p>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
              {[
                { label: "Welcome",        desc: "Onboarding entry point" },
                { label: "Home Dashboard", desc: "Needs Making + Top Sellers" },
                { label: "Inventory",      desc: "List view + swipe actions" },
                { label: "Edit Item",      desc: "Stepper controls + lead time" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex-shrink-0 snap-start w-[160px] sm:w-[180px]">
                  <div className="aspect-[9/19.5] rounded-[24px] bg-gradient-to-b from-[#E6F4F1] to-[#C7EDE8] border border-[#007EA7]/15 flex flex-col items-center justify-center mb-3 shadow-sm">
                    <Smartphone className="w-8 h-8 text-[#007EA7]/30 mb-2" />
                    <span className="font-montserrat text-[10px] text-[#007EA7]/50 font-medium text-center px-3">
                      Screenshot coming
                    </span>
                  </div>
                  <p className="font-space-grotesk text-sm font-semibold text-[#2C3D4D] text-center">{label}</p>
                  <p className="font-montserrat text-xs text-[#9CA3AF] text-center mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── THE CORE LOOP ───────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              The Core Loop
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed max-w-2xl mb-8">
              Most inventory apps are built around adding items. MakerPilot is built around a loop: sell something, know what to make next, make it, sell it again. This is the returning user journey that drove every screen decision.
            </p>
            <div className="relative border-l-2 border-[#007EA7]/20 ml-3 pl-8 space-y-8">
              {[
                {
                  title: "Open the app",
                  desc: "The home screen loads in under a second. One glance shows what needs attention: items below threshold, top sellers, recent income. No navigation required.",
                },
                {
                  title: "Record a show sale",
                  desc: "Three taps: pick the item, set the quantity, confirm. Stock updates instantly. If the item is shared across Etsy and in-person, both channels reflect the change.",
                },
                {
                  title: "See what needs making",
                  desc: "The Needs Making strip surfaces items where stock has dropped below the alert threshold. The clock icon shows the lead time. Tory knows exactly when to start the next batch without doing any math.",
                },
                {
                  title: "Start production",
                  desc: "MakerPilot suggests batch quantities based on sales velocity and upcoming shows. One tap marks a batch as in progress.",
                },
                {
                  title: "Back in stock",
                  desc: "When the batch is done, stock is updated in seconds. Etsy reflects the new count. The cycle starts again.",
                },
              ].map(({ title, desc }, i) => (
                <div key={title} className="relative">
                  <div className="absolute -left-[41px] w-7 h-7 rounded-full bg-[#E6F4F1] border-2 border-[#1A9E8F] flex items-center justify-center">
                    <span className="font-space-grotesk text-xs font-bold text-[#1A9E8F]">{i + 1}</span>
                  </div>
                  <h3 className="font-space-grotesk text-base font-bold text-[#2C3D4D] mb-1">{title}</h3>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRICING AND PRODUCT THINKING ────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Pricing and Product Thinking
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed max-w-2xl mb-8">
              Pricing for a side hustle maker is a UX problem. Charge too much and Tory uses a spreadsheet. Charge too little and the AI features cannot cover their own infrastructure cost. Every tier was designed around a specific moment in her journey.
            </p>
            {/* Tier cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {pricingTiers.map(({ name, price, color, borderColor, who, items, channels, popular }) => (
                <div key={name} className={`rounded-2xl border-2 p-4 relative bg-white ${borderColor}`}>
                  {popular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-1 rounded-full font-montserrat uppercase tracking-wide whitespace-nowrap"
                      style={{ backgroundColor: color }}
                    >
                      Tory&apos;s plan
                    </span>
                  )}
                  <p className="font-space-grotesk font-bold text-sm mb-0.5" style={{ color }}>{name}</p>
                  <p className="font-space-grotesk text-xl font-bold text-[#2C3D4D] mb-1">{price}</p>
                  <p className="font-montserrat text-[11px] text-[#9CA3AF] mb-3 italic">{who}</p>
                  <p className="font-montserrat text-xs text-[#5f5f5f]/80">{items}</p>
                  <p className="font-montserrat text-xs text-[#5f5f5f]/80">{channels}</p>
                </div>
              ))}
            </div>
            {/* Pricing insights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white border border-[#007EA7]/10 rounded-2xl p-5 shadow-sm">
                <h4 className="font-space-grotesk text-sm font-bold text-[#007EA7] mb-2">Free tier drives the demo</h4>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  The free tier exists for two reasons: portfolio demos and new maker signups. A 10 item cap is a real constraint Tory hits quickly with 100 listings — creating natural upgrade pressure without feeling punitive.
                </p>
              </div>
              <div className="bg-white border border-[#007EA7]/10 rounded-2xl p-5 shadow-sm">
                <h4 className="font-space-grotesk text-sm font-bold text-[#007EA7] mb-2">$9 is the conversion goal</h4>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  Most Etsy sellers already pay $10 to $15 a month for tools like Canva, Later, or Marmalead. The Maker tier at $9 sits below that threshold. It feels like a utility bill, not a software subscription.
                </p>
              </div>
              <div className="bg-white border border-[#007EA7]/10 rounded-2xl p-5 shadow-sm">
                <h4 className="font-space-grotesk text-sm font-bold text-[#007EA7] mb-2">AI at $59 preserves margin</h4>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  Claude API calls and MCP server hosting run $8 to $12 a month at light usage. A $39 tier barely covers costs. $59 preserves margin while remaining well below competitor AI tiers that start at $99.
                </p>
              </div>
            </div>
          </section>

          {/* ── WHAT'S NEXT ─────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              What&apos;s Next
            </h2>
            <p className="font-montserrat text-sm text-[#9CA3AF] mb-8">
              MakerPilot is in active development. Here is what comes next, in order.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  tag: "Now",
                  tagClass: "bg-[#E6F4F1] text-[#0F6E56]",
                  title: "/demo route with seed data",
                  desc: "A dedicated route that skips onboarding, loads realistic inventory data, and launches the full app experience for portfolio embeds and hiring manager demos.",
                },
                {
                  tag: "Now",
                  tagClass: "bg-[#E6F4F1] text-[#0F6E56]",
                  title: "Key screen screenshots",
                  desc: "Chrome DevTools device emulator at 393x852, imported into a Figma iPhone 16 mockup frame, exported as PNG for the Key Screens section above.",
                },
                {
                  tag: "Phase 2",
                  tagClass: "bg-[#EEEDFE] text-[#534AB7]",
                  title: "Etsy webhook sync",
                  desc: "Real-time sale to auto-decrement. When an Etsy order comes in, stock updates instantly without any manual action from Tory.",
                },
                {
                  tag: "Phase 2",
                  tagClass: "bg-[#EEEDFE] text-[#534AB7]",
                  title: "Make-list and batch planning",
                  desc: "Batch quantity suggestions driven by sales velocity and lead time. MakerPilot tells Tory not just what to make, but how much.",
                },
                {
                  tag: "Phase 3",
                  tagClass: "bg-[#FFF0E8] text-[#FF6600]",
                  title: "AI restocking assistant",
                  desc: "Natural language restocking suggestions. Ask MakerPilot what to prioritize before an upcoming show and get a ranked make-list based on your sales history.",
                },
                {
                  tag: "Phase 3",
                  tagClass: "bg-[#FFF0E8] text-[#FF6600]",
                  title: "Craft show mode",
                  desc: "Offline-first bulk sale recording for shows with poor signal. Record all sales during the show, sync everything when back online.",
                },
              ].map(({ tag, tagClass, title, desc }) => (
                <div key={title} className="bg-white border border-[#007EA7]/10 rounded-2xl p-5 shadow-sm">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-montserrat mb-3 ${tagClass}`}>
                    {tag}
                  </span>
                  <h3 className="font-space-grotesk text-sm font-bold text-[#2C3D4D] mb-1">{title}</h3>
                  <p className="font-montserrat text-xs text-[#5f5f5f]/80 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ──────────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-8 text-left">
              Skills Demonstrated
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "UX Design",
                  color: "#1A9E8F",
                  items: ["User research & personas", "Competitive analysis", "iOS design conventions", "WCAG AAA accessibility", "Component systems", "Pricing strategy"],
                },
                {
                  title: "Front-End Build",
                  color: "#C2590A",
                  items: ["React + TypeScript", "Tailwind CSS v3", "Mobile-first layout", "Vite + react-router-dom", "Shared component patterns", "Git / VS Code"],
                },
              ].map(({ title, color, items }) => (
                <div key={title} className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h3 className="font-space-grotesk text-sm font-bold text-[#007EA7] uppercase tracking-wider mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((s) => (
                      <li key={s} className="font-montserrat text-sm text-[#5f5f5f]/80 flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col items-center pt-8 sm:pt-12 pb-8">
            <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-6 text-center">
              Interested in mobile-first design or designer-developer hybrid work?
            </p>
            <a
              href="/contact/"
              className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Let&apos;s Chat
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
