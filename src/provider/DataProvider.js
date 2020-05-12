import React, { useMemo, useReducer, useEffect, useState } from 'react';

import ApiDataContext from '../context/ApiDataContext';
import dataReducer from '../reducers/dataReducer';
import { RESET_FILTER_DATA, SET_FILTER_DATA } from '../constants/filterConstants';
import { FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS } from '../constants/apiConstants';
import axios from 'axios';
import apiConfig from '../config/apiConfig';
import useDefaultHeaders from '../hooks/api/useDefaultHeaders';

const initialState = {
    data: [],
    filteredData: [],
    filters: {},
    isLoading: false,
    isError: false,
    errorMessage: null,
    errorCode: null
};

const url = apiConfig.api.url.base;

const DataProvider = ({ children, resource }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const [defaultHeaders] = useState(useDefaultHeaders());

    const contextValue = useMemo(() => (
        {
            data: state.data,
            filteredData: state.filteredData,
            filters: state.filters,
            isLoading: state.isLoading,
            isError: state.isError,
            errorMessage: state.errorMessage,
            errorCode: state.errorCode,
            dispatch
        }
    ), [state.data, state.errorCode, state.errorMessage, state.filteredData, state.filters, state.isError, state.isLoading]);

    useEffect(() => {
        dispatch({ type: RESET_FILTER_DATA });
    }, [resource]);

    useEffect(() => {
        const filteredData = [...state.data].filter(entry => {
            let keep = true;
            for (let key of Object.keys(state.filters)) {
                if (state.filters[key] && (entry[key] !== state.filters[key])) {
                    keep = false;
                    break;
                }
            }
            return keep;
        });

        dispatch({ type: SET_FILTER_DATA, payload: filteredData })
    }, [state.data, state.filters]);

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
    }, [defaultHeaders, dispatch, resource]);

    return (
        <ApiDataContext.Provider value={contextValue}>
            {children}
        </ApiDataContext.Provider>
    );
};

const areEqual = (prevProps, nextProps) => prevProps.resource === nextProps.resource;

export default React.memo(DataProvider, areEqual);

