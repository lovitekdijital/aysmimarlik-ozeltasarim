import {meta,projects} from "../../lib/site";
import {PageHead,CTA} from "../../components/StudioUI";
import ProjectGallery from "../../components/ProjectGallery";
export const metadata=meta("Projeler","Konut ve iç mimari tasarımına yönelik AYS Mimarlık örnek konsept galerisi.","/projeler/");
export default function Projects(){return <><PageHead number="03 / PORTFÖY" title={<>Çizgilerin<br/><em>hayat bulduğu yer.</em></>} description="Farklı mekânsal fikirleri, doğal malzemeleri ve çağdaş tasarım yaklaşımlarını keşfedin."/><section className="shell studio-gallery"><p className="studio-note">Bu sayfadaki görseller ve proje adları tasarım sunumu amaçlı örneklerdir; tamamlanmış AYS Mimarlık projelerini temsil etmez.</p><ProjectGallery projects={projects}/></section><CTA/></>}