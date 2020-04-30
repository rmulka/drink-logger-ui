import { useContext } from 'react';

import FilterContext from '../context/FilterContext';

export const useFilter = (filter) => {
    const { filterState } = useContext(FilterContext);
    return [...new Set(filterState.filteredData.map(entry => entry[filter]).filter(entry => entry))];
};