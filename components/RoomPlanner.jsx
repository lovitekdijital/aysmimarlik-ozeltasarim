"use client";
import {useRef,useState} from "react";

const ROOM={left:70,right:490,top:65,bottom:375};
const CATALOG=[
 {type:"sofa",label:"Koltuk",w:148,h:65,color:"#c0ccc9"},
 {type:"chair",label:"Berjer",w:70,h:70,color:"#c7c0ad"},
 {type:"coffee",label:"Sehpa",w:86,h:48,color:"#d1bda5"},
 {type:"dining",label:"Masa",w:110,h:108,color:"#c3ae94"},
 {type:"rug",label:"Halı",w:175,h:112,color:"#d9d6cc"},
 {type:"tv",label:"TV ünitesi",w:110,h:32,color:"#a5b9bf"},
 {type:"plant",label:"Bitki",w:44,h:44,color:"#9db2a0"}
];
const byType=Object.fromEntries(CATALOG.map(item=>[item.type,item]));
const SAMPLE=[
 {id:1,type:"rug",x:205,y:207,angle:0},
 {id:2,type:"sofa",x:205,y:112,angle:0},
 {id:3,type:"chair",x:105,y:210,angle:90},
 {id:4,type:"coffee",x:210,y:204,angle:0},
 {id:5,type:"tv",x:320,y:340,angle:180},
 {id:6,type:"dining",x:407,y:235,angle:0},
 {id:7,type:"plant",x:454,y:101,angle:0}
];
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
function fit(item){
 const m=byType[item.type], turned=item.angle%180!==0;
 const w=(turned?m.h:m.w)/2+3,h=(turned?m.w:m.h)/2+3;
 return {...item,x:clamp(item.x,ROOM.left+w,ROOM.right-w),y:clamp(item.y,ROOM.top+h,ROOM.bottom-h)};
}
export function Furniture({type}){
 const m=byType[type];const w=m.w,h=m.h;
 return <g stroke="#536f81" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" fill={m.color}>
 {type==="sofa"?<><rect x="-74" y="-32.5" width="148" height="65" rx="12"/><rect x="-62" y="-23" width="124" height="17" rx="6" fill="#dce2df"/><rect x="-58" y="-3" width="37" height="27" rx="5" fill="#d2dcd8"/><rect x="-18" y="-3" width="36" height="27" rx="5" fill="#d2dcd8"/><rect x="21" y="-3" width="37" height="27" rx="5" fill="#d2dcd8"/><rect x="-71" y="-7" width="12" height="35" rx="5"/><rect x="59" y="-7" width="12" height="35" rx="5"/></>
 :type==="chair"?<><rect x="-35" y="-35" width="70" height="70" rx="17"/><rect x="-23" y="-27" width="46" height="15" rx="7" fill="#e0d9ca"/><rect x="-23" y="-8" width="46" height="34" rx="9" fill="#e0d9ca"/><path d="M-27 -13V24M27 -13V24" fill="none"/></>
 :type==="coffee"?<><rect x="-43" y="-24" width="86" height="48" rx="18"/><rect x="-38" y="-19" width="76" height="38" rx="14" fill="#e6d7c4"/><circle cx="20" cy="0" r="9" fill="#f6f4ed"/><path d="M-23 -8H-4V7H-23Z" fill="#9fb0b5"/></>
 :type==="dining"?<><rect x="-17" y="-54" width="34" height="20" rx="6" fill="#e2dbce"/><rect x="-17" y="34" width="34" height="20" rx="6" fill="#e2dbce"/><rect x="-55" y="-16" width="23" height="32" rx="6" fill="#e2dbce"/><rect x="32" y="-16" width="23" height="32" rx="6" fill="#e2dbce"/><rect x="-36" y="-36" width="72" height="72" rx="14"/><circle cx="0" cy="0" r="12" fill="#eae4d6"/><path d="M0 -7V7M-7 0H7" fill="none"/></>
 :type==="rug"?<><rect x="-87.5" y="-56" width="175" height="112" rx="4" strokeDasharray="4 3"/><rect x="-80" y="-48" width="160" height="96" rx="3" fill="#e9e5da" strokeOpacity=".55"/>{[-64,-32,0,32,64].map(x=><path key={x} d={"M"+x+" -43v86"} strokeOpacity=".2" fill="none"/>)}</>
 :type==="tv"?<><rect x="-55" y="-16" width="110" height="32" rx="3"/><path d="M-47 -8H47V-3H-47Z" fill="#344954"/><path d="M-36 6H-13M13 6H36" fill="none"/></>
 :<><circle r="21" fill="#d6c9b6"/><g fill="#9bb6a0" stroke="#698b76"><ellipse cy="-8" rx="7" ry="13"/><ellipse cy="-8" rx="7" ry="13" transform="rotate(72)"/><ellipse cy="-8" rx="7" ry="13" transform="rotate(144)"/><ellipse cy="-8" rx="7" ry="13" transform="rotate(216)"/><ellipse cy="-8" rx="7" ry="13" transform="rotate(288)"/></g><circle r="4" fill="#6f907b"/></>}
 </g>;
}
export function RoomPlan({animated=false}){
 return <g className={animated?"room-plan animated-plan":"room-plan"}>
 <rect className="room-floor" x="70" y="65" width="420" height="310" fill="#f4f5f0"/>
 <g stroke="#c2ccd0" strokeWidth="1" opacity=".65">{Array.from({length:11},(_,i)=><path key={i} d={"M70 "+(80+i*28)+"H490"}/>)}</g>
 <path className="room-wall" pathLength="1" d="M128 375H70V65H490V375H190" fill="none" stroke="#233744" strokeWidth="5" strokeLinecap="square" strokeLinejoin="round"/>
 <g className="room-openings" fill="none" stroke="#7895a5" strokeWidth="1.8"><path d="M128 375V313A62 62 0 0 1 190 375" strokeDasharray="4 3"/><path d="M128 375V313" stroke="#536f81"/><path d="M145 65H325M490 145V280" stroke="#eaf0f2" strokeWidth="8"/><path d="M145 61H325V69H145ZM486 145H494V280H486Z"/><path d="M235 61V69M486 212H494"/></g>
 <g className="room-measures" fill="none" stroke="#7895a5" strokeWidth="1"><path d="M70 49V31M490 49V31M70 39H490M64 33L76 45M484 33L496 45M508 65H530M508 375H530M520 65V375M514 59L526 71M514 369L526 381"/></g>
 <g className="room-measures" fill="#536f81" fontSize="10" fontFamily="monospace" textAnchor="middle"><text x="280" y="30">SALON / KONSEPT PLAN</text><text x="536" y="220" transform="rotate(90 536 220)">YERLEŞİM</text><text x="280" y="400">01 / ÜSTTEN GÖRÜNÜM</text></g>
 </g>;
}
export function RoomPreview(){
 return <svg className="room-preview" viewBox="0 0 560 430" role="img" aria-label="Duvarlar ve mobilyalar sırayla oluşarak salonun üstten yerleşim planını tamamlar.">
 <RoomPlan animated/>
 {SAMPLE.map((item,i)=><g key={item.id} transform={"translate("+item.x+" "+item.y+") rotate("+item.angle+")"}><g className="room-reveal" style={{animationDelay:(1.35+i*.37)+"s"}}><Furniture type={item.type}/></g></g>)}
 </svg>;
}
export default function RoomPlanner(){
 const svgRef=useRef(null),drag=useRef(null),counter=useRef(0);
 const [items,setItems]=useState([]),[selected,setSelected]=useState(null),[draft,setDraft]=useState(null);
 function coords(e){
  const svg=svgRef.current, matrix=svg?.getScreenCTM();
  if(!matrix)return null;
  const p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;
  return p.matrixTransform(matrix.inverse());
 }
 const inside=p=>p&&p.x>=ROOM.left&&p.x<=ROOM.right&&p.y>=ROOM.top&&p.y<=ROOM.bottom;
 function add(type,p){
  const id=++counter.current;
  const shift=((id-1)%5)*14;
  const item=fit({id,type,x:p?.x??(280+shift),y:p?.y??(215+shift),angle:0});
  setItems(prev=>[...prev,item]);setSelected(id);
 }
 function startPalette(e,type){
  if(drag.current||e.button!==0)return;
  e.currentTarget.setPointerCapture(e.pointerId);
  drag.current={kind:"new",type,pointer:e.pointerId,sx:e.clientX,sy:e.clientY,moved:false};
 }
 function movePalette(e){
  const d=drag.current;if(!d||d.kind!=="new"||d.pointer!==e.pointerId)return;
  if(Math.hypot(e.clientX-d.sx,e.clientY-d.sy)>5)d.moved=true;
  if(!d.moved)return;
  const p=coords(e);setDraft(inside(p)?fit({type:d.type,x:p.x,y:p.y,angle:0}):null);
 }
 function endPalette(e){
  const d=drag.current;if(!d||d.kind!=="new"||d.pointer!==e.pointerId)return;
  const p=coords(e);drag.current=null;setDraft(null);
  if(d.moved||Math.hypot(e.clientX-d.sx,e.clientY-d.sy)>5){if(inside(p))add(d.type,p);}else add(d.type);
 }
 function startItem(e,item){
  if(drag.current||e.button!==0)return;
  e.stopPropagation();
  const p=coords(e);if(!p)return;
  e.currentTarget.focus();e.currentTarget.setPointerCapture(e.pointerId);
  drag.current={kind:"item",id:item.id,pointer:e.pointerId,dx:p.x-item.x,dy:p.y-item.y};
  setSelected(item.id);
 }
 function moveItem(e){
  const d=drag.current;if(!d||d.kind!=="item"||d.pointer!==e.pointerId)return;
  const p=coords(e);if(!p)return;
  setItems(prev=>prev.map(i=>i.id===d.id?fit({...i,x:p.x-d.dx,y:p.y-d.dy}):i));
 }
 function cancel(e){if(drag.current?.pointer===e.pointerId){drag.current=null;setDraft(null);}}
 function rotate(id){setItems(prev=>prev.map(i=>i.id===id?fit({...i,angle:(i.angle+90)%360}):i));}
 function remove(id){setItems(prev=>prev.filter(i=>i.id!==id));setSelected(prev=>prev===id?null:prev);}
 function keyItem(e,item){
  const delta={ArrowLeft:[-8,0],ArrowRight:[8,0],ArrowUp:[0,-8],ArrowDown:[0,8]}[e.key];
  if(delta){e.preventDefault();setItems(prev=>prev.map(i=>i.id===item.id?fit({...i,x:i.x+delta[0],y:i.y+delta[1]}):i));}
  else if(e.key==="Delete"||e.key==="Backspace"){e.preventDefault();remove(item.id);}
  else if(e.key.toLowerCase()==="r"){e.preventDefault();rotate(item.id);}
 }
 const ordered=[...items].sort((a,b)=>Number(b.type==="rug")-Number(a.type==="rug"));
 return <div className="room-editor">
 <p className="room-hint">Mobilyayı odaya sürükle veya dokunarak ekle. Yerini değiştirmek için tutup taşı.</p>
 <div className="room-catalog" role="group" aria-label="Mobilyalar">
 {CATALOG.map(m=><button type="button" key={m.type} onPointerDown={e=>startPalette(e,m.type)} onPointerMove={movePalette} onPointerUp={endPalette} onPointerCancel={cancel} onLostPointerCapture={cancel} onClick={e=>{if(e.detail===0)add(m.type);}} aria-label={m.label+" ekle"}>
 <svg viewBox={[-m.w/2-5,-m.h/2-5,m.w+10,m.h+10].join(" ")} aria-hidden="true"><Furniture type={m.type}/></svg><span>{m.label}</span></button>)}
 </div>
 <svg ref={svgRef} viewBox="0 0 560 430" className="room-canvas" aria-label="Mobilya yerleşim alanı" onPointerDown={()=>setSelected(null)}>
 <RoomPlan/>
 {ordered.map(item=>{const m=byType[item.type];return <g key={item.id} className="room-object" transform={"translate("+item.x+" "+item.y+") rotate("+item.angle+")"} tabIndex={0} role="button" aria-label={m.label+"; ok tuşlarıyla taşı, R ile döndür, Delete ile sil"} aria-pressed={selected===item.id} onFocus={()=>setSelected(item.id)} onPointerDown={e=>startItem(e,item)} onPointerMove={moveItem} onPointerUp={cancel} onPointerCancel={cancel} onLostPointerCapture={cancel} onKeyDown={e=>keyItem(e,item)}>
 <rect x={-m.w/2-4} y={-m.h/2-4} width={m.w+8} height={m.h+8} fill="transparent" stroke={selected===item.id?"#456b82":"none"} strokeWidth="1.5" strokeDasharray="4 3" rx="5"/><Furniture type={item.type}/>
 </g>;})}
 {draft&&<g opacity=".65" pointerEvents="none" transform={"translate("+draft.x+" "+draft.y+")"}><Furniture type={draft.type}/></g>}
 {!items.length&&!draft&&<text x="280" y="218" textAnchor="middle" fill="#7895a5" fontSize="13" pointerEvents="none">Mobilyaları buraya yerleştir</text>}
 </svg>
 <div className="room-tools" role="group" aria-label="Yerleşim araçları">
 <button type="button" disabled={selected===null} onClick={()=>rotate(selected)}>↻ Döndür</button>
 <button type="button" disabled={selected===null} onClick={()=>remove(selected)}>× Sil</button>
 <button type="button" onClick={()=>{setItems([]);setSelected(null);}}>Temizle</button>
 <button type="button" onClick={()=>{setItems(SAMPLE.map(i=>({...i,id:++counter.current})));setSelected(null);}}>Örnek düzen</button>
 <span aria-live="polite">{items.length} eşya</span>
 </div>
 </div>;
}
