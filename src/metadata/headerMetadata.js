import {
    BROWSE_BEERS_PATH,
    BROWSE_WINES_PATH,
    PUBLIC_PATH
} from '../constants/pathConstants';

const BROWSE = 'Browse';
const HOME = 'Home';
const BEERS = 'Beers';
const WINES = 'Wines';

const HEADER_LINKS = [
    {
        label: HOME,
        path: PUBLIC_PATH,
    },
    {
        label: BROWSE,
        subLinks: [
            {
                path: BROWSE_BEERS_PATH,
                label: BEERS,
            },
            {
                path: BROWSE_WINES_PATH,
                label: WINES,
            },
        ]
    }
];

export default HEADER_LINKS;