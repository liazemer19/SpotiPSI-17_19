import React from 'react';
import useStyles from './MainSectionStyles'
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';
import type {Fav, Song } from "../../types/Songs"

import {useEffect} from 'react'

import type { Playlist } from '../../types/playlists';
interface Props{
    currentPage:string,
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>,
    songsList:Song[]
    favoritesList : Fav[]
    playlists : Playlist[]
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}
const MainSection: React.FC<Props> = ({songsList,currentPage, setCurrentPage,favoritesList,playlists,setFavorityList}) => {
    
    const {classes }= useStyles();
    useEffect(() => {
    console.log(favoritesList)
    songsList.map((song) => {
    favoritesList.map((fav)=> fav.songId === song.id? song.isFav = true : song.isFav = false)
    console.log("song: "+ song)})
    } , []);
  
    return (
        <div className={classes.MainSection}>
            <PageContent currentPage={currentPage} songsList={songsList} favoritesList ={favoritesList} playlists={playlists} setFavorityList={setFavorityList}/>
            <SideBar setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default MainSection;