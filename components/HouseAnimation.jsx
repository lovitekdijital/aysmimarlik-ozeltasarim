"use client";
import {useState} from "react";
export default function HouseAnimation(){const [run,setRun]=useState(0); const [photoReady,setPhotoReady]=useState(false);return <div className="drawing"><div className="drawing-top"><span><i/> TASARIM / 001</span><span>CEPHE ÇİZİMİ</span></div><div key={run} className="drawing-stage villa-stage"><svg className="house-svg" viewBox="0 0 560 480" role="img" aria-labelledby="house-title house-desc"><title id="house-title">Çizgiden eve</title><desc id="house-desc">Yatay çizgi yukarıdan aşağı düşer, iki yana açılarak çatı olur; duvar, pencere ve kapı çizgileri oluşur. Ardından taslak lüks bir villa konseptine ve örnek mimari görsele dönüşür.</desc><defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="#8c9fa9" strokeOpacity=".16" strokeWidth=".7" fill="none"/></pattern></defs><g className="original-sketch"><rect x="30" y="25" width="500" height="410" fill="url(#grid)"/><g stroke="#8c9fa9" strokeWidth="1" fill="none" opacity=".5"><path d="M30 40V25H45M515 25H530V40M530 420V435H515M45 435H30V420"/><path d="M280 45V420M50 360H510" strokeDasharray="3 7"/></g><g className="roof-drop" stroke="#233744" strokeWidth="4" strokeLinecap="round" fill="none"><g className="roof-left"><path d="M116 125H280"/></g><g className="roof-right"><path d="M280 125H444"/></g></g><g className="house-outline" stroke="#233744" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"><path className="draw wall-left" pathLength="1" d="M154 195V360"/><path className="draw wall-right" pathLength="1" d="M406 195V360"/><path className="draw floor" pathLength="1" d="M154 360H406"/><path className="draw door" pathLength="1" d="M255 360V268H305V360"/><path className="draw window" pathLength="1" d="M180 239H232V295H180ZM328 239H380V295H328Z"/><path className="draw window-bars" pathLength="1" d="M206 239V295M180 267H232M354 239V295M328 267H380"/><circle className="detail" cx="293" cy="316" r="2.5" fill="#233744" stroke="none"/></g><g className="detail" fill="none" stroke="#7895a5" strokeWidth="1.2"><path d="M110 365H450M154 379V403M406 379V403M154 392H406M148 386L160 398M400 386L412 398M430 195H460M430 360H460M448 195V360M442 189L454 201M442 354L454 366"/><path d="M180 305H232M328 305H380" strokeDasharray="2 3"/></g><g className="detail" fontFamily="monospace" fontSize="10" fill="#536e7c" textAnchor="middle"><text x="280" y="387">01 / CEPHE</text><text x="468" y="278" transform="rotate(90 468 278)">ÖLÇEK / KONSEPT</text></g></g><g className="villa-concept" aria-hidden="true">
<defs>
  <linearGradient id="villa-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#cbdce2"/><stop offset="1" stopColor="#f3f1e9"/></linearGradient>
  <linearGradient id="villa-stone" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7f3e9"/><stop offset="1" stopColor="#b9b3a6"/></linearGradient>
  <linearGradient id="villa-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b7cbd1"/><stop offset=".48" stopColor="#617c89"/><stop offset="1" stopColor="#263f4a"/></linearGradient>
  <linearGradient id="villa-pool" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#adcbd0"/><stop offset="1" stopColor="#688f9b"/></linearGradient>
  <pattern id="villa-stone-lines" width="25" height="16" patternUnits="userSpaceOnUse"><path d="M0 0H25M0 0V16" stroke="#8d8e88" strokeOpacity=".15" strokeWidth=".7" fill="none"/></pattern>
</defs>
<g className="villa-surfaces">
  <rect x="30" y="25" width="500" height="410" fill="url(#villa-sky)"/>
  <path d="M30 310L120 267 193 300 300 255 410 295 530 255V435H30Z" fill="#aebdb7"/>
  <path d="M30 336H530V435H30Z" fill="#dbd6c9"/>
  <path d="M30 390L530 365V435H30Z" fill="#c6c2b5"/>
  <path d="M157 393H405L470 435H84Z" fill="#eeeae0"/>
  <path d="M166 399H397L438 435H112Z" fill="url(#villa-pool)"/>
  <path d="M163 413H415M142 429H433" stroke="#dcecee" strokeOpacity=".65" strokeWidth="1.5"/>
  <path d="M94 222H413L457 199V348L413 365H94Z" fill="url(#villa-stone)"/>
  <path d="M413 228L457 205V348L413 365Z" fill="#a6a79e"/>
  <path d="M112 240H396V354H112Z" fill="#283e46"/>
  <path d="M119 248H390V350H119Z" fill="url(#villa-glass)"/>
  <path d="M120 319L178 252H239L166 350H120ZM289 248H339L263 350H215Z" fill="#ecf3f2" opacity=".15"/>
  <path d="M175 247V351M232 247V351M287 247V351M343 247V351" stroke="#2a3a40" strokeWidth="4"/>
  <path d="M84 219H421L466 197V213L421 237H84Z" fill="#efebe1"/>
  <path d="M84 230H421L466 206V218L421 240H84Z" fill="#aca99f"/>
  <path d="M166 125H388L437 101V216L388 233H166Z" fill="url(#villa-stone)"/>
  <path d="M388 125L437 101V216L388 233Z" fill="#b0aaa0"/>
  <path d="M166 125H388V233H166Z" fill="url(#villa-stone-lines)"/>
  <path d="M179 141H375V217H179Z" fill="#263f49"/>
  <path d="M185 147H369V211H185Z" fill="url(#villa-glass)"/>
  <path d="M185 198L236 147H280L217 211H185ZM319 147H348L282 211H257Z" fill="#ecf4f2" opacity=".2"/>
  <path d="M247 147V211M309 147V211" stroke="#30444c" strokeWidth="3"/>
  <path d="M157 119H392L445 93V108L392 135H157Z" fill="#f7f3e9"/>
  <path d="M157 129H392L445 103V113L392 141H157Z" fill="#a9a99e"/>
  <path d="M171 217H387L414 204V224L387 238H171Z" fill="#edf1ef" fillOpacity=".46" stroke="#8fa7ac" strokeWidth="1.1"/>
  <path d="M220 217V237M271 217V237M324 217V237M376 217V237" stroke="#718c93" strokeWidth="1.3"/>
  <path d="M112 354H396V360H112Z" fill="#f0ece1"/>
  <path d="M136 337H193V348H136ZM317 337H371V348H317Z" fill="#d3c1a2"/>
  <path d="M116 242H391M187 143H370" stroke="#e3cc9e" strokeWidth="2.5" opacity=".9"/>
  <g fill="#6e8174"><path d="M56 338C33 321 45 304 59 302 43 285 62 270 72 290 86 270 99 294 83 308 99 323 88 337 72 339Z"/><path d="M475 346C451 327 465 309 480 307 468 285 488 277 497 295 511 277 530 298 511 314 529 329 518 343 494 347Z"/></g>
  <path d="M69 307V359M493 310V365" stroke="#726c5e" strokeWidth="2.5"/>
  <path d="M45 355H93L87 377H51Z M468 361H519L513 383H474Z" fill="#8e8d83"/>
</g>
<g className="villa-lines" fill="none" stroke="#233744" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
  <path pathLength="1" d="M84 219H421L466 197V218L421 240H84ZM94 240V365H413L457 348V223M157 119H392L445 93V113L392 141H157ZM166 141V219M388 141V219M437 117V204"/>
  <path pathLength="1" d="M112 248H396V354H112ZM175 248V354M232 248V354M287 248V354M343 248V354M179 147H375V211H179ZM247 147V211M309 147V211M171 217H387L414 204V224L387 238H171ZM157 393H405L470 435M166 399H397L438 435"/>
</g>
</g></svg><div className={"villa-photo"+(photoReady?" ready":"")}><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="Geniş cam cepheli, doğal taş detaylı lüks villa örnek görseli" loading="eager" onLoad={()=>setPhotoReady(true)} onError={()=>setPhotoReady(false)}/><span className="villa-photo-caption">02 / LÜKS VİLLA KONSEPTİ</span></div></div><div className="drawing-bottom"><span>01 — ÇİZGİDEN MEKÂNA</span><button type="button" className="replay" onClick={()=>setRun(n=>n+1)}><span aria-hidden="true">↻</span> Tekrar oynat</button></div></div>}