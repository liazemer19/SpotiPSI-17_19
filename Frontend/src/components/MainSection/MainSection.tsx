import React from 'react';
import useStyles from './MainSectionStyles'
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';


const MainSection: React.FC = () => {
    const {classes }= useStyles();
    return (
        <div className={classes.MainSection}>
            <PageContent />
            <SideBar />
        </div>
    );
};

export default MainSection;