import React from 'react';
import useStyles from './PageContentStyles';
import AllSongsPage from '../AllSongsPage/AllSongsPage';
import type {Fav, Song } from "../../types/Songs"
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import PlaylistsPage from '../PlaylistsPage/playlistPage';
import type { Playlist } from '../../types/playlists';

interface Props{
    currentPage:string,
    songsList:Song[],
    favoritesList : Fav[],
    playlists:Playlist[],
     setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const PageContent: React.FC<Props> = ({songsList,currentPage,favoritesList,playlists,setFavorityList}) => {

    
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>

        {currentPage==="songs" && <AllSongsPage AllSongs={songsList}></AllSongsPage>}
        {currentPage==="favorites" && <FavoritesPage songsList={songsList} favoritesList={favoritesList}></FavoritesPage>}
        {currentPage==="playlists" && <PlaylistPage playlistsList={playlists}></PlaylistPage>}

        </div>
    );
};

export default PageContent;