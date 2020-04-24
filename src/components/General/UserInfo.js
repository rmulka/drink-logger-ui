import React, { useState, useEffect } from 'react';

const UserInfo = (props) => {
    const initialState = {
        name: "",
        email: "",
        id: ""
    };

    const [userState, setUserState] = useState(initialState);

    useEffect(() => {
        props.keycloak.loadUserInfo().then(userInfo => {
            setUserState(prevState => ({ ...prevState, name: userInfo.name, email: userInfo.email, id: userInfo.sub }))
        });
    }, [props.keycloak]);

    return (
        <div className="UserInfo">
            <p>Name: {userState.name}</p>
            <p>Email: {userState.email}</p>
            <p>ID: {userState.id}</p>
        </div>
    );
};

export default UserInfo;