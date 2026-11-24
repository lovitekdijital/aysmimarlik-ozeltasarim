import {siteUrl,indexable,nav} from "../lib/site";
export const dynamic="force-static";
export default function sitemap(){return indexable?nav.map(([path])=>({url:siteUrl+path})):[]}