import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';

import AuthContext from '../../context/AuthContext';

// const useStyles = makeStyles((theme) => ({
//     link: {
//         display: 'flex',
//     },
//     icon: {
//         marginRight: theme.spacing(0.5),
//         width: 20,
//         height: 20,
//     },
// }));

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();

    const [loggedIn, setLoggedIn] = useState(false);
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    useEffect(() => {
        setLoggedIn(keycloakState.authenticated);
    }, [keycloakState.authenticated]);

    const logout = () => {
        props.history.push('/');
        setKeycloakState(prevState => ({ ...prevState, authenticated: false }));
        keycloakState.keycloak.logout();
    };

    const login = () => {
        keycloakState.keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            setKeycloakState(prevState => ({...prevState, authenticated}))
        });
    };

    const LoginLogout = () => (
        loggedIn
        ? <Button color='inherit' onClick={logout}>Logout</Button>
        : <Button color='inherit' onClick={login}>Login</Button>
    );

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Drink Logger
                </Typography>
                <LoginLogout />
            </Toolbar>
        </AppBar>
    )
};

export default withRouter(Header);

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
// import HomeIcon from '@material-ui/icons/Home';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import GrainIcon from '@material-ui/icons/Grain';
//
//
// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
// }
//
// export default function IconBreadcrumbs() {
//     const classes = useStyles();
//
//     return (
//         <Breadcrumbs aria-label="breadcrumb">
//             <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
//                 <HomeIcon className={classes.icon} />
//                 Material-UI
//             </Link>
//             <Link
//                 color="inherit"
//                 href="/getting-started/installation/"
//                 onClick={handleClick}
//                 className={classes.link}
//             >
//                 <WhatshotIcon className={classes.icon} />
//                 Core
//             </Link>
//             <Typography color="textPrimary" className={classes.link}>
//                 <GrainIcon className={classes.icon} />
//                 Breadcrumb
//             </Typography>
//         </Breadcrumbs>
//     );
// }