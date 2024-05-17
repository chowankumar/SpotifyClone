import { createContext,useRef } from "react";


export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{

    const auidoref = useRef();
    const contextValue = {
        auidoref

    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;