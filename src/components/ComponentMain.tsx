import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { PlayButtonPlaylists } from "./PlayButtonPlaylists";
import { PlayButtonMusics } from "./PlayButtonMusics";

export function ComponentMain() {

    return(
    
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

          {/* Texto para a primeira parte da main */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100">Good Afternoon</h1>

          {/* Div com as colunas para colocar as musicas */}
          <div className="grid grid-cols-3 gap-6 mt-5">

            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/album.jpeg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Deus e eu no Sertão</strong>

              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/u2.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>The best of 1980-1990</strong>

              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/adele.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Adele 25</strong>

              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/justin.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Purpose</strong>

              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/marilia.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Decretos Reais</strong>

              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/edSheeran.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Photograph</strong>
              
              {/* CHAMANDO O COMPONENTE DE PlayButtonMusics */}
              <PlayButtonMusics />
            </a>
              
          </div>

          {/* Texto para a SEGUNDA parte da main */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100 hover:underline">Made for Gustavo Abrantes</h1>

          {/* Div para a segunda parte da main */}
          <div className="grid grid-cols-5 gap-6 mt-8">
            <a href="/Daily1" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily1.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">Lana Del Rey, COIN, girl in red and more</span>

              {/* Fazendo importação do PlayButton */}
              <PlayButtonPlaylists/>
            </a>

            <a href="/Daily2" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily2.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-xs text-zinc-400">Wallows, COIN, playlists by spotify and more</span>

              {/* Fazendo importação do PlayButton */}
              <PlayButtonPlaylists />
            </a>

            <a href="/Daily3" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily3.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-xs text-zinc-400">Wallows, COIN, girl in red and more</span>

              {/* Fazendo importação do PlayButton */}
              <PlayButtonPlaylists />
            </a>

            <a href="/Daily4" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily4.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-xs text-zinc-400">The Weeknd, COIN, Only in spotify</span>

              {/* Fazendo importação do PlayButton */}
              <PlayButtonPlaylists />
            </a>

            <a href="/Daily5" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily5.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-xs text-zinc-400">Bruno Mars, and your bests musics only in spotify</span>

              {/* Fazendo importação do PlayButton */}
              <PlayButtonPlaylists />
            </a>
            
          </div>

        </main>
    );
}