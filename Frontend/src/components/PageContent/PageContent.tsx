import React from 'react';
import useStyles from './PageContentStyles';


const PageContent: React.FC = () => {
    const {classes }= useStyles();
    return (
        <div className={classes.PageContent}>
            page content
        </div>
    );
};

export default PageContent;