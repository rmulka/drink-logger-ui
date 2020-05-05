import React, { useEffect, createRef, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

import HEADER_LINKS from '../../metadata/headerMetadata';
import { NAV_BAR_HEIGHT } from '../../constants/styleConstants';
import LoginLogoutButton from '../Navigation/LoginLogoutButton';
import CustomPopper from './CustomPopper';
import headerReducer from '../../reducers/headerReducer';
import { HEADER_INIT, TOGGLE_LINK } from '../../constants/headerConstants';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    header: {
        width: '100%',
        minHeight: NAV_BAR_HEIGHT,
        margin: 0,
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: NAV_BAR_HEIGHT,
    },
    profileButton: {
        marginLeft: 'auto',
    },
}));

const initialState = {
    arrLength: HEADER_LINKS.length,
    open: [],
    populating: true,
    anchorRefs: [],
};

const Header = () => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(headerReducer, initialState);
    const {
        open,
        populating,
        anchorRefs,
    } = state;

    useEffect(() => {
        dispatch({ type: HEADER_INIT })
    }, [dispatch]);

    const handleToggle = (idx) => {
        dispatch({ type: TOGGLE_LINK, index: idx })
    };

    if (populating) return (
        <div className={classes.header}>
            <AppBar position='static'>
                <Toolbar className={classes.toolBar}>
                </Toolbar>
            </AppBar>
        </div>
    );

    return (
        <div>
            <AppBar className={classes.header} position='absolute'>
                <Toolbar className={classes.toolBar}>
                    {HEADER_LINKS.map((headerLink, idx) => {
                        if (headerLink.subLinks && headerLink.subLinks.length > 0) {
                            return (
                                <div key={headerLink.label}>
                                    <Button
                                        ref={anchorRefs[idx]}
                                        aria-controls={open[idx] ? `${headerLink.label}-list` : undefined}
                                        aria-haspopup="true"
                                        onClick={() => handleToggle(idx)}
                                    >
                                        {headerLink.label}
                                    </Button>
                                    <CustomPopper
                                        open={open[idx]}
                                        dispatch={dispatch}
                                        anchorEl={anchorRefs[idx]}
                                        index={idx}
                                        subLinks={headerLink.subLinks}
                                        label={headerLink.label}
                                    />
                                </div>
                            )
                        } else if (headerLink.path && headerLink.path.length > 0) {
                            return (
                                <div key={headerLink.label}>
                                    <Button
                                        component={Link}
                                        to={headerLink.path}
                                    >
                                        {headerLink.label}
                                    </Button>
                                </div>
                            )
                        }
                        throw new Error('Missing attributes in header metadata');
                    })}
                    <div className={classes.profileButton}>
                        <LoginLogoutButton />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default React.memo(Header);