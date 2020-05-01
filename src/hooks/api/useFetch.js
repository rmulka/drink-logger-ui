import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import apiConfig from '../../config/apiConfig';
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from '../../constants/apiConstants';
import useDefaultHeaders from './useDefaultHeaders';
import ApiDataContext from '../../context/ApiDataContext';

const useFetch = (initialResource) => {
    const [url] = useState(apiConfig.api.url.base);
    const [resource] = useState(initialResource);
    const [defaultHeaders] = useState(useDefaultHeaders());

    const { data, dispatch } = useContext(ApiDataContext);

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: FETCH_INIT });

            try {
                const response = await axios.get(`${url}/${resource}`, defaultHeaders);
                if (!didCancel) {
                    dispatch({ type: FETCH_SUCCESS, payload: response.data })
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: FETCH_FAILURE, error })
                }
            }
        };

        fetchData();

        return () => { didCancel = true };
    }, [resource, url, defaultHeaders, dispatch]);

    return { ...data };
};

export default useFetch;