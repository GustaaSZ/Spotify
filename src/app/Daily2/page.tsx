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
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">1 - Lord Knows</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">2 - Jumpman (ft. Future)</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">3 - Back To Back</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">4 - Controlla</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">5 - 0-100/The Catch Up</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">6 - SHold On, We are Going Home</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">7 - Energy</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">8 - Worst Behavior</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">9 - Marvin's Room</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">10 - Hotline Bling</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">11 - Life is Good</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">12 - Laught Now Cry Later</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">13 - God's Plan</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">14 - Once Dance</a>
              <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">15 - In My Feelings</a>
            </nav>

            
            <a href="/Daily1" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3 w-full mt-6">
              <Image src="/drake.jpg" className="w-full h-max rounded-lg mt-0" width={400} height={400} alt="Capa da playist do Drake " />
              
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