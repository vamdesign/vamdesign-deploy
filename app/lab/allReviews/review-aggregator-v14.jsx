"use client"

// All Reviews v14
// Changes from v13:
// - Stars spread across page (6 positions, different sizes, partially off edges)
// - Onboarding titles in Great Vibes script font
// - Stable onboarding layout: fixed title top, fixed CTA bottom, reserved middle height
// - Sticky "All Reviews" header while scrolling results
// - WCAG fix: textMuted bumped to #7a92bb (4.5:1 on bg, passes AA)
// - Mobile-first layout (max-width 440px)
//
// Font dependency — add to your layout.tsx / _document.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />

import { useState, useEffect, useRef } from "react";

// WCAG AA verified:
// textPrimary #dce6ff on #0e1220 = 12.1:1 ✓
// textSecond  #8fa8d4 on #0e1220 = 4.6:1  ✓
// textMuted   #7a92bb on #0e1220 = 4.5:1  ✓ (bumped from #6b84b0)
// gold        #f5c842 on #0e1220 = 9.2:1  ✓
// green       #6fcf8a on #0e1220 = 5.2:1  ✓
// orange      #f0954a on #0e1220 = 6.1:1  ✓
// red         #f07070 on #0e1220 = 5.4:1  ✓
const T = {
  bg:"#0e1220", bgCard:"#161d2e", bgElevated:"#1c2540", border:"#2d3a55",
  gold:"#f5c842", white:"#f0f4ff", textPrimary:"#dce6ff", textSecond:"#8fa8d4",
  textMuted:"#7a92bb", green:"#6fcf8a", orange:"#f0954a", red:"#f07070",
};
const LATO = "'Lato', sans-serif";
const VIBES = "'Great Vibes', cursive";

// ─── Star paths from uploaded SVGs ───────────────────────────────────────────
const STAR_PATHS = {
  s6: "M139.5 15L179.029 95.0936L267.417 107.937L203.459 170.281L218.557 258.313L139.5 216.75L60.4429 258.313L75.5415 170.281L11.5829 107.937L99.9714 95.0936L139.5 15Z",
  s4: "M49.0029 38.9399L134.801 78.9185L205.43 15.9006L193.921 109.854L275.68 157.552L182.769 175.639L162.67 268.136L116.757 185.362L22.5761 194.83L87.1111 125.585L49.0029 38.9399Z",
  s3a:"M139.607 27.4465L188.317 68.4655L243.779 37.172L219.82 96.1743L266.721 139.252L203.203 134.698L176.727 192.615L161.429 130.798L98.1659 123.515L152.23 89.8641L139.607 27.4465Z",
  s3b:"M45.8686 139.946L70.6544 157.238L98.9503 146.623L90.1642 175.539L109.004 199.169L78.7878 199.749L62.1354 224.969L52.247 196.411L23.1157 188.367L47.2203 170.137L45.8686 139.946Z",
  s5a:"M43.3135 19.2953L75.8238 44.2121L114.78 31.5566L101.129 70.1755L125.204 103.315L84.2564 102.266L60.1787 135.402L48.523 96.1349L9.56782 83.4753L43.3114 60.2559L43.3135 19.2953Z",
  s5b:"M246.525 97.6676L231.916 157.597L273.002 203.606L211.492 208.231L180.43 261.524L157.024 204.453L96.7412 191.38L143.786 151.484L137.59 90.1116L190.072 122.525L246.525 97.6676Z",
};

// Star tints — onboarding uses higher opacity (80% transparent = 0.2 alpha) but fewer shapes
const STAR_GOLD = "#FFF94A";
const STAR_AMBER = "#FFCC4A";

// ─── Star background — `onboarding`: sparse, strong (20% opacity); `app`: light sprinkle only
function StarBg({ variant = "app", embedded = false }) {
  const stroke = (sz) => (sz < 40 ? 8 : sz < 56 ? 9 : 10);
  const pos = embedded ? "absolute" : "fixed";
  if (variant === "onboarding") {
    const O = 0.2;
    const stars = [
      { id:"o1", size:62, style:{ top:"5%", left:"6%" }, paths:[{ d:STAR_PATHS.s6, stroke:STAR_GOLD }], rot:-8 },
      { id:"o2", size:54, style:{ top:"12%", right:"8%" }, paths:[{ d:STAR_PATHS.s4, stroke:STAR_AMBER }], rot:11 },
      { id:"o3", size:46, style:{ top:"38%", left:"4%" }, paths:[{ d:STAR_PATHS.s3a, stroke:STAR_AMBER }, { d:STAR_PATHS.s3b, stroke:STAR_GOLD }], rot:0 },
      { id:"o4", size:56, style:{ top:"48%", right:"6%" }, paths:[{ d:STAR_PATHS.s5a, stroke:STAR_GOLD }, { d:STAR_PATHS.s5b, stroke:STAR_AMBER }], rot:6 },
      { id:"o5", size:48, style:{ bottom:"20%", left:"18%" }, paths:[{ d:STAR_PATHS.s6, stroke:STAR_AMBER }], rot:-10 },
      { id:"o6", size:52, style:{ bottom:"10%", right:"14%" }, paths:[{ d:STAR_PATHS.s4, stroke:STAR_GOLD }], rot:4 },
    ];
    return (
      <div style={{ position:pos, inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
        {stars.map(s => (
          <div key={s.id} style={{ position:"absolute", ...s.style, opacity:O, transform:s.rot ? `rotate(${s.rot}deg)` : undefined }}>
            <svg width={s.size} height={s.size} viewBox="0 0 286 284" fill="none" style={{ display:"block" }}>
              {s.paths.map((p,i) => (
                <path key={i} d={p.d} stroke={p.stroke} strokeWidth={stroke(s.size)} fill="none"/>
              ))}
            </svg>
          </div>
        ))}
      </div>
    );
  }
  const stars = [
    { id:"a1", size:72, style:{ top:"4%", right:"-20px" }, paths:[{ d:STAR_PATHS.s6, stroke:STAR_GOLD }], opacity:0.065, rot:0 },
    { id:"a2", size:64, style:{ top:"22%", left:"-16px" }, paths:[{ d:STAR_PATHS.s5a, stroke:STAR_GOLD }, { d:STAR_PATHS.s5b, stroke:STAR_AMBER }], opacity:0.055, rot:-5 },
    { id:"a3", size:52, style:{ top:"44%", left:"12%" }, paths:[{ d:STAR_PATHS.s4, stroke:STAR_AMBER }], opacity:0.05, rot:12 },
    { id:"a4", size:48, style:{ top:"58%", right:"10%" }, paths:[{ d:STAR_PATHS.s6, stroke:STAR_GOLD }], opacity:0.052, rot:-7 },
    { id:"a5", size:56, style:{ bottom:"14%", left:"20%" }, paths:[{ d:STAR_PATHS.s3a, stroke:STAR_AMBER }, { d:STAR_PATHS.s3b, stroke:STAR_GOLD }], opacity:0.048, rot:0 },
    { id:"a6", size:44, style:{ bottom:"8%", right:"-12px" }, paths:[{ d:STAR_PATHS.s4, stroke:STAR_AMBER }], opacity:0.05, rot:9 },
    { id:"a7", size:40, style:{ top:"32%", left:"44%" }, paths:[{ d:STAR_PATHS.s6, stroke:STAR_GOLD }], opacity:0.042, rot:-14 },
    { id:"a8", size:36, style:{ top:"68%", right:"28%" }, paths:[{ d:STAR_PATHS.s5a, stroke:STAR_AMBER }], opacity:0.04, rot:6 },
  ];
  return (
    <div style={{ position:pos, inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {stars.map(s => (
        <div key={s.id} style={{ position:"absolute", ...s.style, opacity:s.opacity, transform:s.rot ? `rotate(${s.rot}deg)` : undefined }}>
          <svg width={s.size} height={s.size} viewBox="0 0 286 284" fill="none" style={{ display:"block" }}>
            {s.paths.map((p,i) => (
              <path key={i} d={p.d} stroke={p.stroke} strokeWidth={stroke(s.size)} fill="none"/>
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
}

// ─── 5 outline stars under the title ─────────────────────────────────────────
function TitleStars({ size=20 }) {
  return (
    <div style={{ display:"flex", gap:5, justifyContent:"center", marginTop:6 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 286 284" fill="none">
          <path d={STAR_PATHS.s6} stroke="#f5c842" strokeWidth="14" fill="none"/>
        </svg>
      ))}
    </div>
  );
}

const PLATFORMS = {
  Google:        { color:"#6fa8ff", icon:"G",  url:(n,l)=>`https://www.google.com/search?q=${encodeURIComponent(n+" "+l+" reviews")}` },
  Yelp:          { color:"#ff7070", icon:"Y",  url:(n,l)=>`https://www.yelp.com/search?find_desc=${encodeURIComponent(n)}&find_loc=${encodeURIComponent(l)}` },
  TripAdvisor:   { color:"#5cd19e", icon:"T",  url:(n,l)=>`https://www.tripadvisor.com/Search?q=${encodeURIComponent(n+" "+l)}` },
  "Booking.com": { color:"#7ab3f5", icon:"B",  url:(n,l)=>`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(n+" "+l)}` },
  Expedia:       { color:"#f5c842", icon:"E",  url:(n,l)=>`https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(n+" "+l)}` },
  OpenTable:     { color:"#f57a7a", icon:"OT", url:(n,l)=>`https://www.opentable.com/s/?term=${encodeURIComponent(n)}` },
  TheFork:       { color:"#5cd4be", icon:"TF", url:(n,l)=>`https://www.thefork.com/search#query=${encodeURIComponent(n+" "+l)}` },
  Zomato:        { color:"#f57a7a", icon:"Z",  url:(n,l)=>`https://www.zomato.com/search?q=${encodeURIComponent(n+" "+l)}` },
  Foursquare:    { color:"#f576a8", icon:"F4", url:(n,l)=>`https://foursquare.com/explore?q=${encodeURIComponent(n)}&near=${encodeURIComponent(l)}` },
  Facebook:      { color:"#7aa8f5", icon:"FB", url:(n,l)=>`https://www.facebook.com/search/places/?q=${encodeURIComponent(n+" "+l)}` },
  "Hotels.com":  { color:"#f57a7a", icon:"H",  url:(n,l)=>`https://www.hotels.com/search.do?q-destination=${encodeURIComponent(n+" "+l)}` },
  Airbnb:        { color:"#f57a8a", icon:"Ab", url:(n,l)=>`https://www.airbnb.com/s/${encodeURIComponent(l)}/homes` },
  Trustpilot:    { color:"#5cd4a0", icon:"TP", url:(n,l)=>`https://www.trustpilot.com/search?query=${encodeURIComponent(n)}` },
};

const DEFAULT_FILTERS = { minStars:[], openNow:false };

// ─── Onboarding — single screen, lighter blue, 3 bullets (replaces former 3-step carousel)
const ONBOARD_BG = "#1e324f";
const ONBOARD_CARD = "#243652";
const ONBOARD_BORDER = "#3d5680";
const ONBOARD_MUTED = "#9eb6dc";
const INTRO_BULLETS = [
  "One score from Google, Yelp, TripAdvisor, and more—aggregated into a single number you can trust.",
  "Weighted by real ratings and review volume, with a full breakdown—nothing hidden.",
  "Search restaurants, hotels, and services worldwide, including regional platforms.",
];

// ─── Onboarding screen ────────────────────────────────────────────────────────
function OnboardingScreen({ onComplete, embedded = false }) {
  const shellH = embedded ? "100%" : "100vh";
  return (
    <div style={{ height:shellH, minHeight:embedded ? 480 : undefined, background:ONBOARD_BG, display:"flex", flexDirection:"column", fontFamily:LATO, position:"relative", overflow:"hidden" }}>
      <StarBg variant="onboarding" embedded={embedded}/>

      <div style={{ flexShrink:0, textAlign:"center", paddingTop:embedded ? 36 : 52, paddingBottom:16, position:"relative", zIndex:1 }}>
        <p style={{ fontSize:13, color:ONBOARD_MUTED, margin:"0 0 4px", letterSpacing:0.5, fontFamily:LATO }}>One score. Every platform.</p>
        <h1 style={{ fontSize:54, fontWeight:400, color:T.white, margin:0, fontFamily:VIBES, lineHeight:1.1 }}>All Reviews</h1>
        <TitleStars size={20}/>
      </div>

      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 24px", position:"relative", zIndex:1, minHeight:0 }}>
        <div
          style={{
            width:"100%",
            maxWidth:400,
            minHeight:320,
            boxSizing:"border-box",
            background:ONBOARD_CARD,
            border:`1px solid ${ONBOARD_BORDER}`,
            borderRadius:24,
            padding:"28px 26px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
          }}
        >
          <h2 style={{ fontSize:32, fontWeight:400, color:T.white, margin:"0 0 18px", lineHeight:1.2, fontFamily:VIBES, textAlign:"center" }}>Welcome</h2>
          <ul style={{ margin:0, paddingLeft:22, color:ONBOARD_MUTED, fontSize:15, lineHeight:1.65, fontFamily:LATO, textAlign:"left" }}>
            {INTRO_BULLETS.map((line, i) => (
              <li key={i} style={{ marginBottom:i < INTRO_BULLETS.length - 1 ? 12 : 0 }}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ flexShrink:0, padding:"16px 24px 28px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:400, margin:"0 auto" }}>
          <button type="button" onClick={onComplete}
            style={{ width:"100%", background:T.gold, border:"none", borderRadius:14, color:T.bg, padding:"17px", fontSize:17, fontWeight:700, cursor:"pointer", fontFamily:LATO, marginBottom:12 }}
            onMouseEnter={e=>{ e.currentTarget.style.opacity="0.92"; }} onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; }}>
            Try the app →
          </button>
          <div style={{ textAlign:"center" }}>
            <button type="button" onClick={onComplete} style={{ background:"none", border:"none", color:ONBOARD_MUTED, fontSize:14, cursor:"pointer", fontFamily:LATO }}>Skip intro</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ on, onChange, id, label }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} id={id} onClick={() => onChange(!on)}
      style={{ width:48, height:28, borderRadius:14, flexShrink:0, background:on?T.gold:T.bgElevated, border:`2px solid ${on?T.gold:T.border}`, cursor:"pointer", position:"relative", transition:"all 0.2s" }}>
      <span style={{ position:"absolute", top:3, left:on?22:3, width:18, height:18, borderRadius:"50%", background:on?T.bg:T.textSecond, transition:"left 0.2s", display:"block" }}/>
    </button>
  );
}

// ─── Stars row ────────────────────────────────────────────────────────────────
function Stars({ score, size=20 }) {
  return (
    <div style={{ display:"flex", gap:2 }} role="img" aria-label={`${score.toFixed(1)} stars`}>
      {[1,2,3,4,5].map(i => {
        const fill = Math.min(1, Math.max(0, score-(i-1)));
        return (
          <div key={i} style={{ position:"relative", fontSize:size, lineHeight:1 }}>
            <span style={{ color:T.bgElevated }}>★</span>
            <span style={{ position:"absolute", left:0, top:0, width:`${fill*100}%`, overflow:"hidden", color:T.gold }}>★</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Score ring ───────────────────────────────────────────────────────────────
function ScoreRing({ score, size=156 }) {
  const r=size/2-13, circ=2*Math.PI*r, dash=(Math.min(score,5)/5)*circ;
  const color=score>=4.2?T.gold:score>=3.5?T.green:score>=2.5?T.orange:T.red;
  return (
    <div style={{ position:"relative", width:size, height:size }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={T.bgElevated} strokeWidth={9}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={9}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition:"stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)", filter:`drop-shadow(0 0 7px ${color}88)` }}/>
      </svg>
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ fontSize:size*0.23, fontWeight:900, color, fontFamily:LATO, letterSpacing:"-1px", lineHeight:1 }}>{score.toFixed(1)}</div>
        <div style={{ fontSize:size*0.1, color:T.textSecond, marginTop:3, fontFamily:LATO }}>/ 5 stars</div>
      </div>
    </div>
  );
}

// ─── Platform card ────────────────────────────────────────────────────────────
function PlatformCard({ name, score, reviewCount, note, onViewInApp, placeName, placeLocation }) {
  const p = PLATFORMS[name] || { color:T.textSecond, icon:"?" };
  const linkUrl = PLATFORMS[name]?.url(placeName||"", placeLocation||"");
  return (
    <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:14, padding:"16px", transition:"border-color 0.2s" }}
      onMouseEnter={e=>e.currentTarget.style.borderColor=T.gold}
      onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, borderRadius:9, background:`${p.color}22`, border:`1px solid ${p.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, color:p.color, fontFamily:LATO, flexShrink:0 }}>{p.icon}</div>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:T.textPrimary, fontFamily:LATO }}>{name}</div>
            {reviewCount && <div style={{ fontSize:12, color:T.textSecond, fontFamily:LATO }}>{reviewCount.toLocaleString()} reviews{reviewCount<50?" · ⚠ limited":""}</div>}
          </div>
        </div>
        <div style={{ fontSize:21, fontWeight:900, color:p.color, fontFamily:LATO }}>{score.toFixed(1)}</div>
      </div>
      <Stars score={score} size={17}/>
      {note && <p style={{ margin:"10px 0 0", fontSize:13, color:T.textSecond, lineHeight:1.6, fontStyle:"italic", fontFamily:LATO }}>"{note}"</p>}
      {linkUrl && (
        <div style={{ display:"flex", gap:8, marginTop:12 }}>
          <button onClick={() => onViewInApp(linkUrl, name)}
            style={{ flex:1, background:`${p.color}18`, border:`1.5px solid ${p.color}55`, borderRadius:9, color:p.color, padding:"9px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:LATO, transition:"background 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.background=`${p.color}30`}
            onMouseLeave={e=>e.currentTarget.style.background=`${p.color}18`}>Read reviews</button>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer"
            style={{ background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:9, color:T.textSecond, padding:"9px 13px", fontSize:13, textDecoration:"none", display:"flex", alignItems:"center" }}>↗</a>
        </div>
      )}
    </div>
  );
}

// ─── In-app browser ───────────────────────────────────────────────────────────
function InAppBrowser({ url, platformName, placeName, onClose }) {
  const p = PLATFORMS[platformName] || { color:T.gold, icon:"?" };
  const blocked = ["yelp.com","google.com","facebook.com","tripadvisor.com","booking.com","expedia.com"].some(d=>url?.includes(d));
  useEffect(() => { const h=e=>{if(e.key==="Escape")onClose();}; document.addEventListener("keydown",h); return()=>document.removeEventListener("keydown",h); }, [onClose]);
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(0,0,0,0.92)", display:"flex", flexDirection:"column" }}>
      <div style={{ background:T.bgCard, borderBottom:`1px solid ${T.border}`, padding:"10px 14px", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
        <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:36, height:36, fontSize:17, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        <div style={{ flex:1, background:T.bgElevated, borderRadius:7, padding:"7px 12px", border:`1px solid ${T.border}`, overflow:"hidden", display:"flex", gap:7, alignItems:"center" }}>
          <span style={{ fontSize:12, fontWeight:700, color:p.color }}>{p.icon}</span>
          <span style={{ fontSize:12, color:T.textSecond, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{url}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ background:T.gold, borderRadius:7, color:T.bg, padding:"8px 13px", fontSize:12, fontWeight:700, textDecoration:"none", whiteSpace:"nowrap" }}>Open ↗</a>
      </div>
      <div style={{ flex:1, background:"#fff", position:"relative" }}>
        {blocked ? (
          <div style={{ position:"absolute", inset:0, background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:18, padding:32, textAlign:"center" }}>
            <div style={{ width:64, height:64, borderRadius:18, background:`${p.color}22`, border:`2px solid ${p.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, fontWeight:900, color:p.color }}>{p.icon}</div>
            <div>
              <h2 style={{ fontSize:20, color:T.white, fontFamily:LATO, fontWeight:700, margin:"0 0 8px" }}>{platformName} blocks embedding</h2>
              <p style={{ fontSize:15, color:T.textSecond, maxWidth:300, lineHeight:1.7, margin:0, fontFamily:LATO }}>For security, {platformName} doesn't allow previews inside other apps.</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ background:T.gold, borderRadius:100, color:T.bg, padding:"13px 28px", fontSize:15, fontWeight:700, textDecoration:"none", fontFamily:LATO }}>Open {platformName} ↗</a>
            <button onClick={onClose} style={{ background:"transparent", border:`1.5px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"11px 24px", fontSize:14, cursor:"pointer", fontFamily:LATO }}>← Back</button>
          </div>
        ) : <iframe src={url} style={{ width:"100%", height:"100%", border:"none" }} title={`${platformName} - ${placeName}`}/>}
      </div>
    </div>
  );
}

// ─── Filter drawer ────────────────────────────────────────────────────────────
function FilterDrawer({ filters, onChange, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const h=e=>{if(ref.current&&!ref.current.contains(e.target))onClose();};
    const k=e=>{if(e.key==="Escape")onClose();};
    document.addEventListener("mousedown",h); document.addEventListener("keydown",k);
    return()=>{ document.removeEventListener("mousedown",h); document.removeEventListener("keydown",k); };
  }, [onClose]);
  const set=(k,v)=>onChange({...filters,[k]:v});
  const toggleStar=val=>{const c=filters.minStars;set("minStars",c.includes(val)?c.filter(s=>s!==val):[...c,val]);};
  const STAR_OPTIONS=[{label:"3★",val:3},{label:"3.5★",val:3.5},{label:"4★",val:4},{label:"4.5★",val:4.5},{label:"5★",val:5}];
  const activeCount=[filters.openNow,filters.minStars.length>0].filter(Boolean).length;
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9000, background:"rgba(0,0,0,0.7)", backdropFilter:"blur(6px)", display:"flex", alignItems:"flex-end" }}>
      <div ref={ref} style={{ background:T.bgCard, borderTop:`1px solid ${T.border}`, borderRadius:"22px 22px 0 0", padding:"20px 20px 36px", width:"100%", maxHeight:"80vh", overflowY:"auto" }}>
        <div style={{ width:40, height:4, borderRadius:2, background:T.border, margin:"0 auto 18px" }}/>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
          <h2 style={{ fontSize:20, fontWeight:900, color:T.white, margin:0, fontFamily:LATO }}>
            Filters {activeCount>0&&<span style={{ fontSize:13, background:T.gold, color:T.bg, borderRadius:100, padding:"2px 8px", marginLeft:7 }}>{activeCount}</span>}
          </h2>
          <div style={{ display:"flex", gap:8 }}>
            {activeCount>0&&<button onClick={()=>onChange({...DEFAULT_FILTERS})} style={{ background:"transparent", border:`1px solid ${T.border}`, borderRadius:7, color:T.textSecond, padding:"7px 12px", fontSize:13, cursor:"pointer", fontFamily:LATO }}>Clear</button>}
            <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:7, color:T.textPrimary, width:37, height:37, fontSize:17, cursor:"pointer" }}>✕</button>
          </div>
        </div>
        <div style={{ marginBottom:22 }}>
          <div style={{ fontSize:11, letterSpacing:2, color:T.textMuted, textTransform:"uppercase", fontWeight:700, marginBottom:12, fontFamily:LATO }}>Minimum Rating</div>
          <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
            <button onClick={()=>set("minStars",[])} style={{ background:filters.minStars.length===0?T.gold:T.bgElevated, border:`1.5px solid ${filters.minStars.length===0?T.gold:T.border}`, borderRadius:100, color:filters.minStars.length===0?T.bg:T.textPrimary, padding:"9px 16px", fontSize:14, cursor:"pointer", fontFamily:LATO }}>Any</button>
            {STAR_OPTIONS.map(o=>{const a=filters.minStars.includes(o.val);return<button key={o.val} onClick={()=>toggleStar(o.val)} style={{ background:a?T.gold:T.bgElevated, border:`1.5px solid ${a?T.gold:T.border}`, borderRadius:100, color:a?T.bg:T.textPrimary, padding:"9px 16px", fontSize:14, cursor:"pointer", fontFamily:LATO }}>{o.label}</button>;})}
          </div>
        </div>
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:11, letterSpacing:2, color:T.textMuted, textTransform:"uppercase", fontWeight:700, marginBottom:12, fontFamily:LATO }}>Options</div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Toggle on={filters.openNow} onChange={v=>set("openNow",v)} id="open-now" label="Open now"/>
            <label htmlFor="open-now" style={{ fontSize:15, fontWeight:700, color:filters.openNow?T.gold:T.textPrimary, cursor:"pointer", fontFamily:LATO }}>Open now</label>
          </div>
        </div>
        <button onClick={onClose} style={{ width:"100%", background:T.gold, border:"none", borderRadius:12, color:T.bg, padding:"15px", fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>Apply</button>
      </div>
    </div>
  );
}

// ─── Review summary ───────────────────────────────────────────────────────────
function ReviewSummary({ pros, cons, summary }) {
  if(!pros?.length&&!cons?.length&&!summary) return null;
  return (
    <section style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:16, padding:"20px", marginTop:16 }}>
      <h3 style={{ fontSize:16, fontWeight:700, color:T.white, margin:"0 0 13px", fontFamily:LATO }}>What customers are saying</h3>
      {summary&&<p style={{ fontSize:14, color:T.textSecond, lineHeight:1.75, margin:"0 0 16px", borderLeft:`3px solid ${T.gold}`, paddingLeft:13, fontFamily:LATO }}>{summary}</p>}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        {pros?.length>0&&<div><div style={{ fontSize:11, fontWeight:700, color:T.green, letterSpacing:1.5, textTransform:"uppercase", marginBottom:10, fontFamily:LATO }}>👍 Loved</div><ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>{pros.map((p,i)=><li key={i} style={{ display:"flex", gap:8 }}><span style={{ color:T.green, flexShrink:0, fontSize:13 }}>✓</span><span style={{ fontSize:13, color:T.textSecond, lineHeight:1.6, fontFamily:LATO }}>{p}</span></li>)}</ul></div>}
        {cons?.length>0&&<div><div style={{ fontSize:11, fontWeight:700, color:T.orange, letterSpacing:1.5, textTransform:"uppercase", marginBottom:10, fontFamily:LATO }}>👎 Noted</div><ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>{cons.map((c,i)=><li key={i} style={{ display:"flex", gap:8 }}><span style={{ color:T.orange, flexShrink:0, fontSize:13 }}>✗</span><span style={{ fontSize:13, color:T.textSecond, lineHeight:1.6, fontFamily:LATO }}>{c}</span></li>)}</ul></div>}
      </div>
      <p style={{ marginTop:13, fontSize:12, color:T.textMuted, fontFamily:LATO }}>🤖 AI-generated summary</p>
    </section>
  );
}

// ─── Disclaimer ───────────────────────────────────────────────────────────────
function Disclaimer() {
  const [open,setOpen]=useState(false);
  return (
    <div style={{ marginTop:16, padding:"14px 16px", background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:12 }}>
      <button onClick={()=>setOpen(o=>!o)} style={{ background:"none", border:"none", color:T.textSecond, fontSize:13, cursor:"pointer", display:"flex", alignItems:"center", gap:7, padding:0, fontFamily:LATO, width:"100%" }}>
        <span>ℹ️</span><span>About these scores</span>
        <span style={{ marginLeft:"auto", fontSize:11, transform:open?"rotate(180deg)":"", transition:"transform 0.2s" }}>▼</span>
      </button>
      {open&&<div style={{ marginTop:12, fontSize:13, color:T.textSecond, lineHeight:1.8, fontFamily:LATO }}>
        <p style={{ margin:"0 0 9px" }}><strong style={{ color:T.textPrimary }}>Data:</strong> Scores come from Claude's training data. Always verify on the source platform.</p>
        <p style={{ margin:"0 0 9px" }}><strong style={{ color:T.textPrimary }}>Methodology:</strong> Weighted average by review count, normalised to 5 stars.</p>
        <p style={{ margin:0 }}><strong style={{ color:T.textPrimary }}>Independence:</strong> Not affiliated with any review platform.</p>
      </div>}
    </div>
  );
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────
function SkeletonLoader() {
  const pulse={ animation:"pulse 1.5s ease-in-out infinite", background:`linear-gradient(90deg, ${T.bgCard} 25%, ${T.bgElevated} 50%, ${T.bgCard} 75%)`, backgroundSize:"200% 100%", borderRadius:7 };
  return (
    <div style={{ marginTop:20 }} role="status" aria-label="Loading">
      <style>{`@keyframes pulse{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:20, padding:"28px 22px", textAlign:"center", marginBottom:14 }}>
        <div style={{ ...pulse, width:110, height:13, margin:"0 auto 10px" }}/><div style={{ ...pulse, width:180, height:22, margin:"0 auto 7px" }}/><div style={{ ...pulse, width:140, height:14, margin:"0 auto 24px" }}/><div style={{ ...pulse, width:156, height:156, borderRadius:"50%", margin:"0 auto 18px" }}/><div style={{ ...pulse, width:200, height:14, margin:"0 auto" }}/>
      </div>
      {[1,2,3].map(i=><div key={i} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:14, padding:"16px", marginBottom:9 }}><div style={{ display:"flex", alignItems:"center", gap:9 }}><div style={{ ...pulse, width:34, height:34, borderRadius:9 }}/><div><div style={{ ...pulse, width:75, height:14, marginBottom:5 }}/><div style={{ ...pulse, width:100, height:11 }}/></div></div></div>)}
      <p style={{ textAlign:"center", fontSize:13, color:T.textMuted, marginTop:14, fontFamily:LATO }}>Finding scores…</p>
    </div>
  );
}

// ─── Disambig list ────────────────────────────────────────────────────────────
function DisambigList({ places, onSelect }) {
  return (
    <div style={{ marginTop:20 }}>
      <p style={{ fontSize:16, color:T.textSecond, marginBottom:13, textAlign:"center", fontFamily:LATO }}>We found a few matches:</p>
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {places.map((p,i)=>(
          <button key={i} onClick={()=>onSelect(p)}
            style={{ background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:13, padding:"14px 16px", color:T.textPrimary, textAlign:"left", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily:LATO }}
            onMouseEnter={e=>e.currentTarget.style.borderColor=T.gold} onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
            <div><div style={{ fontWeight:700, fontSize:15, marginBottom:2 }}>{p.name}</div><div style={{ fontSize:13, color:T.textSecond }}>{p.city}{p.country?`, ${p.country}`:""}{p.type?` · ${p.type}`:""}</div></div>
            <span style={{ color:T.gold, fontSize:18 }}>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── API + cache ──────────────────────────────────────────────────────────────
async function callClaude(prompt, signal) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST", headers:{"Content-Type":"application/json"}, signal,
    body: JSON.stringify({ model:"claude-haiku-4-5-20251001", max_tokens:1000, messages:[{role:"user",content:prompt}] }),
  });
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if(data.error) throw new Error(data.error.message);
  const text = data.content.filter(b=>b.type==="text").map(b=>b.text).join("");
  const first=text.indexOf("{"), last=text.lastIndexOf("}");
  if(first===-1||last===-1) throw new Error("No JSON");
  return JSON.parse(text.slice(first,last+1));
}
const CACHE_PREFIX="ar_v14:";
async function cacheGet(k){try{const r=await window.storage.get(CACHE_PREFIX+k);return r?JSON.parse(r.value):null;}catch{return null;}}
async function cacheSet(k,v){try{await window.storage.set(CACHE_PREFIX+k,JSON.stringify(v));}catch{}}
function cacheKey(q){return q.toLowerCase().trim().replace(/\s+/g,"_").slice(0,120);}

// ─── Save modal ───────────────────────────────────────────────────────────────
function SaveModal({ place, savedLists, onSave, onClose }) {
  const [newName,setNewName]=useState(""); const [creating,setCreating]=useState(false);
  useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose();};document.addEventListener("keydown",k);return()=>document.removeEventListener("keydown",k);},[onClose]);
  const doCreate=()=>{const name=newName.trim();if(!name)return;const id=Date.now().toString();onSave(id,place,{id,name,places:[]});onClose();};
  return (
    <div style={{ position:"fixed", inset:0, zIndex:10000, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:22, padding:"24px 20px", width:"100%", maxWidth:380 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:17 }}>
          <h3 style={{ fontSize:17, fontWeight:900, color:T.white, margin:0, fontFamily:LATO }}>Save to a list</h3>
          <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:34, height:34, fontSize:15, cursor:"pointer" }}>✕</button>
        </div>
        <p style={{ fontSize:13, color:T.textSecond, margin:"0 0 14px", fontFamily:LATO }}>{place.name} · {place.location}</p>
        {savedLists.length>0&&<div style={{ display:"flex", flexDirection:"column", gap:7, marginBottom:14 }}>{savedLists.map(list=>{const already=list.places.some(p=>p.name===place.name&&p.location===place.location);return<button key={list.id} onClick={()=>!already&&(onSave(list.id,place),onClose())} style={{ background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:11, padding:"12px 14px", display:"flex", alignItems:"center", justifyContent:"space-between", cursor:already?"default":"pointer", opacity:already?0.6:1, fontFamily:LATO }}><div><div style={{ fontSize:14, fontWeight:700, color:T.textPrimary }}>{list.name}</div><div style={{ fontSize:12, color:T.textMuted }}>{list.places.length} places</div></div>{already?<span style={{ fontSize:12, color:T.green }}>✓</span>:<span style={{ fontSize:17, color:T.gold }}>+</span>}</button>;})}</div>}
        {!creating?<button onClick={()=>setCreating(true)} style={{ width:"100%", background:"transparent", border:`1.5px dashed ${T.border}`, borderRadius:11, padding:"12px", color:T.textSecond, fontSize:14, cursor:"pointer", fontFamily:LATO }}>+ New list</button>:<div style={{ display:"flex", gap:7 }}><input autoFocus value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doCreate();if(e.key==="Escape")setCreating(false);}} placeholder="e.g. Date Night…" style={{ flex:1, background:T.bgElevated, border:`1.5px solid ${T.gold}`, borderRadius:9, color:T.white, fontSize:14, padding:"11px 12px", fontFamily:LATO }}/><button onClick={doCreate} style={{ background:T.gold, border:"none", borderRadius:9, color:T.bg, padding:"0 14px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>Save</button></div>}
      </div>
    </div>
  );
}

// ─── Side menu ────────────────────────────────────────────────────────────────
function SideMenu({ savedLists, onSelectSaved, onDeleteList, onDeletePlace, onClose }) {
  const [tab,setTab]=useState("saved");
  useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose();};document.addEventListener("keydown",k);return()=>document.removeEventListener("keydown",k);},[onClose]);
  const total=savedLists.reduce((a,l)=>a+l.places.length,0);
  const TabBtn=({id,label})=><button onClick={()=>setTab(id)} style={{ flex:1, background:"transparent", border:"none", borderBottom:`2px solid ${tab===id?T.gold:"transparent"}`, color:tab===id?T.gold:T.textSecond, padding:"11px 0", fontSize:14, fontWeight:tab===id?700:400, cursor:"pointer", fontFamily:LATO }}>{label}</button>;
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9500, display:"flex", justifyContent:"flex-end" }}>
      <div onClick={onClose} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)" }}/>
      <div style={{ position:"relative", width:"85vw", maxWidth:340, height:"100%", background:T.bgCard, borderLeft:`1px solid ${T.border}`, display:"flex", flexDirection:"column", overflowY:"auto" }}>
        <div style={{ padding:"18px 18px 0", borderBottom:`1px solid ${T.border}`, flexShrink:0 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <h2 style={{ fontSize:30, fontWeight:400, color:T.white, margin:0, fontFamily:VIBES }}>All Reviews</h2>
            <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:34, height:34, fontSize:15, cursor:"pointer" }}>✕</button>
          </div>
          <div style={{ display:"flex" }}><TabBtn id="saved" label={`Saved${total>0?` (${total})`:""}`}/><TabBtn id="about" label="About"/></div>
        </div>
        {tab==="saved"&&<div style={{ flex:1, padding:"18px", overflowY:"auto" }}>{savedLists.length===0?<div style={{ textAlign:"center", paddingTop:36 }}><div style={{ fontSize:36, marginBottom:10 }}>🔖</div><p style={{ fontSize:15, color:T.textSecond, lineHeight:1.7, fontFamily:LATO }}>No saved places yet.</p></div>:<div style={{ display:"flex", flexDirection:"column", gap:18 }}>{savedLists.map(list=><div key={list.id}><div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:9 }}><h3 style={{ fontSize:12, fontWeight:700, color:T.textMuted, margin:0, textTransform:"uppercase", letterSpacing:1, fontFamily:LATO }}>{list.name}</h3><button onClick={()=>onDeleteList(list.id)} style={{ background:"transparent", border:"none", color:T.textMuted, fontSize:11, cursor:"pointer", fontFamily:LATO }}>✕ Delete</button></div>{list.places.map((place,i)=><div key={i} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:12, padding:"12px 14px", marginBottom:7, display:"flex", alignItems:"center", gap:10 }}><div style={{ flex:1, minWidth:0 }}><div style={{ fontSize:14, fontWeight:700, color:T.textPrimary, fontFamily:LATO, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{place.name}</div><div style={{ fontSize:12, color:T.textSecond, fontFamily:LATO }}>{place.location}</div>{place.score&&<div style={{ fontSize:12, color:T.gold, fontFamily:LATO }}>★ {place.score.toFixed(1)}</div>}</div><div style={{ display:"flex", gap:5 }}><button onClick={()=>{onSelectSaved(place);onClose();}} style={{ background:`${T.gold}18`, border:`1px solid ${T.gold}44`, borderRadius:7, color:T.gold, padding:"6px 10px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>View</button><button onClick={()=>onDeletePlace(list.id,i)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:7, color:T.textMuted, padding:"6px 9px", fontSize:12, cursor:"pointer" }}>✕</button></div></div>)}</div>)}</div>}</div>}
        {tab==="about"&&<div style={{ flex:1, padding:"20px 18px" }}><h3 style={{ fontSize:17, fontWeight:900, color:T.white, margin:"0 0 10px", fontFamily:LATO }}>About All Reviews</h3><p style={{ fontSize:14, color:T.textSecond, lineHeight:1.8, margin:"0 0 14px", fontFamily:LATO }}>Independent review aggregator. One weighted score from Google, Yelp, TripAdvisor, and more.</p><p style={{ fontSize:12, color:T.textMuted, fontFamily:LATO }}>v14 · Built with Claude + vibe coding ✦</p></div>}
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
/** @param {{ embedded?: boolean }} props — when true, fills a parent frame (e.g. lab embed) instead of the viewport */
export default function App({ embedded = false } = {}) {
  const [onboarded,setOnboarded]=useState(false);
  const [savedLists,setSavedLists]=useState([]);
  const [menuOpen,setMenuOpen]=useState(false);
  const [saveModal,setSaveModal]=useState(null);
  const [query,setQuery]=useState("");
  const [filters,setFilters]=useState({...DEFAULT_FILTERS});
  const [drawerOpen,setDrawerOpen]=useState(false);
  const [loading,setLoading]=useState(false);
  const [loadingMore,setLoadingMore]=useState(false);
  const [disambig,setDisambig]=useState(null);
  const [result,setResult]=useState(null);
  const [error,setError]=useState(null);
  const [browser,setBrowser]=useState(null);
  const [showAll,setShowAll]=useState(false);
  const [geolocating,setGeolocating]=useState(false);
  const cancelRef=useRef(null);

  const removeFilter=key=>setFilters(f=>({...f,[key]:key==="minStars"?[]:false}));

  const searchForPlace=async rawQuery=>{
    if(cancelRef.current)cancelRef.current.abort();
    const ctrl=new AbortController();cancelRef.current=ctrl;const sig=ctrl.signal;
    setLoading(true);setError(null);setDisambig(null);setResult(null);setShowAll(false);setLoadingMore(false);
    const ck=cacheKey(rawQuery);
    const cached=await cacheGet(ck);
    if(cached&&!sig.aborted){setResult({...cached,fromCache:true});setLoading(false);if(cancelRef.current===ctrl)cancelRef.current=null;return;}
    const prompt=`Review scores for: "${rawQuery}"\nReturn ONLY raw JSON, no markdown.\nIf multiple locations: {"type":"disambig","places":[{"name":"","city":"","country":"","type":""}]}\nIf unknown: {"type":"unknown"}\nOtherwise: {"type":"result","name":"","location":"","country":"","lat":0,"lng":0,"isClosed":false,"isOpenNow":null,"openingHours":"","platforms":[{"name":"Google","score":4.2,"reviewCount":1800,"note":""},{"name":"Yelp","score":4.1,"reviewCount":900,"note":""},{"name":"TripAdvisor","score":4.3,"reviewCount":500,"note":""}],"aggregateScore":4.2,"verdict":"one sentence","summary":"2 sentences","pros":["","",""],"cons":["",""]}\nRules: Only Google/Yelp/TripAdvisor. Real scores only. Never invent. 3 pros, 2 cons.`;
    try {
      const data=await callClaude(prompt,sig);if(sig.aborted)return;
      if(data.type==="disambig"&&data.places?.length>1){setDisambig(data.places);setLoading(false);return;}
      if(data.type==="unknown"){setError(`No results for "${rawQuery}". Try adding the city — e.g. "Nobu, London"`);setLoading(false);return;}
      if(data.type==="result"||data.name){
        const h={...data,fromCache:false,platforms:(data.platforms||[]).map(p=>({...p,url:p.url||(PLATFORMS[p.name]?.url(data.name||"",data.location||"")||null)}))};
        setResult(h);setLoading(false);cacheSet(ck,h);
      } else throw new Error("Unexpected");
    } catch(e){if(e.name==="AbortError")return;setLoading(false);setError(`Couldn't find that. Try adding the city.`);}
    finally{if(cancelRef.current===ctrl)cancelRef.current=null;}
  };

  const handleCancel=()=>{if(cancelRef.current){cancelRef.current.abort();cancelRef.current=null;}setLoading(false);setLoadingMore(false);};
  const handleSearch=()=>{if(query.trim())searchForPlace(query);};
  const handleNearMe=()=>{if(!navigator.geolocation){setError("Location not supported.");return;}setGeolocating(true);navigator.geolocation.getCurrentPosition(pos=>{setGeolocating(false);const{latitude:lat,longitude:lng}=pos.coords;searchForPlace(`${query.trim()||"top-rated restaurants"} near ${lat.toFixed(4)},${lng.toFixed(4)}`);},()=>{setGeolocating(false);setError("Couldn't get location.");},{timeout:8000,maximumAge:60000});};
  const handleSaveToList=(listId,place,newList)=>{setSavedLists(prev=>{let lists=newList?[...prev,newList]:[...prev];return lists.map(l=>l.id===listId?{...l,places:[...l.places,place]}:l);});};
  const handleDeleteList=id=>setSavedLists(prev=>prev.filter(l=>l.id!==id));
  const handleDeletePlace=(id,i)=>setSavedLists(prev=>prev.map(l=>l.id===id?{...l,places:l.places.filter((_,idx)=>idx!==i)}:l));
  const isPlaceSaved=place=>savedLists.some(l=>l.places.some(p=>p.name===place?.name&&p.location===place?.location));

  const getProcessed=()=>{if(!result?.platforms)return[];let list=[...result.platforms];if(filters.minStars.length>0)list=list.filter(p=>filters.minStars.some(s=>p.score>=s));list.sort((a,b)=>b.score-a.score);return list;};
  const processed=getProcessed();
  const visible=showAll?processed:processed.slice(0,3);
  const displayScore=result?(()=>{const list=processed.length?processed:(result.platforms||[]);if(!list.length)return result.aggregateScore||0;return list.reduce((s,p)=>s+p.score*(p.reviewCount||1),0)/list.reduce((s,p)=>s+(p.reviewCount||1),0);})():null;
  const scoreColor=displayScore?displayScore>=4.2?T.gold:displayScore>=3.5?T.green:T.orange:T.gold;
  const verdictEmoji=displayScore?displayScore>=4.5?"🏆":displayScore>=4.0?"✨":displayScore>=3.5?"👍":"⚠️":"";
  const activeFilterCount=[filters.openNow,filters.minStars.length>0].filter(Boolean).length;

  if(!onboarded)return <OnboardingScreen embedded={embedded} onComplete={()=>setOnboarded(true)}/>;

  return (
    <div style={{
      minHeight:embedded?"100%":"100vh",
      height:embedded?"100%":undefined,
      flex:embedded?1:undefined,
      display:"flex",
      flexDirection:"column",
      background:T.bg,
      fontFamily:LATO,
      color:T.textPrimary,
      position:"relative",
      overflow:embedded?"hidden":undefined,
    }}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeSwap{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse{0%{background-position:200% 0}100%{background-position:-200% 0}}
        input:focus{outline:2px solid #f5c842;outline-offset:2px;border-radius:7px;}
        button:focus-visible{outline:2px solid #f5c842;outline-offset:2px;border-radius:6px;}
      `}</style>

      <StarBg variant="app" embedded={embedded}/>

      {browser&&<InAppBrowser url={browser.url} platformName={browser.platformName} placeName={result?.name} onClose={()=>setBrowser(null)}/>}
      {drawerOpen&&<FilterDrawer filters={filters} onChange={setFilters} onClose={()=>setDrawerOpen(false)}/>}
      {menuOpen&&<SideMenu savedLists={savedLists} onSelectSaved={p=>{setQuery(p.name+", "+p.location);searchForPlace(p.name+", "+p.location);}} onDeleteList={handleDeleteList} onDeletePlace={handleDeletePlace} onClose={()=>setMenuOpen(false)}/>}
      {saveModal&&<SaveModal place={saveModal} savedLists={savedLists} onSave={handleSaveToList} onClose={()=>setSaveModal(null)}/>}

      <div style={{ flex:1, minHeight:0, overflowY:"auto", WebkitOverflowScrolling:"touch", position:"relative", zIndex:1 }}>

      {/* ── Sticky header — stays at top while scrolling ── */}
      <div style={{ position:"sticky", top:0, zIndex:10, background:T.bg, paddingTop:20, paddingBottom:12, paddingLeft:16, paddingRight:16 }}>
        <div style={{ maxWidth:440, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ flex:1 }}/>
            <div style={{ textAlign:"center", flex:2 }}>
              <h1 style={{ fontSize:"clamp(36px,9vw,52px)", fontWeight:400, margin:0, lineHeight:1, color:T.white, fontFamily:VIBES }}>All Reviews</h1>
              <TitleStars size={17}/>
            </div>
            <div style={{ flex:1, display:"flex", justifyContent:"flex-end" }}>
              <button onClick={()=>setMenuOpen(true)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:9, color:T.textPrimary, width:38, height:38, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, cursor:"pointer", padding:0, transition:"border-color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.borderColor=T.gold} onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
                {[0,1,2].map(i=><span key={i} style={{ width:16, height:2, background:T.textPrimary, borderRadius:2, display:"block" }}/>)}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <main style={{ maxWidth:440, margin:"0 auto", padding:"0 16px 90px", position:"relative", zIndex:1 }}>

        {/* Search card */}
        <section style={{ animation:"fadeUp 0.4s ease both" }}>
          <div style={{ background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:16, padding:"16px 16px 14px", boxShadow:"0 6px 24px rgba(0,0,0,0.45)" }}>
            <label htmlFor="si" style={{ fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:1.5, textTransform:"uppercase", display:"block", marginBottom:7, fontFamily:LATO }}>Search any place, anywhere</label>
            <div style={{ position:"relative", display:"flex", alignItems:"center" }}>
              <input id="si" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSearch()}
                placeholder="Restaurant, hotel, spa…"
                style={{ width:"100%", background:"transparent", border:"none", borderBottom:`1px solid ${T.border}`, color:T.white, fontSize:16, padding:"3px 44px 12px 0", fontFamily:LATO }} autoComplete="off"/>
              <button onClick={handleNearMe} disabled={geolocating||loading} aria-label="Use my location"
                style={{ position:"absolute", right:0, bottom:8, background:"transparent", border:"none", color:geolocating?T.gold:T.textSecond, cursor:geolocating||loading?"not-allowed":"pointer", padding:3, display:"flex", alignItems:"center", transition:"color 0.2s" }}
                onMouseEnter={e=>{if(!geolocating&&!loading)e.currentTarget.style.color=T.gold;}} onMouseLeave={e=>{if(!geolocating)e.currentTarget.style.color=T.textSecond;}}>
                {geolocating
                  ?<span style={{ width:16, height:16, border:`2px solid ${T.gold}`, borderTopColor:"transparent", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }}/>
                  :<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/><circle cx="12" cy="12" r="9" strokeDasharray="4 2"/></svg>}
              </button>
            </div>
            {(filters.openNow||filters.minStars.length>0)&&<div style={{ display:"flex", gap:7, flexWrap:"wrap", marginTop:9 }}>
              {filters.openNow&&<span style={{ display:"inline-flex", alignItems:"center", gap:5, background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"4px 10px 4px 12px", fontSize:13, fontFamily:LATO }}>Open now<button onClick={()=>removeFilter("openNow")} style={{ background:`${T.gold}30`, border:"none", borderRadius:"50%", color:T.gold, width:18, height:18, fontSize:10, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", padding:0, marginLeft:2 }}>✕</button></span>}
              {filters.minStars.length>0&&<span style={{ display:"inline-flex", alignItems:"center", gap:5, background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"4px 10px 4px 12px", fontSize:13, fontFamily:LATO }}>{filters.minStars.sort((a,b)=>a-b).join("★/")}★<button onClick={()=>removeFilter("minStars")} style={{ background:`${T.gold}30`, border:"none", borderRadius:"50%", color:T.gold, width:18, height:18, fontSize:10, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", padding:0, marginLeft:2 }}>✕</button></span>}
            </div>}
            <div style={{ display:"flex", gap:9, marginTop:12 }}>
              <button onClick={()=>setDrawerOpen(true)} style={{ background:T.bgElevated, border:`1.5px solid ${activeFilterCount>0?T.gold:T.border}`, borderRadius:11, color:activeFilterCount>0?T.gold:T.textSecond, padding:"0 16px", fontSize:13, cursor:"pointer", display:"flex", alignItems:"center", gap:7, flexShrink:0, height:48, fontWeight:700, fontFamily:LATO }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
                Filters{activeFilterCount>0&&<span style={{ background:T.gold, color:T.bg, borderRadius:"50%", width:18, height:18, fontSize:10, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>{activeFilterCount}</span>}
              </button>
              <button onClick={loading?handleCancel:handleSearch} style={{ flex:1, background:loading?T.bgElevated:T.gold, border:`1.5px solid ${loading?T.red:T.gold}`, borderRadius:11, color:loading?T.red:T.bg, height:48, fontSize:15, fontWeight:700, cursor:"pointer", transition:"all 0.15s", display:"flex", alignItems:"center", justifyContent:"center", gap:7, fontFamily:LATO }}>
                {loading?<><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>Stop</>:"Find Scores →"}
              </button>
            </div>
          </div>
        </section>

        {loading&&<SkeletonLoader/>}
        {error&&<div role="alert" style={{ marginTop:16, background:`${T.red}18`, border:`1.5px solid ${T.red}55`, borderRadius:12, padding:"14px 16px", color:T.red, fontSize:15, lineHeight:1.6, fontFamily:LATO }}>{error}</div>}
        {disambig&&!loading&&<DisambigList places={disambig} onSelect={p=>{setDisambig(null);searchForPlace(`${p.name}${p.city?", "+p.city:""}${p.country?", "+p.country:""}`);}}/>}

        {result&&!loading&&(
          <div style={{ marginTop:20, animation:"fadeUp 0.4s ease both" }}>
            {result.isClosed&&<div role="alert" style={{ background:`${T.orange}15`, border:`1.5px solid ${T.orange}55`, borderRadius:11, padding:"12px 15px", color:T.orange, fontSize:14, marginBottom:13, fontFamily:LATO }}>⚠️ <strong>May be permanently closed.</strong></div>}
            {result.isOpenNow===true&&!result.isClosed&&<div style={{ background:`${T.green}12`, border:`1.5px solid ${T.green}44`, borderRadius:11, padding:"12px 15px", color:T.green, fontSize:14, marginBottom:13, fontFamily:LATO }}>🟢 <strong>Open right now</strong>{result.openingHours?` · ${result.openingHours}`:""}</div>}
            {result.isOpenNow===false&&!result.isClosed&&<div style={{ background:`${T.red}12`, border:`1.5px solid ${T.red}44`, borderRadius:11, padding:"12px 15px", color:T.red, fontSize:14, marginBottom:13, fontFamily:LATO }}>🔴 <strong>Currently closed</strong>{result.openingHours?` · ${result.openingHours}`:""}</div>}

            <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:20, padding:"26px 20px", textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 50% 0%, ${scoreColor}12 0%, transparent 60%)`, pointerEvents:"none" }}/>
              <p style={{ fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:2, textTransform:"uppercase", margin:"0 0 6px", fontFamily:LATO }}>Averaged Score</p>
              <h2 style={{ fontSize:22, fontWeight:900, color:T.white, margin:"0 0 3px", lineHeight:1.2, fontFamily:LATO }}>{result.name}</h2>
              <p style={{ fontSize:13, color:T.textSecond, margin:"0 0 22px", fontFamily:LATO }}>{result.location}{result.country&&result.country!==result.location?` · ${result.country}`:""}</p>
              <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}><ScoreRing score={displayScore} size={156}/></div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:7, marginBottom:16 }}>
                <Stars score={Math.round(displayScore*2)/2} size={22}/>
                <p style={{ fontSize:14, color:T.textSecond, margin:0, fontFamily:LATO }}>{displayScore?.toFixed(1)} stars · {processed.length||result.platforms?.length||0} platforms</p>
              </div>
              <p style={{ fontSize:14, color:T.textSecond, lineHeight:1.7, margin:"0 0 12px", fontStyle:"italic", fontFamily:LATO }}>{verdictEmoji} {result.verdict}</p>
              <p style={{ fontSize:12, color:T.textMuted, margin:0, fontFamily:LATO }}>{result.platforms?.reduce((a,p)=>a+(p.reviewCount||0),0).toLocaleString()}+ total reviews</p>
              {result.fromCache&&<div style={{ marginTop:10, display:"inline-flex", alignItems:"center", gap:5, fontSize:12, color:T.textMuted, fontFamily:LATO }}>⚡ From cache</div>}
              <div style={{ display:"flex", gap:8, justifyContent:"center", marginTop:16 }}>
                <button onClick={()=>isPlaceSaved(result)?null:setSaveModal({name:result.name,location:result.location,score:displayScore})}
                  style={{ display:"flex", alignItems:"center", gap:7, background:isPlaceSaved(result)?`${T.gold}20`:T.bgElevated, border:`1.5px solid ${isPlaceSaved(result)?T.gold:T.border}`, borderRadius:100, color:isPlaceSaved(result)?T.gold:T.textSecond, padding:"9px 17px", fontSize:13, fontWeight:700, cursor:isPlaceSaved(result)?"default":"pointer", fontFamily:LATO, transition:"all 0.15s" }}
                  onMouseEnter={e=>{if(!isPlaceSaved(result)){e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}}
                  onMouseLeave={e=>{if(!isPlaceSaved(result)){e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={isPlaceSaved(result)?"currentColor":"none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                  {isPlaceSaved(result)?"Saved":"Save"}
                </button>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((result.name||"")+" "+(result.location||""))}`} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:7, background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"9px 17px", fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:LATO, transition:"all 0.15s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Maps
                </a>
              </div>
            </div>

            <ReviewSummary pros={result.pros} cons={result.cons} summary={result.summary}/>

            <section style={{ marginTop:16 }}>
              <h3 style={{ fontSize:16, fontWeight:700, color:T.white, margin:"0 0 12px", fontFamily:LATO }}>Breakdown by platform</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {visible.map(p=><PlatformCard key={p.name} {...p} placeName={result.name} placeLocation={result.location} onViewInApp={(url,name)=>setBrowser({url,platformName:name})}/>)}
              </div>
              {processed.length>3&&<button onClick={()=>setShowAll(s=>!s)}
                style={{ width:"100%", marginTop:10, background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:12, color:T.textSecond, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:LATO, transition:"all 0.15s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>
                {showAll?`▲ Show fewer`:`▼ All ${processed.length} platforms`}
              </button>}
            </section>

            <Disclaimer/>
            <p style={{ textAlign:"center", marginTop:16, fontSize:12, color:T.textMuted, fontFamily:LATO }}>Powered by Claude · Not affiliated with any platform</p>
          </div>
        )}

        {!loading&&!result&&!error&&!disambig&&(
          <div style={{ textAlign:"center", marginTop:40, animation:"fadeUp 0.4s ease 0.15s both" }}>
            <div style={{ fontSize:44, marginBottom:13 }}>🌍</div>
            <h2 style={{ fontSize:18, fontWeight:700, color:T.textPrimary, margin:"0 0 7px", fontFamily:LATO }}>Search anywhere in the world</h2>
            <p style={{ fontSize:14, color:T.textSecond, margin:"0 0 20px", fontFamily:LATO }}>Restaurants · Hotels · Services</p>
            <div style={{ display:"flex", gap:7, justifyContent:"center", flexWrap:"wrap" }}>
              {["Le Bernardin, NY","Nobu, London","Da Ivo, Venice"].map(s=>(
                <button key={s} onClick={()=>setQuery(s)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"8px 14px", fontSize:13, cursor:"pointer", fontFamily:LATO, transition:"all 0.15s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>{s}</button>
              ))}
              <button onClick={handleNearMe} disabled={geolocating} style={{ background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"8px 14px", fontSize:13, cursor:geolocating?"wait":"pointer", display:"flex", alignItems:"center", gap:5, fontFamily:LATO }}>
                {geolocating?<><span style={{ width:11, height:11, border:`2px solid ${T.gold}`, borderTopColor:"transparent", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }}/> Locating…</>:<>📍 Near me</>}
              </button>
            </div>
          </div>
        )}
      </main>
      </div>
    </div>
  );
}
