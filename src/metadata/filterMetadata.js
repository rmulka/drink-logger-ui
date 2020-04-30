import { BEER } from '../constants/drinkConstants';
import { useFilter } from '../hooks/dataUtilityHooks';

export const SELECT_FILTER = 'select';

const commonFilters = [
    {
        name: 'name',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'name',
    },
];

const beerFilters = [
    ...commonFilters,
    {
        name: 'brewer',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'brewer',
    },
    {
        name: 'style',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'style',
    },
    {
        name: 'category',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'category',
    },
    {
        name: 'city',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'city',
    },
    {
        name: 'state',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'state',
    },
    {
        name: 'country',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'country',
    }
];

export const getFilterDetails = (drinkType) => {
    switch(drinkType) {
        case BEER:
            return beerFilters;
        default:
            throw new Error('Unsupported drink type');
    }
};