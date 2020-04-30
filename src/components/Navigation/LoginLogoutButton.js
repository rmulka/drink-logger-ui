import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';

const LoginLogoutButton = () => {
    const { keycloakState } = useContext(AuthContext);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setAuthenticated(keycloakState.authenticated);
    }, [keycloakState.authenticated]);

    return authenticated ? <Logout /> : <Login />
};

export default LoginLogoutButton;