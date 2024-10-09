import Image from "next/image";
import {Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Volume1, MonitorSmartphone, Maximize2 } from 'lucide-react';

export default function Home() {
  return (
    // Conteiner Principal
    <div className="h-screen flex flex-col">

      {/* // Conteiner que tem o asidebar (espécie de menu lateral) e o corpo main */}
      <div className="flex flex-1">

        {/* Estrutura do aside */}
        <aside className="w-72 bg-zinc-950 p-6">

         {/* Div para a imagem do spotify */}
          <a href="#" className="flex items-center gap-3">
            <Image src="/spotify.png" width={50} height={40} alt="spotify icon" />
            <strong className="text-2xl">Spotify</strong>
          </a>

          {/* Bolas superiores */}
          <div className="flex items-center gap-3 mt-8">
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

          {/* Texto para a primeira parte da main */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100">Good Afternoon</h1>

          {/* Div com as colunas para colocar as musicas */}
          <div className="grid grid-cols-3 gap-6 mt-5">

            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/album.jpeg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Deus e eu no Sertão</strong>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/u2.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>The best of 1980-1990</strong>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/adele.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Adele 25</strong>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/justin.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Purpose</strong>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/marilia.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Decretos Reais</strong>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            <a href="#" className="bg-slate-50/10 group rounded overflow-hidden flex items-center gap-5 hover:bg-white/25"> 
              <Image src="/edSheeran.jpg" width={120} height={80} alt="Capa do Albúm Deus e eu no sertão da dupla Victor e Leo" />
              <strong>Photograph</strong>
              
              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible ">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
              
          </div>

          {/* Texto para a SEGUNDA parte da main */}
          <h1 className="font-semibold text-3xl mt-10 ml-1 text-zinc-100 hover:underline">Made for Gustavo Abrantes</h1>

          {/* Div para a segunda parte da main */}
          <div className="grid grid-cols-5 gap-6 mt-8">
            <a href="" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily1.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">Lana Del Rey, COIN, girl in red and more</span>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible  ">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>

            <a href="" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily2.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-xs text-zinc-400">Wallows, COIN, playlists by spotify and more</span>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>

            <a href="" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily3.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-xs text-zinc-400">Wallows, COIN, girl in red and more</span>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>

            <a href="" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily4.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-xs text-zinc-400">The Weeknd, COIN, Only in spotify</span>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>

            <a href="" className="bg-white/5 group relative rounded-lg flex flex-col gap-2 hover:bg-white/10 p-3">
              <Image src="/daily5.jpeg" className="w-full rounded-lg" width={90} height={60} alt="Capa do mix 1" />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-xs text-zinc-400">Bruno Mars, and your bests musics only in spotify</span>

              {/* BOTÃO DO PLAY */}
              <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible">
                <Play className="fill-transparent group-hover:fill-black"/>
              </button>
            </a>
            
          </div>

        </main>
      </div>

      {/* Estrutura do footer, forá da div do container principal */}
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">

        {/* Sera dividido em 3 partes */}
        <div className="flex items-center gap-3">
          <Image src="/album.jpeg" width={56} height={56} alt="Capa do mix 1" />
          <div className=" flex flex-col gap-1">
            <strong>Deus e eu no sertão</strong>
            <span className="text-sm text-zinc-400">Victor e Leo</span>
          </div>
          
          <a href="" className="ml-6 group text-zinc-400 hover:text-red-500"> {/*Preenchendo as linhs do incone ao passar por cima  */}
            <Heart className="fill-transparent group-hover:fill-red-500"/> {/* Preenchedo o corpo do icone ao passar por cima */}
          </a>
        </div>

        {/* PLAYER */}
        <div className=" flex flex-col items-center gap-2">

          <div className="flex items-center space-x-4">
            {/* BOTÃO DO Skip back */}
            <button className="p-2  text-zinc-200 ">
              <Shuffle size={22} className="hover:text-green-600"/>
            </button>

            {/* BOTÃO DO Skip back */}
            <button className="p-2  text-zinc-200 ">
              <SkipBack size={22} className=" fill-zinc-200"/>
            </button>

            {/* BOTÃO DO PLAY */}
            <button className="p-2 rounded-full bg-zinc-100 text-zinc-950 ">
              <Play size={22} className=" fill-black"/>
            </button>

            {/* BOTÃO DO Skip forward */}
            <button className="p-2  text-zinc-200 ">
              <SkipForward size={22} className=" fill-zinc-200"/>
            </button>

            <button className="p-2  text-zinc-400 ">
              <Repeat size={22} className="hover:text-green-600"/>
            </button>
          </div>

          {/* SLIDER */}
          <div className=" flex items-center gap-2">
              <span className="text-xs text-zinc-400"> 1:51</span>
              <div className="h1 rounded-full w-80 bg-zinc-600">
                <div className="bg-zinc-200 w-32 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-zinc-400"> 3:40</span>
            </div>
        </div>

        {/* 3º DIV */}
        <div className="flex items-center gap-3">
          <button className="text-zinc-300">
            <Mic2 size={20} className="hover:text-green-500"/>
          </button>
          <button className="text-zinc-300">
            <LayoutList size={20} className="hover:text-green-500"/>
          </button>
          <button className="text-zinc-300">
            <Volume1 size={20} className="hover:text-green-500"/>
          </button>
          <button className="text-zinc-300">
            <MonitorSmartphone size={20} className="hover:text-green-500"/>
          </button>
          
          <div className="h1 w-24 rounded-full bg-zinc-600">
            <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
          </div> 

          <button className="text-zinc-300">
            <Maximize2 size={20} className="hover:text-green-500"/>
          </button>         
          
        </div>
      </footer>

    </div>
  );
}
