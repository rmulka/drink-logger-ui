import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

const useDefaultHeaders = () => {
    const { keycloakState } = useContext(AuthContext);

    return { headers: { Authorization: 'bearer ' + keycloakState.keycloak.token } };
};

export default useDefaultHeaders;