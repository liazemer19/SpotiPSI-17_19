import React from 'react';
import useStyles from './MainSectionStyles'
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';
import type {Fav, Song } from "../../types/Songs"
interface Props{
    currentPage:string,
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>,
    songsList:Song[]
    favoritesList : Fav[]
}
const MainSection: React.FC<Props> = ({songsList,currentPage, setCurrentPage,favoritesList}) => {
    const {classes }= useStyles();
    return (
        <div className={classes.MainSection}>
            <PageContent currentPage={currentPage} songsList={songsList} favoritesList ={favoritesList} />
            <SideBar setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default MainSection;