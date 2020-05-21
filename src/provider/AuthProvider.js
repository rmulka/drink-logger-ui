import React, { useEffect, useState, useMemo } from 'react';
import Keycloak from 'keycloak-js';

import AuthContext from '../context/AuthContext';

const AuthProvider = ({ children }) => {
    const [keycloakState, setKeycloakState] = useState({ keycloak: null, authenticated: false });

    useEffect(() => {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({
            onLoad: 'check-sso',
            pkceMethod: 'S256',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        }).then(authenticated => {
            setKeycloakState(prevState => ({ ...prevState, keycloak, authenticated }))
        });
    }, []);

    const contextValue = useMemo(() => (
        { keycloakState, setKeycloakState }
    ), [keycloakState]);

    return (
        <AuthContext.Provider value={contextValue}>
            {keycloakState.keycloak !== null && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;