import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Player from './components/Player/Player'
import useStyles from './AppStyles'

import {useEffect, useState} from 'react'
import type  {Song} from './types/Songs'
import AllSongsPage from './components/AllSongsPage/AllSongsPage'


function App() {
  const[currentPage, setCurrentPage] = useState<string>("songs")
  const {classes }= useStyles();
  
  const [songsList,setSongsList] = useState<Song[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] =useState<string>()


  const fetchSongs =async () => {
    setIsLoading(true)
    try {
      const response = await fetch ('http://127.0.0.1:5001/api/songs')
      const data = await response.json()
      setSongsList(data)
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
    fetchSongs();
  } , []);

 

  return (
    <div className={classes.page}>
      <Header />
      <MainSection currentPage={currentPage} songsList={songsList} setCurrentPage={setCurrentPage}/>
      <Player />
    </div>
  )
}

export default App
