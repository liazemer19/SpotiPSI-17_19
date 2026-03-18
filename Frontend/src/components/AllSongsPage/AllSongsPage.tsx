import type { Song } from "../../types/Songs"
import SongRow from "../songRow/songRow"
import useStyles from './AllSongsPageStyles'
import './allSongsPageScrollBar.css'
interface Props {
    AllSongs: Song[]
}

const AllSongsPage :React.FC <Props> = ({AllSongs}) => {
    const {classes} = useStyles()
return (
    //בקומפננטת האב נכנס בעמוד ראשי
     <div className={classes.pageContainer}>  
      <div className={classes.header}>
        <p className={classes.headerText}>כל השירים</p>
      </div>
       {AllSongs.map((song) => 
          <SongRow {...song} key={song.name}/>
        )}
     </div> 
    
)
}
export default AllSongsPage