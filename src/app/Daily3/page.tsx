'use client';
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentFooter } from "@/components/ComponentFooter";
import { useRouter } from "next/navigation";

export default function Daily2() {

  const router = useRouter(); // Hook de navegação

  // Função para navegar para a página inicial
  const navigateHome = () => {
    router.push("/"); // Caminho para a página principal, que renderiza `page.tsx`
  };
  
  return(
  
    // Conteiner Principal
    <div className="h-screen flex flex-col">

      {/* // Conteiner que tem a SIDEBAR (espécie de menu lateral) e o corpo MAIN */}
      <div className="flex flex-1">

        {/* CHAMANDO O COMPONENTE SIDEBAR */}
        <ComponentSidebar/>

        {/* MAIN */}
        <main className="flex-1 p-7">

          {/* div para os botões superiores */}
          <div className="flex items-center gap-6 ml-1">
            <button onClick={navigateHome} className="rounded-full bg-black/40 p-1 hover:bg-zinc-700">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 hover:bg-zinc-700">
              <ChevronRight />
            </button>
          </div>

          {/* Texto para a SEGUNDA parte da main */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100 hover:underline">Daily Mix 2 - The best Musics Drake</h1>

          {/* Div para a segunda parte da main */}
          <div className="grid grid-cols-3 gap-6 mt-8">
          
            <nav className="mt-6 pt-10 border-t-2 border-zinc-700 space-y-4 flex flex-col scroll">
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">1 - Sicko Mode</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">2 - Goosebumps</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">3 - Back To Back</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">4 - My Eyes</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">5 - Highest in the Room</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">6 - The Scotts</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">7 - FE!N</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">8 - Trance</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">9 - Butterfly Effect</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">10 - Stargazing</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">11 - Antidote</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">12 - Can't Say</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">13 - 5% Tint</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">14 - I know?</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">15 - Coffee Bean</a>
            </nav>

            
            <a href="/Daily1" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3 w-full mt-6">
              <Image src="/travis.jpg" className="w-full h-max rounded-lg mt-0" width={600} height={600} alt="Capa da playist do Drake " />
              
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-14 ml-80 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>

          </div>

        </main>
        
      </div>

      {/* CHAMANDO O COMPONENTE FOOTER */}
      <ComponentFooter />

    </div>
  );
}