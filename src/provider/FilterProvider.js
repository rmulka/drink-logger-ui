import React, { useMemo, useReducer, useContext, useEffect } from 'react';
import FilterContext from '../context/FilterContext';
import filterReducer from '../reducers/filterReducer';
import ApiDataContext from '../context/ApiDataContext';
import { RESET_FILTER_DATA, SET_FILTER_DATA } from '../constants/filterConstants';

const initialState = {
    filters: {},
    filteredData: []
};

const FilterProvider = (props) => {
    const [filterState, dispatch] = useReducer(filterReducer, initialState);
    const { dataState } = useContext(ApiDataContext);

    const contextValue = useMemo(() => (
        { filterState, dispatch }
    ), [filterState]);

    useEffect(() => {
        dispatch({ type: RESET_FILTER_DATA, payload: dataState.data });
    }, [dataState]);

    useEffect(() => {
         const filteredData = [
             ...dataState.data].filter(entry => {
                 let keep = true;
                 Object.keys(filterState.filters).forEach((key) => {
                     if (filterState.filters[key] && (entry[key] !== filterState.filters[key])) {
                         keep = false;
                     }
                });
                return keep;
            })
         ;

         dispatch({ type: SET_FILTER_DATA, payload: filteredData })
    }, [filterState.filters, dataState.data]);

    return (
        <FilterContext.Provider value={contextValue}>
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;