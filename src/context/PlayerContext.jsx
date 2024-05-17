import { createContext,useRef } from "react";


export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{

    const auidoref = useRef();
    const seekbg = useRef();
    const seekBar = useRef();

    

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