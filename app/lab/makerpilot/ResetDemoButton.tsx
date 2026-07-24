'use client'

const DEMO_SRC = '/makerpilot/index.html#/demo'

export default function ResetDemoButton() {
  return (
    <button
      type="button"
      onClick={() => {
        const iframe = document.querySelector(
          'iframe[title="MakerPilot live demo"]',
        ) as HTMLIFrameElement | null
        if (!iframe) return
        // Bust cache + force #/demo so DemoLoader re-seeds and returns to Welcome
        iframe.src = `/makerpilot/index.html?r=${Date.now()}#/demo`
      }}
      className="font-montserrat text-xs w-fit px-6 py-2.5 transition-colors hover:border-white/55 hover:text-[#c8c8c8]"
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
  )
}

// Keep a stable default src for the iframe mount
export { DEMO_SRC }
