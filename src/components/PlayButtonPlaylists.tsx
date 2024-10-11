import { Play } from "lucide-react";

export function PlayButtonPlaylists( ) {

    return(
        <button className="p-3 rounded-full bg-green-500 text-zinc-950 absolute bottom-24 ml-40 invisible group-hover:visible">
            <Play className="fill-transparent group-hover:fill-black"/>
        </button>
    );
}