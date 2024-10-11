'use client';
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentMain } from "@/components/ComponentMain";
import { ComponentFooter } from "@/components/ComponentFooter";
import { PlayButtonMusics } from "@/components/PlayButtonMusics";
import { PlayButtonPlaylists } from "@/components/PlayButtonPlaylists";

export default function Daily1() {
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
              <button className="rounded-full bg-black/40 p-1 hover:bg-zinc-700">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1 hover:bg-zinc-700">
                <ChevronRight />
              </button>
            </div>

            {/* Texto para a SEGUNDA parte da main */}
            <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100 hover:underline">Daily Mix 1 - Lana Del Rey</h1>

            {/* Div para a segunda parte da main */}
            <div className="grid grid-cols-3 gap-6 mt-8">
            
              <nav className="mt-6 pt-10 border-t-2 border-zinc-700 space-y-4 flex flex-col scroll">
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">1 - Summertime Sadness</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">3 - Young and Beautiful</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">4 - Video Games</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">5 - Radio</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">6 - Burn to die</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">7 - Say Yes to Heaven</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">8 - Margaret</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">9 - Blue Jeans</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">10 - West Coast</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">11 - Love</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">12 - High by the beach</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">13 - Lust for life</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">14 - Art Deco</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">15 - Doin' Time</a>
                <a href="" className="text-lg  text-zinc-400 hover:text-zinc-200 hover:font-semibold">16 - Sad Girl</a>
              </nav>

              
              <a href="/Daily1" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3 w-full mt-14">
                <Image src="/Lana.jpg" className="w-full rounded-lg mt-10" width={400} height={400} alt="Capa da playist da Lana del rey" />
                
                <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-80 invisible group-hover:visible">
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