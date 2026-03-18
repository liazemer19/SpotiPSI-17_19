import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Player from './components/Player/Player'
import useStyles from './AppStyles'
import { useState } from 'react'

function App() {
  const[currentPage, setCurrentPage] = useState<string>("songs")
  const {classes }= useStyles();
  return (
    <div className={classes.page}>
      <Header />
      <MainSection currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Player />
    </div>
  )
}

export default App
