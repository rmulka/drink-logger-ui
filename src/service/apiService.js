import axios from 'axios';

import apiConfig from '../config/apiConfig';

const baseUrl = apiConfig.api.url.base;

const getDefaultHeaders = (token) => ({
    'Authorization': 'bearer ' + token,
});

export const fetch = (resource, token) => {
    const config = {
        headers: getDefaultHeaders(token),
    };

    return axios.get(`${baseUrl}/${resource}`, config)
};