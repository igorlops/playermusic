import { useState } from "react" 


const musicList = [
    {
        id:1,
        title: 'Yesterday',
        artist: 'Hick',
        time: 146,
        url: 'musics/yesterday_the-beatles.mp3'
    },
    {
        id:2,
        title: 'In My Life',
        artist: 'Hick',
        time: 127,
        url: 'musics/in_my_life_the-beatles.mp3'
    }
]
export function useApp(){

    const [selectedMusic, setSelectedMusic] = useState()
    const [time,setTime] = useState(0)
    

    function selectMusic(music){
        setTime(0)
        setSelectedMusic(music)
    }

    return {
        selectedMusic,
        time,
        setTime,
        selectMusic,
        musicList
    }
} 