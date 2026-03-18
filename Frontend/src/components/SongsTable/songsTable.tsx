import type { Song } from "../../types/Songs"
import SongRow from "../songRow/songRow"
import useStyles from './songsTableStyles'

interface Props {
    AllSongs: Song[]
    pageNameHeader:string
}

const SongsTable :React.FC <Props> = ({AllSongs,pageNameHeader}) => {
    const {classes} = useStyles()
return (
    //בקומפננטת האב נכנס בעמוד ראשי
     <div className={classes.pageContainer}>  
      <div className={classes.header}>
        <p className={classes.headerText}>{pageNameHeader}</p>
      </div>
       {AllSongs.map((song) => 
          <SongRow {...song} key={song.name}/>
        )}
     </div> 
    
)
}
export default SongsTable