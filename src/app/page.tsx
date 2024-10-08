import Image from "next/image";
import {Home as HomeIcon, Search, Library, Plus, Heart} from 'lucide-react';

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
            <a href="" className="flex items-center  gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center  gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50">
              <Library/>
              Your Lybrary
            </a>
          </nav>

          <nav className="space-y-5 mt-14">
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50">
              <Plus/>
              Create Playlist
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50">
              <Heart />
              Liked Songs
            </a>
          </nav>

          {/* Linha que divide as playlists */}
          <nav className="mt-8 pt-10 border-t-2 border-zinc-800 space-y-4 flex flex-col">
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">This is back Victor e Leo</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Hot hits Brasil</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Sofrência antigas</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Top Brasil</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Tranquilo no Nilo</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Músicas para celebrar a vida</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Liga o som que é sexta-feira!</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Clássicos para dançar até o chão</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Nostálgicas e felizes</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Para quem não sabe fazer playlist para festa</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Tristeza não tem fim, felicidade sim</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Sons da Solidão</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Trilhas do Amor</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Zezé de Camargo e Lucioano - As melhores</a>
            <a href="" className="text-sm  text-zinc-400 hover:text-zinc-200">Menos é mais - As melhores</a>

          </nav>

        </aside>

        {/* Estrutura do corpo main */}
        <main className="flex-1 p-6">
          main
        </main>
      </div>

      {/* Estrutura do footer, forá da div do container principal */}
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>

    </div>
  );
}
