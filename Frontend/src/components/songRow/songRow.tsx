import type { Song } from "../../types/Songs"
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import useStyles from "./songRowStyle"


const SongRow = (singleSong :Song) => {
  const {classes} = useStyles()
 

return (
     <>
     <div className={classes.rowContainer}>
       <div className={classes.left}>
        <PlayArrow className={classes.play}></PlayArrow>
        <p className={classes.text}>{singleSong.name} - {singleSong.artist}</p>
       </div>
       <div className={classes.right}>
         <Add className={classes.iconsSize}></Add>
         <FavoriteBorder className={classes.iconsSize}></FavoriteBorder>
       </div>
      
     </div>
      </>
     
)

}

export default SongRow




