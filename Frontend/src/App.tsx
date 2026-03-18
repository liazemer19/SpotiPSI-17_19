import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Player from './components/Player/Player'
import useStyles from './AppStyles'

import {useEffect, useState} from 'react'
import type  {Fav,Song} from './types/Songs'

function App() {
  const[currentPage, setCurrentPage] = useState<string>("songs")
  const {classes }= useStyles();
  
  const [songsList,setSongsList] = useState<Song[]>([])
  const [favoritesList, setFavorityList] = useState<Fav[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] =useState<string>()


  const fetchSongs =async (setList:React.Dispatch<React.SetStateAction<any[]>>,url:string) => {
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
    fetchSongs(setFavorityList,'http://127.0.0.1:5001/api/favorites')
    fetchSongs(setSongsList,'http://127.0.0.1:5001/api/songs');
  } , []);

 

  return (
    <div className={classes.page}>
      <Header />
      <MainSection currentPage={currentPage} songsList={songsList} favoritesList={favoritesList} setCurrentPage={setCurrentPage}/>
      <Player />
    </div>
  )
}

export default App
