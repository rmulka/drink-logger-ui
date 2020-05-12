import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
    }
});

const BrowseContainer = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {children}
        </div>
    )
};

export default BrowseContainer;