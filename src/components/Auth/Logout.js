import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import AuthContext from '../../context/AuthContext';

const Logout = (props) => {
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    const logout = () => {
        props.history.push('/');
        keycloakState.keycloak.logout();
        setKeycloakState(prevState => ({ ...prevState, authenticated: false }));
    };

    return (
        <Button onClick={logout}>
            Logout
        </Button>
    );
};

export default withRouter(Logout);