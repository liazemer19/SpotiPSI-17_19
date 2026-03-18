import React from 'react';
import useStyles from './MainSectionStyles'
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';

interface Props{
    currentPage:string,
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}
const MainSection: React.FC<Props> = ({currentPage, setCurrentPage}) => {
    const {classes }= useStyles();
    return (
        <div className={classes.MainSection}>
            <PageContent currentPage={currentPage} />
            <SideBar setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default MainSection;