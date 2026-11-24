export const name="AYS İç Mimarlık";
export const siteUrl=process.env.SITE_URL?.replace(/\/+$/,"")||null;
export const indexable=process.env.SITE_INDEXABLE==="true"&&Boolean(siteUrl);
export const nav=[["/","Ana Sayfa"],["/hakkimizda/","Hakkımızda"],["/hizmetler/","Hizmetler"],["/projeler/","Projeler"],["/iletisim/","İletişim"]];

const image=(id,w=1600)=>"https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&w="+w+"&q=85";
export const pictures={villa:image("1600596542815-ffad4c1539a9"),house:image("1600585154340-be6161a56a0c"),interior:image("1600607687939-ce8a6c25118c"),living:image("1600210492486-724fe5c67fb0"),detail:image("1600566753086-00f18fb6b3ea")};
export const projects=[
{id:"01",title:"Doğayla Birlikte",type:"Konut",image:pictures.villa,alt:"Doğal çevre ile bütünleşen modern villa",description:"Geniş cam cepheler, doğal malzemeler ve peyzajla kurulan ilişki."},
{id:"02",title:"Işığın İzinde",type:"İç Mimari",image:pictures.interior,alt:"Doğal ışık alan nötr renkli iç mekân",description:"Sade geometriler, dengeli renkler ve doğal ışığa odaklanan bir yaşam alanı."},
{id:"03",title:"Açık Yaşam",type:"Konut",image:pictures.house,alt:"Bahçeye açılan çağdaş konut",description:"İç ve dış mekân arasındaki sınırları yeniden yorumlayan konut yaklaşımı."},
{id:"04",title:"Sakin Doku",type:"İç Mimari",image:pictures.living,alt:"Doğal malzemeler kullanılan çağdaş oturma odası",description:"Malzeme, konfor ve gündelik yaşam arasındaki dengeden ilham alan konsept."}];
export const services=[
{id:"01",title:"Mimari Tasarım",icon:"architecture",text:"Çevreyi, ihtiyaçları ve insan ölçeğini birlikte ele alan, işlevsel ve özgün yapı tasarımları.",image:pictures.house},
{id:"02",title:"İç Mimari",icon:"interior",text:"Işık, malzeme, doku ve mekânsal kurgu arasındaki dengeyle yaşam alanlarını yeniden düşünmek.",image:pictures.interior},
{id:"03",title:"Konsept ve 3D Görselleştirme",icon:"cube",text:"Tasarım fikirlerini plan, eskiz ve üç boyutlu görselleştirmelerle anlaşılır hâle getirmek.",image:pictures.detail},
{id:"04",title:"Mekânsal Yenileme",icon:"plan",text:"Mevcut mekânların potansiyelini keşfederek değişen ihtiyaçlara uygun tasarım çözümleri geliştirmek.",image:pictures.living}];
export const stages=[
{id:"01",title:"Keşif",text:"İhtiyaçları, yaşam biçimini ve mekânın bağlamını anlamak."},
{id:"02",title:"İlk çizgi",text:"Eskizler ve alternatiflerle tasarımın ana fikrini oluşturmak."},
{id:"03",title:"Konsept",text:"Mekân, ışık, malzeme ve form kararlarını birlikte geliştirmek."},
{id:"04",title:"Detay",text:"Onaylanan konsepti proje kapsamına uygun şekilde olgunlaştırmak."}];
export function meta(title,description,path){
 return {title,description,...(siteUrl?{alternates:{canonical:siteUrl+path}}:{}),openGraph:{title:title+" | "+name,description,siteName:name,locale:"tr_TR",type:"website",images:[{url:pictures.villa,alt:"Örnek çağdaş mimari konsept"}],...(siteUrl?{url:siteUrl+path}:{})},twitter:{card:"summary_large_image",title:title+" | "+name,description,images:[pictures.villa]}};
}
