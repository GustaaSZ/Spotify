import { Heart, LayoutList, Maximize2, Mic2, MonitorSmartphone, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import Image from "next/image";

export function ComponentFooter(){

    return(

        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">

            {/* Sera dividido em 3 partes */}

            {/* 1º DIV, CONTÉM A IMAGEM DA MUSICA EO NOME DA MÚSICA E DOS CANTORES */}
            <div className="flex items-center gap-3">
                <Image src="/album.jpeg" width={56} height={56} alt="Capa do mix 1" />
                <div className=" flex flex-col gap-1">
                    <strong>Deus e eu no sertão</strong>
                    <span className="text-sm text-zinc-400">Victor e Leo</span>
                </div>
                
                <a href="" className="ml-6 group text-zinc-400 hover:text-red-500"> {/*Preenchendo as linhas do incone ao passar por cima  */}
                    <Heart className="fill-transparent group-hover:fill-red-500"/> {/* Preenchedo o corpo do icone ao passar por cima */}
                </a>
            </div>

            {/* 2º DIV DO PLAYER (FICA NO MEIO) */}
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

            {/* 3º DIV DOS ICONES E DO VOLUME*/}
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
    );
}