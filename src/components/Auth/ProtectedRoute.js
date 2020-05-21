import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    const authenticateUser = () => {
        keycloakState.keycloak.init({ onLoad: 'login-required', pkceMethod: 'S256' }).then(authenticated => {
            setKeycloakState(prevState => ({ ...prevState, authenticated }));
        })
    };

    return (
        <Route {...rest} render={(props) =>
            keycloakState.authenticated
                ? <Component {...props} />
                : authenticateUser()
        } />
    )
};

export default ProtectedRoute;