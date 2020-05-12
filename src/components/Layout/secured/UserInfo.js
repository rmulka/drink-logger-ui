import React, { useState, useEffect, useContext } from 'react';

import AuthContext from '../../../context/AuthContext';

const UserInfo = () => {
    const { keycloakState } = useContext(AuthContext);

    const initialState = {
        name: "",
        email: "",
        id: ""
    };

    const [userState, setUserState] = useState(initialState);

    useEffect(() => {
        keycloakState.keycloak.loadUserInfo().then(userInfo => {
            setUserState(prevState => ({ ...prevState, name: userInfo.name, email: userInfo.email, id: userInfo.sub }))
        });
    }, [keycloakState.keycloak]);

    return (
        <div className='UserInfo'>
            <p>Name: {userState.name}</p>
            <p>Email: {userState.email}</p>
            <p>ID: {userState.id}</p>
        </div>
    );
};

export default React.memo(UserInfo);