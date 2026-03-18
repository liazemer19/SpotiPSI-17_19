import React from 'react';
import useStyles from './PageContentStyles';
import AllSongsPage from '../AllSongsPage/AllSongsPage';
import type { Song } from "../../types/Songs"
interface Props{
    currentPage:string,
    songsList:Song[]
}

const PageContent: React.FC<Props> = ({songsList,currentPage}) => {
    
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>
        {currentPage==="songs" && <AllSongsPage AllSongs={songsList}></AllSongsPage>}
        </div>
    );
};

export default PageContent;