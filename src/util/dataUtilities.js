/**
 * Method to gather all options for a specific filter.
 * Reduces filteredData into a set for only unique options
 * and converts set to array to be returned.
 *
 * @param filter: String filter name
 * @param filteredData: array of current filtered data
 * @returns Array of filter options
 */
export const getFilterOptions = (filter, filteredData) =>
    [...filteredData.reduce((accumulator, entry) => {
        if (entry[filter]) accumulator.add(entry[filter]);
        return accumulator;
    }, new Set())];