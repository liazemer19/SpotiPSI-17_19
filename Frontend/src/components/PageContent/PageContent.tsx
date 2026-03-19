import React from 'react';
import useStyles from './PageContentStyles';
import AllSongsPage from '../AllSongsPage/AllSongsPage';
import type {Fav, Song } from "../../types/Songs"
import FavoritesPage from '../FavoritesPage/FavoritesPage';
interface Props{
    currentPage:string,
    songsList:Song[],
    favoritesList : Fav[]
    setFavorityList: React.Dispatch<React.SetStateAction<Fav[]>>
}

const PageContent: React.FC<Props> = ({songsList,currentPage,favoritesList,setFavorityList}) => {
    
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>
        {currentPage==="songs" && <AllSongsPage AllSongs={songsList} favoritesList={favoritesList} setFavorityList={setFavorityList}></AllSongsPage>}
        {currentPage==="favorites" && <FavoritesPage songsList={songsList} favoritesList={favoritesList} setFavorityList={setFavorityList}></FavoritesPage>}
        </div>
    );
};

export default PageContent;