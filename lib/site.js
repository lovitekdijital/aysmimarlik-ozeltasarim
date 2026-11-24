export const name="AYS Mimarlık";
export const siteUrl=process.env.SITE_URL?.replace(/\/+$/,"")||null;
export const indexable=process.env.SITE_INDEXABLE==="true"&&Boolean(siteUrl);
export const nav=[["/","Ana Sayfa"],["/hakkimizda/","Hakkımızda"],["/hizmetler/","Hizmetler"],["/projeler/","Projeler"],["/iletisim/","İletişim"]];
export function meta(title,description,path){return {title,description,...(siteUrl?{alternates:{canonical:siteUrl+path}}:{})}}