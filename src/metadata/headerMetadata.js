import LoginLogout from '../components/Navigation/LoginLogout';
import {
    BROWSE_BEERS_PATH,
    BROWSE_WINES_PATH,
    PUBLIC_PATH,
    ACCOUNT_PATH
} from '../constants/pathConstants';

const BROWSE = 'Browse';
const HOME = 'Home';
const BEERS = 'Beers';
const WINES = 'Wines';
const LOGIN_LOGOUT = 'Login Logout';
const ACCOUNT = 'Account';

export const HEADER_LINKS = [
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

export const PROFILE_LINKS = [
    {
        label: ACCOUNT,
        path: ACCOUNT_PATH,
    },
    {
        label: LOGIN_LOGOUT,
        component: LoginLogout,
    }
];