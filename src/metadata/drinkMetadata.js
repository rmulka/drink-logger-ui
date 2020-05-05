import { BEER, WINE } from '../constants/drinkConstants';

export const DRINK_FIELDS = {
    [BEER]: [
        'name',
        'brewer',
        'style',
        'category',
        'city',
        'state',
        'country',
        'website',
        'abv',
        'description'
    ],
    [WINE]: [
        'vintage',
        'country',
        'county',
        'designation',
        'points',
        'price',
        'province',
        'title',
        'variety',
        'winery'
    ]
};