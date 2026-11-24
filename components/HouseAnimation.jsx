"use client";
import {useEffect,useState} from "react";
import SketchBoard from "./SketchBoard";

export default function HouseAnimation(){
  const [run,setRun]=useState(0);
  const [finished,setFinished]=useState(false);
  const [drawing,setDrawing]=useState(false);
  useEffect(()=>{
    if(drawing)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer=window.setTimeout(()=>setFinished(true),reduced?0:4600);
    return ()=>window.clearTimeout(timer);
  },[run,drawing]);
  function replay(){setFinished(false);setDrawing(false);setRun(n=>n+1)}
  return <div className="drawing">
    <div className="drawing-top"><span><i/> TASARIM / 001</span><span>{drawing?"SERBEST ÇİZİM":"CEPHE ÇİZİMİ"}</span></div>
    <div className="drawing-stage">{drawing?<SketchBoard/>:<svg key={run} className="house-svg" viewBox="0 0 560 480" role="img" aria-labelledby="house-title house-desc"><title id="house-title">Çizgiden eve</title><desc id="house-desc">Yatay çizgi yukarıdan aşağı düşer, iki yana açılarak çatı olur; duvar, pencere ve kapı çizgileri oluşur.</desc><defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="#8c9fa9" strokeOpacity=".16" strokeWidth=".7" fill="none"/></pattern></defs><rect x="30" y="25" width="500" height="410" fill="url(#grid)"/><g stroke="#8c9fa9" strokeWidth="1" fill="none" opacity=".5"><path d="M30 40V25H45M515 25H530V40M530 420V435H515M45 435H30V420"/><path d="M280 45V420M50 360H510" strokeDasharray="3 7"/></g><g className="roof-drop" stroke="#233744" strokeWidth="4" strokeLinecap="round" fill="none"><g className="roof-left"><path d="M116 125H280"/></g><g className="roof-right"><path d="M280 125H444"/></g></g><g className="house-outline" stroke="#233744" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"><path className="draw wall-left" pathLength="1" d="M154 195V360"/><path className="draw wall-right" pathLength="1" d="M406 195V360"/><path className="draw floor" pathLength="1" d="M154 360H406"/><path className="draw door" pathLength="1" d="M255 360V268H305V360"/><path className="draw window" pathLength="1" d="M180 239H232V295H180ZM328 239H380V295H328Z"/><path className="draw window-bars" pathLength="1" d="M206 239V295M180 267H232M354 239V295M328 267H380"/><circle className="detail" cx="293" cy="316" r="2.5" fill="#233744" stroke="none"/></g><g className="detail" fill="none" stroke="#7895a5" strokeWidth="1.2"><path d="M110 365H450M154 379V403M406 379V403M154 392H406M148 386L160 398M400 386L412 398M430 195H460M430 360H460M448 195V360M442 189L454 201M442 354L454 366"/><path d="M180 305H232M328 305H380" strokeDasharray="2 3"/></g><g className="detail" fontFamily="monospace" fontSize="10" fill="#536e7c" textAnchor="middle"><text x="280" y="387">01 / CEPHE</text><text x="468" y="278" transform="rotate(90 468 278)">ÖLÇEK / KONSEPT</text></g></svg>}</div>
    <div className="drawing-bottom">
      <span>{drawing?"02 — KENDİ TASARIMIN":"01 — ÇİZGİDEN MEKÂNA"}</span>
      <div className="drawing-actions">
        {drawing?<button type="button" className="replay" onClick={replay}><span aria-hidden="true">↻</span> Animasyona dön</button>:<>
          <button type="button" className="replay" onClick={replay}><span aria-hidden="true">↻</span> Tekrar oynat</button>
          {finished&&<button type="button" className="self-draw" onClick={()=>setDrawing(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16 12-12 4 4-12 12-5 1 1-5ZM14 6l4 4"/></svg>Kendin çiz</button>}
        </>}
      </div>
    </div>
  </div>;
}