import BrowseLayout from '../components/Layout/secured/BrowseLayout';
import Welcome from '../components/Layout/public/Welcome';
import UserInfo from '../components/Layout/secured/UserInfo';

import {
    BROWSE_PATH,
    PUBLIC_PATH,
    ACCOUNT_PATH
} from '../constants/pathConstants';

const ROUTES = [
    {
        path: BROWSE_PATH,
        component: BrowseLayout,
        protected: true,
        exact: true,
    },
    {
        path: ACCOUNT_PATH,
        component: UserInfo,
        protected: true,
        exact: true,
    },
    {
        path: PUBLIC_PATH,
        component: Welcome,
        protected: false,
        exact: true,
    }
];

export default ROUTES;