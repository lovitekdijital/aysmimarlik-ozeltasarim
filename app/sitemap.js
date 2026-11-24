import {siteUrl,indexable} from "../lib/site";
export const dynamic="force-static";
export default function sitemap(){return indexable?[{url:siteUrl+"/"}]:[]}