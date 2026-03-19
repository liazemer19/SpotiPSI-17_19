import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Player from './components/Player/Player'
import useStyles from './AppStyles'

import {useEffect, useState} from 'react'
import type  {Fav,Song} from './types/Songs'
import type { Playlist } from './types/playlists'

function App() {
  const[currentPage, setCurrentPage] = useState<string>("songs")
  const {classes }= useStyles();
  const [songsList,setSongsList] = useState<Song[]>([])
  const [favoritesList, setFavorityList] = useState<Fav[]>([])
  const [playlistsList,setplaylistsList] =useState<Playlist[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] =useState<string>()


  const fetchdata =async (setList:React.Dispatch<React.SetStateAction<any[]>>,url:string) => {
    setIsLoading(true)
    try {
      const response = await fetch (url)
      const data = await response.json()
      setList(data)
    }
    catch(error) {
       setError('something went wrong')
       console.error(error);
       return ;
    }
    finally {
      setIsLoading(false)
    }
  };



  useEffect(() => {

    fetchdata(setFavorityList,'http://127.0.0.1:5001/api/favorites')
    fetchdata(setSongsList,'http://127.0.0.1:5001/api/songs');
    fetchdata(setplaylistsList,'http://127.0.0.1:5001/api/playlists')

  } , []);


  return (
    
    <div className={classes.page}>
      
      <Header />
      <MainSection currentPage={currentPage} songsList={songsList} favoritesList={favoritesList} playlists={playlistsList} setCurrentPage={setCurrentPage} setFavorityList={setFavorityList}/>
      <Player />
    </div>
  )
}

export default App
