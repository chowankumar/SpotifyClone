import { createContext,useRef, useState } from "react";


export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{

    const auidoref = useRef();
    const seekbg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songData[0]);
    const[playStatus,setPlayStatus] = useState(false)


    const contextValue = {
        auidoref,
        seekbg,
        seekBar

    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;