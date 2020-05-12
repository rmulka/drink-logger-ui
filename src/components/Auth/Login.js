import React, { useContext } from 'react';

import ListItem from '@material-ui/core/ListItem';

import AuthContext from '../../context/AuthContext';

const Login = () => {
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    const login = () => {
        keycloakState.keycloak.init({ onLoad: 'login-required', pkceMethod: 'S256' }).then(authenticated => {
            setKeycloakState(prevState => ({ ...prevState, authenticated }))
        })
    };

    return (
        <ListItem button={true} onClick={login}>
            Login
        </ListItem>
    );
};

export default React.memo(Login);