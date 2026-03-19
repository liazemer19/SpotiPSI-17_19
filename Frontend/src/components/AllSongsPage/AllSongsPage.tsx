import type { Song,Fav } from "../../types/Songs"
import SongRow from "../songRow/songRow"
import useStyles from './AllSongsPageStyles'
import './allSongsPageScrollBar.css'
import SongsTable from "../SongsTable/songsTable"
interface Props {
    AllSongs: Song[],
    favoritesList : Fav[],
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const AllSongsPage :React.FC <Props> = ({AllSongs, favoritesList, setFavorityList}) => {
    const {classes} = useStyles()
return (
    //בקומפננטת האב נכנס בעמוד ראשי
    <>
    <SongsTable pageNameHeader={"כל השירים"} AllSongs={AllSongs} favoritesList={favoritesList} setFavorityList={setFavorityList}></SongsTable>
    </>
    
)
}
export default AllSongsPage