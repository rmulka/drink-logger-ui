import React, { useState, useEffect, useContext, forwardRef } from 'react';

import AuthContext from '../../context/AuthContext';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';

const LoginLogout = forwardRef((props, ref) => {
    const { keycloakState } = useContext(AuthContext);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setAuthenticated(keycloakState.authenticated);
    }, [keycloakState.authenticated]);

    return authenticated ? <Logout /> : <Login />
});

export default React.memo(LoginLogout);