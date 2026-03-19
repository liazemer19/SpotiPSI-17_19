import React, { useState } from 'react';
import useStyles from './SideBarStyles';
import Home from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import Favorite from '@mui/icons-material/Favorite';


interface Props{
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}

const SideBar: React.FC<Props> = ({setCurrentPage}) => {
    const [currentClick,setCurrentClick]=useState<string>('0')

    const ChangePage = (name:string,id:string) => {
        console.log(name)
        setCurrentPage(name)
        setCurrentClick(id)

    }
    
    const {classes }= useStyles();
    return (
        <div className={classes.SideBar}>
            <Button  id='1' onClick={()=>ChangePage('songs','1')}  className={`${classes.button} ${currentClick === '1' ? classes.colored : classes.notColored}`} variant="contained" endIcon=<Home/> > כל השירים </Button>
            <Button  id='2' onClick={()=>ChangePage('playlists','2')}   className={`${classes.button} ${currentClick === '2' ? classes.colored : classes.notColored}`} variant="contained" endIcon=<LibraryMusic/> > פליילסטים </Button>
            <Button  id='3' onClick={()=>ChangePage('favorites','3')}  className={`${classes.button} ${currentClick === '3' ? classes.colored : classes.notColored}`} variant="contained" endIcon=<Favorite/> > מועדפים </Button>
        </div>
    );
};

export default SideBar;