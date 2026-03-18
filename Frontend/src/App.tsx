import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Player from './components/Player/Player'
import useStyles from './AppStyles'

function App() {
  const {classes }= useStyles();
  return (
    <div className={classes.page}>
      <Header />
      <MainSection />
      <Player />
    </div>
  )
}

export default App
