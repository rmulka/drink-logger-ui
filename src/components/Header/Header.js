import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

import HEADER_LINKS from '../../metadata/headerMetadata';
import { NAV_BAR_HEIGHT } from '../../constants/styleConstants';
import LoginLogoutButton from '../Navigation/LoginLogoutButton';
import CustomPopper from './CustomPopper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    header: {
        minHeight: NAV_BAR_HEIGHT,
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

const Header = () => {
    const classes = useStyles();

    const [arrLength] = useState(HEADER_LINKS.length);
    const [open, setOpen] = useState([]);
    const [populating, setPopulating] = useState(true);
    const [anchorRefs, setAnchorRefs] = useState([]);

    useEffect(() => {
        setAnchorRefs(anchorRefs => (
            Array(arrLength).fill(null).map((_, i) => anchorRefs[i] || createRef())
        ));
        setOpen(open => (
            Array(arrLength).fill(false)
        ));
        setPopulating(false);
    }, [arrLength]);

    const handleToggle = (idx) => {
        setOpen(prevOpen => prevOpen.map((el, i) => i === idx ? !el : false))
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
        <div className={classes.header}>
            <AppBar position='static'>
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
                                        setOpen={setOpen}
                                        arrLength={arrLength}
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