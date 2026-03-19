import type {Fav, Song } from "../../types/Songs"

import SongsTable from '../SongsTable/songsTable'
import { useState,useEffect } from "react"

interface Props  {
    songsList:Song[] ,
    favoritesList:Fav[],
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}
const FavoritesPage :React.FC <Props> = ({songsList,favoritesList,setFavorityList}) => {
      const [filteredArray,SetArray]=useState<Song[]>([])
      useEffect(() => {
              songsList.filter(song => favoritesList.some(fav => fav.songId === song.id))
               .map(song => (SetArray(prev=>[...prev ,song])
        ))
        } , []);
return (
    //בקומפננטת האב נכנס בעמוד ראשי
        <>
        <SongsTable pageNameHeader={"המועדפים שלי"} AllSongs={filteredArray} favoritesList={favoritesList} setFavorityList={setFavorityList}></SongsTable>
        </>
    
)
}
export default FavoritesPage