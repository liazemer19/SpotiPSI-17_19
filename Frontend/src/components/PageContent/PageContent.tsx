import React from 'react';
import useStyles from './PageContentStyles';
import AllSongsPage from '../AllSongsPage/AllSongsPage';
import type {Fav, Song } from "../../types/Songs"
import FavoritesPage from '../FavoritesPage/FavoritesPage';
interface Props{
    currentPage:string,
    songsList:Song[],
    favoritesList : Fav[]
}

const PageContent: React.FC<Props> = ({songsList,currentPage,favoritesList}) => {
    
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>
        {currentPage==="songs" && <AllSongsPage AllSongs={songsList}></AllSongsPage>}
        {currentPage==="favorites" && <FavoritesPage songsList={songsList} favoritesList={favoritesList}></FavoritesPage>}
        </div>
    );
};

export default PageContent;