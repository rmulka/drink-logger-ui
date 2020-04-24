import React from 'react';
import { withRouter } from 'react-router-dom'

const Logout = (props) => {

    const logout = () => {
        props.history.push('/');
        props.keycloak.logout();
    };

    return (
        <button onClick={ () => logout() }>
            Logout
        </button>
    );
};

export default withRouter(Logout);