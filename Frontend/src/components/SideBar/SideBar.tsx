import React from 'react';
import useStyles from './SideBarStyles';


const SideBar: React.FC = () => {
    const {classes }= useStyles();
    return (
        <div className={classes.SideBar}>
            side bar
        </div>
    );
};

export default SideBar;