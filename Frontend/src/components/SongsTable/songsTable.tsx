import type { Song } from "../../types/Songs"
import SongRow from "../songRow/songRow"
import useStyles from './songsTableStyles'
import type { Fav } from "../../types/Songs"

interface Props {
    AllSongs: Song[]
    pageNameHeader:string,
    favoritesList:Fav[],
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const SongsTable :React.FC <Props> = ({AllSongs,pageNameHeader, favoritesList, setFavorityList}) => {
    const {classes} = useStyles()
return (
    //בקומפננטת האב נכנס בעמוד ראשי
     <div className={classes.pageContainer}>  
      <div className={classes.header}>
        <p className={classes.headerText}>{pageNameHeader}</p>
      </div>

       {AllSongs.map((song) => {
        // debugger
        console.log(song)
        return <SongRow singleSong={song} key={song.name} favoritesList={favoritesList} setFavorityList={setFavorityList}/>
       })}
     </div> 
    
)
}
export default SongsTable