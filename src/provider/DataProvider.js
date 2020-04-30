import React, { useMemo, useReducer } from 'react';
import ApiDataContext from '../context/ApiDataContext';
import fetchReducer from '../reducers/fetchReducer';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
    errorCode: null
};

const DataProvider = (props) => {
    const [dataState, dispatch] = useReducer(fetchReducer, initialState);

    const contextValue = useMemo(() => (
        { dataState, dispatch }
    ), [dataState]);

    return (
        <ApiDataContext.Provider value={contextValue}>
            {props.children}
        </ApiDataContext.Provider>
    );
};

export default DataProvider;

