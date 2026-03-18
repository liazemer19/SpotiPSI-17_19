import React from 'react'
import useStyles from './HeaderStyles'
import MusicNote from '@mui/icons-material/MusicNote'


const Header: React.FC = () => {
    const {classes }= useStyles();
    return (
        <header className={classes.Header}>
            <p>SpotiPSI</p>
            <MusicNote/>
        </header>
    );
};

export default Header