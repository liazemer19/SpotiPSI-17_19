import type { Song,Fav } from "../../types/Songs"
import SongRow from "../songRow/songRow"

import './allSongsPageScrollBar.css'
import SongsTable from "../SongsTable/songsTable"
interface Props {
    AllSongs: Song[],
    favoritesList : Fav[],
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const AllSongsPage :React.FC <Props> = ({AllSongs, favoritesList, setFavorityList}) => {
return (

    <>
    <SongsTable pageNameHeader={"כל השירים"} AllSongs={AllSongs} favoritesList={favoritesList} setFavorityList={setFavorityList}></SongsTable>
    </>
    
)
}
export default AllSongsPage