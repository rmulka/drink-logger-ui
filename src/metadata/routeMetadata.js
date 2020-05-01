import { BROWSE_PATH, PUBLIC_PATH } from '../constants/pathConstants';
import BrowseLayout from '../components/Layout/secured/BrowseLayout';
import Welcome from '../components/Layout/public/Welcome';

const ROUTES = [
    {
        path: BROWSE_PATH,
        component: BrowseLayout,
        protected: true,
        exact: true
    },
    {
        path: PUBLIC_PATH,
        component: Welcome,
        protected: false,
        exact: true
    }
];

export default ROUTES;