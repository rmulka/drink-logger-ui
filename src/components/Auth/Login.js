import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    const login = () => {
        keycloakState.keycloak.init({ onLoad: 'login-required', pkceMethod: 'S256' }).then(authenticated => {
            setKeycloakState(prevState => ({ ...prevState, authenticated }))
        })
    };

    return (
        <Button onClick={login}>
            Login
        </Button>
    );
};

export default Login;