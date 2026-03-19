import type { Song ,Fav} from "../../types/Songs"
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import useStyles from "./songRowStyle"
import { Button } from "@mui/material"
import { useState ,useEffect} from "react"

interface Props {
  singleSong: Song,
  favoritesList: Fav[],
  setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const SongRow:React.FC<Props> = ({singleSong, favoritesList, setFavorityList}) => {
  const {classes} = useStyles()
  const [isFav,setIsFav] = useState<boolean>(singleSong.isFav)

  const addRemove = async (todo:string) =>{
    try {
          const rawResponse = await fetch('http://127.0.0.1:5001/api/favorites/'+todo, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "songId": singleSong.id })
        });
        const content = await rawResponse.json();
        console.log("content: "+content);
      } catch (err) {
        console.error(err);
      }
  }
  const favBtn = async () => {
    setIsFav(prev => {
      const newVal = !prev;
          if (newVal) {
            // API add
            addRemove("add")
            setFavorityList(prev => [...prev ,{"songId": singleSong.id}])
          } else {
            // API remove
            addRemove("remove")
            setFavorityList(prev => prev.filter(item => item.songId !== singleSong.id));
          }
        singleSong.isFav = newVal
      return newVal;
    });
  };


useEffect(() => {
  // singleSong.isFav = isFav
} , []);

return (
     <>
     <div className={classes.rowContainer}>
       <div className={classes.left}>
        <PlayArrow className={classes.play}></PlayArrow>
        <p className={classes.text}>{singleSong.name} - {singleSong.artist}</p>
       </div>
       <div className={classes.right}>
         <Button className={classes.iconBtn}><Add className={classes.iconsSize}/></Button>
         <Button onClick={()=>favBtn()} className={classes.iconBtn}>{singleSong.isFav? <Favorite className={classes.iconSizeFull}/>: <FavoriteBorder className={classes.iconsSize}/>}</Button>
       </div>
      
     </div>
      </>
     
)

}

export default SongRow




