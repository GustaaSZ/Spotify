import Image from "next/image";
import {Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, CircleChevronLeft} from 'lucide-react';
// import { ChevronLeft, ChevronRight, CircleChevronLeft } from "../../node_modules/lucide-react/dist/lucide-react";
// import { ChevronLeft, ChevronRight } from "../../node_modules/lucide-react/dist/lucide-react";

export default function Home() {
  return (
    // Conteiner Principal
    <div className="h-screen flex flex-col">

      {/* // Conteiner que tem o asidebar (espécie de menu lateral) e o corpo main */}
      <div className="flex flex-1">

        {/* Estrutura do aside */}
        <aside className="w-72 bg-zinc-950 p-6">

          {/* Bolas superiores */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-red-500 rounded-full"/>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"/>
            <div className="w-4 h-4 bg-green-500 rounded-full"/>
          </div>
          
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center  gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center  gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
              <Library/>
              Your Lybrary
            </a>
          </nav>

          <nav className="space-y-5 mt-14">
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
              <Plus/>
              Create Playlist
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
              <Heart />
              Liked Songs
            </a>
          </nav>

          {/* Linha que divide as playlists */}
          <nav className="mt-8 pt-10 border-t-2 border-zinc-800 space-y-4 flex flex-col">
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">This is back Victor e Leo</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Hot hits Brasil</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Sofrência antigas</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Top Brasil</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Tranquilo no Nilo</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Músicas para celebrar a vida</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Liga o som que é sexta-feira!</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Clássicos para dançar até o chão</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Nostálgicas e felizes</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Para quem não sabe fazer playlist para festa</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Tristeza não tem fim, felicidade sim</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Sons da Solidão</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Trilhas do Amor</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Zezé de Camargo e Lucioano - As melhores</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200 hover:font-semibold">Menos é mais - As melhores</a>

          </nav>

        </aside>

        {/* Estrutura do corpo main */}
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

          {/* Texto */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100">Good Afternoon</h1>

          {/* Div com as colunas para colocar as musicas */}
          <div className="grid grid-cols-3 gap-6 mt-5">
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
            <div className="bg-slate-50/10 rounded h-20"> Playlist</div>
          </div>
        </main>
      </div>

      {/* Estrutura do footer, forá da div do container principal */}
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>

    </div>
  );
}
