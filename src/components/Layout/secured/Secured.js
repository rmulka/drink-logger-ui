import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../context/AuthContext';
import { fetch } from '../../../service/apiService';
import { resources } from '../../../config/apiConfig';
import Loading from '../../General/Loading';
import CustomTable from '../../Table/CustomTable';
import { BEER } from '../../../constants/drinkConstants';

const Secured = () => {
    const { keycloakState } = useContext(AuthContext);

    const [response, setResponse] = useState(null);

    useEffect( () => {
        fetch(resources.BEERS, keycloakState.keycloak.token).then(response => {
            setResponse(response.data);
        })
    }, [keycloakState.keycloak]);

    return (
        response !== null
            ? <CustomTable data={response} tableType={BEER} />
            : <Loading />
    );
};

export default Secured;