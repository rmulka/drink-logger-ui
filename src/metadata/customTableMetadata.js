import { BEER, WINE } from '../constants/drinkConstants';
import { DRINK_FIELDS } from './drinkMetadata';

export const TABLE_HEADERS = {
    [BEER]: [
        'Name',
        'Brewer',
        'Style',
        'Category',
        'City',
        'State',
        'Country',
        'Website',
        'ABV',
        'Description'
    ],
    [WINE]: [
        'Vintage',
        'Country',
        'County',
        'Designation',
        'Points',
        'Price',
        'Province',
        'Title',
        'Variety',
        'Winery'
    ],
};



