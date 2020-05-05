import { useContext } from 'react';

import ApiDataContext from '../context/ApiDataContext';

/**
 * Hook to gather all options for a specific filter
 *
 * @param filter: String filter name
 * @returns Array of filter options
 */
export const useFilter = (filter) => {
    const { filteredData } = useContext(ApiDataContext);
    return [...(filteredData.reduce((accumulator, entry) => {
        if (entry[filter]) accumulator.add(entry[filter]);
        return accumulator;
    }, new Set()))];
    // return [...new Set(filteredData.map(entry => entry[filter]).filter(entry => entry))];
};