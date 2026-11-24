import {siteUrl,indexable} from "../lib/site";
export const dynamic="force-static";
export default function robots(){return {rules:{userAgent:"*",allow:"/"},...(indexable?{sitemap:siteUrl+"/sitemap.xml"}:{})}}