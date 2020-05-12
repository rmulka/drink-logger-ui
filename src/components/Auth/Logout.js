import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';

import AuthContext from '../../context/AuthContext';

const Logout = (props) => {
    const { keycloakState, setKeycloakState } = useContext(AuthContext);

    const logout = () => {
        props.history.push('/');
        keycloakState.keycloak.logout();
        setKeycloakState(prevState => ({ ...prevState, authenticated: false }));
    };

    return (
        <ListItem button={true} onClick={logout}>
            Logout
        </ListItem>
    );
};

export default React.memo(withRouter(Logout));