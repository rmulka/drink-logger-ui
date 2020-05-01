import React, { useMemo, useReducer, useEffect } from 'react';
import ApiDataContext from '../context/ApiDataContext';
import dataReducer from '../reducers/dataReducer';
import { RESET_FILTER_DATA, SET_FILTER_DATA } from '../constants/filterConstants';

const initialState = {
    data: [],
    filteredData: [],
    filters: {},
    isLoading: false,
    isError: false,
    errorMessage: null,
    errorCode: null
};

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

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
    ), [state]);

    useEffect(() => {
        dispatch({ type: RESET_FILTER_DATA, payload: state.data });
    }, [state.data]);

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
    }, [state.filters, state.data]);

    return (
        <ApiDataContext.Provider value={contextValue}>
            {children}
        </ApiDataContext.Provider>
    );
};

export default DataProvider;

