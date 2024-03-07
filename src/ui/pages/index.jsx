import styles from './index.module.css'
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer"
import MusicList from "../components/data-display/MusicList/MusicList"
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function Index() {

    const {selectedMusic,time,setTime,selectMusic,musicList} = useContext(AppContext)

    return (
        <div className={styles['page-container']}>
            <MusicList 
                musics={musicList} 
                selectedMusic={selectedMusic} 
                onSelect={selectMusic}/>
            <AudioPlayer 
                music={selectedMusic} 
                onTimeChange={setTime}
                onComplete={() => console.log('FINISHED')}/>
        </div>
    )
}