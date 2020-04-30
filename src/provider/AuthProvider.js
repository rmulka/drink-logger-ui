import React, { useEffect, useState, useMemo } from 'react';
import AuthContext from '../context/AuthContext';
import Keycloak from 'keycloak-js';

const AuthProvider = (props) => {
    const [keycloakState, setKeycloakState] = useState({ keycloak: null, authenticated: false });

    useEffect(() => {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({ onLoad: 'check-sso', pkceMethod: 'S256' }).then(authenticated => {
            setKeycloakState(prevState => ({...prevState, keycloak, authenticated}))
        });
    }, []);

    const contextValue = useMemo(() => (
        { keycloakState, setKeycloakState }
    ), [keycloakState]);

    const ConsumerComponents = () => (
        keycloakState.keycloak !== null
        ? (
            <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
        ) : (
            <></>
        )
    );

    return <ConsumerComponents />
};

export default AuthProvider;