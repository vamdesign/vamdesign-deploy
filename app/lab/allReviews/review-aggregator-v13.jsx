// All Reviews v13
// Changes from v12: Great Vibes title · Lato body font · Star SVG background · 5 stars under title · solid card backgrounds

import { useState, useEffect, useRef } from "react";

const T = {
  bg:"#0e1220", bgCard:"#161d2e", bgElevated:"#1c2540", border:"#2d3a55",
  gold:"#f5c842", white:"#f0f4ff", textPrimary:"#dce6ff", textSecond:"#8fa8d4",
  textMuted:"#6b84b0", green:"#6fcf8a", orange:"#f0954a", red:"#f07070",
};
const LATO = "'Lato', sans-serif";
const VIBES = "'Great Vibes', cursive";

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

const DEFAULT_FILTERS = { minStars:[], michelin:false, openNow:false, showMap:false };

// Star background — paths from Star_3.svg, Star_4.svg, Star_5.svg, Star_6.svg
function StarBg() {
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      <svg width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <g transform="translate(72%, 2%) scale(1.4)" opacity="0.07">
          <path d="M139.5 15L179.029 95.0936L267.417 107.937L203.459 170.281L218.557 258.313L139.5 216.75L60.4429 258.313L75.5415 170.281L11.5829 107.937L99.9714 95.0936L139.5 15Z" stroke="#FFF94A" strokeWidth="10" fill="none"/>
        </g>
        <g transform="translate(-6%, 28%) scale(1.1)" opacity="0.06">
          <path d="M49.0029 38.9399L134.801 78.9185L205.43 15.9006L193.921 109.854L275.68 157.552L182.769 175.639L162.67 268.136L116.757 185.362L22.5761 194.83L87.1111 125.585L49.0029 38.9399Z" stroke="#FFCC4A" strokeWidth="10" fill="none"/>
        </g>
        <g transform="translate(68%, 58%) scale(1.3)" opacity="0.07">
          <path d="M139.607 27.4465L188.317 68.4655L243.779 37.172L219.82 96.1743L266.721 139.252L203.203 134.698L176.727 192.615L161.429 130.798L98.1659 123.515L152.23 89.8641L139.607 27.4465Z" stroke="#FFCC4A" strokeWidth="10" fill="none"/>
          <path d="M45.8686 139.946L70.6544 157.238L98.9503 146.623L90.1642 175.539L109.004 199.169L78.7878 199.749L62.1354 224.969L52.247 196.411L23.1157 188.367L47.2203 170.137L45.8686 139.946Z" stroke="#FFF94A" strokeWidth="10" fill="none"/>
        </g>
        <g transform="translate(-4%, 60%) scale(1.2)" opacity="0.065">
          <path d="M43.3135 19.2953L75.8238 44.2121L114.78 31.5566L101.129 70.1755L125.204 103.315L84.2564 102.266L60.1787 135.402L48.523 96.1349L9.56782 83.4753L43.3114 60.2559L43.3135 19.2953Z" stroke="#FFF94A" strokeWidth="10" fill="none"/>
          <path d="M246.525 97.6676L231.916 157.597L273.002 203.606L211.492 208.231L180.43 261.524L157.024 204.453L96.7412 191.38L143.786 151.484L137.59 90.1116L190.072 122.525L246.525 97.6676Z" stroke="#FFF94A" strokeWidth="10" fill="none"/>
        </g>
        <g transform="translate(2%, 85%) scale(0.6)" opacity="0.055">
          <path d="M139.5 15L179.029 95.0936L267.417 107.937L203.459 170.281L218.557 258.313L139.5 216.75L60.4429 258.313L75.5415 170.281L11.5829 107.937L99.9714 95.0936L139.5 15Z" stroke="#FFF94A" strokeWidth="12" fill="none"/>
        </g>
        <g transform="translate(78%, 75%) scale(0.7)" opacity="0.055">
          <path d="M49.0029 38.9399L134.801 78.9185L205.43 15.9006L193.921 109.854L275.68 157.552L182.769 175.639L162.67 268.136L116.757 185.362L22.5761 194.83L87.1111 125.585L49.0029 38.9399Z" stroke="#FFCC4A" strokeWidth="12" fill="none"/>
        </g>
      </svg>
    </div>
  );
}

function TitleStars() {
  return (
    <div style={{ display:"flex", gap:6, justifyContent:"center", marginTop:8 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="22" height="22" viewBox="0 0 286 284" fill="none">
          <path d="M139.5 15L179.029 95.0936L267.417 107.937L203.459 170.281L218.557 258.313L139.5 216.75L60.4429 258.313L75.5415 170.281L11.5829 107.937L99.9714 95.0936L139.5 15Z" stroke="#f5c842" strokeWidth="14" fill="none"/>
        </svg>
      ))}
    </div>
  );
}

function Toggle({ on, onChange, id, label }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} id={id} onClick={() => onChange(!on)}
      style={{ width:48, height:28, borderRadius:14, flexShrink:0, background:on?T.gold:T.bgElevated, border:`2px solid ${on?T.gold:T.border}`, cursor:"pointer", position:"relative", transition:"all 0.2s" }}>
      <span style={{ position:"absolute", top:3, left:on?22:3, width:18, height:18, borderRadius:"50%", background:on?T.bg:T.textSecond, transition:"left 0.2s", display:"block" }}/>
    </button>
  );
}

function Stars({ score, size=20 }) {
  return (
    <div style={{ display:"flex", gap:3 }} role="img" aria-label={`${score.toFixed(1)} stars`}>
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

function ScoreRing({ score, size=160 }) {
  const r=size/2-14, circ=2*Math.PI*r, dash=(Math.min(score,5)/5)*circ;
  const color=score>=4.2?T.gold:score>=3.5?T.green:score>=2.5?T.orange:T.red;
  return (
    <div style={{ position:"relative", width:size, height:size }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={T.bgElevated} strokeWidth={10}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition:"stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)", filter:`drop-shadow(0 0 8px ${color}88)` }}/>
      </svg>
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ fontSize:size*0.24, fontWeight:900, color, fontFamily:LATO, letterSpacing:"-1px", lineHeight:1 }}>{score.toFixed(1)}</div>
        <div style={{ fontSize:size*0.1, color:T.textSecond, marginTop:4, fontFamily:LATO }}>/ 5 stars</div>
      </div>
    </div>
  );
}

function PlatformCard({ name, score, reviewCount, note, onViewInApp, placeName, placeLocation }) {
  const p = PLATFORMS[name] || { color:T.textSecond, icon:"?" };
  const linkUrl = PLATFORMS[name]?.url(placeName||"", placeLocation||"");
  return (
    <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:16, padding:"20px", transition:"border-color 0.2s, transform 0.15s" }}
      onMouseEnter={e=>{ e.currentTarget.style.borderColor=T.gold; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.borderColor=T.border; e.currentTarget.style.transform=""; }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:`${p.color}22`, border:`1px solid ${p.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:p.color, fontFamily:LATO, flexShrink:0 }}>{p.icon}</div>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:T.textPrimary, fontFamily:LATO }}>{name}</div>
            {reviewCount && <div style={{ fontSize:13, color:T.textSecond, fontFamily:LATO }}>{reviewCount.toLocaleString()} reviews{reviewCount<50?" · ⚠ limited":""}</div>}
          </div>
        </div>
        <div style={{ fontSize:22, fontWeight:900, color:p.color, fontFamily:LATO, lineHeight:1 }}>{score.toFixed(1)}</div>
      </div>
      <Stars score={score} size={18}/>
      {note && <p style={{ margin:"12px 0 0", fontSize:14, color:T.textSecond, lineHeight:1.6, fontStyle:"italic", fontFamily:LATO }}>"{note}"</p>}
      {linkUrl && (
        <div style={{ display:"flex", gap:8, marginTop:14 }}>
          <button onClick={() => onViewInApp(linkUrl, name)}
            style={{ flex:1, background:`${p.color}18`, border:`1.5px solid ${p.color}55`, borderRadius:10, color:p.color, padding:"10px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:LATO, transition:"background 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.background=`${p.color}30`}
            onMouseLeave={e=>e.currentTarget.style.background=`${p.color}18`}>Read reviews</button>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer"
            style={{ background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:10, color:T.textSecond, padding:"10px 14px", fontSize:13, textDecoration:"none", display:"flex", alignItems:"center", transition:"color 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.color=T.white}
            onMouseLeave={e=>e.currentTarget.style.color=T.textSecond}>↗</a>
        </div>
      )}
    </div>
  );
}

function InAppBrowser({ url, platformName, placeName, onClose }) {
  const p = PLATFORMS[platformName] || { color:T.gold, icon:"?" };
  const blocked = ["yelp.com","google.com","facebook.com","tripadvisor.com","booking.com","expedia.com"].some(d=>url?.includes(d));
  useEffect(() => { const h=e=>{if(e.key==="Escape")onClose();}; document.addEventListener("keydown",h); return()=>document.removeEventListener("keydown",h); }, [onClose]);
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(0,0,0,0.9)", backdropFilter:"blur(8px)", display:"flex", flexDirection:"column" }}>
      <div style={{ background:T.bgCard, borderBottom:`1px solid ${T.border}`, padding:"12px 16px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
        <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:38, height:38, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        <div style={{ flex:1, background:T.bgElevated, borderRadius:8, padding:"8px 14px", border:`1px solid ${T.border}`, overflow:"hidden", display:"flex", gap:8, alignItems:"center" }}>
          <span style={{ fontSize:13, fontWeight:700, color:p.color }}>{p.icon}</span>
          <span style={{ fontSize:13, color:T.textSecond, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{url}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ background:T.gold, borderRadius:8, color:T.bg, padding:"9px 16px", fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:LATO }}>Open ↗</a>
      </div>
      <div style={{ flex:1, background:"#fff", position:"relative" }}>
        {blocked ? (
          <div style={{ position:"absolute", inset:0, background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20, padding:40, textAlign:"center" }}>
            <div style={{ width:72, height:72, borderRadius:20, background:`${p.color}22`, border:`2px solid ${p.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, fontWeight:900, color:p.color }}>{p.icon}</div>
            <div>
              <h2 style={{ fontSize:22, color:T.white, fontFamily:LATO, fontWeight:700, margin:"0 0 10px" }}>{platformName} blocks embedding</h2>
              <p style={{ fontSize:16, color:T.textSecond, maxWidth:360, lineHeight:1.7, margin:0, fontFamily:LATO }}>For security, {platformName} doesn't allow previews inside other apps.</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ background:T.gold, borderRadius:100, color:T.bg, padding:"14px 32px", fontSize:16, fontWeight:700, textDecoration:"none", fontFamily:LATO }}>Open {platformName} ↗</a>
            <button onClick={onClose} style={{ background:"transparent", border:`1.5px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"13px 28px", fontSize:15, cursor:"pointer", fontFamily:LATO }}>← Back</button>
          </div>
        ) : <iframe src={url} style={{ width:"100%", height:"100%", border:"none" }} title={`${platformName} - ${placeName}`}/>}
      </div>
    </div>
  );
}

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
    <div style={{ position:"fixed", inset:0, zIndex:9000, background:"rgba(0,0,0,0.7)", backdropFilter:"blur(6px)", display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
      <div ref={ref} style={{ background:T.bgCard, borderTop:`1px solid ${T.border}`, borderRadius:"24px 24px 0 0", padding:"24px 24px 40px", width:"100%", maxWidth:640, maxHeight:"85vh", overflowY:"auto" }}>
        <div style={{ width:48, height:4, borderRadius:2, background:T.border, margin:"0 auto 20px" }}/>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28 }}>
          <h2 style={{ fontSize:22, fontWeight:900, color:T.white, margin:0, fontFamily:LATO }}>
            Filters {activeCount>0&&<span style={{ fontSize:14, background:T.gold, color:T.bg, borderRadius:100, padding:"2px 9px", marginLeft:8 }}>{activeCount}</span>}
          </h2>
          <div style={{ display:"flex", gap:10 }}>
            {activeCount>0&&<button onClick={()=>onChange({...DEFAULT_FILTERS})} style={{ background:"transparent", border:`1px solid ${T.border}`, borderRadius:8, color:T.textSecond, padding:"8px 14px", fontSize:14, cursor:"pointer", fontFamily:LATO }}>Clear all</button>}
            <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:8, color:T.textPrimary, width:40, height:40, fontSize:18, cursor:"pointer" }}>✕</button>
          </div>
        </div>
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, letterSpacing:2, color:T.textMuted, textTransform:"uppercase", fontWeight:700, marginBottom:14, fontFamily:LATO }}>Minimum Rating</div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <button onClick={()=>set("minStars",[])} style={{ background:filters.minStars.length===0?T.gold:T.bgElevated, border:`1.5px solid ${filters.minStars.length===0?T.gold:T.border}`, borderRadius:100, color:filters.minStars.length===0?T.bg:T.textPrimary, padding:"10px 18px", fontSize:15, cursor:"pointer", fontFamily:LATO, transition:"all 0.15s" }}>Any</button>
            {STAR_OPTIONS.map(o=>{const a=filters.minStars.includes(o.val);return<button key={o.val} onClick={()=>toggleStar(o.val)} style={{ background:a?T.gold:T.bgElevated, border:`1.5px solid ${a?T.gold:T.border}`, borderRadius:100, color:a?T.bg:T.textPrimary, padding:"10px 18px", fontSize:15, cursor:"pointer", fontFamily:LATO, transition:"all 0.15s" }}>{o.label}</button>;})}
          </div>
        </div>
        <div style={{ marginBottom:28 }}>
          <div style={{ fontSize:12, letterSpacing:2, color:T.textMuted, textTransform:"uppercase", fontWeight:700, marginBottom:14, fontFamily:LATO }}>Options</div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Toggle on={filters.openNow} onChange={v=>set("openNow",v)} id="open-now" label="Open now"/>
            <label htmlFor="open-now" style={{ fontSize:16, fontWeight:700, color:filters.openNow?T.gold:T.textPrimary, cursor:"pointer", fontFamily:LATO }}>Open now</label>
          </div>
        </div>
        <button onClick={onClose} style={{ width:"100%", background:T.gold, border:"none", borderRadius:14, color:T.bg, padding:"16px", fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>Apply</button>
      </div>
    </div>
  );
}

function ReviewSummary({ pros, cons, summary }) {
  if(!pros?.length&&!cons?.length&&!summary) return null;
  return (
    <section style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:20, padding:"24px", marginTop:20 }}>
      <h3 style={{ fontSize:18, fontWeight:700, color:T.white, margin:"0 0 16px", fontFamily:LATO }}>What customers are saying</h3>
      {summary&&<p style={{ fontSize:16, color:T.textSecond, lineHeight:1.75, margin:"0 0 20px", borderLeft:`3px solid ${T.gold}`, paddingLeft:16, fontFamily:LATO }}>{summary}</p>}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        {pros?.length>0&&<div><div style={{ fontSize:13, fontWeight:700, color:T.green, letterSpacing:1.5, textTransform:"uppercase", marginBottom:12, fontFamily:LATO }}>👍 People loved</div><ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>{pros.map((p,i)=><li key={i} style={{ display:"flex", gap:10 }}><span style={{ color:T.green, flexShrink:0 }}>✓</span><span style={{ fontSize:15, color:T.textSecond, lineHeight:1.6, fontFamily:LATO }}>{p}</span></li>)}</ul></div>}
        {cons?.length>0&&<div><div style={{ fontSize:13, fontWeight:700, color:T.orange, letterSpacing:1.5, textTransform:"uppercase", marginBottom:12, fontFamily:LATO }}>👎 Complaints</div><ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>{cons.map((c,i)=><li key={i} style={{ display:"flex", gap:10 }}><span style={{ color:T.orange, flexShrink:0 }}>✗</span><span style={{ fontSize:15, color:T.textSecond, lineHeight:1.6, fontFamily:LATO }}>{c}</span></li>)}</ul></div>}
      </div>
      <p style={{ marginTop:16, fontSize:13, color:T.textMuted, fontFamily:LATO }}>🤖 AI-generated summary</p>
    </section>
  );
}

function Disclaimer() {
  const [open,setOpen]=useState(false);
  return (
    <div style={{ marginTop:24, padding:"16px 20px", background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:14 }}>
      <button onClick={()=>setOpen(o=>!o)} style={{ background:"none", border:"none", color:T.textSecond, fontSize:14, cursor:"pointer", display:"flex", alignItems:"center", gap:8, padding:0, fontFamily:LATO, width:"100%" }}>
        <span>ℹ️</span><span>About these scores & data accuracy</span>
        <span style={{ marginLeft:"auto", fontSize:12, transform:open?"rotate(180deg)":"", transition:"transform 0.2s" }}>▼</span>
      </button>
      {open&&(
        <div style={{ marginTop:14, fontSize:14, color:T.textSecond, lineHeight:1.8, fontFamily:LATO }}>
          <p style={{ margin:"0 0 10px" }}><strong style={{ color:T.textPrimary }}>Data accuracy:</strong> Scores come from Claude's training data. Always check the source platform for the latest info.</p>
          <p style={{ margin:"0 0 10px" }}><strong style={{ color:T.textPrimary }}>Methodology:</strong> Weighted average across platforms, by review count.</p>
          <p style={{ margin:0 }}><strong style={{ color:T.textPrimary }}>No affiliation:</strong> Not affiliated with any review platform.</p>
        </div>
      )}
    </div>
  );
}

function SkeletonLoader() {
  const pulse={ animation:"pulse 1.5s ease-in-out infinite", background:`linear-gradient(90deg, ${T.bgCard} 25%, ${T.bgElevated} 50%, ${T.bgCard} 75%)`, backgroundSize:"200% 100%", borderRadius:8 };
  return (
    <div style={{ marginTop:28 }} role="status">
      <style>{`@keyframes pulse{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:24, padding:"32px 28px", textAlign:"center", marginBottom:16 }}>
        <div style={{ ...pulse, width:120, height:14, margin:"0 auto 12px" }}/><div style={{ ...pulse, width:200, height:26, margin:"0 auto 8px" }}/><div style={{ ...pulse, width:160, height:16, margin:"0 auto 28px" }}/><div style={{ ...pulse, width:168, height:168, borderRadius:"50%", margin:"0 auto 20px" }}/><div style={{ ...pulse, width:220, height:16, margin:"0 auto" }}/>
      </div>
      {[1,2,3].map(i=><div key={i} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:16, padding:"20px", marginBottom:10 }}><div style={{ display:"flex", alignItems:"center", gap:10 }}><div style={{ ...pulse, width:36, height:36, borderRadius:10 }}/><div><div style={{ ...pulse, width:80, height:15, marginBottom:6 }}/><div style={{ ...pulse, width:110, height:12 }}/></div></div></div>)}
      <p style={{ textAlign:"center", fontSize:14, color:T.textMuted, marginTop:16, fontFamily:LATO }}>Finding scores…</p>
    </div>
  );
}

function DisambigList({ places, onSelect }) {
  return (
    <div style={{ maxWidth:600, margin:"24px auto 0" }}>
      <p style={{ fontSize:17, color:T.textSecond, marginBottom:16, textAlign:"center", fontFamily:LATO }}>We found a few matches — pick the one you mean:</p>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {places.map((p,i)=>(
          <button key={i} onClick={()=>onSelect(p)}
            style={{ background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:14, padding:"16px 20px", color:T.textPrimary, textAlign:"left", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between", transition:"all 0.15s", fontFamily:LATO }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.background=T.bgElevated;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.background=T.bgCard;}}>
            <div><div style={{ fontWeight:700, fontSize:16, marginBottom:3 }}>{p.name}</div><div style={{ fontSize:14, color:T.textSecond }}>{p.city}{p.country?`, ${p.country}`:""}{p.type?` · ${p.type}`:""}</div></div>
            <span style={{ color:T.gold, fontSize:20 }}>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

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

const CACHE_PREFIX="ar_v13:";
async function cacheGet(key){try{const r=await window.storage.get(CACHE_PREFIX+key);return r?JSON.parse(r.value):null;}catch{return null;}}
async function cacheSet(key,value){try{await window.storage.set(CACHE_PREFIX+key,JSON.stringify(value));}catch{}}
function cacheKey(q){return q.toLowerCase().trim().replace(/\s+/g,"_").slice(0,120);}

function SaveModal({ place, savedLists, onSave, onClose }) {
  const [newName,setNewName]=useState(""); const [creating,setCreating]=useState(false);
  useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose();};document.addEventListener("keydown",k);return()=>document.removeEventListener("keydown",k);},[onClose]);
  const doCreate=()=>{const name=newName.trim();if(!name)return;const id=Date.now().toString();onSave(id,place,{id,name,places:[]});onClose();};
  return (
    <div style={{ position:"fixed", inset:0, zIndex:10000, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
      <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:24, padding:"28px 24px", width:"100%", maxWidth:400 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
          <h3 style={{ fontSize:18, fontWeight:900, color:T.white, margin:0, fontFamily:LATO }}>Save to a list</h3>
          <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:36, height:36, fontSize:16, cursor:"pointer" }}>✕</button>
        </div>
        <p style={{ fontSize:14, color:T.textSecond, margin:"0 0 16px", fontFamily:LATO }}>{place.name} · {place.location}</p>
        {savedLists.length>0&&<div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>{savedLists.map(list=>{const already=list.places.some(p=>p.name===place.name&&p.location===place.location);return<button key={list.id} onClick={()=>!already&&(onSave(list.id,place),onClose())} style={{ background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:12, padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", cursor:already?"default":"pointer", opacity:already?0.6:1, fontFamily:LATO }}><div><div style={{ fontSize:15, fontWeight:700, color:T.textPrimary }}>{list.name}</div><div style={{ fontSize:13, color:T.textMuted }}>{list.places.length} places</div></div>{already?<span style={{ fontSize:13, color:T.green }}>✓</span>:<span style={{ fontSize:18, color:T.gold }}>+</span>}</button>;})}</div>}
        {!creating?<button onClick={()=>setCreating(true)} style={{ width:"100%", background:"transparent", border:`1.5px dashed ${T.border}`, borderRadius:12, padding:"13px", color:T.textSecond, fontSize:15, cursor:"pointer", fontFamily:LATO }}>+ New list</button>:<div style={{ display:"flex", gap:8 }}><input autoFocus value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doCreate();if(e.key==="Escape")setCreating(false);}} placeholder="e.g. Date Night…" style={{ flex:1, background:T.bgElevated, border:`1.5px solid ${T.gold}`, borderRadius:10, color:T.white, fontSize:15, padding:"12px 14px", fontFamily:LATO }}/><button onClick={doCreate} style={{ background:T.gold, border:"none", borderRadius:10, color:T.bg, padding:"0 16px", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>Save</button></div>}
      </div>
    </div>
  );
}

function SideMenu({ savedLists, onSelectSaved, onDeleteList, onDeletePlace, onClose }) {
  const [tab,setTab]=useState("saved");
  useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose();};document.addEventListener("keydown",k);return()=>document.removeEventListener("keydown",k);},[onClose]);
  const total=savedLists.reduce((a,l)=>a+l.places.length,0);
  const TabBtn=({id,label})=><button onClick={()=>setTab(id)} style={{ flex:1, background:"transparent", border:"none", borderBottom:`2px solid ${tab===id?T.gold:"transparent"}`, color:tab===id?T.gold:T.textSecond, padding:"12px 0", fontSize:15, fontWeight:tab===id?700:400, cursor:"pointer", fontFamily:LATO, transition:"all 0.15s" }}>{label}</button>;
  return (
    <div style={{ position:"fixed", inset:0, zIndex:9500, display:"flex", justifyContent:"flex-end" }}>
      <div onClick={onClose} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)" }}/>
      <div style={{ position:"relative", width:"min(380px,92vw)", height:"100%", background:T.bgCard, borderLeft:`1px solid ${T.border}`, display:"flex", flexDirection:"column", overflowY:"auto" }}>
        <div style={{ padding:"20px 20px 0", borderBottom:`1px solid ${T.border}`, flexShrink:0 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
            <h2 style={{ fontSize:32, fontWeight:400, color:T.white, margin:0, fontFamily:VIBES }}>All Reviews</h2>
            <button onClick={onClose} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:"50%", color:T.textPrimary, width:36, height:36, fontSize:16, cursor:"pointer" }}>✕</button>
          </div>
          <div style={{ display:"flex" }}><TabBtn id="saved" label={`Saved${total>0?` (${total})`:""}`}/><TabBtn id="about" label="About"/></div>
        </div>
        {tab==="saved"&&<div style={{ flex:1, padding:"20px", overflowY:"auto" }}>{savedLists.length===0?<div style={{ textAlign:"center", paddingTop:40 }}><div style={{ fontSize:40, marginBottom:12 }}>🔖</div><p style={{ fontSize:16, color:T.textSecond, lineHeight:1.7, fontFamily:LATO }}>No saved places yet.</p></div>:<div style={{ display:"flex", flexDirection:"column", gap:20 }}>{savedLists.map(list=><div key={list.id}><div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}><h3 style={{ fontSize:14, fontWeight:700, color:T.textMuted, margin:0, textTransform:"uppercase", letterSpacing:1, fontFamily:LATO }}>{list.name}</h3><button onClick={()=>onDeleteList(list.id)} style={{ background:"transparent", border:"none", color:T.textMuted, fontSize:12, cursor:"pointer", fontFamily:LATO }}>✕ Delete</button></div>{list.places.map((place,i)=><div key={i} style={{ background:T.bgElevated, border:`1px solid ${T.border}`, borderRadius:14, padding:"14px 16px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}><div style={{ flex:1, minWidth:0 }}><div style={{ fontSize:15, fontWeight:700, color:T.textPrimary, fontFamily:LATO, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{place.name}</div><div style={{ fontSize:13, color:T.textSecond, fontFamily:LATO }}>{place.location}</div>{place.score&&<div style={{ fontSize:13, color:T.gold, fontFamily:LATO }}>★ {place.score.toFixed(1)}</div>}</div><div style={{ display:"flex", gap:6 }}><button onClick={()=>{onSelectSaved(place);onClose();}} style={{ background:`${T.gold}18`, border:`1px solid ${T.gold}44`, borderRadius:8, color:T.gold, padding:"7px 12px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:LATO }}>View</button><button onClick={()=>onDeletePlace(list.id,i)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:8, color:T.textMuted, padding:"7px 10px", fontSize:13, cursor:"pointer" }}>✕</button></div></div>)}</div>)}</div>}</div>}
        {tab==="about"&&<div style={{ flex:1, padding:"24px 20px" }}><h3 style={{ fontSize:18, fontWeight:900, color:T.white, margin:"0 0 12px", fontFamily:LATO }}>About All Reviews</h3><p style={{ fontSize:15, color:T.textSecond, lineHeight:1.8, margin:"0 0 16px", fontFamily:LATO }}>Independent review aggregator. One weighted score from Google, Yelp, TripAdvisor, and more.</p><p style={{ fontSize:13, color:T.textMuted, fontFamily:LATO }}>v13 · Built with Claude + vibe coding ✦</p></div>}
      </div>
    </div>
  );
}

const ONBOARDING_STEPS=[
  {title:"Welcome to All Reviews",body:"One score. Every platform. Anywhere in the world. We aggregate ratings from Google, Yelp, TripAdvisor, and more into a single honest number.",cta:"How does it work?"},
  {title:"Scores you can trust",body:"We pull real ratings from up to 13 platforms and calculate a weighted average based on review volume. Full breakdown, nothing hidden.",cta:"What about accuracy?"},
  {title:"Works everywhere",body:"Search any restaurant, hotel, spa, or service anywhere there's been a review. International platforms included.",cta:"Let's go →"},
];

function OnboardingScreen({ onComplete }) {
  const [step,setStep]=useState(0);
  const s=ONBOARDING_STEPS[step];
  const isLast=step===ONBOARDING_STEPS.length-1;
  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 24px", fontFamily:LATO, position:"relative" }}>
      <StarBg/>
      <div style={{ maxWidth:440, width:"100%", textAlign:"center", position:"relative", zIndex:1 }} key={step}>
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontSize:56, fontWeight:400, color:T.white, margin:0, fontFamily:VIBES, lineHeight:1.1 }}>All Reviews</h1>
          <TitleStars/>
        </div>
        <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:28, padding:"40px 36px", marginBottom:32 }}>
          <h2 style={{ fontSize:24, fontWeight:900, color:T.white, margin:"0 0 16px", lineHeight:1.2, fontFamily:LATO }}>{s.title}</h2>
          <p style={{ fontSize:17, color:T.textSecond, lineHeight:1.75, margin:0, fontFamily:LATO }}>{s.body}</p>
        </div>
        <button onClick={()=>isLast?onComplete():setStep(s=>s+1)} style={{ width:"100%", background:T.gold, border:"none", borderRadius:16, color:T.bg, padding:"18px", fontSize:17, fontWeight:700, cursor:"pointer", marginBottom:20, fontFamily:LATO, transition:"opacity 0.15s" }} onMouseEnter={e=>e.currentTarget.style.opacity="0.9"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>{s.cta}</button>
        <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:20 }}>
          {ONBOARDING_STEPS.map((_,i)=><button key={i} onClick={()=>setStep(i)} style={{ width:i===step?24:8, height:8, borderRadius:4, border:"none", background:i===step?T.gold:T.bgElevated, cursor:"pointer", transition:"all 0.25s", padding:0 }}/>)}
        </div>
        {!isLast&&<button onClick={onComplete} style={{ background:"none", border:"none", color:T.textMuted, fontSize:14, cursor:"pointer", fontFamily:LATO }}>Skip intro</button>}
      </div>
      <p style={{ marginTop:32, fontSize:12, color:T.textMuted, textAlign:"center", maxWidth:360, lineHeight:1.7, fontFamily:LATO, position:"relative", zIndex:1 }}>Not affiliated with any review platform.</p>
    </div>
  );
}

export default function App() {
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
    const prompt=`Review scores for: "${rawQuery}"\n\nReturn ONLY raw JSON, no markdown.\n\nIf multiple distinct locations: {"type":"disambig","places":[{"name":"","city":"","country":"","type":""}]}\nIf unknown: {"type":"unknown"}\nOtherwise: {"type":"result","name":"","location":"","country":"","lat":0,"lng":0,"isClosed":false,"isOpenNow":null,"openingHours":"","platforms":[{"name":"Google","score":4.2,"reviewCount":1800,"note":""},{"name":"Yelp","score":4.1,"reviewCount":900,"note":""},{"name":"TripAdvisor","score":4.3,"reviewCount":500,"note":""}],"aggregateScore":4.2,"verdict":"one sentence verdict","summary":"2 sentence overview","pros":["pro1","pro2","pro3"],"cons":["con1","con2"]}\n\nRules: Only Google/Yelp/TripAdvisor. Real scores only. Never invent. 3 pros, 2 cons.`;
    try {
      const data=await callClaude(prompt,sig);if(sig.aborted)return;
      if(data.type==="disambig"&&data.places?.length>1){setDisambig(data.places);setLoading(false);return;}
      if(data.type==="unknown"){setError(`No results for "${rawQuery}". Try adding the city.`);setLoading(false);return;}
      if(data.type==="result"||data.name){
        const h={...data,fromCache:false,platforms:(data.platforms||[]).map(p=>({...p,url:p.url||(PLATFORMS[p.name]?.url(data.name||"",data.location||"")||null)}))};
        setResult(h);setLoading(false);cacheSet(ck,h);
      } else throw new Error("Unexpected");
    } catch(e){if(e.name==="AbortError")return;setLoading(false);setError(`Couldn't find that. Try adding the city — e.g. "Nobu, London"`);}
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

  if(!onboarded)return <OnboardingScreen onComplete={()=>setOnboarded(true)}/>;

  return (
    <div style={{ minHeight:"100vh", background:T.bg, fontFamily:LATO, color:T.textPrimary, position:"relative" }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{to{transform:rotate(360deg)}}input:focus{outline:2px solid #f5c842;outline-offset:2px;border-radius:8px;}button:focus-visible{outline:2px solid #f5c842;outline-offset:3px;border-radius:6px;}`}</style>
      <StarBg/>

      {browser&&<InAppBrowser url={browser.url} platformName={browser.platformName} placeName={result?.name} onClose={()=>setBrowser(null)}/>}
      {drawerOpen&&<FilterDrawer filters={filters} onChange={setFilters} onClose={()=>setDrawerOpen(false)}/>}
      {menuOpen&&<SideMenu savedLists={savedLists} onSelectSaved={p=>{setQuery(p.name+", "+p.location);searchForPlace(p.name+", "+p.location);}} onDeleteList={handleDeleteList} onDeletePlace={handleDeletePlace} onClose={()=>setMenuOpen(false)}/>}
      {saveModal&&<SaveModal place={saveModal} savedLists={savedLists} onSave={handleSaveToList} onClose={()=>setSaveModal(null)}/>}

      <main style={{ maxWidth:680, margin:"0 auto", padding:"0 20px 80px", position:"relative", zIndex:1 }}>
        <header style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:28, paddingBottom:28, animation:"fadeUp 0.5s ease both" }}>
          <div style={{ flex:1 }}/>
          <div style={{ textAlign:"center", flex:2 }}>
            <p style={{ fontSize:14, color:T.textSecond, margin:"0 0 4px", letterSpacing:0.5, fontFamily:LATO }}>One score. Every platform. Anywhere.</p>
            <h1 style={{ fontSize:"clamp(42px,8vw,64px)", fontWeight:400, margin:0, lineHeight:1.05, color:T.white, fontFamily:VIBES }}>All Reviews</h1>
            <TitleStars/>
          </div>
          <div style={{ flex:1, display:"flex", justifyContent:"flex-end" }}>
            <button onClick={()=>setMenuOpen(true)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:10, color:T.textPrimary, width:42, height:42, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5, cursor:"pointer", padding:0, transition:"border-color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.borderColor=T.gold} onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
              {[0,1,2].map(i=><span key={i} style={{ width:18, height:2, background:T.textPrimary, borderRadius:2, display:"block" }}/>)}
            </button>
          </div>
        </header>

        <section style={{ animation:"fadeUp 0.5s ease 0.1s both" }}>
          <div style={{ background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:18, padding:"18px 20px 16px", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
            <label htmlFor="search-input" style={{ fontSize:12, fontWeight:700, color:T.textMuted, letterSpacing:1.5, textTransform:"uppercase", display:"block", marginBottom:8, fontFamily:LATO }}>Search any place, anywhere</label>
            <div style={{ position:"relative", display:"flex", alignItems:"center" }}>
              <input id="search-input" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSearch()}
                placeholder={`Restaurant, hotel, spa… or "sushi near me"`}
                style={{ width:"100%", background:"transparent", border:"none", borderBottom:`1px solid ${T.border}`, color:T.white, fontSize:17, padding:"4px 48px 14px 0", fontFamily:LATO }} autoComplete="off"/>
              <button onClick={handleNearMe} disabled={geolocating||loading} style={{ position:"absolute", right:0, bottom:10, background:"transparent", border:"none", color:geolocating?T.gold:T.textSecond, cursor:geolocating||loading?"not-allowed":"pointer", padding:4, borderRadius:6, display:"flex", alignItems:"center", transition:"color 0.2s" }} onMouseEnter={e=>{if(!geolocating&&!loading)e.currentTarget.style.color=T.gold;}} onMouseLeave={e=>{if(!geolocating)e.currentTarget.style.color=T.textSecond;}}>
                {geolocating?<span style={{ width:18, height:18, border:`2px solid ${T.gold}`, borderTopColor:"transparent", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }}/>:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/><circle cx="12" cy="12" r="9" strokeDasharray="4 2"/></svg>}
              </button>
            </div>
            {(filters.openNow||filters.minStars.length>0)&&<div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:10 }}>
              {filters.openNow&&<span style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"5px 12px 5px 14px", fontSize:14, fontFamily:LATO }}>Open now<button onClick={()=>removeFilter("openNow")} style={{ background:`${T.gold}30`, border:"none", borderRadius:"50%", color:T.gold, width:20, height:20, fontSize:11, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", padding:0 }}>✕</button></span>}
              {filters.minStars.length>0&&<span style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"5px 12px 5px 14px", fontSize:14, fontFamily:LATO }}>{filters.minStars.sort((a,b)=>a-b).join("★/")}★<button onClick={()=>removeFilter("minStars")} style={{ background:`${T.gold}30`, border:"none", borderRadius:"50%", color:T.gold, width:20, height:20, fontSize:11, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", padding:0 }}>✕</button></span>}
            </div>}
            <div style={{ display:"flex", gap:10, marginTop:14 }}>
              <button onClick={()=>setDrawerOpen(true)} style={{ background:T.bgElevated, border:`1.5px solid ${activeFilterCount>0?T.gold:T.border}`, borderRadius:12, color:activeFilterCount>0?T.gold:T.textSecond, padding:"0 18px", fontSize:14, cursor:"pointer", display:"flex", alignItems:"center", gap:8, flexShrink:0, height:52, fontWeight:700, fontFamily:LATO }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
                Filters{activeFilterCount>0&&<span style={{ background:T.gold, color:T.bg, borderRadius:"50%", width:20, height:20, fontSize:11, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>{activeFilterCount}</span>}
              </button>
              <button onClick={loading?handleCancel:handleSearch} style={{ flex:1, background:loading?T.bgElevated:T.gold, border:`1.5px solid ${loading?T.red:T.gold}`, borderRadius:12, color:loading?T.red:T.bg, height:52, fontSize:16, fontWeight:700, cursor:"pointer", transition:"all 0.15s", display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontFamily:LATO }}>
                {loading?<><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>Stop</>:"Find Scores →"}
              </button>
            </div>
          </div>
        </section>

        {loading&&<SkeletonLoader/>}
        {error&&<div role="alert" style={{ marginTop:20, background:`${T.red}18`, border:`1.5px solid ${T.red}55`, borderRadius:14, padding:"16px 20px", color:T.red, fontSize:16, lineHeight:1.6, fontFamily:LATO }}>{error}</div>}
        {disambig&&!loading&&<DisambigList places={disambig} onSelect={p=>{setDisambig(null);searchForPlace(`${p.name}${p.city?", "+p.city:""}${p.country?", "+p.country:""}`);}}/>}

        {result&&!loading&&(
          <div style={{ marginTop:28, animation:"fadeUp 0.4s ease both" }}>
            {result.isClosed&&<div role="alert" style={{ background:`${T.orange}15`, border:`1.5px solid ${T.orange}55`, borderRadius:12, padding:"14px 18px", color:T.orange, fontSize:15, marginBottom:16, fontFamily:LATO }}>⚠️ <strong>This place may be permanently closed.</strong></div>}
            {result.isOpenNow===true&&!result.isClosed&&<div style={{ background:`${T.green}12`, border:`1.5px solid ${T.green}44`, borderRadius:12, padding:"14px 18px", color:T.green, fontSize:15, marginBottom:16, fontFamily:LATO }}>🟢 <strong>Open right now</strong>{result.openingHours?` · ${result.openingHours}`:""}</div>}
            {result.isOpenNow===false&&!result.isClosed&&<div style={{ background:`${T.red}12`, border:`1.5px solid ${T.red}44`, borderRadius:12, padding:"14px 18px", color:T.red, fontSize:15, marginBottom:16, fontFamily:LATO }}>🔴 <strong>Currently closed</strong>{result.openingHours?` · ${result.openingHours}`:""}</div>}
            <div style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:24, padding:"32px 28px", textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 50% 0%, ${scoreColor}12 0%, transparent 60%)`, pointerEvents:"none" }}/>
              <p style={{ fontSize:13, fontWeight:700, color:T.textMuted, letterSpacing:2, textTransform:"uppercase", margin:"0 0 8px", fontFamily:LATO }}>Averaged Score</p>
              <h2 style={{ fontSize:26, fontWeight:900, color:T.white, margin:"0 0 4px", lineHeight:1.2, fontFamily:LATO }}>{result.name}</h2>
              <p style={{ fontSize:15, color:T.textSecond, margin:"0 0 28px", fontFamily:LATO }}>{result.location}{result.country&&result.country!==result.location?` · ${result.country}`:""}</p>
              <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}><ScoreRing score={displayScore} size={168}/></div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8, marginBottom:20 }}>
                <Stars score={Math.round(displayScore*2)/2} size={24}/>
                <p style={{ fontSize:16, color:T.textSecond, margin:0, fontFamily:LATO }}>{displayScore?.toFixed(1)} stars · {processed.length||result.platforms?.length||0} platforms</p>
              </div>
              <p style={{ fontSize:16, color:T.textSecond, lineHeight:1.7, margin:"0 0 16px", fontStyle:"italic", maxWidth:480, marginLeft:"auto", marginRight:"auto", fontFamily:LATO }}>{verdictEmoji} {result.verdict}</p>
              <p style={{ fontSize:14, color:T.textMuted, margin:0, fontFamily:LATO }}>{result.platforms?.reduce((a,p)=>a+(p.reviewCount||0),0).toLocaleString()}+ total reviews</p>
              {result.fromCache&&<div style={{ marginTop:12, display:"inline-flex", alignItems:"center", gap:6, fontSize:13, color:T.textMuted, fontFamily:LATO }}>⚡ Loaded from cache</div>}
              <div style={{ display:"flex", gap:10, justifyContent:"center", marginTop:20 }}>
                <button onClick={()=>isPlaceSaved(result)?null:setSaveModal({name:result.name,location:result.location,score:displayScore})}
                  style={{ display:"flex", alignItems:"center", gap:8, background:isPlaceSaved(result)?`${T.gold}20`:T.bgElevated, border:`1.5px solid ${isPlaceSaved(result)?T.gold:T.border}`, borderRadius:100, color:isPlaceSaved(result)?T.gold:T.textSecond, padding:"10px 20px", fontSize:14, fontWeight:700, cursor:isPlaceSaved(result)?"default":"pointer", transition:"all 0.15s", fontFamily:LATO }}
                  onMouseEnter={e=>{if(!isPlaceSaved(result)){e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}}
                  onMouseLeave={e=>{if(!isPlaceSaved(result)){e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={isPlaceSaved(result)?"currentColor":"none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                  {isPlaceSaved(result)?"Saved":"Save"}
                </button>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((result.name||"")+" "+(result.location||""))}`} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:8, background:T.bgElevated, border:`1.5px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"10px 20px", fontSize:14, fontWeight:700, textDecoration:"none", transition:"all 0.15s", fontFamily:LATO }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Maps
                </a>
              </div>
            </div>
            <ReviewSummary pros={result.pros} cons={result.cons} summary={result.summary}/>
            <section style={{ marginTop:24 }}>
              <h3 style={{ fontSize:18, fontWeight:700, color:T.white, margin:"0 0 16px", fontFamily:LATO }}>Breakdown by platform</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {visible.map(p=><PlatformCard key={p.name} {...p} placeName={result.name} placeLocation={result.location} onViewInApp={(url,name)=>setBrowser({url,platformName:name})}/>)}
              </div>
              {processed.length>3&&<button onClick={()=>setShowAll(s=>!s)}
                style={{ width:"100%", marginTop:12, background:T.bgCard, border:`1.5px solid ${T.border}`, borderRadius:14, color:T.textSecond, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", transition:"all 0.15s", fontFamily:LATO }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>
                {showAll?`▲ Show fewer`:`▼ Show all ${processed.length} platforms`}
              </button>}
            </section>
            <Disclaimer/>
            <p style={{ textAlign:"center", marginTop:20, fontSize:13, color:T.textMuted, lineHeight:1.7, fontFamily:LATO }}>Powered by Claude · Not affiliated with any platform</p>
          </div>
        )}

        {!loading&&!result&&!error&&!disambig&&(
          <div style={{ textAlign:"center", marginTop:52, animation:"fadeUp 0.5s ease 0.2s both" }}>
            <div style={{ fontSize:52, marginBottom:16 }}>🌍</div>
            <h2 style={{ fontSize:20, fontWeight:700, color:T.textPrimary, margin:"0 0 8px", fontFamily:LATO }}>Search anywhere in the world</h2>
            <p style={{ fontSize:16, color:T.textSecond, margin:"0 0 24px", fontFamily:LATO }}>Restaurants · Hotels · Services · 13 platforms</p>
            <p style={{ fontSize:14, color:T.textMuted, margin:"0 0 16px", fontFamily:LATO }}>Try one of these:</p>
            <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
              {["Le Bernardin, New York","Nobu, London","Mambo Beach, Curaçao","Da Ivo, Venice"].map(s=>(
                <button key={s} onClick={()=>setQuery(s)} style={{ background:T.bgCard, border:`1px solid ${T.border}`, borderRadius:100, color:T.textSecond, padding:"9px 16px", fontSize:14, cursor:"pointer", transition:"all 0.15s", fontFamily:LATO }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.textSecond;}}>{s}</button>
              ))}
              <button onClick={handleNearMe} disabled={geolocating} style={{ background:`${T.gold}18`, border:`1px solid ${T.gold}55`, borderRadius:100, color:T.gold, padding:"9px 16px", fontSize:14, cursor:geolocating?"wait":"pointer", display:"flex", alignItems:"center", gap:6, fontFamily:LATO }}>
                {geolocating?<><span style={{ width:12, height:12, border:`2px solid ${T.gold}`, borderTopColor:"transparent", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }}/> Locating…</>:<>📍 Near me</>}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
