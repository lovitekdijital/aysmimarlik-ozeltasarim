"use client";
import {useEffect,useState} from "react";
import RoomPlanner,{RoomPreview} from "./RoomPlanner";
import "./room-planner.css";

export default function HouseAnimation(){
 const [run,setRun]=useState(0),[finished,setFinished]=useState(false),[designing,setDesigning]=useState(false);
 useEffect(()=>{
  if(designing)return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const timer=window.setTimeout(()=>setFinished(true),reduced?0:4100);
  return ()=>window.clearTimeout(timer);
 },[run,designing]);
 function replay(){setFinished(false);setDesigning(false);setRun(n=>n+1);}
 return <div className="drawing room-drawing">
 <div className="drawing-top"><span><i/> TASARIM / 001</span><span>{designing?"İÇ MEKÂN STÜDYOSU":"SALON ÇİZİMİ"}</span></div>
 <div className="drawing-stage">{designing?<RoomPlanner/>:<RoomPreview key={run}/>}</div>
 <div className="drawing-bottom">
 <span>{designing?"02 — KENDİ MEKÂNIN":"01 — ÇİZGİDEN MEKÂNA"}</span>
 <div className="drawing-actions">{designing?<button type="button" className="replay" onClick={replay}><span aria-hidden="true">↻</span> Animasyona dön</button>:<>
 <button type="button" className="replay" onClick={replay}><span aria-hidden="true">↻</span> Tekrar oynat</button>
 {finished&&<button type="button" className="self-draw" onClick={()=>setDesigning(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3H21V21H3ZM3 13H12V3M12 13H21M12 13V21"/></svg>Kendin tasarla</button>}
 </>}</div>
 </div>
 </div>;
}
