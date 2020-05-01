import { useContext } from 'react';

import ApiDataContext from '../context/ApiDataContext';

export const useFilter = (filter) => {
    const { filteredData } = useContext(ApiDataContext);
    return [...new Set(filteredData.map(entry => entry[filter]).filter(entry => entry))];
};