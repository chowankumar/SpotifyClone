import { createContext,useRef, useState } from "react";


export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{

    const auidoref = useRef();
    const seekbg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songData[0]);
    const[playStatus,setPlayStatus] = useState(false);
    const[time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play =()=>{
        auidoref.current.play();
        setPlayStatus(true)
    }

    const pause =()=>{
        auidoref.current.pause();
        setPlayStatus(false)

    }

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