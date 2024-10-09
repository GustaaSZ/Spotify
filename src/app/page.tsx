import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentFooter } from "@/components/ComponentFooter";
import { ComponentMain } from "@/components/ComponentMain";

export default function Home() {
  return (
    // Conteiner Principal
    <div className="h-screen flex flex-col">

      {/* // Conteiner que tem a SIDEBAR (espécie de menu lateral) e o corpo MAIN */}
      <div className="flex flex-1">

        {/* CHAMANDO O COMPONENTE SIDEBAR */}
        <ComponentSidebar/>

        {/* CHAMANDO O COMPONENTE MAIN */}
        <ComponentMain />
      </div>

      {/* CHAMANDO O COMPONENTE FOOTER */}
      <ComponentFooter/>

    </div>
  );
}
