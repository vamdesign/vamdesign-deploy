import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"
import { Check, X, Smartphone } from "lucide-react"

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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Pill({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex items-center gap-1 bg-[#E6F4F1] text-[#0F6E56] text-xs font-semibold px-2.5 py-1 rounded-full">
      <Check className="w-3 h-3" strokeWidth={3} /> Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 bg-[#F3F4F6] text-[#9CA3AF] text-xs font-medium px-2.5 py-1 rounded-full">
      <X className="w-3 h-3" strokeWidth={2} /> No
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

            <div className="font-montserrat text-lg text-[#2C3D4D] leading-relaxed space-y-4 mb-8">
              <p>
                85% of independent makers handcraft every item they sell. More than half sell across multiple channels,
                online shops, craft shows, weekend markets. Production may take weeks. Most are tracking inventory in a
                spreadsheet, a notes app, or not at all. MakerPilot brings it together: one place to track sales across
                channels, stay ahead of lead times, and know what to make next.
              </p>
            </div>
          </header>

          {/* ── LIVE DEMO ───────────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <div className="max-w-3xl mx-auto">
              <div
                className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14 px-5 sm:px-10 pt-10 sm:pt-12 pb-10"
                style={{ background: '#0a0a0a', borderRadius: '16px' }}
              >

                {/* Left column — text */}
                <div className="w-full md:flex-1 flex flex-col justify-center">
                  <h2
                    className="font-space-grotesk text-2xl sm:text-3xl font-bold leading-tight mb-4"
                    style={{ color: '#ffffff' }}
                  >
                    Live Demo
                  </h2>
                  <p
                    className="font-montserrat text-sm leading-relaxed mb-6"
                    style={{ color: '#a8a8a8', maxWidth: '320px' }}
                  >
                    Loads with seed inventory data. No sign-up needed, jump straight into the app.
                  </p>
                  <ul className="flex flex-col gap-3 mb-8" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      'Tap the Needs Making strip to see lead time in action',
                      'Record a sale and watch stock update instantly',
                      'Open any item to adjust the alert threshold or lead time',
                    ].map((item) => (
                      <li
                        key={item}
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
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Reset button */}
                  <button
                    type="button"
                    className="font-montserrat text-xs w-fit px-6 py-2.5 transition-colors"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.35)',
                      color: '#888888',
                      borderRadius: '9999px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    ↺ &nbsp;Reset demo
                  </button>

                  <p
                    className="font-montserrat mt-6"
                    style={{ fontSize: '11px', color: '#707070', lineHeight: '1.6' }}
                  >
                    Built with Cursor, Claude Code, Figma Make, and Figma.
                  </p>
                </div>

                {/* Right column — iPhone 16 Pro frame */}
                <div className="flex-shrink-0" style={{ width: '248px' }}>

                  {/* Outer titanium bezel */}
                  <div
                    style={{
                      width: '248px',
                      height: '536px',
                      position: 'relative',
                      borderRadius: '44px',
                      background: 'linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2a2a2c 100%)',
                      padding: '2px',
                    }}
                  >
                    {/* Side buttons — left: action + volume rocker, right: power */}
                    {/* Action button (left, top) */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2px',
                        top: '96px',
                        width: '3px',
                        height: '20px',
                        background: 'linear-gradient(90deg, #0e0e0f 0%, #3a3a3c 100%)',
                        borderRadius: '2px 0 0 2px',
                        zIndex: 1,
                      }}
                    />
                    {/* Volume up (left) */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2px',
                        top: '132px',
                        width: '3px',
                        height: '34px',
                        background: 'linear-gradient(90deg, #0e0e0f 0%, #3a3a3c 100%)',
                        borderRadius: '2px 0 0 2px',
                        zIndex: 1,
                      }}
                    />
                    {/* Volume down (left) */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2px',
                        top: '174px',
                        width: '3px',
                        height: '34px',
                        background: 'linear-gradient(90deg, #0e0e0f 0%, #3a3a3c 100%)',
                        borderRadius: '2px 0 0 2px',
                        zIndex: 1,
                      }}
                    />
                    {/* Side/power button (right) */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '-2px',
                        top: '152px',
                        width: '3px',
                        height: '58px',
                        background: 'linear-gradient(90deg, #3a3a3c 0%, #0e0e0f 100%)',
                        borderRadius: '0 2px 2px 0',
                        zIndex: 1,
                      }}
                    />

                    {/* Edge highlight ring */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '44px',
                        border: '1px solid transparent',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.10) 100%) border-box',
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    />

                    {/* Inner frame */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#000',
                        borderRadius: '42px',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {/* Screen area */}
                      <div
                        style={{
                          flex: 1,
                          background: '#0f1e1c',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Dynamic Island */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '72px',
                            height: '18px',
                            background: '#000',
                            borderRadius: '16px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingRight: '5px',
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              background: '#1a1a1a',
                              borderRadius: '50%',
                              border: '1px solid #0a0a0a',
                            }}
                          />
                        </div>

                        {/* Status bar */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 18px',
                            height: '34px',
                            flexShrink: 0,
                            position: 'relative',
                            zIndex: 5,
                          }}
                        >
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 600,
                              color: '#ffffff',
                              fontFamily: '-apple-system, sans-serif',
                              letterSpacing: '0.01em',
                              paddingLeft: '4px',
                            }}
                          >
                            9:41
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {/* Signal bars */}
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1px', height: '8px' }}>
                              {[3, 5, 6.5, 8].map((h, i) => (
                                <span
                                  key={i}
                                  style={{
                                    display: 'block',
                                    width: '2.5px',
                                    height: `${h}px`,
                                    background: '#ffffff',
                                    borderRadius: '0.5px',
                                  }}
                                />
                              ))}
                            </div>
                            {/* Wifi */}
                            <svg width="12" height="9" viewBox="0 0 15 11" fill="none">
                              <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L14 3.2C12.3 1.5 10 0.5 7.5 0.5C5 0.5 2.7 1.5 1 3.2L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" fill="#ffffff"/>
                              <path d="M7.5 5.5C8.8 5.5 10 6 10.9 6.9L12.3 5.5C11 4.2 9.3 3.5 7.5 3.5C5.7 3.5 4 4.2 2.7 5.5L4.1 6.9C5 6 6.2 5.5 7.5 5.5Z" fill="#ffffff"/>
                              <circle cx="7.5" cy="9.5" r="1.5" fill="#ffffff"/>
                            </svg>
                            {/* Battery */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                              <div
                                style={{
                                  width: '18px',
                                  height: '9px',
                                  border: '1px solid rgba(255,255,255,0.6)',
                                  borderRadius: '2.5px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '1.5px',
                                }}
                              >
                                <div
                                  style={{
                                    height: '100%',
                                    width: '80%',
                                    background: '#ffffff',
                                    borderRadius: '1px',
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  width: '1.5px',
                                  height: '4px',
                                  background: 'rgba(255,255,255,0.5)',
                                  borderRadius: '0 1px 1px 0',
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* iframe — swap placeholder for real URL when /demo route is live */}
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {/* PLACEHOLDER — replace this div with the iframe below once /demo is deployed:
                          <iframe
                            src="https://YOUR_DEPLOYED_URL/demo"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title="MakerPilot live demo"
                          /> */}
                          <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.12)', letterSpacing: '0.08em' }}>
                            DEMO LOADS HERE
                          </p>
                        </div>

                      </div>

                      {/* Home bar */}
                      <div
                        style={{
                          height: '26px',
                          background: '#000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            width: '80px',
                            height: '3.5px',
                            background: 'rgba(255,255,255,0.28)',
                            borderRadius: '3px',
                          }}
                        />
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── THE PROBLEM WORTH SOLVING ───────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              The Problem Worth Solving
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              <div className="font-montserrat text-sm sm:text-base text-[#5f5f5f]/80 leading-relaxed space-y-4 lg:flex-1 lg:min-w-0">
                <p>
                  Tory&apos;s day job is project manager, but her hobby is ceramics. She sells on Etsy, does up to 6 craft shows a year, and stock pieces through a local cafe. Everything is handmade with a 3 to 4 week production cycle.
                </p>
                <p>
                  After a show she does not always update her online inventory. She gets an online order and it&apos;s sold out. With a 3 to 4 week production cycle, finding out too late is a lost sale.
                </p>
                <p>
                  Like her, thousands of independent makers juggle art fairs, online shops, and production pieces without easy to access, consistent inventory updates.
                </p>
                <p>
                  MakerPilot was built to solve that dilemma, app open, sale recorded and inventory updated and synced in moments.
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

          {/* ── COMPETITIVE GAP ─────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              The Competitive Gap
            </h2>
            <div className="overflow-x-auto mb-4">
              <p className="font-montserrat text-base text-[#5f5f5f]/80 whitespace-nowrap">
                The gap is not features. It is context. No existing tool treats the craft show floor as a primary use case.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[640px] font-montserrat text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#007EA7]/10">
                    {["Tool", "Mobile App", "Point of Sale", "Lead Time Alerts", "Channel Integration", "Target User", "Pricing"].map((h) => (
                      <th key={h} className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-semibold text-left pb-3 pr-4">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c) => (
                    <tr key={c.name} className={c.hero ? "bg-[#E6F4F1]" : "border-b border-[#007EA7]/05"}>
                      <td className={`py-3 pr-4 font-space-grotesk font-bold text-sm ${c.hero ? "text-[#0F6E56] pl-3" : "text-[#2C3D4D]"}`}>
                        {c.name}
                        {c.hero && (
                          <span className="ml-2 text-[10px] bg-[#1A9E8F] text-white px-2 py-0.5 rounded-full font-montserrat font-semibold uppercase tracking-wide">
                            This project
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4"><Pill yes={c.mobile} /></td>
                      <td className="py-3 pr-4"><Pill yes={c.showSale} /></td>
                      <td className="py-3 pr-4"><Pill yes={c.leadTime} /></td>
                      <td className="py-3 pr-4"><Pill yes={c.etsy} /></td>
                      <td className={`py-3 pr-4 text-xs ${c.hero ? "text-[#0F6E56] font-semibold" : "text-[#5f5f5f]/80"}`}>{c.target}</td>
                      <td className={`py-3 text-xs ${c.hero ? "text-[#0F6E56] font-semibold pr-3" : "text-[#5f5f5f]/80"}`}>{c.pricing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-montserrat text-base text-[#5f5f5f]/80 leading-relaxed mt-6 w-full">
              Sortly is the only mobile tool in this space, however it targets medium to large businesses, has no channel integration, and does not capture show sales. MakerPilot fills every column Sortly misses, for a fraction of the price, built specifically for independent makers.
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

          {/* ── DESIGN DECISIONS ────────────────────────────────────────── */}
          <section className="scroll-mt-24 mb-12 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              Design Decisions
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed max-w-2xl mb-8">
              Every decision in MakerPilot came from a constraint. Mobile only. Five minute windows. One hand on the phone. These are not edge cases — they are the primary use case. Here are the four decisions that shaped the product most.
            </p>
            <div className="divide-y divide-[#007EA7]/10">
              {[
                {
                  decision: "One status state, not two",
                  considered: "Separate sold-out (red) and low-stock (orange clock) states",
                  why: "From a maker's perspective stock at zero and stock below threshold require the same action: make more. Two states create hesitation. One creates action. Red retired permanently.",
                },
                {
                  decision: "Record Sale in 3 taps",
                  considered: "A dedicated Record Sale tab in the nav",
                  why: "A sale is a task, not a destination. It lives on the Home dashboard as a primary CTA. Putting it in the nav as a tab made it feel like a screen to navigate to, not an action to take.",
                },
                {
                  decision: "Lead time as a first-class field",
                  considered: "Burying lead time in item settings",
                  why: "A 3 to 4 week production cycle means Tory needs to start making before stock hits zero. Lead time is not a setting. It is the core decision driver. It lives on every inventory card in bold teal.",
                },
                {
                  decision: "Bottom nav only, no FAB",
                  considered: "A center floating action button for quick add",
                  why: "A FAB competes with the nav for thumb attention and implies the wrong action. Craft show makers are glancing at their phone between sales. Every extra tap costs a customer.",
                },
              ].map(({ decision, considered, why }) => (
                <div key={decision} className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr] gap-4 py-5">
                  <div className="font-space-grotesk font-bold text-[#2C3D4D] text-sm">{decision}</div>
                  <div className="font-montserrat text-xs text-[#9CA3AF]">{considered}</div>
                  <div className="font-montserrat text-sm text-[#5f5f5f]/80">{why}</div>
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
