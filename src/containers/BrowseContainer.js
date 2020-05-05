import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_MARGIN } from '../constants/styleConstants';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        // margin: `${DEFAULT_MARGIN}px`
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