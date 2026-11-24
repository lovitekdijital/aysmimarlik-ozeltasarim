import {Manrope,Space_Grotesk} from "next/font/google";
import Header from "../components/Header";
import {Footer} from "../components/StudioUI";
import {name,siteUrl,indexable} from "../lib/site";
import "./globals.css";
const body=Manrope({subsets:["latin","latin-ext"],variable:"--body",display:"swap"});
const heading=Space_Grotesk({subsets:["latin","latin-ext"],variable:"--heading",display:"swap"});
export const metadata={title:{default:"AYS İç Mimarlık | Her mekân bir çizgiyle başlar",template:"%s | AYS İç Mimarlık"},description:"İç mekân tasarımı ve dekorasyon için çağdaş, etkileşimli bir tasarım yaklaşımı.",robots:{index:indexable,follow:indexable},...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),openGraph:{type:"website",locale:"tr_TR",siteName:name}};
export default function Layout({children}){const schema={"@context":"https://schema.org","@type":"Organization",name,...(siteUrl?{url:siteUrl,logo:siteUrl+"/ays-ice-clean.webp"}:{})};return <html lang="tr" className={body.variable+" "+heading.variable}><body><a className="skip" href="#main">İçeriğe geç</a><Header/><main id="main">{children}</main><Footer/>{indexable&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>}</body></html>}