import React from 'react';
import useStyles from './SideBarStyles';
import Home from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import Favorite from '@mui/icons-material/Favorite';


interface Props{
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}

const SideBar: React.FC<Props> = ({setCurrentPage}) => {
    const ChangePage = (name:string) => {
        console.log(name)
        setCurrentPage(name)
    }
    const {classes }= useStyles();
    return (
        <div className={classes.SideBar}>
            <Button onClick={()=>ChangePage('songs')}  className={classes.button} variant="contained" endIcon=<Home/> > כל השירים </Button>
            <Button onClick={()=>ChangePage('playlists')}  className={classes.button} variant="contained" endIcon=<LibraryMusic/> > פליילסטים </Button>
            <Button onClick={()=>ChangePage('favorites')}  className={classes.button} variant="contained" endIcon=<Favorite/> > מועדפים </Button>
        </div>
    );
};

export default SideBar;