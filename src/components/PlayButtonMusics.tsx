import { Play } from "lucide-react";

interface PlayButtonProps {
    onClick?: () => void; // Opção para adicionar uma função de clique se precisar
}

export function PlayButtonMusics ( { onClick }: PlayButtonProps) {
     
    return(
        <button className="p-3 rounded-full bg-green-500 text-zinc-950 ml-auto mr-8 invisible group-hover:visible ">
            <Play className="fill-transparent group-hover:fill-black"/>
        </button>
    );
}