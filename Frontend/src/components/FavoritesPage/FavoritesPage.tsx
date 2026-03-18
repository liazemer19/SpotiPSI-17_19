import type {Fav, Song } from "../../types/Songs"

import SongsTable from '../SongsTable/songsTable'
import { useState,useEffect } from "react"

interface Props  {
    songsList:Song[] ,
    favoritesList:Fav[],
    currentPage:string
}
const FavoritesPage :React.FC <Props> = ({songsList,favoritesList,currentPage}) => {
      const [filteredArray,SetArray]=useState<Song[]>([])

      useEffect(() => {
              songsList.filter(song => favoritesList.some(fav => fav.id === song.id))
               .map(song => (SetArray(prev=>[...prev ,song])
        ))
        } , []);
  
return (
    //בקומפננטת האב נכנס בעמוד ראשי
        <>
        <SongsTable pageNameHeader={"המועדפים שלי"} AllSongs={filteredArray}></SongsTable>
        </>
    
)
}
export default FavoritesPage