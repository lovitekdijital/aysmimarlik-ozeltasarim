"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {nav} from "../lib/site";
export default function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="AYS İç Mimarlık ana sayfa"><Image src="/ays-interior-logo.webp" alt="AYS İç Mimarlık" width={220} height={165} unoptimized priority/></Link><button className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)} type="button">{open?"Kapat −":"Menü +"}</button><nav className={open?"nav open":"nav"} id="navigation" aria-label="Ana menü">{nav.map(([url,title])=><Link key={url} href={url} onClick={()=>setOpen(false)} aria-current={path.replace(/\/$/,"")===url.replace(/\/$/,"")?"page":undefined}>{title}</Link>)}</nav><Link className="header-cta" href="/iletisim/">Birlikte tasarlayalım <span aria-hidden="true">↗</span></Link></div></header>}