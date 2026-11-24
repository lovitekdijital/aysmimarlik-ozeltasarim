"use client";
import {useRef,useState} from "react";

export default function SketchBoard(){
  const canvasRef=useRef(null);
  const active=useRef(null);
  const [tool,setTool]=useState("pen");
  function point(event){
    const canvas=canvasRef.current;
    const rect=canvas.getBoundingClientRect();
    return {x:(event.clientX-rect.left)*canvas.width/rect.width,y:(event.clientY-rect.top)*canvas.height/rect.height};
  }
  function paint(from,to,selected){
    const ctx=canvasRef.current.getContext("2d");
    ctx.globalCompositeOperation=selected==="eraser"?"destination-out":"source-over";
    ctx.strokeStyle="#233744";
    ctx.fillStyle="#233744";
    ctx.lineWidth=selected==="eraser"?40:5;
    ctx.lineCap="round";
    ctx.lineJoin="round";
    if(from.x===to.x&&from.y===to.y){
      ctx.beginPath();ctx.arc(to.x,to.y,ctx.lineWidth/2,0,Math.PI*2);ctx.fill();
    }else{
      ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke();
    }
  }
  function start(event){
    if(active.current|| (event.pointerType==="mouse"&&event.button!==0))return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const p=point(event);
    active.current={id:event.pointerId,last:p,tool};
    paint(p,p,tool);
  }
  function move(event){
    const stroke=active.current;
    if(!stroke||stroke.id!==event.pointerId)return;
    const samples=event.nativeEvent.getCoalescedEvents?.()||[];
    for(const sample of samples.length?samples:[event]){
      const p=point(sample);paint(stroke.last,p,stroke.tool);stroke.last=p;
    }
  }
  function stop(event){
    if(active.current?.id===event.pointerId)active.current=null;
  }
  function clear(){
    const canvas=canvasRef.current;
    canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
  }
  return <div className="sketch-board">
    <div className="sketch-toolbar" role="group" aria-label="Çizim araçları">
      <button type="button" aria-pressed={tool==="pen"} onClick={()=>setTool("pen")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16 12-12 4 4-12 12-5 1 1-5ZM14 6l4 4"/></svg>Kalem</button>
      <button type="button" aria-pressed={tool==="eraser"} onClick={()=>setTool("eraser")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 13 9-9a2 2 0 0 1 3 0l6 6a2 2 0 0 1 0 3l-7 7H9l-6-6a1 1 0 0 1 0-1ZM7 9l10 10M14 20h7"/></svg>Silgi</button>
      <button type="button" className="sketch-clear" onClick={clear}>Temizle</button>
    </div>
    <div className="sketch-surface">
      <canvas ref={canvasRef} width={1120} height={960} className={"sketch-canvas "+tool} aria-label="Serbest çizim alanı; fare, kalem veya dokunmatik ekranla çizim yapabilirsiniz" onPointerDown={start} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}/>
    </div>
  </div>;
}