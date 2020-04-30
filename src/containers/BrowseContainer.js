import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_MARGIN } from '../constants/styleConstants';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: `${DEFAULT_MARGIN}px`
    }
});

const BrowseContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
};

export default BrowseContainer;