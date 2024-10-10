import { HomeIcon, Library, Search, Heart, Plus } from "lucide-react";
import Image from "next/image";

export function ComponentSidebar() {

    return(
        <aside className="w-72 bg-zinc-950 p-6">

            {/* Div para a imagem do spotify */}
            <a href="#" className="flex items-center gap-3">
                <Image src="/spotify.png" width={50} height={40} alt="spotify icon" />
                <strong className="text-2xl">Spotify</strong>
            </a>

            <div className="flex items-center gap-3 mt-8">
                <div className="w-4 h-4 bg-red-500 rounded-full"/>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"/>
                <div className="w-4 h-4 bg-green-500 rounded-full"/>
            </div>
          
            <nav className="space-y-5 mt-10">
                <a href="/Home" className="flex items-center  gap-3 text-ms font-semibold text-zinc-300 hover:text-zinc-50 hover:font-bold">
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
    );
}