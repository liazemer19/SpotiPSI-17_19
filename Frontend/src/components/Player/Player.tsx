import React from 'react';
import useStyles from './PlayerStyles';


const Player: React.FC = () => {
    const {classes }= useStyles();
    return (
        <div className={classes.placeHolder}>
            נגן שירים
        </div>
    );
};

export default Player;