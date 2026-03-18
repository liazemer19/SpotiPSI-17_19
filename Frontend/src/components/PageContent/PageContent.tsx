import React from 'react';
import useStyles from './PageContentStyles';

interface Props{
    currentPage:string,
}

const PageContent: React.FC<Props> = ({currentPage}) => {
    
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>
            <p>{currentPage}</p>
        </div>
    );
};

export default PageContent;