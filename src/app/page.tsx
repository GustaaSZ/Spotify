'use client';
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentFooter } from "@/components/ComponentFooter";
import { ComponentMain } from "@/components/ComponentMain";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/musicsPages"); // Navegar para a página "sobre"
  }

  return (
    // Conteiner Principal
    <div className="h-screen flex flex-col">

      {/* // Conteiner que tem a SIDEBAR (espécie de menu lateral) e o corpo MAIN */}
      <div className="flex flex-1">
        {/* CHAMANDO O COMPONENTE SIDEBAR */}
        <ComponentSidebar/>

        {/* CHAMANDO O COMPONENTE MAIN */}
        <ComponentMain />
        {/* <div className="flex items-center">
          <button onClick={handleNavigate} className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 ">
            Teste
          </button>
        </div> */}
      </div>

      {/* CHAMANDO O COMPONENTE FOOTER */}
      <ComponentFooter/>

    </div>
  );
}
