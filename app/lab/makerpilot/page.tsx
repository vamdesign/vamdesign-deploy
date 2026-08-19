import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"
import { Check, X } from "lucide-react"
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

/** Plans mirrored from makerpilot_current Pricing.tsx for the Lab case study. */
const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$0",
    priceColor: "#373737",
    borderColor: "border-gray-400",
    headerBg: "bg-[#F9FAFB]",
    badge: { label: "Free forever", className: "bg-gray-200 text-gray-600" },
    accent: "#1A9E8F",
    features: [
      { text: "Up to 10 inventory items", included: true },
      { text: "Low-stock alerts", included: true },
      { text: "1 channel sync", included: true },
      { text: "No variant tracking", included: false },
      { text: "No AI pilot", included: false },
    ],
    footer: { type: "badge" as const, label: "Your current plan" },
  },
  {
    name: "Maker",
    price: "$9/mo",
    priceColor: "#1A9E8F",
    borderColor: "border-[#1A9E8F]",
    headerBg: "bg-[#EAF4F2]",
    badge: { label: "Most popular", className: "bg-[#1A9E8F] text-white" },
    accent: "#1A9E8F",
    features: [
      { text: "Up to 50 inventory items", included: true },
      { text: "Low-stock alerts", included: true },
      { text: "2 channel sync", included: true },
      { text: "No variant tracking", included: false },
      { text: "No AI pilot", included: false },
    ],
    footer: { type: "button" as const, label: "Upgrade to Maker", className: "bg-[#1A9E8F]" },
  },
  {
    name: "Studio",
    price: "$24/mo",
    priceColor: "#534AB7",
    borderColor: "border-[#534AB7]",
    headerBg: "bg-[#F5F3FF]",
    badge: null,
    accent: "#534AB7",
    features: [
      { text: "Up to 100 inventory items", included: true },
      { text: "Low-stock alerts", included: true },
      { text: "3 channel sync", included: true },
      { text: "Variant tracking", included: true },
      { text: "No AI pilot", included: false },
    ],
    footer: { type: "button" as const, label: "Upgrade to Studio", className: "bg-[#534AB7]" },
  },
  {
    name: "Pilot Pro",
    price: "$59/mo",
    priceColor: "#FF6600",
    borderColor: "border-[#FF6600]",
    headerBg: "bg-[#FDF0E6]",
    badge: null,
    accent: "#FF6600",
    features: [
      { text: "Unlimited inventory items", included: true },
      { text: "Low-stock alerts", included: true },
      { text: "All channel sync", included: true },
      { text: "Variant tracking", included: true },
      { text: "AI pilot", included: true },
    ],
    footer: { type: "button" as const, label: "Upgrade to Pilot Pro", className: "bg-[#FF6600]" },
  },
]

const CORE_LOOP_NODES = [
  {
    verb: "Sell",
    desc: "record a show sale in three taps, or let an Etsy sync log it automatically.",
  },
  {
    verb: "See",
    desc: "the Needs Making strip surfaces items where stock is running out faster than the maker can remake them.",
  },
  {
    verb: "Plan",
    desc: "batch suggestions use sales velocity and lead time to answer one question: how many to make.",
  },
  {
    verb: "Make",
    desc: "one tap marks a batch in progress, so the app knows what is on its way.",
  },
  {
    verb: "Restock",
    desc: "stock updates in seconds. Etsy reflects the new count. The loop starts again.",
  },
] as const

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

                <p className="font-montserrat text-lg text-[#2C3D4D] leading-relaxed">
                  Many makers handcraft every item they sell while managing sales across online shops, craft shows, and
                  weekend markets. Production can take weeks, yet inventory is often tracked through spreadsheets, notes
                  apps, desktop tools, or not at all. MakerPilot keeps inventory within reach wherever makers sell, helping
                  them record sales, see what is running low, plan around lead times, and know what to make next.
                </p>
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
            <div className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed space-y-4">
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
                  <ul className="font-montserrat text-sm leading-snug list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]" style={{ color: '#a8a8a8' }}>
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
                      <li key={i}>{item}</li>
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
              <div className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed space-y-4 lg:flex-1 lg:min-w-0">
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
              <div className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed space-y-4 lg:w-[34%] lg:flex-shrink-0">
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

          {/* ── DESIGN DECISIONS ────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Design Decisions
            </h2>
            <div className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed space-y-4 mb-10">
              <p>
                MakerPilot evolved as a working product rather than a set of static screens. Starting with a coded
                foundation, I used Figma Make alongside Figma to explore the functioning experience and iterate the UI as
                the product took shape. Evaluating each change in context exposed gaps in language, interaction patterns,
                and product logic that weren&apos;t as apparent in static designs.
              </p>
              <p>
                Building the product exposed issues that static screens couldn&apos;t, driving refinements to navigation,
                interaction patterns, and the core workflow.
              </p>
            </div>

            <div className="relative border-l-2 border-[#007EA7]/25 ml-3 pl-8 sm:pl-10 space-y-10 sm:space-y-12">
              {[
                {
                  num: "1",
                  title: "Framing what MakerPilot would be",
                  intro:
                    "Before designing a single screen, three product-shaping calls set the terms for everything that followed.",
                  bullets: [
                    "Defined the primary success metric as time to first value: a new maker should move from install to first saved inventory item in under three minutes. That constraint shaped onboarding, field requirements, and the amount of information introduced upfront.",
                    "Reframed the primary user goal from inventory tracking to production planning. Instead of centering the experience on what had already sold, the information hierarchy prioritizes stock level, sales velocity, and lead time so the maker can answer: what do I need to make next?",
                    "Chose a mobile-first interaction model rather than adapting a desktop workflow. The core tasks were designed around short, one-handed interactions at shows, in the studio, or between sales, which drove tighter navigation, fewer required actions, and stronger prioritization of what appears on screen.",
                  ],
                },
                {
                  num: "2",
                  title: "Designing for how a maker actually thinks",
                  intro:
                    "The consistent test was whether the interface matched the maker's mental model or exposed the underlying data model. When the two conflicted, the experience followed the maker.",
                  bullets: [
                    "Replaced a static reorder threshold with a context-aware production signal that considers whether there is enough time to remake an item before stock is likely to run out.",
                    "Elevated lead time from secondary metadata into the primary information hierarchy, because production time directly affects what a maker needs to act on.",
                    "Collapsed system-level inventory states into a smaller set of user-facing states when they resulted in the same maker action, reducing cognitive load without removing underlying data fidelity.",
                  ],
                },
                {
                  num: "3",
                  title: "Deciding what not to build",
                  intro:
                    "Scope discipline is a design skill, and the decisions I am proudest of are the ones I refused to make. It is easy to add another field, another tab, another integration. It is harder to hold the surface small enough that a busy maker can actually use it in the five-minute windows she has.",
                  bullets: [
                    "The Add Item form asks for three required fields, not eight; the rest sit behind progressive disclosure so first entry stays fast.",
                    "Add Item splits into two paths, import an Etsy listing or create a manual entry, because a single universal form was quietly making both jobs slower.",
                    'Etsy variants, multi-user support, and richer channel management were deferred and made visible on the pricing page rather than hidden behind a "coming soon" chip.',
                  ],
                },
              ].map(({ num, title, intro, bullets }) => (
                <div key={num} className="relative">
                  <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-8 h-8 bg-white border border-[#007EA7] flex items-center justify-center">
                    <span className="font-space-grotesk text-xs font-bold text-[#007EA7]">{num}</span>
                  </div>
                  <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                    {title}
                  </h3>
                  <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed mb-4 sm:mb-6">
                    {intro}
                  </p>
                  <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 leading-relaxed [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                    {bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed mt-10">
              None of these decisions came from an A/B test. They came from being the maker, seeing the gap no one else
              was building for, and designing a product whose every screen could answer one question: what do I need to
              make next?
            </p>
          </section>

          {/* ── THE CORE LOOP ───────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              The Core Loop
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed mb-10">
              Most inventory apps are built around adding items. MakerPilot is built around a loop.
            </p>

            {/* Mobile: vertical stack + return indicator */}
            <div className="sm:hidden relative border-l-2 border-[#007EA7]/40 ml-3 pl-8 space-y-8">
              {CORE_LOOP_NODES.map(({ verb, desc }) => (
                <div key={verb} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-[5px] h-[5px] bg-[#007EA7]" />
                  <p className="font-space-grotesk font-bold text-base text-[#2C3D4D] mb-1">{verb}</p>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 leading-relaxed">{desc}</p>
                </div>
              ))}
              <div className="relative pt-1">
                <div className="absolute -left-[44px] top-0 flex flex-col items-center text-[#007EA7]/70">
                  <svg width="14" height="28" viewBox="0 0 14 28" fill="none" aria-hidden>
                    <path d="M7 26 V4" stroke="#007EA7" strokeOpacity="0.4" strokeWidth="1.5" />
                    <path d="M3 8 L7 3 L11 8" stroke="#007EA7" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <p className="font-montserrat text-xs text-[#007EA7]/70">loops back to Sell</p>
              </div>
            </div>

            {/* sm+: horizontal flow with loop-back path */}
            <div className="hidden sm:block relative w-full pt-2 pb-14">
              {/* Connecting line through markers + return curve underneath */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1000 220"
                preserveAspectRatio="none"
                aria-hidden
              >
                {/* Forward line through step markers */}
                <line
                  x1="100"
                  y1="18"
                  x2="900"
                  y2="18"
                  stroke="#007EA7"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                />
                {/* Loop back: down, across, up to Sell with arrow */}
                <path
                  d="M 900 18
                     C 960 18, 970 50, 970 90
                     L 970 150
                     C 970 190, 940 200, 900 200
                     L 100 200
                     C 60 200, 30 190, 30 150
                     L 30 50
                     C 30 28, 55 18, 100 18"
                  stroke="#007EA7"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  fill="none"
                />
                <polygon points="100,18 86,11 86,25" fill="#007EA7" fillOpacity="0.55" />
              </svg>

              <div className="relative z-10 grid grid-cols-5 gap-3 w-full">
                {CORE_LOOP_NODES.map(({ verb, desc }) => (
                  <div key={verb} className="flex flex-col items-center text-center px-1">
                    <span className="w-[5px] h-[5px] bg-[#007EA7] mb-3" />
                    <p className="font-space-grotesk font-bold text-base sm:text-lg text-[#2C3D4D] mb-2">
                      {verb}
                    </p>
                    <p className="font-montserrat text-sm text-[#5f5f5f]/80 leading-relaxed max-w-[140px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PRICING AND PRODUCT THINKING ────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Pricing &amp; Product Thinking
            </h2>

            <div className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed space-y-6 mb-8">
              <div>
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  Pricing built for how independent makers actually spend.
                </h3>
                <p>
                  Most Etsy sellers already pay ten to fifteen dollars a month for tools they only half-use.
                  MakerPilot&apos;s Maker tier at nine dollars sits inside that habit, not above it. Free stays
                  generous enough for someone testing the app, capped tight enough that a serious side hustler feels
                  the pull to upgrade.
                </p>
              </div>
              <div>
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  A model with a clear break-even point.
                </h3>
                <p>
                  At one thousand signups and a five percent free-to-paid conversion, that is fifty Maker subscribers
                  and $450 in monthly recurring revenue. Conservative on purpose. If conversion drops below two
                  percent, the free tier is doing too much of the work, and the tier boundaries need retuning. That
                  is the guardrail, not the goal.
                </p>
              </div>
              <div>
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  Each tier is designed to move a maker forward.
                </h3>
                <p>
                  Free is a portfolio demo and a signup driver. Maker is the conversion goal. Studio unlocks Shopify
                  sync, which is the single feature most likely to justify the jump on its own. Pilot Pro adds AI
                  planning at a price that covers real Claude API costs while preserving margin. Every tier has one
                  reason a maker outgrows it.
                </p>
              </div>
            </div>

            {/* Plan cards from MakerPilot Pricing.tsx — horizontal row under KPI copy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl border-2 ${plan.borderColor} p-3`}
                >
                  <div
                    className={`${plan.headerBg} -mx-3 -mt-3 px-3 py-2 rounded-t-xl mb-2 flex items-center justify-between gap-1`}
                  >
                    <span className="font-montserrat font-bold text-sm text-[#373737]">
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span
                        className={`${plan.badge.className} px-2 py-0.5 rounded-full text-[9px] font-montserrat font-semibold whitespace-nowrap`}
                      >
                        {plan.badge.label}
                      </span>
                    )}
                  </div>

                  <p
                    className="font-montserrat font-bold text-xl mb-2"
                    style={{ color: plan.priceColor }}
                  >
                    {plan.price}
                  </p>

                  <div className="space-y-1 mb-2">
                    {plan.features.map((feature) => (
                      <div key={feature.text} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check
                            size={12}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: plan.accent }}
                            strokeWidth={3}
                          />
                        ) : (
                          <X size={12} className="text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        )}
                        <span
                          className={`font-montserrat text-xs leading-snug ${
                            feature.included ? "text-gray-700" : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {plan.footer.type === "badge" ? (
                    <div className="flex justify-end">
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-[10px] font-montserrat font-semibold">
                        {plan.footer.label}
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`w-full ${plan.footer.className} text-white py-2 rounded-lg font-montserrat font-semibold text-xs text-center`}
                    >
                      {plan.footer.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── MAKERPILOT: FROM CONCEPT TO LAUNCH ── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              MakerPilot: From Concept to Launch
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed mb-8">
              The next phase focuses on validating the core experience, reducing product risk, and protecting simplicity
              as MakerPilot grows. The priority is to prove that the product fits naturally into a maker&apos;s workflow
              before expanding the feature set.
            </p>
            <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 leading-relaxed [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
              {[
                {
                  lead: "Validate the core behavioral model.",
                  body: "Test whether makers naturally think in the same loop MakerPilot is built around: sell, assess stock, decide what to make, replenish. Research would focus on where that model breaks across different types of makers, production cycles, and sales channels.",
                },
                {
                  lead: "De-risk the highest-value workflow first.",
                  body: "The first release would center on the smallest end-to-end experience that proves MakerPilot's value: getting inventory in, recording a sale, and turning that change into a meaningful production decision. Deeper integrations would come only after that loop proves useful on its own.",
                },
                {
                  lead: "Measure whether the experience changes behavior.",
                  body: "Success would be defined by signals such as time to first value, repeat use, and whether makers act on production recommendations. The goal is not simply engagement, but evidence that MakerPilot helps people make better inventory decisions.",
                },
                {
                  lead: "Scale the product without scaling the complexity.",
                  body: "Future integrations, variants, automation, and multi-channel support would be introduced only where they reduce work for the maker. The design challenge is to expand capability without turning MakerPilot into the kind of inventory system it was created to avoid.",
                },
              ].map(({ lead, body }) => (
                <li key={lead}>
                  <span className="font-semibold text-[#2C3D4D]">{lead}</span> {body}
                </li>
              ))}
            </ul>
          </section>

          {/* ── SKILLS ──────────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Skills Demonstrated
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "UX Design",
                  items: ["User research & personas", "Competitive analysis", "iOS design conventions", "WCAG AAA accessibility", "Component systems", "Pricing strategy"],
                },
                {
                  title: "Front-End Build",
                  items: ["React + TypeScript", "Tailwind CSS v3", "Mobile-first layout", "Vite + react-router-dom", "Shared component patterns", "Git / VS Code"],
                },
              ].map(({ title, items }) => (
                <div key={title} className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                    {title}
                  </h3>
                  <ul
                    className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 leading-relaxed [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]"
                  >
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col items-center pt-8 sm:pt-12 pb-8">
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
