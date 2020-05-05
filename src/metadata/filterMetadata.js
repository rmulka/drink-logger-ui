import { BEER, WINE } from '../constants/drinkConstants';
import { useFilter } from '../hooks/dataUtilityHooks';

export const SELECT_FILTER = 'select';

const commonFilters = [
    {
        name: 'country',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'country',
    },
];

const beerFilters = [
    ...commonFilters,
    {
        name: 'name',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'name',
    },
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
];

const wineFilters = [
    ...commonFilters,
    {
        name: 'vintage',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'vintage',
    },
    {
        name: 'county',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'county',
    },
    {
        name: 'designation',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'designation',
    },
    {
        name: 'province',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'province',
    },
    {
        name: 'title',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'title',
    },
    {
        name: 'variety',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'variety',
    },
    {
        name: 'winery',
        inputType: SELECT_FILTER,
        filterHook: useFilter,
        filterName: 'winery',
    },
];

export const getFilterDetails = (drinkType) => {
    switch(drinkType) {
        case BEER:
            return beerFilters;
        case WINE:
            return wineFilters;
        default:
            throw new Error(`Unsupported drink type ${drinkType}`);
    }
};