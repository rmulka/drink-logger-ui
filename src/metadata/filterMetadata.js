import { BEER, WINE } from '../constants/drinkConstants';

export const SELECT_FILTER = 'select';

const commonFilters = [
    {
        name: 'country',
        inputType: SELECT_FILTER,
        filterName: 'country',
    },
];

const beerFilters = [
    ...commonFilters,
    {
        name: 'name',
        inputType: SELECT_FILTER,
        filterName: 'name',
    },
    {
        name: 'brewer',
        inputType: SELECT_FILTER,
        filterName: 'brewer',
    },
    {
        name: 'style',
        inputType: SELECT_FILTER,
        filterName: 'style',
    },
    {
        name: 'category',
        inputType: SELECT_FILTER,
        filterName: 'category',
    },
    {
        name: 'city',
        inputType: SELECT_FILTER,
        filterName: 'city',
    },
    {
        name: 'state',
        inputType: SELECT_FILTER,
        filterName: 'state',
    },
];

const wineFilters = [
    ...commonFilters,
    {
        name: 'vintage',
        inputType: SELECT_FILTER,
        filterName: 'vintage',
    },
    {
        name: 'county',
        inputType: SELECT_FILTER,
        filterName: 'county',
    },
    {
        name: 'province',
        inputType: SELECT_FILTER,
        filterName: 'province',
    },
    {
        name: 'title',
        inputType: SELECT_FILTER,
        filterName: 'title',
    },
    {
        name: 'variety',
        inputType: SELECT_FILTER,
        filterName: 'variety',
    },
    {
        name: 'winery',
        inputType: SELECT_FILTER,
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