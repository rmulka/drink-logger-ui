import { BEERS_PATH, PUBLIC_PATH } from '../constants/pathConstants';

const BROWSE = 'Browse';
const HOME = 'Home';
const BEERS = 'Beers';

const HEADER_LINKS = [
    {
        label: HOME,
        path: PUBLIC_PATH,
    },
    {
        label: BROWSE,
        subLinks: [
            {
                path: BEERS_PATH,
                label: BEERS,
            }
        ]
    }
];

export default HEADER_LINKS;