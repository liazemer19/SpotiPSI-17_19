import type { Playlist } from '../../types/playlists'
import useStyles from './playlistPageStyles'
import Button from '@mui/material/Button'
import Add from '@mui/icons-material/Add'

interface Props  {
    playlistsList:Playlist[] 
}
const PlaylistPage :React.FC <Props> = ({playlistsList}) => {
    const {classes} = useStyles()

return (

   
     <div className={classes.pageContainer}>  
      <div className={classes.header}>
       
        <Button className={classes.button}  >
            <p>צור פלייליסט</p>
             <Add></Add>
        </Button>
       
        <p className={classes.headerText}>{"הפלייליסטים שלי"}</p>
    
      </div>
       <div>
          {
          playlistsList.map((playlist) =>  
            {
            {console.log(playlist.name)}
           return <div className={classes.rowContainer}>
               <div className={classes.left}>
                <p className={classes.text}>{playlist.name}</p>
                <div className={classes.containerDescrip}>
                <p className={classes.littleText}>{"שירים"}</p>
                <p className={classes.littleText}>{playlist.songIds.length}</p>
                
                </div >
                   </div> 
            </div> 
        })}
       
        </div>   
     </div> 
   

    
)
}

export default PlaylistPage
