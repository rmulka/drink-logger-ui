import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    message: {
        textAlign: 'center',
    }
});

const Welcome = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.message} variant='h5'>
            Welcome page public to everyone
        </Typography>
    )
};

export default Welcome;