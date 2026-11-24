export const name="AYS İç Mimarlık";
export const siteUrl=process.env.SITE_URL?.replace(/\/+$/,"")||null;
export const indexable=process.env.SITE_INDEXABLE==="true"&&Boolean(siteUrl);
export const nav=[["/","Ana Sayfa"],["/hakkimizda/","Hakkımızda"],["/hizmetler/","Hizmetler"],["/projeler/","Projeler"],["/iletisim/","İletişim"]];

const image=(id,w=1600)=>"https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&w="+w+"&q=85";
export const pictures={villa:image("1600607687939-ce8a6c25118c"),house:image("1616486338812-3dadae4b4ace"),interior:image("1600607687939-ce8a6c25118c"),living:image("1600210492486-724fe5c67fb0"),detail:image("1600566753086-00f18fb6b3ea")};
export const projects=[
{id:"01",title:"Doğal Denge",type:"Yaşam Alanı",image:pictures.house,alt:"Doğal dokularla düzenlenen çağdaş yaşam alanı",description:"Mobilya yerleşimi, malzeme ve ışık arasındaki ilişkiyi araştıran iç mekân konsepti."},
{id:"02",title:"Işığın İzinde",type:"Dekorasyon",image:pictures.interior,alt:"Doğal ışık alan nötr renkli iç mekân",description:"Sade geometriler, dengeli renkler ve malzeme detayları."},
{id:"03",title:"Sakin Yaşam",type:"Yaşam Alanı",image:pictures.living,alt:"Aydınlık çağdaş oturma alanı",description:"Konforu ve günlük yaşam alışkanlıklarını merkeze alan yerleşim yaklaşımı."},
{id:"04",title:"Doku ve Form",type:"Dekorasyon",image:pictures.detail,alt:"Çağdaş iç mekân ve mobilya detayları",description:"Malzeme, renk ve mobilya arasındaki dengeden ilham alan konsept."}];
export const services=[
{id:"01",title:"İç Mekân Tasarımı",icon:"interior",text:"İhtiyaçlara göre işlevsel yerleşim, aydınlatma, renk ve malzeme kararlarını bir araya getiren iç mekân konseptleri.",image:pictures.house},
{id:"02",title:"Mobilya ve Dekorasyon",icon:"furniture",text:"Mekâna özel mobilya fikirleri, aksesuarlar, dokular ve uyumlu malzeme paletleri.",image:pictures.interior},
{id:"03",title:"Konsept ve 3D Görselleştirme",icon:"cube",text:"İç mekânın tasarım fikirlerini plan, eskiz ve üç boyutlu görselleştirmelerle anlaşılır hâle getirmek.",image:pictures.detail},
{id:"04",title:"Renovasyon ve Yenileme",icon:"plan",text:"Mevcut iç mekânların potansiyelini keşfederek değişen ihtiyaçlara uygun tasarım çözümleri geliştirmek.",image:pictures.living}];
export const stages=[
{id:"01",title:"Keşif",text:"İhtiyaçları, yaşam biçimini ve mekânın bağlamını anlamak."},
{id:"02",title:"İlk çizgi",text:"Eskizler ve alternatiflerle tasarımın ana fikrini oluşturmak."},
{id:"03",title:"Konsept",text:"Mekân, ışık, malzeme ve form kararlarını birlikte geliştirmek."},
{id:"04",title:"Detay",text:"Onaylanan konsepti proje kapsamına uygun şekilde olgunlaştırmak."}];
export function meta(title,description,path){
 return {title,description,...(siteUrl?{alternates:{canonical:siteUrl+path}}:{}),openGraph:{title:title+" | "+name,description,siteName:name,locale:"tr_TR",type:"website",images:[{url:pictures.villa,alt:"Örnek çağdaş iç mekân konsepti"}],...(siteUrl?{url:siteUrl+path}:{})},twitter:{card:"summary_large_image",title:title+" | "+name,description,images:[pictures.villa]}};
}
