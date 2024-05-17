import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioref = useRef();
    const seekbg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    useEffect(() => {
        setTimeout(() => {
            audioref.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioref.current.currentTime/audioref.current.duration*100))+"%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioref.current.currentTime % 60),
                        minute: Math.floor(audioref.current.currentTime / 60),
                    },
                    totalTime:{
                        second: Math.floor(audioref.current.duration % 60),
                        minute: Math.floor(audioref.current.duration / 60),
                        
                    }

                })
            }

        }, 1000);

    }, [audioref])

    const play = () => {
        audioref.current.play();
        setPlayStatus(true)
    }

    const pause = () => {
        audioref.current.pause();
        setPlayStatus(false)

    }

    const contextValue = {
        audioref,
        seekbg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause

    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;